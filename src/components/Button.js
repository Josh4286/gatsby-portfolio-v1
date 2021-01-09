import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Button = styled(LinkS)`
    background: ${({primary}) => (primary?'#f26A2E' : '#077BF1')};
    white-space: nowrap;
    padding: ${({big}) => (big?'16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({big}) => (big?'20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px' : '10px')};

    &:hover{
        background: ${({primary}) => (primary?'#077BF1' : '#f26A2E')};
        // transform: translateY(-2px);
    }
`       