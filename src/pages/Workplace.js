import React from 'react';
import { Route, Link } from "react-router-dom"
import Money from "./workplace/Money";
import GetUp from "./workplace/GetUp";
function Workplace() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/workplace/mony">程序员加薪秘籍</Link>
                    </li>
                    <li>
                        <Link to="/workplace/getup">程序员早起秘籍</Link>
                    </li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>gaga</h3></div>
                <Route path="/workplace/mony" component={Money} />
                <Route path="/workplace/getup" component={GetUp} />
            </div>
        </div>
    )
}
export default Workplace;