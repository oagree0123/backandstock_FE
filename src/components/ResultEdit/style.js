import styled from 'styled-components';

export const ResultEditWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(45, 45, 45, 0.6);
  z-index: 1000;
`;

export const ContWrap = styled.div`
  position: relative;
  padding: 40px 60px;
  width: 720px;
  border-radius: 20px;
  background-color: #fff;
`;

export const ContHeader = styled.header`
  margin-bottom: 36px;
`;

export const EditHeader = styled.h1`
  margin-bottom: 4px;
  font-size: 28px;
  font-weight: 800;
`;

export const Editdesc = styled.p`
  font-size: var(--font-main);
  font-weight: 500;
  line-height: var(--line-main);
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 40px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ContBody = styled.section`
  width: 100%;
`;

export const ContTitle = styled.h2`
  margin-bottom: 16px;
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
`;

export const MonthWrap = styled.div`
  margin-bottom: 40px;
`;

export const MoneyWrap = styled.div`
  margin-bottom: 48px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const InitMoneyInput = styled.input`
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: var(--font-main);
  border: 1px solid var(--gray-color);
  border-radius: 10px;
`;

export const Won = styled.div`
  position: absolute;
  right: 20px;
  font-size: var(--font-medium);
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 60px;
  left: 0;
  font-size: var(--font-small);
  line-height: var(--line-small);
  color: red;
`;

export const TestEditBtn = styled.button`
  margin-bottom: 12px;
  width: 100%;
  height: 55px;
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
  color: #fff;
  text-align: center;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: var(--primary-color);
`;