import styled from 'styled-components';


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
    
`

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