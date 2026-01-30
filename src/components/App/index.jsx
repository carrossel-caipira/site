import React, { useEffect } from 'react'; // Importe o useEffect
import { ThemeProvider } from 'styled-components';
import Theme from '../../assets/styles/themes/default.jsx';
import Title from '../Title';
import Navbar from '../navbar';
import Sponsors from '../sponsors';
import Objetivo from '../Pilares/index.jsx';
import Sobre from '../Sobre-nos/index.jsx'
import Recrutamento from '../Recrutamento/index.jsx';
import { Container } from './styles.jsx';
import GlobalStyles from '../../assets/styles/global.jsx';
import Footer from '../footer/index.jsx'
import Hero from '../hero/index.jsx'

function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Container>
          <Hero/>

          <Sobre/>
          <Recrutamento />
          <Objetivo />
          <Sponsors />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
