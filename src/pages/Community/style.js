import styled from "styled-components";

export const CommunityWrap = styled.div`
  padding: 44px 0px 56px 56px;
  width: 880px;
  box-sizing: content-box;
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(44, 44, 44, 0.267);
  top: 0;
  left: 0;
  z-index: 999;
`;

export const Modalinner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 800px;
  background-color: white;
  border-radius: 1em;
  padding: 30px;
`;

export const Close = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
`;

export const BoxWrap = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px;
  background-color: lightskyblue;
`;
export const InputWrap = styled.div`
  display: flex;
`;
export const Input = styled.input`
  width: 500px;
  height: 30px;
`;

export const Btn = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 20px;
`;

export const Title = styled.p`
  margin-bottom: 32px;
  font-size: 32px;
  line-height: var(--line-header);
  font-weight: 600;
`;