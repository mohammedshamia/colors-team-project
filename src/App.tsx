import { Container } from './components';
import { Divider } from './components/Divider';
import ComplexCard from './components/Card/productCard';
import CategoryCard from './components/Card/categoryCard';

const App: React.FC = () => {
  return (
    <Container direction="column" justifyContent="space-between">
      <Divider thick="5px" />
      <ComplexCard />
      <CategoryCard />
    </Container>
  );
};

export default App;
