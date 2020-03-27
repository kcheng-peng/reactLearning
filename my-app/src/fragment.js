import * as React from "react";

class Columns extends React.Component {

    render() {
        return (
            <dl>
            {this.props.items.map(item=>(
                    <React.Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    </React.Fragment>
            ))
            }
            </dl>
        );
    }
}

class Fragment extends React.Component {
    render() {
        const items = [{
            'id':'a',
            'term':'aa',
            'description':'aaa'
            },
            {
                'id':'b',
                'term':'ba',
                'description':'baa'
            },
            {
                'id':'c',
                'term':'ca',
                'description':'caa'
            }

        ];

        return (
            <div>
                <Columns items={items}/>
                {/*<li><Link to="/counter">Counter</Link></li>*/}
                {/*{this.props.children}*/}
            </div>
        );
    }
}

export default Fragment;

