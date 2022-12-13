import React, { useEffect } from 'react';
import ScanbotSDK from 'scanbot-web-sdk';
import { BarcodeScannerConfiguration } from 'scanbot-web-sdk/@types/model/configuration/barcode-scanner-configuration';

interface IBarCodeScannerNew {
  handleBarcode?: (barcode: string) => void;
}

const BarCodeScannerNew: React.FC<IBarCodeScannerNew> = ({ handleBarcode }) => {
  const LICENSE_KEY = 
    "LlHnIaCurs3cGzXmFRhkv3qQGoI9ot" +
    "L7R5hhxEIS09Q9j2aLEUbP1CdLIHiA" +
    "/HQcNsJZo3i6TuIrg5g0rsgHlhjd3P" +
    "Px3JlD7o0kasl9e4Q+bF+kFftriSDO" +
    "UfQN2/sVl5x/+1KZzypcJdSlzSfagh" +
    "8K1kDIGJBntvGSPqaGwogvIe15TMhG" +
    "x0ogDVN3VmS1HFw65bfATnBfAI/Zyk" +
    "GH2+myoiYumGeo+vFTDw5YUbQYOl5L" +
    "gkLIOuqk9Hh9VBChQ6Qmtxaw4O7t4n" +
    "ASKnphrQNKg/2a18RYtmaG8x6ebIih" +
    "Rz4WvCdHoUrzJVzgdNfjtqckXdXLli" +
    "cv2vD3w9pOrQ==\nU2NhbmJvdFNESw" +
    "psb2NhbGhvc3QKMTY3NDA4NjM5OQo1" +
    "MTIKOA==\n";

  const barCodeStart = async () => {
    const config: BarcodeScannerConfiguration = {
      onBarcodesDetected: (e: any) => handleBarcode && handleBarcode(`${e.barcodes[0].text} (${e.barcodes[0].format})`),
      containerId: 'barcode-view',
      style: {
        window: {
          aspectRatio: 2.5,
          paddingPropLeft: 0.2,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
      },
      videoConstraints: {
        facingMode: 'environment',
        resizeMode: 'none',
        width: { min: 1024, ideal: 1280, max: 1920 },
        height: { min: 576, ideal: 720, max: 1080 },
        experimental: {
          focusMode: 'continous',
          focusDistance: 0,
        },
      },
      engineMode: 'NEXT_GEN',
      //barcodeFormats: ['EAN_8', 'EAN_13'],
    };

    const sdk = await ScanbotSDK.initialize({ licenseKey: LICENSE_KEY, engine: '/' });
    sdk.createBarcodeScanner(config);
  };

  useEffect(() => {
    barCodeStart();
  });

  return (
    <>
      <div id="barcode-view" />
    </>
  );
};

export default BarCodeScannerNew;