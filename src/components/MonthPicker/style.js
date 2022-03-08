import styled from "styled-components";

export const MonthPickerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 1.8vh;
`;

export const DateWrap = styled.div`
  padding-left: 1.52vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 5.37vh;
  font-size: var(--font-main);
  border: 1px solid var(--gray-color);
  border-radius: 0.694vw;
`;

export const CalenderWrap = styled.div`
  position: absolute;
  top: 6vh;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
`;

export const CalenderHeader = styled.div`
  width: 100%;
  height: 3.4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-medium);
  background-color: #eee;
`;

export const CalenderYear = styled.p`

`;

export const CalenderArrow = styled.img`
  width: 1.46vw;
  height: 1.46vw;
  cursor: pointer;
`;

export const MonthWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: var(--font-medium);
  background-color: #fff;
`;

export const MonthClickBtn = styled.div`
  width: 33.33%;
  height: 3.4vh;
  color: green;
  text-align: center;
  cursor: pointer;
`;

export const MonthBtn = styled.div`
  width: 33.33%;
  height: 3.4vh;
  text-align: center;
  cursor: pointer;
`;

export const MonthDisabledBtn = styled.div`
  width: 33.33%;
  height: 3.4vh;
  color: #eee;
  text-align: center;
  cursor: default;
`;