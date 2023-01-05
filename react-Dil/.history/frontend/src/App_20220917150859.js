import "./App.css";
import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
'tr-TR':{
title:"Merhaba emirhan",
description:"3 yeni mesajınız var"
},
'en-US':{
  title:"hello emirhan",
  description:"3 yeni mesajınız var"
}
}; 


function App() {
    const [lang , setLang] = useState('tr-TR');
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]}>
      <FormattedMessage
          id="title"
        />
<br/><br/>
        <button onClick={()=> setLang('tr-TR')}>TR</button>
    
        <button  onClick={()=> setLang('en-US')}>US</button>
      </IntlProvider>
    </div>
  );
}

export default App;
