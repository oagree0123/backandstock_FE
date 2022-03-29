import React from "react";
import {
  TestInfoModalWrap,
  TestInfoTitle,
  ModalHeader,
  CloseBtn,
  InfoSection,
  SectionTitle,
  SectionDesc,
  SectionImg,
} from "./style";
import CloseSvg from "../../assets/images/close_btn.svg";
import Step1 from "../../assets/images/guide/step1.PNG";
import Step2 from "../../assets/images/guide/step2.PNG";
import Step3 from "../../assets/images/guide/step3.PNG";

const TestInfoModal = (props) => {
  return (
    <TestInfoModalWrap>
      <ModalHeader>
        <TestInfoTitle>실험 방법</TestInfoTitle>
        <CloseBtn
          src={CloseSvg}
          alt="close_btn"
          onClick={() => {
            props.modal_open(false);
          }}
        />
      </ModalHeader>
      <InfoSection>
        <SectionTitle>STEP 1</SectionTitle>
        <SectionDesc>
          실험의 시작날짜와 종료날짜를 선택하고, <br />
          실험 금액을 입력합니다.
        </SectionDesc>
        <SectionImg src={Step1} />
      </InfoSection>
      <InfoSection>
        <SectionTitle>STEP 2</SectionTitle>
        <SectionDesc>
          실험하고 싶은 종목을 검색하고 <br />
          종목의 비율을 입력한 후 추가 버튼을 누릅니다.
        </SectionDesc>
        <SectionImg src={Step2} />
      </InfoSection>
      <InfoSection>
        <SectionTitle>STEP 3</SectionTitle>
        <SectionDesc>
          추가된 종목을 확인하고, 자산 비율의 합이 100%가 <br />
          되었으면 실험 시작하기를 누릅니다.
        </SectionDesc>
        <SectionImg src={Step3} />
      </InfoSection>
    </TestInfoModalWrap>
  );
};

export default TestInfoModal;
