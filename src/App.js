import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import {MainLayout} from "./components/Layouts/MainLayout";
import {Route, Routes} from "react-router-dom";
import {BookingDates} from "./components/BookingDatePage/BookingDates/BookingDates";

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
background: rgb(62,58,180);
background: linear-gradient(90deg, rgba(62,58,180,1) 0%, rgba(253,29,29,1) 80%, rgba(252,176,69,1) 100%);
`

const App = () => {
    return (
        <AppWrapper>
           <Routes>
               <Route path={'/'} element={<MainLayout/>}>
                   <Route path={'booking'} element={<BookingDates/>}/>
               </Route>
           </Routes>
        </AppWrapper>
    );
}

export default App;
