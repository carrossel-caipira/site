import styled from "styled-components";
import Title from '../Title/index.jsx'
import SubTitle from "../SubTitle/index.jsx";

export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22.5rem;
    height: fit-content;
    padding: 3rem;

    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 2rem;

    & ${SubTitle} {
        margin-top: ${props => props.theme.margin_l};
        margin-bottom: ${props => props.theme.margin_m};
        height: .85em;
    }

    & img {
        aspect-ratio: 1;
        width: 80%;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: center;
    gap: 10vw;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        gap: 85px;
    }
`

export const About = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    & ${Title} {
        margin-bottom: ${props => props.theme.margin_xl}
    }

    font-size: 4.235rem;
`
    //margin-bottom: ${props => props.theme.margin_xxl}
