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
import Container from './styles.jsx';
import GlobalStyles from '../../assets/styles/global.jsx';

import './styles.jsx';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Container>
          <Hero />
           {/* <AboutUs />
           <Sponsors />
         <div id="history">
            <History />
          </div>

          <div id="group">
            <Group />
          </div>
          <div id="footer">
            <Footer />
          </div> */}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
