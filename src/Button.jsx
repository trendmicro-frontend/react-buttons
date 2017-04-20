import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './index.styl';

class Button extends PureComponent {
    static propTypes = {
        componentClass: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string
        ]),
        type: PropTypes.oneOf([
            'button',
            'reset',
            'submit'
        ]),
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
        btnStyle: PropTypes.oneOf([
            'default',
            'primary',
            'danger',
            'emphasis', // alias of "danger"
            'border',
            'flat',     // alias of "border"
            'link'
        ]),
        active: PropTypes.bool,
        hover: PropTypes.bool,
        focus: PropTypes.bool,
        disabled: PropTypes.bool,
        block: PropTypes.bool,
        iconOnly: PropTypes.bool,

        // Apply styles for use in a Dropdown.
        // This prop will be set automatically when the Button is used inside a Dropdown.
        dropdownToggle: PropTypes.bool
    };

    static defaultProps = {
        componentClass: 'button',
        type: 'button',
        btnSize: 'md',
        btnStyle: 'default',
        active: false,
        hover: false,
        focus: false,
        disabled: false,
        block: false,
        iconOnly: false,
        dropdownToggle: false
    };

    render() {
        const {
            className,
            componentClass: Component,
            type,
            btnSize,
            btnStyle,
            active,
            hover,
            focus,
            disabled,
            block,
            iconOnly,
            dropdownToggle,
            ...props
        } = this.props;

        const classes = {
            [styles.btn]: true,
            [styles.btnLg]: btnSize === 'large' || btnSize === 'lg',
            [styles.btnMd]: btnSize === 'medium' || btnSize === 'md',
            [styles.btnSm]: btnSize === 'small' || btnSize === 'sm',
            [styles.btnXs]: btnSize === 'extra-small' || btnSize === 'xs',
            [styles.btnDefault]: btnStyle === 'default',
            [styles.btnPrimary]: btnStyle === 'primary',
            [styles.btnDanger]: btnStyle === 'danger' || btnStyle === 'emphasis',
            [styles.btnBorder]: btnStyle === 'border' || btnStyle === 'flat',
            [styles.btnLink]: btnStyle === 'link',
            [styles.btnBlock]: block,
            [styles.btnIconOnly]: iconOnly,
            [styles.hover]: hover,
            [styles.active]: active,
            [styles.focus]: focus,
            [styles.dropdownToggle]: dropdownToggle
        };

        return (
            <Component
                {...props}
                type={type}
                className={classNames(className, classes)}
                disabled={disabled}
            />
        );
    }
}

export default Button;
