import styled from "styled-components";

export const Wrap = styled.section`
  position: relative;
  width: 900px;
  padding: 0px 0px 70px;

  .slick-next:before {
    content: none;
  }
  .slick-next {
    width: 55px;
    height: 55px;
    position: absolute;
    top: 57%;
    right: -1%;
    transform: translate(50%, -50%);
    background: url("data:image/svg+xml,%3Csvg width='50' height='34' viewBox='0 0 25 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.3065 21.2869C24.7176 20.0888 24.7176 17.9112 23.3065 16.7131L5.44168 1.54507C3.4929 -0.109533 0.500002 1.27551 0.500002 3.83197L0.500003 34.168C0.500003 36.7245 3.4929 38.1095 5.44168 36.4549L23.3065 21.2869Z' fill='%230075FF'/%3E%3C/svg%3E")
      50% 50% no-repeat;
  }

  .slick-prev:before {
    content: none;
  }

  .slick-prev {
    width: 55px;
    height: 55px;
    position: absolute;
    top: 57%;
    left: -9%;
    transform: translate(50%, -50%);
    background: url("data:image/svg+xml,%3Csvg width='50' height='34' viewBox='0 0 25 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.63729 17.0977C0.258842 18.3332 0.317254 20.51 1.75998 21.6698L20.0253 36.3532C22.0177 37.9549 24.9724 36.4901 24.9038 33.9346L24.0901 3.60941C24.0215 1.05387 20.9925 -0.25039 19.0888 1.45589L1.63729 17.0977Z' fill='%230075FF'/%3E%3C/svg%3E%0A")
      50% 50% no-repeat;
  }
`;

export const Toptitle = styled.h2`
  position: absolute;
  font-size: var(--font-header);
  font-weight: 700;
  top: 0px;
  width: 300px;
`;

export const Test = styled.div`
  display: flex;
`;

export const CardWrap = styled.div`
  position: relative; ;
`;

export const Text = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #0075ff;
  position: absolute;
  top: 25px;
  left: 55px;
  width: 300px;
`;
