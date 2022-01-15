import ComplexCard from './components/Card/productCard';
import { Divider } from './components/Divider';
// import Theme

const App: React.FC = () => {
  return (
    <div className="App">
      <Divider thick="5px" />
      <ComplexCard />
    </div>
  );
};

export default App;
