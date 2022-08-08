    import {Button, Nav} from 'react-bootstrap';
    import {Link} from 'react-router-dom';



    import {PopupInner, PopupStyle} from "../styled";

    const Popup = (props) => {
        return (props.trigger) ? (
            <div>
                <PopupStyle>
                 <PopupInner>
                     {props.children}
                     <br/>
                        <br/>
                        <Button className='btn bg-danger btn-lg '
                                onClick={() => props.setTrigger(false)}>
                            <Nav.Link as={Link} to={''}>Close</Nav.Link>
                        </Button>
                    </PopupInner>
                </PopupStyle>
            </div>) : '';
    };


    export {Popup};