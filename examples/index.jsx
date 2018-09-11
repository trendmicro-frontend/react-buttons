import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Example from './Example';

class App extends React.Component {
    render() {
        const name = 'React Buttons';
        const url = 'https://github.com/trendmicro-frontend/react-buttons';

        return (
            <div>
                <Nav name={name} url={url} />
                <Example />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
