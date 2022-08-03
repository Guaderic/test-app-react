import css from './Popup.module.css'



const Popup = (props) => {
    return (props.trigger) ? (
        <div >
                <div className={css.popup}>
                    <div className={css.popupInner}>
                        {props.children}
                        <br/>
                        <br/>

                        <button className='btn bg-danger btn-lg ' onClick={() => props.setTrigger(false)}>Close</button>
                    </div>
                </div>

            </div>
            ) : '';
            };

            export {Popup};