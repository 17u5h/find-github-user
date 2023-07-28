import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './styles/globalStyle'
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes/>
    </>
  );
}

export default App;
