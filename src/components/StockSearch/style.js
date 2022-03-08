import styled from "styled-components";

export const StockWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SearchLeft = styled.div`
  margin-right: 3.4vw;
  width: 24.3vw;
`;

export const SearchRight = styled.div`
  width: 33.33vw;
`;

export const SearchTitle = styled.h3`
  margin-bottom: 2.714vh;
  font-size: var(--font-title);
  font-weight: 600;
`;

export const RateWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StockRate = styled.input`
  padding-left: 1.52vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 5.37vh;
  font-size: var(--font-main);
  border: 1px solid var(--gray-color);
  border-radius: 0.69vw;
`;

export const Rate = styled.div`
  position: absolute;
  font-size: var(--font-medium);
  right: 1.38vw;
`;

export const SearchStock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchWrap = styled.div`
  position: relative;
  width: 24.3vw;
`;

export const SearchInput = styled.input`
  padding-left: 1.52vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 24.3vw;
  height: 5.37vh;
  font-size: var(--font-main);
  border: 1px solid var(--gray-color);
  border-radius: 0.694vw;
`;

export const PreviewListWrap = styled.div`
  position: absolute;
  top: 5.5vh;
  left: 0;
  width: 100%;
  max-height: 18vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--secondary-color);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const SearchBtn = styled.button`
  width: 7.57vw;
  height: 5.37vh;
  font-size: var(--font-main);
  color: #fff;
  border: none;
  border-radius: 0.69vw;
  background-color: var(--gray-color);
`;
