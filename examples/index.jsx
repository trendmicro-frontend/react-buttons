import React from 'react';
import ReactDOM from 'react-dom';
import ButtonStyles from './ButtonStyles';
import ButtonSizes from './ButtonSizes';
import FullWidthButtons from './FullWidthButtons';
// import ButtonStates from './ButtonStates';

class App extends React.Component {
    // <div className="col-sm-4">
    //     <ButtonStates />
    // </div>
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <ButtonStyles />
                </div>
                <div className="col-sm-12 col-md-6">
                    <ButtonSizes />
                </div>
                <div className="col-sm-12 col-md-6">
                    <FullWidthButtons />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
