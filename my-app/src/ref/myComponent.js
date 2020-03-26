import React from "react";

class MyComponent extends React.Component{
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    focusTextInput(){
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                {/*<input*/}
                {/*    type="button"*/}
                {/*    value="Focus the text input"*/}
                {/*    onClick={()=>this.focusTextInput()}*/}
                {/*/>*/}
            </div>
        );
    }

}

export default MyComponent;
