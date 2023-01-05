import "./App.css";

import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

function App() {
  const messages = {
    title: "Merhaba Emirhan",
  };
  return (
    <div className="App">
      <IntlProvider messages={messages}>
        <p>
          lorem ipsum dolor sit amet , consectetur adipsicing elit.
        </p>
      </IntlProvider>
    </div>
  );
}

export default App;
