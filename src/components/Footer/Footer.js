import React from 'react';
import { Container, Wrap, Logo, Link, Imgwrap } from './style'
import logo from '../../assets/images/BACK-STOCK.svg'
import corp from '../../assets/images/footer_corp.svg'



const Footer = () => {
    return (
        <Container>
            <Wrap>
                <Link>
                    <Logo src={logo}></Logo>
                    <a target='_blank' href="https://docs.google.com/forms/d/1AM411fsh0aGXFYL3JygTiYlmO2z766eGEEVwk23ABlI/viewform?edit_requested=true">설문조사</a>
                    <a target='_blank' href="https://docs.google.com/forms/d/1UbMnKzM9fC6Wp_tuzpZ5_IdqC4o5zfuzdIOcnDqzIK8/viewform?edit_requested=true">버그제보</a>
                </Link>
                <Imgwrap>
                    <img src={corp}></img>
                </Imgwrap>
            </Wrap>
        </Container>
    );
};

export default Footer;