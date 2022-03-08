import React from 'react';

import { PreviewWrap } from './style';

const SearchPreview = (props) => {
  const { _onClick } = props;
  console.log(props.stock_code)
  return (
    <PreviewWrap onClick={_onClick}>
      <p>{props.stock_code}</p>
      <p>{props.stock_name}</p>
    </PreviewWrap>
  );
};

SearchPreview.defaultProps = {
  _onClick: () => {},
}

export default SearchPreview;