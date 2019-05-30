import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4],
            // current: 1

        };
    }

    handleClick(item, event) {
        this.setState({
            current: item
        });
    }

    render() {
        return (
            <ul>{

                this.state.list.map((item) => (

                    (<li key={item} className={
                        this.state.current === item ? 'current' : ''
                    } onClick={this.handleClick.bind(this, item)}>
                        {item}
                    </li>)
                ))

            }</ul>
        );
    }


}


export default MyComponent;