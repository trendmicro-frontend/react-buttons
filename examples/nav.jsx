import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

export default class extends Component {
    static propTypes = {
        name: PropTypes.string,
        url: PropTypes.string
    };

    state = {
        collapseIn: false
    };

    render() {
        const { name, url } = this.props;

        return (
            <nav className="navbar navbar-default" style={{ borderRadius: 0 }}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            onClick={() => {
                                this.setState({ collapseIn: !this.state.collapseIn });
                            }}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand">{name}</a>
                    </div>
                    <div
                        className={classNames(
                            'collapse',
                            'navbar-collapse',
                            { 'in': this.state.collapseIn }
                        )}
                    >
                        <div className="nav navbar-right">
                            <a
                                className="btn btn-default navbar-btn"
                                href={url}
                            >
                                <i className="fa fa-github fa-fw" style={{ fontSize: 16 }} />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
