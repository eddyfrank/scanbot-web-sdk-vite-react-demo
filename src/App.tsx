import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BarCodeScannerNew from './barcode-scanner.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BarCodeScannerNew handleBarcode={(barcodeValue) => {alert(barcodeValue)}} />
    </div>
  )
}

export default App
