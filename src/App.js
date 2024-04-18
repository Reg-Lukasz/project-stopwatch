import Stopwatch from "./components/Stopwatch/Stopwatch";
import Container from "./components/Container/Container";
import './styles/global.scss';

function App() {
  return (
    <div>
      <Container>
        <Stopwatch />
      </Container>
    </div>
  );
}

export default App;