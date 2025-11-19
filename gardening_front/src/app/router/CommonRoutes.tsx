import {Route, Routes} from "react-router-dom";
import {lazy} from "react";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const ScheduleRoutes = lazy(() => import("./ScheduleRoutes"));
const BoardRoutes = lazy(() => import("./BoardRoutes"));

export function CommonRoutes() {
    return (
            <Routes>
                <Route path="/schedule" element={<ScheduleRoutes/>}/>
                <Route path="/board" element={<BoardRoutes/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
    );
}