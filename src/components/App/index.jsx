import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../../assets/styles/themes/default.jsx';
import Title from '../Title';
import Navbar from '../navbar';
import Hero from '../hero';
import AboutUs from '../aboutUs';
import Footer from '../footer';
import Sponsors from '../sponsors';
import History from '../history';
import Objetivo from '../Objetivos/index.jsx';
import Recrutamento from '../Recrutamento/index.jsx';
import { Container, ManchaHistory } from './styles.jsx';
import GlobalStyles from '../../assets/styles/global.jsx';
import manchaHistory from '../../assets/images/mancha_history.svg'
import ScrollBar from '../ScrollBar/'


function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <ScrollBar />
        <Container>
          <Hero />
          {/* <AboutUs /> */}
          <History />
          <ManchaHistory src={manchaHistory} />
          {/* <Recrutamento /> */}
          <Objetivo />
          <Sponsors />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
