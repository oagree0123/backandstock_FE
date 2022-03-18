import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileWrap, NicknameInput, ProfileInput, ProfileLabel, ProfileTitle, CompleteBtn } from "./style";

import { actionCreators as userActions } from "../../redux/modules/user";

const UserProfile = (props) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user_info);

  const [userNick, setUserNick] = useState(user?.nickname);
  const [file, setFile] = useState(null);
  const [objectURL, setObjectURL] = useState("");

  const changeNick = (e) => {
    if(e.target.value.length > 12 || e.target.value.length < 1) {
      window.alert("닉네임은 12글자 이하만 가능합니다.")
      return ;
    }
    setUserNick(e.target.value);
  }

  return (
    <UserProfileWrap>
      <ProfileTitle>닉네임</ProfileTitle>
      <NicknameInput 
        onChange={changeNick}
        value={userNick}
      />
      <ProfileLabel>
        <span>프로필 이미지 변경</span>
        <ProfileInput
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setObjectURL(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </ProfileLabel>
      <CompleteBtn
        onClick={()=>{
          dispatch(userActions.editUserDB(objectURL, userNick, file));
        }}
      >
        수정하기
      </CompleteBtn>
    </UserProfileWrap>
  );
};

export default UserProfile;
