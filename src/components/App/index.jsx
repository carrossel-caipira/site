import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../../assets/styles/themes/default.jsx';
import Title from '../Title';
import Navbar from '../navbar';
import Hero from '../hero';
import AboutUs from '../aboutUs';
import Footer from '../footer';
import Sponsors from '../sponsors';
import Group from '../group';
import History from '../history';
import { Container, ManchaHistory, ManchaContainer } from './styles.jsx';
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
          <AboutUs />
          <History />
          <ManchaContainer>
            <ManchaHistory src={manchaHistory} />
          </ManchaContainer>
          <Group />
          <Sponsors />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
