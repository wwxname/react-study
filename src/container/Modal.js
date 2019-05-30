import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LoginForm from "./LoginForm";

class Modal extends Component {
    constructor(props) {
        super(props);
        // 根节点下创建一个div节点
        this.container = document.createElement("div");
        document.body.appendChild(this.container);
    }

    componentWillUnmount() {
        document.body.removeChild(this.container)
    }

    render() {
// 创建的DOM树挂载到this.container指向的div节点下面
        return ReactDOM.createPortal(
            <div className="modal">
                <span className="close" onClick=
                    {this.props.onClose}>
                &times;
                </span>
                <div  hidden={false} className="content">
                    {this.props.children}
                </div>
            </div>,
            this.container
        );
    }

}

export default Modal