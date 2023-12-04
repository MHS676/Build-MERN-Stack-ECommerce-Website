import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className='d-flex flex-column site-container'>
          <header>
            <Navbar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>universe</Navbar.Brand>
                </LinkContainer>
              </Container>
            </Navbar>
          </header>
          <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
          </main>
          <footer>
            <div className='text-center'>All rights reserved</div>
          </footer>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
