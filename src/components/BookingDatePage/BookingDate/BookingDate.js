import { useState} from "react";


import {Popup} from "../../Popup/Popup";
import { Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


const BookingDate = ({dates}) => {

    const {id, date, movies} = dates


    const [popup, setPopup] = useState(false)
    const [movieToPopup, setMovieToPopup] = useState({})



    // useEffect(() => {
    //     if (popup === true) {
    //         localStorage.setItem('data', JSON.stringify('hello'))
    //     }
    //
    // }, [popup])
    //
    // useEffect(() => {
    //     if (JSON.parse(localStorage.getItem('data'))) {
    //         setPopup(true)
    //     }
    // }, [localStorage])


    return (
        <div>

            <section className='py-4 py-lg-5 container'>
                <div className='row justify-content-center align-item-center'>
                    <div className=' mx-0 mb-4'>
                        <div className>
                            <div className='card-body '>
                                <h5 className='card-title'>Date</h5>
                                <h2 className='card-text'>{dates.date}</h2>

                                <ul>
                                    {movies && movies.map(movie =>
                                        <li key={movie.id}
                                            onClick={()=> setMovieToPopup(movie)}
                                            onDoubleClick={() => setPopup(true)}
                                            >

                                            <Nav.Link as={Link} to={movie.id.toString()}>
                                                {movie.original_title}
                                            </Nav.Link>
                                                {movie.session_time}</li>)}


                                </ul>
                                <Popup trigger={popup} setTrigger={setPopup} movie={movieToPopup}>
                                    <div>
                                        <img src={movieToPopup.poster_path} alt="poster"/>
                                        <h5>{movieToPopup.overview}</h5>
                                    </div>
                                    <button className='btn btn-sm btn-success'
                                            onClick={() => setPopup(false)}>Book
                                    </button>
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