import styled from 'styled-components';

export const BestDetailWrap = styled.div`
  width: 100%;
`;

export const TitleWrap = styled.header`
  margin-bottom: 20px;
  padding: 0 4px;
  width: 880px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BestDetailTitle = styled.h1`
  font-size: 32px;
  font-weight: 800px;
  line-height: 28px;
`;

export const LikeWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeIcon = styled.img`
  margin-right: 4px;
  width: 18px;
  height: 18px;
`;

export const LikeCnt = styled.p`
  font-size: var(--font-medium);
  font-weight: 500;
  line-height: var(--line-medium);
  color: var(--primary-color);
`;

export const ContWrap = styled.section`
  width: 100%;
  height: 1450px;
  padding: 44px 0px 100px 56px;
  padding-right: calc(30.9vw - 293px);
  background-color: var(--secondary-color);
`;

export const CommentWrap = styled.section`
  width: 100%;
  padding: 44px 0px 100px 56px;
`;

export const CommentCnt = styled.p`
  margin-bottom: 24px;
  font-size: 28PX;
  font-weight: 800;
  line-height: 1;
`;