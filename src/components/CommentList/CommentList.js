import React from 'react';
import CommentItem from '../CommentItem/CommentItem';
import { CommentListWrap } from './style';

const CommentList = (props) => {
  return (
    <CommentListWrap>
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </CommentListWrap>
  );
};

export default CommentList;