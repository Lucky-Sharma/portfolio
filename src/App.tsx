import "./App.css";
import { Nav } from "./components/nav";
import { Container } from "./components/Container";
import { Background } from "./components/Background";

function App() {
  return (
    <div>
      <Background />
      <Nav />
      <Container />
    </div>
  );
}

export default App;
