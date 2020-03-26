import React from "react";

//虽然并非与parent处于同一个dom节点
//但事件冒泡按照React树进行，依然位于parent之下
//无click事件则会冒泡到parent节点的onclick中
function Child() {
    return(
        <div>
            <button>Click</button>
        </div>
        )
}

export default Child;