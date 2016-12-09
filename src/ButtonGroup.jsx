import classNames from 'classnames';
import React, { PropTypes } from 'react';
import styles from './index.styl';

const ButtonGroup = ({ className, btnSize, vertical, ...props }) => {
    return (
        <div
            {...props}
            className={classNames(
                className,
                styles['btn-group'],
                { [styles['btn-group-lg']]: btnSize === 'large' || btnSize === 'lg' },
                { [styles['btn-group-md']]: btnSize === 'medium' || btnSize === 'md' },
                { [styles['btn-group-sm']]: btnSize === 'small' || btnSize === 'sm' },
                { [styles['btn-group-xs']]: btnSize === 'extra-small' || btnSize === 'xs' },
                { [styles['btn-group-vertical']]: vertical }
            )}
        />
    );
};

ButtonGroup.propTypes = {
    btnSize: PropTypes.oneOf([
        'lg',
        'md',
        'sm',
        'xs',
        'large',
        'medium',
        'small',
        'extra-small'
    ]),
    vertical: PropTypes.bool
};
ButtonGroup.defaultProps = {
    btnSize: '', // Defaults to empty string
    vertical: false
};

export default ButtonGroup;
