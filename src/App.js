
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App () {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  


function handleGenerate(Link_urL){
  QRCodeLink.toDataURL(Link_urL,{
    width:600,
    margin:3,
  
  }, function(err,url){
    setQrcodeLink(url);
  })
}


function handleQrcode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value)

}
return (
  <div  className='container'>
    <h1 class='titulo'> QRcode Generator</h1>
    
    <QRCode
    value={link}
    size= '38vh'
    />


    <input
    className='input'
    placeholder='Digite seu link...'
    value={link}
    onChange={(e) => handleQrcode(e)}
    />

    
    <a class='button' href={qrcodeLink} download={`qrcode.png`} className='button'> Baixar QRCode </a>
    
  </div>
);
}

export default App;
