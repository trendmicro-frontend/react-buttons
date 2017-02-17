import classNames from 'classnames';
import React, { PropTypes } from 'react';
import styles from './index.styl';

const ButtonGroup = ({ className, btnSize, vertical, ...props }) => {
    const classes = {
        [styles.btnGroup]: true,
        [styles.btnGroupLg]: btnSize === 'large' || btnSize === 'lg',
        [styles.btnGroupMd]: btnSize === 'medium' || btnSize === 'md',
        [styles.btnGroupSm]: btnSize === 'small' || btnSize === 'sm',
        [styles.btnGroupXs]: btnSize === 'extra-small' || btnSize === 'xs',
        [styles.btnGroupVertical]: vertical
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
    vertical: PropTypes.bool
};
ButtonGroup.defaultProps = {
    btnSize: 'md', // Defaults to medium size
    vertical: false
};

export default ButtonGroup;
