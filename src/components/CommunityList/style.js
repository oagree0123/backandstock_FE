import styled from 'styled-components';


export const Wrap = styled.div`
  width: 922px;
  padding: 0px 0px 70px;
  margin-top: 52px;
`

export const Toptitle = styled.span`
    font-size: var(--font-header);
    font-weight: 700;

`

// Card
export const Card = styled.div`
  width: 280px;
  height: 305px;
  background-color: #ECF5FF;
  border-radius: 10px;
`

export const UserName = styled.span`
    color: var(--font-blue);
    font-size: var(--font-large);
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 156px;
    height: 23px;

    margin: 20px 0 10px 22px;
`

export const CommmunityListWrap = styled.div`
  width: 880px;
  height: 508px;
`;

export const CommmunityList = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

//CommunityTop
export const Box = styled.div`
    width: 166px;
    height: 213px;
    border: 1.5px solid #0075FF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 24px;
    :not(:last-child) {
        margin-right: 5px;
    }
    >div {
      margin: 16px 8px 12px 24px;
    }
    & span {
      font-size: 28px;
      font-weight: 700;
      color:var(--font-blue);
    }
    & p {
      font-size: var(--font-main);
      font-weight: 700;
      margin: 12px 0px 4px 0px;
    }
      > p {
        font-size: var(--font-small);
        font-weight: 700;
        margin-bottom: 31px;
      }

  > span {
      /* margin: 0 5 24px 24px ; */
      font-size: 28px;
      font-weight: 700;
      color:var(--font-blue);
  }    
  
    
`
