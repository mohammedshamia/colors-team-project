import { Container } from './components';
import Divider from './components/Divider';

const App: React.FC = () => {
  return (
    <Container direction="column" justifyContent="space-between">
      <Divider thick="5px" />
    </Container>
  );
};

export default App;
