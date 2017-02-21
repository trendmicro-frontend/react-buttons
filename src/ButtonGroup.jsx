import classNames from 'classnames';
import React, { PropTypes } from 'react';
import styles from './index.styl';

const ButtonGroup = ({ className, btnSize, vertical, dropdownOpen, ...props }) => {
    const classes = {
        [styles.btnGroup]: true,
        [styles.btnGroupLg]: btnSize === 'large' || btnSize === 'lg',
        [styles.btnGroupMd]: btnSize === 'medium' || btnSize === 'md',
        [styles.btnGroupSm]: btnSize === 'small' || btnSize === 'sm',
        [styles.btnGroupXs]: btnSize === 'extra-small' || btnSize === 'xs',
        [styles.btnGroupVertical]: vertical,
        [styles.open]: dropdownOpen
    };
    return (
        <div
            {...props}
            className={classNames(className, classes)}
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
    vertical: PropTypes.bool,

    // Apply styles for use in a Dropdown.
    // This prop will be set automatically when the ButtonGroup is used inside a Dropdown.
    dropdownOpen: PropTypes.bool
};
ButtonGroup.defaultProps = {
    vertical: false,
    dropdownOpen: false
};

export default ButtonGroup;
