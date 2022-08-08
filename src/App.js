    import 'bootstrap/dist/css/bootstrap.min.css'
    import {Route, Routes} from "react-router-dom";

    import {MainLayout, BookingDates, Popup} from "./components";
    import {AppWrapper} from "./styled";


    const App = () => {
        return (
            <AppWrapper>
               <Routes>
                   <Route path={'/'} element={<MainLayout/>}>
                       <Route path={'booking'} element={<BookingDates/>}>
                           <Route path={':id'} element={<Popup/>}/>
                       </Route>
                   </Route>
               </Routes>
            </AppWrapper>
        );
    }

    export default App;
