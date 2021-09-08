import './App.css';
import {  BrowserRouter } from 'react-router-dom';
import Routes from './Routes'
import GlobalStyle from './assets/styles/global';
import HeaderComponent from './assets/header';
import FooterComponent from './assets/footer';

function App() {
  return (
    
    <BrowserRouter>
      <HeaderComponent />
      <Routes />
      <FooterComponent />
      <GlobalStyle />
    </BrowserRouter>

  );
}

export default App;
