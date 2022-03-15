import styled from 'styled-components';

export const PortChartWrap = styled.div`
  margin-bottom: 12px;
  width: 280px;
  height: 200px;
  border: 1.5px solid #A8D1FF;
  border-radius: 6px;
  overflow: hidden;
`;

export const Wrap = styled.div`
  display: flex;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 13px;
    padding-bottom: 3px;
  }
`;