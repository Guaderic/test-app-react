import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import {NaviBar} from "./components/NaviBar";

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
background: cornflowerblue
`

const App = () => {
    return (
        <AppWrapper>
            <NaviBar/>
        </AppWrapper>
    );
}

export default App;
