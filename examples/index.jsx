import React from 'react';
import ReactDOM from 'react-dom';
import ButtonStyles from './ButtonStyles';
import ButtonSizes from './ButtonSizes';
import FullWidthButtons from './FullWidthButtons';
import ButtonStates from './ButtonStates';
import ButtonGroup from './ButtonGroups';
import IconButtons from './IconButtons';
import DropdownButtons from './DropdownButtons';

class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <ButtonStyles />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ButtonSizes />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <FullWidthButtons />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ButtonStates />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ButtonGroup />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <IconButtons />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <DropdownButtons />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
