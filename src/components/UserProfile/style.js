import styled from 'styled-components';

export const UserProfileWrap = styled.section`
  padding: 0px 24px;
  position: absolute;
  top: 42px;
  left: -13px;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid var(--secondary-color);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
`;

export const ProfileTitle = styled.p`
  padding-left: 4px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 800px;
`;

export const NicknameInput = styled.input`
  margin-bottom: 8px;
  width: 100%;
  height: 28px;
  font-size: var(--font-medium);
  line-height: var(--line-medium);
  //color: var(--primary-color);
  text-align: center;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #F0F0F0;
`;

export const ProfileLabel = styled.label`
  margin-bottom: 18px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: var(--line-small);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  background-color: #fff;
  cursor: pointer;
`;

export const ProfileInput = styled.input`
  display: none;
`;

export const CompleteBtn = styled.button`
  width: 100%;
  height: 28px;
  font-size: var(--font-small);
  font-weight: 800;
  line-height: var(--line-small);
  color: #fff;
  border: none;
  border-radius: 30px;
  background-color: var(--primary-color);
`;