import React from "react";

class ListOfWords extends React.Component {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}

class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //如果ListOfWords使用pureComponent
    //此处事件处理改变的是同一个words数组
    //浅比较并不能判断到数组内部的变化
    //ListOfWords不会更新
    handleClick() {
        const words = this.state.words;
        words.push('marklar');
        this.setState({words: words});

        //避免更改正使用的值,例如：
        //this.setState(state => ({
        //     words: state.words.concat(['marklar']) 此处state.words未改变
        //   }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} />
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}

export default WordAdder;
