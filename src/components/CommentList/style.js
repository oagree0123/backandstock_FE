import styled from 'styled-components';

export const CommentListWrap = styled.div`

`;

export const CommentInputWrap = styled.div`
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
  background: ${props => props.userImg || `var(--primary-color)`};
  background-repeat: no-repeat;
  background-size: contain;
`;

export const CommnetInput = styled.input`
  margin-right: 12px;
  padding-left: 20px;
  width: 665px;
  height: 40px;
  border: 1px solid #9e9e9e;
  border-radius: 50px;
`;

export const CommentBtn = styled.button`
  margin-right: 4px;
  width: 72px;
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
  width: 72px;
  height: 35px;
  font-size: var(--font-medium);
  font-weight: 800;
  line-height: var(--line-medium);
  color: #c4c4c4;
  border: 1px solid #c4c4c4;
  border-radius: 30px;
  background-color: #fff;
`;