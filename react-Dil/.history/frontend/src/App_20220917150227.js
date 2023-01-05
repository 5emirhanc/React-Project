import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

function App() {
  const messages = {
    title: "Merhaba Emirhan",
  };
  return (
    <div className="App">
      <IntlProvider messages={messages}>
      <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />
      </IntlProvider>
    </div>
  );
}

export default App;
