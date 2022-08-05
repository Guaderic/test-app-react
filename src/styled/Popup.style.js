    import styled from "styled-components";

    const PopupStyle = styled.div`
    position: fixed;
    top:3em;
    left:15em;
    width: 50%;
    height: 600px;
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

    const ParagraphPopup = styled.p`
    width:400px;

    `
    const ImagePopup = styled.img`
    width:150px;
    `
    export {
        ParagraphPopup,
        PopupStyle,
        PopupInner,
        ImagePopup
    }