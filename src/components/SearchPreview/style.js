import styled from "styled-components";

export const PreviewWrap = styled.div`
  padding: 0.97vh 1.56vh;
  width: 90%;
  height: 3.9vh;
  display: flex;
  align-items: center; 
  color: var(--font-color);
  border-bottom: 2px solid var(--secondary-color);
  background-color: #fff;
  cursor: pointer;

  &:hover { 
    color: var(--primary-color);
    font-weight: 500;
    background-color: var(--secondary-color);
  }
`;

export const PreviewCode = styled.p`
  margin-right: 24px;
  font-size: var(--font-medium);
  line-height: var(--line-medium);
`;

export const PreviewName = styled.p`
  font-size: var(--font-medium);
  line-height: var(--line-medium);
`;

