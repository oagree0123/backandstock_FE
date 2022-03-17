import styled from "styled-components";

export const ResultWrap = styled.div`
  width: 100%;
  padding: 44px 0px 56px 56px;
  padding-right: calc(30.9vw - 293px);
  background-color: var(--secondary-color);
`;

export const ResultTitle = styled.p`
  margin-bottom: 16px;
  margin-left: 8px;
  font-size: var(--font-title);
  font-weight: 800;
  line-height: var(--line-title);
`;

export const LineChartWrap = styled.div`
  margin-bottom: 20px;
  width: 880px;
  height: 300px;
  border-radius: 10px;
  background-color: #fff;
`;

export const BarChartWrap = styled.div`
  margin-bottom: 20px;
  width: 880px;
  height: 300px;
  border-radius: 10px;
  background-color: #fff;
`;

export const All = styled.div`
  width: 880px;
  background-color: #ecf5ff;
`;

export const Btn = styled.button`
  margin-top: 48px;
  width: 882px;
  height: 70px;
  color: #fff;
  font-size: var(--font-header);
  font-weight: 600;
  border-radius: 10px;
  background-color: #367bf5;
  outline: none;
  border: none;

  &:disabled {
    background-color: #D9DFE6;
    cursor: default;
  }
`;
