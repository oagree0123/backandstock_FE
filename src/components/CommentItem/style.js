import styled from 'styled-components';

export const CommentItemWrap = styled.div`
  margin-bottom: 32px;
  width: 880px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImgWrap = styled.div`
  margin-right: 12px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;

export const CommentContWrap = styled.div`
  width: 818px;
  display: flex;
  flex-direction: column;
`;

export const UserNick = styled.p`
  margin-bottom: 4px;
  font-size: var(--font-medium);
  font-weight: 500;
  line-height: var(--line-medium);
  color: var(--primary-color);
`;

export const CommentCont = styled.p`
  margin-bottom: 8px;
  font-size: var(--font-medium);
  font-weight: 500;
  line-height: 23px;
`;

export const ReCommnentBtn = styled.button`
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: #696969;
  border: none;
  background-color: #fff;
`;