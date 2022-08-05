import {BookingDate} from "./BookingDate";
import {Container} from "../styled";

import testData from '../test.data.json'

const BookingDates = () => {
    return (
        <Container>
            {testData && testData.map(dates => <BookingDate key={dates.id} dates={dates}/>)}
        </Container>
    );
};

export {BookingDates};