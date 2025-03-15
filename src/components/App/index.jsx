import React, { useEffect } from 'react'; // Importe o useEffect
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
import manchaHistory from '../../assets/images/mancha_history.svg';
import ScrollBar from '../ScrollBar/';

function App() {
  useEffect(() => {

    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };


    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=')) {
        event.preventDefault();
      }
    };


    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);


    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <ScrollBar />
        <Container>
          <Hero />
          <AboutUs />
          <Recrutamento />
          <History />
          <ManchaHistory src={manchaHistory} />
          <Objetivo />
          <Sponsors />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
