import styled from "styled-components";

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
}

interface ButtonProps {
  readonly buttonType: ButtonType;
}

const getFontColor = (buttonType: ButtonType) => {
  switch (buttonType) {
    case ButtonType.DEFAULT:
      return "var(--main-text-color)";
    case ButtonType.PRIMARY:
      return "var(--main-white-color)";
    default:
      return "var(--main-text-color)";
  }
};

const getBackgroundColor = (buttonType: ButtonType) => {
  switch (buttonType) {
    case ButtonType.DEFAULT:
      return "var(--main-white-color)";
    case ButtonType.PRIMARY:
      return "var(--main-deep-blue-color)";
    default:
      return "var(--main-white-color)";
  }
};

const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => getFontColor(props.buttonType)};
  background-color: ${(props) => getBackgroundColor(props.buttonType)};
  font-weight: 400;
  font-size: 14px;
  height: 54px;
  padding: 5px 25px;
  box-sizing: border-box;
  border-radius: var(--border-radius-default);
  border: none;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: var(--main-blue-color);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default StyledButton;
