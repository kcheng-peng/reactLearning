import React from "react";

function Cat(props) {
    const mouse = props.mouse;
    return (
        <img src="../../public/logo192.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
}

export default Cat;