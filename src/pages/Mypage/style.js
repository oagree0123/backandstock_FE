import styled from "styled-components";

export const MypageWrap = styled.div`
  padding: 44px 0px 56px 56px;
  width: 880px;
  box-sizing: content-box;
`;

export const MypageHead = styled.h1`
  font-size: 32px;
  line-height: var(--line-header);
  font-weight: 600;
`;

export const ChartTitle = styled.h2`
  margin-bottom: 20px;
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
  letter-spacing: 0.15px;
`;

export const ChartInfo = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
`;

export const ChartBtnWrap = styled.div`
  margin-bottom: 18px;
  width: 880px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CompareBtn = styled.button`
  margin-right: 8px;
  width: 85px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-small);
  font-weight: 800;
  line-height: var(--line-small);
  border: none;
  border-radius: 30px;
  color: #fff;
  background-color: var(--primary-color);
`;

export const DeleteBtn = styled.button`
  width: 85px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-small);
  font-weight: 800;
  line-height: var(--line-small);
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  color: var(--primary-color);
  background-color: #fff;
`;

export const ChartWrap = styled.div`
  margin-bottom: 60px;
  width: 880px;
  min-height: 350px;
  height: 100%;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
`;

export const NoneChartWrap = styled.div`
  width: 880px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(217, 223, 230, 1);
  border-radius: 10px;
  background: rgba(217, 223, 230, 0.3);
`;

export const NoneChartText = styled.p`
  font-size: var(--font-large);
  font-weight: 400;
  line-height: var(--line-large);
  text-align: center;
  color: #c4c4c4;
`;

export const MypageInfoWrap = styled.div`
  width: 880px;
`;