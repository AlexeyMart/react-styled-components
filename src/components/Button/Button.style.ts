import styled from "styled-components";

interface Props {
  variant?: string;
}

export const StyledButton = styled.button<Props>`
  border: 2px solid #315efb;
  padding: 10px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant }) =>
    variant === "outline" ? "green" : "white"};
  cursor: pointer;
  transition: all 200ms ease-in-out;
  color: ${({ variant }) => (variant === "outline" ? "white" : "black")};

  &:hover {
    background-color: #315efb;
    color: white;
  }
`;

export const FancyButton = styled(StyledButton)`
  background: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;
