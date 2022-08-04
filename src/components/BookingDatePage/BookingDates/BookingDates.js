import {BookingDate} from "../BookingDate/BookingDate";
import testData from '../../../test.data.json'
import css from './BookingDates.module.css'

const BookingDates = () => {




    return (
        <div className={css.container}>
            {testData && testData.map(dates => <BookingDate key={dates.id} dates={dates}/>)}
        </div>
    );
};

export {BookingDates};