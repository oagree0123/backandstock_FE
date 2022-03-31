import styled from "styled-components";

export const CommunityWrap = styled.div`
  padding: 44px 0px 100px 56px;
  width: 880px;
  box-sizing: content-box;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 32px;
  line-height: var(--line-header);
  font-weight: 600;
`;

export const CommunityTitle = styled.h2`
  margin-bottom: 4px;
  font-size: var(--font-header);
  font-weight: 800;
  line-height: var(--line-header);
`;

export const SortWrap = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

export const SortCircle = styled.div`
  margin-right: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.sort_option};
`;

export const SortText = styled.p`
  margin-right: 12px;
  font-size: 12px;
  font-weight: 800;
  line-height: var(--line-small);
  color: ${props => props.sort_option};
`;

export const PageWrap = styled.div`
  margin-top: 36px;
  width: 880px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageHr = styled.div`
  width: 100%;
  border-bottom: 1px dashed var(--primary-color);
`;

export const PageBtn = styled.button`
  position: absolute;
  width: 90px;
  height: 30px;
  font-size: var(--font-medium);
  font-weight: 600;
  line-height: var(--line-medium);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  background-color: #fff;
`;