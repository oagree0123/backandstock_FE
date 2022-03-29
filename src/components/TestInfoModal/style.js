import styled from "styled-components";

export const TestInfoModalWrap = styled.div`
  padding: 28px 8px 24px 34px;
  width: 420px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    background-color: #eee;
  }
`;

export const ModalHeader = styled.header`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TestInfoTitle = styled.h1`
  font-size: 28px;
  font-weight: 800;
`;

export const CloseBtn = styled.img`
  margin-right: 24px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const InfoSection = styled.section`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 8px;
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
  letter-spacing: -1.15px;
  color: var(--primary-color);
`;

export const SectionDesc = styled.p`
  margin-bottom: 12px;
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: 23px;
`;

export const SectionImg = styled.img`
  width: 360px;
`;
