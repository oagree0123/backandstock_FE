import React from 'react';

import { PreviewWrap, PreviewCode, PreviewName } from './style';

const SearchPreview = (props) => {
  const { _onClick } = props;

  return (
    <PreviewWrap onClick={_onClick}>
      <PreviewCode>{props.stock_code}</PreviewCode>
      <PreviewName>{props.stock_name}</PreviewName>
    </PreviewWrap>
  );
};

SearchPreview.defaultProps = {
  _onClick: () => {},
}

export default SearchPreview;