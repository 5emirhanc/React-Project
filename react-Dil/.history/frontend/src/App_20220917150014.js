import './App.css';

import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'


function App() {
  return (
    <div className="App">
       <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en"></IntlProvider>
    </div>
  );
}

export default App;
