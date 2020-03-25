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

class Table extends React.Component {
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
            <Columns items={items}/>
        );
    }
}

export default Table;

