import "./App.css";
import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba emirhan",
    description: "3 yeni mesajınız var",
  },
  "en-US": {
    title: "hello emirhan",
    description: "You have 3 new messages",
  },
};

function App() {
  const defaultLocale = navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />
        <p>
          <FormattedMessage id="description" />
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>

        <button onClick={() => setLocale("en-US")}>US</button>
      </IntlProvider>
    </div>
  );
}

export default App;
