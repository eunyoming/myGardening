import {Route, Routes} from "react-router-dom";
import {lazy} from "react";

const BoardPage = lazy(() => import("@/pages/board/BoardPage"));
const DetailBoard = lazy(() => import("@/pages/board/DetailBoard"));
const WriteBoard = lazy(() => import("@/pages/board/WriteBoard"));

export default function ScheduleRoutes(){
    return (
        <Routes>
            <Route path="/" element={<BoardPage/>}/>
            <Route path="/detail" element={<DetailBoard/>}/>
            <Route path="/write" element={<WriteBoard/>}/>
        </Routes>
    );
}