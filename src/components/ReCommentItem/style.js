import styled from 'styled-components';

export const ReCommentItemWrap = styled.div`
  margin-top: ${props => props.mTop || 0};
  width: 880px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RecoWrap = styled.div`
  margin-top: ${props => props.mTop || "14px"};
  display: flex;
  align-items: flex-start;
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

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const EditCommnentBtn = styled.button`
  width: 34px;
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

export const DelCommnentBtn = styled.button`
  width: 34px;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: #696969;
  text-align: right;
  border: none;
  background-color: #fff;
`;


export const ReImgWrap = styled.div`
  margin-right: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: ${props => props.user_img ? `url(${props.user_img})`: ""};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #c4c4c4;
`;

export const RecoInput = styled.input`
  margin-right: 12px;
  padding-left: 20px;
  width: 600px;
  height: 37px;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 50px;

  &:focus {
    outline: 1px solid var(--primary-color);
  }
`;

export const RecoBtn = styled.button`
  margin-right: 4px;
  width: 70px;
  height: 32px;
  font-size: var(--font-small);
  font-weight: 800;
  line-height: var(--line-small);
  color: #fff;
  border: none;
  border-radius: 30px;
  background-color: var(--primary-color);
`;

export const RecoCancleBtn = styled.button`
  width: 70px;
  height: 32px;
  font-size: var(--font-small);
  font-weight: 800;
  line-height: var(--line-small);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  background-color: #fff;
`;