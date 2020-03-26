import React from "react";

//React.PureComponent 替代手写 shouldComponentUpdate
//浅比较props和state是否变化
//数据结构复杂，变化很深会被遗漏
class CounterButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count:1};
    }

    //通过比较props.color && state.count来决定是否渲染
    //返回false则会跳过整个render
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color){
            return true;
        }
        if (this.state.count !== nextState.count){
            return true;
        }
        return false;
    }

    handleClick(){
        this.setState(state=>({
            count: state.count+1,
        }))
    }

    render() {
        return(
            <button
                color={this.props.color}
                onClick={()=>this.handleClick()}>
                Count: {this.state.count}
            </button>
        )
    }

}

export default CounterButton;