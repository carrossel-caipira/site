import React, { useEffect } from 'react'; // Importe o useEffect
import { ThemeProvider } from 'styled-components';
import Theme from '../../assets/styles/themes/default.jsx';
import Title from '../Title';
import Navbar from '../navbar';
import Sponsors from '../sponsors';
import Objetivo from '../Pilares/index.jsx';
import Recrutamento from '../Recrutamento/index.jsx';
import { Container } from './styles.jsx';
import GlobalStyles from '../../assets/styles/global.jsx';
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
          <Navbar/>
          <Recrutamento />
          <Objetivo />
          <Sponsors />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
