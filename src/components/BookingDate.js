    import {useEffect, useState} from "react";
    import { Nav} from 'react-bootstrap';
    import {Link} from'react-router-dom';

    import {Popup} from './Popup';
    import {ImagePopup, ListOfMovies, ParagraphPopup, Poster} from "../styled";


    const BookingDate = ({dates}) => {
        const { movies, status} = dates
        const [popup, setPopup] = useState(false)
        const [movieToPopup, setMovieToPopup] = useState({})
        // useEffect(() => {
        //     if (popup === true) {
        //         localStorage.setItem('movie', JSON.stringify('hello'))
        //     }
        //
        // }, [popup])
        //
        // useEffect(() => {
        //     if (JSON.parse(localStorage.getItem('movie'))) {
        //         setPopup(true)
        //     }
        // }, [localStorage])
        return (
            <div>
                <section className='py-4 py-lg-5 container '>
                        <div className='row justify-content-center align-item-center'>
                            <div className=' mx-0 mb-4'>
                                <div className>
                                    <div className='card-body '>
                                        <h5 className='card-title'>Date</h5>
                                        <h2 className='card-text'>{dates.date}</h2>
                                        <div className='card'>
                                        <ul className='list-group list-group-flush'>
                                             {movies && movies.map(movie => <ListOfMovies className='list-group-item bg-dark text-light border-light' key={movie.id}
                                                onClick={() => setMovieToPopup(movie)}
                                                onDoubleClick={() => setPopup(true)}>

                                                <Nav.Link as={Link} to={movie.id.toString()}>
                                                    {movie.original_title}
                                                </Nav.Link>{movie.session_time} <Poster src={movie.poster_path} alt="poster"/></ListOfMovies>)}
                                        </ul>
                                        </div>
                                        <Popup trigger={popup} setTrigger={setPopup} movie={movieToPopup}>
                                            <div>
                                                <ImagePopup src={movieToPopup.poster_path} alt='poster'/>
                                                <ParagraphPopup>{movieToPopup.overview}</ParagraphPopup>
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