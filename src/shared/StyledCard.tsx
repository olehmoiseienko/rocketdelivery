import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  padding: 16px;
  border: 1px solid var(--main-border-color);
  border-radius: 20px;
  background-color: var(--main-white-color);

  h1 {
    font-size: var(--font-size-h1);
    font-weight: 600;
  }

  p {
    color: var(--main-text-helper-color);
  }
`;

export default StyledCard;
