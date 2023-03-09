import "./App.css";
import Button, { FancyButton } from "./components/Button/Button";

export default function App() {
  return (
    <div className="App">
      <Button>Styled Button</Button>

      <Button variant="outline">Styled Button</Button>

      {/* можно превратить кнопку в ссылку через as="a" */}
      <FancyButton as="a">Fancy Button</FancyButton>
    </div>
  );
}
