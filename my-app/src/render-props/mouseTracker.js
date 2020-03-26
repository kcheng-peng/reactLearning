import React from "react";
import Mouse from "./mouse";
import Cat from "./cat";

function MouseTracker() {
    return(
        <div>
            <h1>移动鼠标!</h1>
            <Mouse render={mouse => (
                <Cat mouse={mouse} />
            )}/>
        </div>
    );
}

export default MouseTracker;