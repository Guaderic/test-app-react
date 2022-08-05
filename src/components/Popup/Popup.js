import css from './Popup.module.css';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";






const Popup = (props) => {





    return (props.trigger) ? (

        <div>
                <div className={css.popup}>
                    <div className={css.popupInner}>
                        {props.children}
                        <br/>
                        <br/>

                        <button className='btn bg-danger btn-lg '
                                onClick={() => props.setTrigger(false)}>
                            <Nav.Link as={Link} to={''}>Close</Nav.Link>
                        </button>
                    </div>
                </div>

            </div>
            ) : '';
            };

            export {Popup};