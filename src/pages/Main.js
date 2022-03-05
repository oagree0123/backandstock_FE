import React from 'react';
import { useHistory } from 'react-router-dom';


const Main = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push('/community')}>커뮤니티로 이동</button>
      <h1>메인페이지</h1>
    </div>
  );
};

export default Main;