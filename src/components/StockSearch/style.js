import styled from "styled-components";

export const StockWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SearchLeft = styled.div`
  margin-right: 50px;
  width: 350px;
`;

export const SearchRight = styled.div`
  width: 480px;
`;

export const SearchTitle = styled.h3`
  margin-bottom: 27px;
  font-size: var(--font-title);
  font-weight: 600;
`;

export const RateWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StockRate = styled.input`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: var(--font-main);
  border: 1px solid var(--gray-color);
  border-radius: 10px;
`;

export const Rate = styled.div`
  position: absolute;
  font-size: var(--font-medium);
  right: 20px;
`;

export const SearchStock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchWrap = styled.div`
  position: relative;
  width: 350px;
`;

export const SearchInput = styled.input`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
  height: 55px;
  font-size: var(--font-main);
  border: 1px solid var(--gray-color);
  border-radius: 10px;
`;

export const PreviewListWrap = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  max-height: 600px;
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
  margin-left: 20px;
  width: 110px;
  height: 55px;
  font-size: var(--font-main);
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: var(--gray-color);
`;
