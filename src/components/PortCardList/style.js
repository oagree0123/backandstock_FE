import styled from 'styled-components';

export const PortCardListWrap = styled.section`
  width: 880px;
  height: 508px;
`;

export const ChartWrap = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const NoneCard = styled.div`
  width: 280px;
  height: 453px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(217, 223, 230, 1);
  border-radius: 10px;
  background: rgba(217, 223, 230, 0.3);
`;

export const NoneText = styled.p`
  font-size: var(--font-medium);
  font-weight: 400;
  line-height: var(--line-medium);
  text-align: center;
  color: #c4c4c4;
`;