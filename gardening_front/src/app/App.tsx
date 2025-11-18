import {Header} from "@/widgets/header/Header.tsx";
import {BrowserRouter} from "react-router-dom";
import {CommonRoutes} from '@/app/router/index.js';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <CommonRoutes/>
        </BrowserRouter>
    )
}

export default App
