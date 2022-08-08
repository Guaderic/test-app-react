    import styled from "styled-components";

    const PopupStyle = styled.div`
    position: fixed;
    z-index:2;
    top:0em;
    left:15em;
    width: 70%;
    height: 650px;
    border: 5px solid snow;
    border-radius: 10px;
    background: rgb(48,48,48);

    display: flex;
    justify-content: center;
    align-items: center;
    `
    const PopupInner = styled.div`
    position: fixed;
    z-index:2;
    padding: 32px;
    width: 100%;
    max-width: 640px;
  
    `

    export {
        PopupStyle,
        PopupInner,
    }