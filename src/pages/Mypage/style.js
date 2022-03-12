import styled from "styled-components";

export const MypageWrap = styled.div`
  padding: 44px 0px 56px 56px;
  width: 880px;
  box-sizing: content-box;
`;

export const ChartTitle = styled.h2`
  margin-bottom: 20px;
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
`;

export const ChartWrap = styled.div`
  width: 880px;
  height: 350px;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
  background-color: var(--secondary-color);
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
