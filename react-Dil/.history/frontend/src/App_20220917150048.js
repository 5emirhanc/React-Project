import './App.css';

import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'


function App() {
  const messages = {
title :""
  }
  return (
    <div className="App">
       <IntlProvider ></IntlProvider>
    </div>
  );
}

export default App;
