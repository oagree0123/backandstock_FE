import styled from "styled-components";

export const MonthPickerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 18px;
`;

export const DateWrap = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: var(--font-main);
  line-height: var(--line-main);
  border: 1px solid var(--gray-color);
  border-radius: 10px;
`;

export const CalenderWrap = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
`;

export const CalenderHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-medium);
  background-color: #eee;
`;

export const CalenderYear = styled.p`

`;

export const CalenderArrow = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const MonthWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: var(--font-medium);
  line-height: var(--line-medium);
  background-color: #fff;
`;

export const MonthClickBtn = styled.div`
  width: 33.33%;
  height: 25px;
  color: green;
  text-align: center;
  cursor: pointer;
`;

export const MonthBtn = styled.div`
  width: 33.33%;
  height: 25px;
  text-align: center;
  cursor: pointer;
`;

export const MonthDisabledBtn = styled.div`
  width: 33.33%;
  height: 25px;
  color: #eee;
  text-align: center;
  cursor: default;
`;