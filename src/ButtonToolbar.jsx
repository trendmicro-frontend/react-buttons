import classNames from 'classnames';
import React from 'react';
import styles from './index.styl';

const ButtonToolbar = ({ className, ...props }) => {
    return (
        <div
            {...props}
            className={classNames(
                className,
                styles['btn-toolbar']
            )}
        />
    );
};

export default ButtonToolbar;
