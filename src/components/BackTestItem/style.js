import styled from 'styled-components';

export const StockItemWrap = styled.div`
  margin-bottom: 1.95vh;
  position: relative;
  height: 2.53vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--font-color);
  z-index: 50;
`;

export const StockName = styled.p`
  padding-left: 1.73vw;
  width: 20.2vw;
  font-size: var(--font-main);
`;

export const StockRate = styled.p`
  padding: 0px 1.73vw;
  width: 10.9vw;
  font-size: var(--font-main);
  text-align: center;
`;

export const StockPrice = styled.p`
  padding-left: 1.73vw;
  width: 27.98vw;
  font-size: var(--font-main);
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  margin-left: 1.73vw;
  width: 1.38vw;
  height: 1.38vw;
  border: none;
`;