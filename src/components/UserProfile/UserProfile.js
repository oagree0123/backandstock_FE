import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserProfileWrap,
  NicknameInput,
  ProfileInput,
  ProfileLabel,
  ProfileTitle,
  CompleteBtn,
} from "./style";

import { actionCreators as userActions } from "../../redux/modules/user";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const UserProfile = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user_info);

  const [userNick, setUserNick] = useState(user?.nickname);
  const [file, setFile] = useState(null);
  const [objectURL, setObjectURL] = useState("");

  const changeNick = (e) => {
    if (e.target.value.length > 8 || e.target.value.length < 0) {
      MySwal.fire({
        title: "닉네임은 8글자 이하만 가능합니다.",
        confirmButtonColor: '#0075FF',
      });
      return;
    }
    setUserNick(e.target.value);
  };

  return (
    <UserProfileWrap>
      <ProfileTitle>닉네임</ProfileTitle>
      <NicknameInput onChange={changeNick} value={userNick} />
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
        onClick={() => {
          if(userNick.length === 0) {
            MySwal.fire({
              title: "닉네임을 입력해주세요.",
              confirmButtonColor: '#0075FF',
            });
            return;
          }
          dispatch(userActions.editUserDB(objectURL, userNick, file));
          props.setProfileClicked(false);
          setFile(null);
        }}
      >
        수정하기
      </CompleteBtn>
    </UserProfileWrap>
  );
};

export default UserProfile;