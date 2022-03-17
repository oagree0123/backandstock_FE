import React from 'react';
import CompareInfo from '../CompareInfo/CompareInfo';

const CompareRank = (props) => {
  const { compare_data, port_list } = props;

  return (
    <>
      {compare_data &&
        <CompareInfo {...compare_data} port_list={port_list} />
      }
    </>
  );
};

export default CompareRank;