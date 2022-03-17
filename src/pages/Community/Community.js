import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { history } from '../../redux/configStore';
import { useDispatch, useSelector } from 'react-redux';


import { CommunityWrap, Text, Title } from "./style";
import { actionCreators as communityActions } from '../../redux/modules/community';
import Map from '../../components/Community/Map'
import { CommunityList, Slide } from '../../components';

const Community = () => {
  const dispatch = useDispatch();

  // console.log(top_list);
  const [page, setPage] = useState(1);
  
  const top_list = useSelector((state) => state.community.top_five_list)
  const community_list = useSelector(state => state.community.list);

  useEffect(() => {
    dispatch(communityActions.getTopFiveDB())
  }, [])

  useEffect(() => {
    dispatch(communityActions.getPostDB());
  }, [])

  return (
    <CommunityWrap>
      {
        top_list &&
        <Slide top_list={top_list} />
      }

      <Title>
        포토폴리오 자랑하고<br />
        사람들과 소통해보세요!
      </Title>
      <Slide></Slide>
      { community_list &&
        <CommunityList community_list={community_list} />
      }
      {/* <button
        onClick={() => {
          dispatch(communityActions.getPostDB(page + 1));
          setPage(prevState => prevState + 1);
        }}
      >
        더보기
      </button> */}
    </CommunityWrap>
  );
};

export default Community;