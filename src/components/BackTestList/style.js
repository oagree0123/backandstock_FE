import styled from 'styled-components';

export const TestListWrap = styled.div`

`;

export const ListTitle = styled.h3`
  margin-bottom: 28px;
  font-size: var(--font-title);
  font-weight: 600;
`;

export const ListWrap = styled.div`
  padding-bottom: 10px;
  width: 880px;
  min-height: 220px;
  border: 1px solid var(--secondary-color);
`;

export const ListTop = styled.div`
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 880px;
  height: 52px;
  background-color: var(--secondary-color);
`;

export const TopStockName = styled.p`
  padding-left: 27px;
  width: 300px;
  font-size: var(--font-main);
`;

export const TopStockRate = styled.p`
  padding-left: 27px;
  width: 162px;
  font-size: var(--font-main);
  text-align: center;
`;

export const TopStockPrice = styled.p`
  padding-left: 27px;
  width: 418px;
  font-size: var(--font-main);
`;