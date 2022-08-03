
import {useState} from "react";
import {Nav} from 'react-bootstrap'


import css from './BokkingDate.module.css'
import {Popup} from "../../Popup/Popup";

const BookingDate = () => {



    const [popup, setPopup] = useState(false)
    return (
        <div className={css.container}>

                 <section className='py-4 py-lg-5 container'>
                    <div className='row justify-content-center align-item-center'>
                        <div className=' mx-0 mb-4'>
                            <div className>
                                <div className='card-body '>
                                    <h5 className='card-title'>Date</h5>
                                    <h2 className='card-text'>29.04</h2>
                                    <button className='btn btn-primary' onClick={()=>setPopup(true)}>
                                        Get Details</button>
                                    <Popup trigger={popup} setTrigger={setPopup}>
                                        <Nav.Item>dakjdh</Nav.Item>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>second Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>third Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>fourth Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                    </Popup>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                  <section className='py-4 py-lg-5 container'>
                    <div className='row justify-content-center align-item-center'>
                        <div className=' mx-0 mb-4'>
                            <div>
                                <div className='card-body justify-content-center align-item-center'>
                                    <h5 className='card-title'>Date</h5>
                                    <h2 className='card-text'>30.04</h2>
                                    <button className='btn btn-primary' onClick={()=>setPopup(true)}>
                                        Get Details</button>
                                    <Popup trigger={popup} setTrigger={setPopup}>
                                        <h4>first Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>second Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>third Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>fourth Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                    </Popup>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                  <section className='py-4 py-lg-5 container'>
                    <div className='row justify-content-center align-item-center'>
                        <div className=' mx-0 mb-4'>
                            <div>
                                <div className='card-body justify-content-center align-item-center'>
                                    <h5 className='card-title'>Date</h5>
                                    <h2 className='card-text'>31.04</h2>
                                    <button className='btn btn-primary' onClick={()=>setPopup(true)}>
                                        Get Details</button>
                                    <Popup trigger={popup} setTrigger={setPopup}>
                                        <h4>first Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>second Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>third Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>fourth Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                    </Popup>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                  <section className='py-4 py-lg-5 container'>
                    <div className='row justify-content-center align-item-center'>
                        <div className=' mx-0 mb-4'>
                            <div>
                                <div className='card-body justify-content-center align-item-center'>
                                    <h5 className='card-title'>Date</h5>
                                    <h2 className='card-text'>01.05</h2>
                                    <button className='btn btn-primary' onClick={()=>setPopup(true)}>
                                        Get Details</button>
                                    <Popup trigger={popup} setTrigger={setPopup}>
                                        <h4>first Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>second Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>third Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>fourth Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                    </Popup>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                  <section className='py-4 py-lg-5 container'>
                    <div className='row justify-content-center align-item-center'>
                        <div className=' mx-0 mb-4'>
                            <div>
                                <div className='card-body justify-content-center align-item-center'>
                                    <h5 className='card-title'>Date</h5>
                                    <h2 className='card-text'>02.05</h2>
                                    <button className='btn btn-primary' onClick={()=>setPopup(true)}>
                                        Get Details</button>
                                    <Popup trigger={popup} setTrigger={setPopup}>
                                        <h4>first Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>second Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>third Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                        <h4>fourth Movie</h4>
                                        <button className='btn btn-sm btn-success'>Book</button>
                                    </Popup>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>



        </div>
    );
};

export {BookingDate};