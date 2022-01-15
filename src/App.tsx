import { Container } from './components';
import { Navbar } from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Container direction="column" justifyContent="space-between">
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <Navbar />
    </Container>
  );
};

export default App;
