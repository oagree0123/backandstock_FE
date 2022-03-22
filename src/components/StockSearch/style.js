import styled from "styled-components";

export const StockWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SearchLeft = styled.div`
  margin-right: 40px;
  width: 380px;
`;

export const SearchRight = styled.div`
  width: 500px;
`;

export const SearchTitle = styled.h2`
  margin-bottom: 20px;
  font-size: var(--font-header);
  line-height: var(--line-header);
  font-weight: 600;
`;

export const RateWrap = styled.div`
  width: 380px;
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
  justify-content: flex-start;
  align-items: center;
`;

export const SearchWrap = styled.div`
  position: relative;
  width: 325px;
`;

export const SearchInput = styled.input`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 325px;
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
  max-height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid var(--secondary-color);
  border-radius: 4px;
  background-color: #fff;
  overflow-y: scroll;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const SearchBtn = styled.button`
  margin-left: 20px;
  width: 105px;
  //height: 55px;
  height: 42px;
  font-size: var(--font-large);
  font-weight: 600;
  color: #fff;
  border: none;
  //border-radius: 10px;
  border-radius: 40px;
  background-color: var(--primary-color);
`;
