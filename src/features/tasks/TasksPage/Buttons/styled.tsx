import styled from "styled-components";

export const StyledButtons = styled.div`
    @media (max-width: 767px) {
        display: grid;
    }
`;

export const StyledButton = styled.button`
    border: none;
    color: hsl(180, 100%, 25%);
    background: transparent;
    padding: 20px;
    transition: 0.5s;

    &:hover {
        color: hsl(180, 100%, 40%);
        cursor: pointer;
    }

    &:disabled {
        color: grey;
        cursor: auto;
    }

    @media (max-width: 767px){
        padding: 10px;
    }
`;