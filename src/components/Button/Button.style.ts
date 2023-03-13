import styled, { keyframes } from "styled-components";

interface Props {
  variant?: string;
  dataQa?: string;
}

export const StyledButton = styled.button.attrs<Props>((props) => ({
  type: "button",
  "data-qa": props.dataQa || "some-button",
}))<Props>`
  border: 2px solid #315efb;
  padding: 10px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.variant === "outline" ? "green" : "white"};
  cursor: pointer;
  transition: all 200ms ease-in-out;
  color: ${(props) => (props.variant === "outline" ? "white" : "black")};

  &:hover {
    background-color: #315efb;
    color: white;
  }
`;

export const FancyButton = styled(StyledButton)`
  background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
  "data-qa": "submit-button",
})``;

const Rotate = keyframes`
0% {
  transform: rotate(0);
}

100% {
  transform: rotate(360deg);
}
`;

export const AnimatedButton = styled(StyledButton)`
  animation: ${Rotate} 5s ease-in-out infinite;
`;
