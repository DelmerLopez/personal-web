import { Container } from 'react-bootstrap';
import { AppNavbar } from './components/AppNavbar';
import { Home } from './views/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar/>
      </header>
      <br/>
      <Container>
        <Home/>
      </Container>
    </div>
  );
}

export default App;
