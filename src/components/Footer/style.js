import styled from 'styled-components';


export const Container = styled.footer`
    display: flex;
    width: 100vw;
    height: 85px;
    background-color: var(--secondary-color);

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
    margin-left: 56px;
    
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
    margin: 0 32px 0  0px;
`