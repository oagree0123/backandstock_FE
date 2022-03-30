import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: var(--secondary-color);
    margin-top: 150px;
    & a {
        color : #3A95FF;
        font-weight: 700;
        font-size: var(--font-medium);
        margin-right: 24px;
        border: none;
        text-decoration: none;
    }

`

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 880px;
    margin-left: 44px;
    
`
export const Link = styled.div`
    display: flex;
`

export const Imgwrap = styled.div`
    display: flex;
    

`
export const Logo = styled.img`
    width: 157px;
    height: 41x;
    margin: 0 32px 0 59px;
`