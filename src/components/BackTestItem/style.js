import styled from 'styled-components';

export const StockItemWrap = styled.div`
  margin-bottom: 16px;
  position: relative;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--font-color);
  z-index: 50;
`;

export const StockName = styled.p`
  padding-left: 27px;
  width: 300px;
  font-size: var(--font-main);
`;

export const StockRate = styled.p`
  padding-left: 27px;
  width: 162px;
  font-size: var(--font-main);
  text-align: center;
`;

export const StockPrice = styled.p`
  padding-left: 27px;
  width: 418px;
  font-size: var(--font-main);
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  margin-left: 1.73vw;
  width: 25px;
  height: 25px;
  border: none;
`;