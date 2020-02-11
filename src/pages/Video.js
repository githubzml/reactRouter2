import React from 'react';
import { Route, Link } from "react-router-dom"
import ReactPage from "./video/ReactPage";
import Flutter from "./video/Flutter";
import Vue from "./video/Vue";
function Video() {
    return (
        <div>
            <div class="topNav">
                <ul>
                    <li>
                        <Link to="/video/reactpage">React</Link>
                    </li>
                    <li>
                        <Link to="/video/flutter">Flutter</Link>
                    </li>
                    <li>
                        <Link to="/video/vue">Vue</Link>
                    </li>
                </ul>
            </div>
            <div class="videoContent">
                <div><h3>视屏教程</h3></div>
                <Route path="/video/reactpage" component={ReactPage} />
                <Route path="/video/flutter" component={Flutter} />
                <Route path="/video/vue" component={Vue} />
            </div>
        </div>
    )
}
export default Video;