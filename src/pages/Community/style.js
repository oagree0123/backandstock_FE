import styled from "styled-components";

export const CommunityWrap = styled.div`
  padding: 44px 0px 56px 56px;
  width: 880px;
  box-sizing: content-box;
`;

export const Title = styled.p`
  margin-bottom: 32px;
  font-size: 32px;
  line-height: var(--line-header);
  font-weight: 600;
`;

export const CommunityTitle = styled.p`
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
`;

export const SortCircle = styled.div`
  margin-right: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;

export const SortText = styled.p`
  margin-right: 12px;
  font-size: 12px;
  font-weight: 800;
  line-height: var(--line-small);
  color: var(--primary-color);
`;