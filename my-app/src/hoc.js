import React from "react";


function withSubscription(WrappedComponent,selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource,props)
            };
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange(){
            this.setState({
                data: selectData(DataSource,this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props}/>
        }
    }
}

const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);

