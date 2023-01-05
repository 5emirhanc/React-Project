import './App.css';

import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'


function App() {
  const messages = {
    myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
  }
  return (
    <div className="App">
       <IntlProvider ></IntlProvider>
    </div>
  );
}

export default App;
