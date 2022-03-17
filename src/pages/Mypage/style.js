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
  height: 350px;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
`;

export const NoneChartWrap = styled.div`
  margin-bottom: 60px;
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

// edit

export const Wrap = styled.div`
  display: flex;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  & span {
    font-size: 13px;
    padding-bottom: 3px;
  }
`;

export const Btn = styled.div`
  width: 884px;
  height: 50px;
  background-color: #367bf5;
  border-radius: 10px;
  color: #ffffff;
  outline: none;
  border: none;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 884px;
  height: 100px;
  border: 1px solid gray;
  border-radius: 10px;

  margin-top: 50px;
`;
