import Circle from './components/Circle';
import Rating from './components/Rating';

const App: React.FC = () => {
  return (
    <div className="App">
      <Rating value={2.5} color="red" />
      <Circle />
    </div>
  );
};

export default App;
