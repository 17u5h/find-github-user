import React from 'react';
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
