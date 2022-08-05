    import styled from "styled-components";

    const PopupStyle = styled.div`
    position: fixed;
    top:0em;
    left:15em;
    width: 70%;
    height: 650px;
    border: 2px solid dodgerblue;
    border-radius: 10px;
    background: slategrey;

    display: flex;
    justify-content: center;
    align-items: center;
    `
    const PopupInner = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
  
    `

    export {
        PopupStyle,
        PopupInner,
    }