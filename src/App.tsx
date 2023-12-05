import React, {Suspense} from 'react';
import SquareApp from "./pages/home/SquareApp";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Suspense fallback={'404'}>
            <Routes>
                <Route path={'/'} element={<SquareApp/>}/>
            </Routes>
        </Suspense>
    );
}

export default App;
