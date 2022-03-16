import React from 'react';
import CompareInfo from '../CompareInfo/CompareInfo';

const CompareRank = (props) => {
  const { compare_data, compare_item } = props;

  return (
    <>
      {compare_data &&
        <CompareInfo {...compare_data} compare_item={compare_item} />
      }
    </>
  );
};

export default CompareRank;