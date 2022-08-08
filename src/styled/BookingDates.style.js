    import styled from "styled-components";

    const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: #d0d1d0;
    margin-right: 10px;
    @media(max-width: 768px){
    grid-template-columns: 1fr
    }
    `

    export {
        Container
    }