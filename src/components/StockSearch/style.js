import styled from "styled-components";

export const StockWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SearchLeft = styled.div`
  width: 22.6vw;
`;

export const SearchRight = styled.div`
  width: 26.3vw;
`;

export const SearchTitle = styled.h3`
  margin-bottom: 24px;
  font-size: var(--font-title);
  font-weight: 600;
`;

export const StockRate = styled.input`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4.88vh;
  font-size: var(--font-main);
  border: 1px solid var(--font-color);
  border-radius: 10px;
`;

export const SearchWrap = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4.88vh;
  font-size: var(--font-main);
  border: 1px solid var(--font-color);
  border-radius: 10px;
`;

export const PreviewListWrap = styled.div`
  position: absolute;
  top: 5.3vh;
  left: 0;
  width: 100%;
  max-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #e5e5e5;
  border-radius: 5px;
  overflow-y: scroll;
`;

export const SearchBtn = styled.button`

`;

