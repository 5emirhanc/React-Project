import "./App.css";
import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    title: ["Merhaba emirhan","Nörüyon","Nörüm Sen Nörüyon"],
    title2:"as",
    description: "{count} yeni mesajınız var",
  },
  "en-US": {
    title:["hello emirhan","what your","what your name"],
    title2:"sa",
    description: "You have {count} new messages",
  },
};

function App() {
  const isLocale = localStorage.getItem('locale');
  const defaultLocale = isLocale ? isLocale :navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
      <FormattedMessage id="title2" /><br/>
        <FormattedMessage id={"title}/>
        <p>
          <FormattedMessage id="description" values={{ count : 13}}/>
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
