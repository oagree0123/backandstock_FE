import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';


import { CommunityTitle, CommunityWrap, PageBtn, PageHr, PageWrap, SortCircle, SortText, SortWrap, Title } from "./style";
import { actionCreators as communityActions } from '../../redux/modules/community';
import { CommunityList, Slide } from '../../components';

const Community = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const top_list = useSelector((state) => state.community.top_five_list)
  const community_list = useSelector(state => state.community.list);

  useEffect(() => {
    dispatch(communityActions.setPostInit());
    dispatch(communityActions.getTopFiveDB())
    dispatch(communityActions.getPostDB());
  }, [])

  return (
    <CommunityWrap>
      <Title>
        포토폴리오 자랑하고<br />
        사람들과 소통해보세요!
      </Title>
      {
        top_list &&
        <Slide top_list={top_list} />
      }

      <CommunityTitle>
        포트폴리오 뽐내기
      </CommunityTitle>
      <SortWrap>
        <SortCircle />
        <SortText >좋아요순</SortText>
      </SortWrap>
      {community_list &&
        <CommunityList community_list={community_list} />
      }
      <PageWrap>
        {/* <PageHr /> */}
        <PageBtn
          onClick={() => {
            dispatch(communityActions.getPostDB(page + 1));
            setPage(prevState => prevState + 1);
          }}
        >
          더보기
        </PageBtn>
      </PageWrap>
    </CommunityWrap>
  );
};

export default Community;