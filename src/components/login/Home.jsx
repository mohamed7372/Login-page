import Login from "./Login";
import Signup from "./Signup";
import '../../styles/Login.css'

import { useState } from 'react';

function Home() {
    const [page, setPage] = useState(0);
    return (
        <div className="login">
            {page == 0 && <Login setPage={setPage}/> }
            { page == 1 && <Signup setPage={setPage}/> }
            <div className="img">
                <div><div className="circle cir1"></div></div>
                <div><div className="circle cir2"></div></div>
            </div>
        </div>
    );
}

export default Home;