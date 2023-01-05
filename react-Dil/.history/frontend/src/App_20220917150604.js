import "./App.css";
import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
'tr-TR':{

},
'en-US':{
  
}
}; 


function App() {
    const [lang , setLang] = useState('tr-TR');
  return (
    <div className="App">
      <IntlProvider messages={messages}>
      <FormattedMessage
          id="title"
        />

        <button onClick={()=> setLang('tr-TR')}>TR</button>
        <button  onClick={()=> setLang('en-US')}>US</button>
      </IntlProvider>
    </div>
  );
}

export default App;
