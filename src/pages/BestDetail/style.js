import styled from 'styled-components';

export const BestDetailWrap = styled.div`
  width: 100%;
`;

export const ContWrap = styled.div`
  width: 100%;
  padding: 44px 0px 56px 56px;
  padding-right: calc(30.9vw - 293px);
  background-color: var(--secondary-color);
`;

export const CommentWrap = styled.div`
  width: 100%;
  padding: 44px 0px 56px 56px;
`;

export const CommentCnt = styled.p`
  margin-bottom: 24px;
  font-size: 28PX;
  font-weight: 800;
  line-height: 1;
`;

export const CommentInputWrap = styled.div`
  margin-bottom: 36px;
  width: 880px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const UserImg = styled.div`
  margin-right: 8px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;

export const CommnetInput = styled.input`
  margin-right: 12px;
  width: 702px;
  height: 40px;
  border: 1px solid #9e9e9e;
  border-radius: 50px;
`;

export const CommentBtn = styled.button`
  margin-right: 4px;
  width: 75px;
  height: 35px;
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: var(--line-medium);
  color: #fff;
  border: none;
  border-radius: 30px;
  background-color: #c4c4c4;
`;

export const CancleBtn = styled.button`
  width: 75px;
  height: 35px;
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: var(--line-medium);
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  background-color: #fff;
`;