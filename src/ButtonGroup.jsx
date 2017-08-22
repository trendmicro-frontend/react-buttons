import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import Button from './Button';
import {
    btnSizes,
    btnStyles
} from './constants';
import styles from './index.styl';

const ButtonGroup = ({ btnSize, btnStyle, vertical, dropdownOpen, children, className, ...props }) => {
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
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.type === Button) {
                    const childProps = {};
                    if (btnSizes.indexOf(btnSize) >= 0) {
                        childProps.btnSize = btnSize;
                    }
                    if (btnStyles.indexOf(btnStyle) >= 0) {
                        childProps.btnStyle = btnStyle;
                    }
                    return cloneElement(child, childProps);
                }

                return child;
            })}
        </div>
    );
};

ButtonGroup.propTypes = {
    btnSize: PropTypes.oneOf(btnSizes),
    btnStyle: PropTypes.oneOf(btnStyles),
    vertical: PropTypes.bool,

    // Apply styles for use in a Dropdown.
    // This prop will be set automatically when the ButtonGroup is used inside a Dropdown.
    dropdownOpen: PropTypes.bool
};
ButtonGroup.defaultProps = {
    btnSize: 'md',
    vertical: false,
    dropdownOpen: false
};

export default ButtonGroup;
