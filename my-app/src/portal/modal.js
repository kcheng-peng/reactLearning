import React from "react";
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById("modalRoot");

class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    //此处挂载到了modalRoot
    //不是parent所在的root节点
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }

}

export default Modal;