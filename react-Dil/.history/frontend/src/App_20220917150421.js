import "./App.css";
import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  title: "Merhaba Emirhan",
}; 


function App() {
    const 
  return (
    <div className="App">
      <IntlProvider messages={messages}>
      <FormattedMessage
          id="title"
        />

        <button></button>
        <button></button>
      </IntlProvider>
    </div>
  );
}

export default App;
