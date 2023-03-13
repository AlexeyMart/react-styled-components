import { ThemeProvider } from "styled-components";
import "./App.css";
import Button, {
  FancyButton,
  SubmitButton,
  AnimatedButton,
  DarkButton,
} from "./components/Button/Button";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button dataQa="button-default">Styled Button</Button>

        <Button variant="outline">Styled Button</Button>

        {/* можно превратить кнопку в ссылку через as="a" */}
        <FancyButton as="a">Fancy Button</FancyButton>

        <SubmitButton>Submit Button</SubmitButton>

        <AnimatedButton>Animated Button</AnimatedButton>

        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}
