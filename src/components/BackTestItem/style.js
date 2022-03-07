import styled from 'styled-components';

export const StockItemWrap = styled.div`
  height: 3.9vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--primary-color);
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
  width: 22.84vw;
  font-size: var(--font-main);
`;

export const CloseBtn = styled.button`
  margin-left: 1.73vw;
  width: 1.38vw;
  height: 1.38vw;
  border: none;
`;