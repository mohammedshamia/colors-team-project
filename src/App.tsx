import { Container, Divider } from './components';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <Container direction="column" justifyContent="space-between">
      <Divider thick="5px" />
      <Counter />
    </Container>
  );
};

export default App;
