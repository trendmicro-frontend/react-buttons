import classNames from 'classnames';
import React, { PropTypes } from 'react';
import ButtonDropdown from './ButtonDropdown';
import styles from './index.styl';

const Button = (props) => {
    const {
        className,
        componentClass,
        type,
        btnSize,
        btnStyle,
        active,
        hover,
        focus,
        disabled,
        block,
        iconOnly,
        dropdown,
        ...others
    } = props;
    const Component = componentClass;

    if (dropdown) {
        return <ButtonDropdown {...props} />;
    }

    return (
        <Component
            {...others}
            type={type}
            className={classNames(
                className,
                styles.btn,
                { [styles['btn-lg']]: btnSize === 'large' || btnSize === 'lg' },
                { [styles['btn-md']]: btnSize === 'medium' || btnSize === 'md' },
                { [styles['btn-sm']]: btnSize === 'small' || btnSize === 'sm' },
                { [styles['btn-xs']]: btnSize === 'extra-small' || btnSize === 'xs' },
                { [styles['btn-default']]: btnStyle === 'default' },
                { [styles['btn-primary']]: btnStyle === 'primary' },
                { [styles['btn-danger']]: btnStyle === 'danger' || btnStyle === 'emphasis' },
                { [styles['btn-border']]: btnStyle === 'border' || btnStyle === 'flat' },
                { [styles['btn-link']]: btnStyle === 'link' },
                { [styles['btn-block']]: block },
                { [styles['btn-icon-only']]: iconOnly },
                { [styles.hover]: hover },
                { [styles.active]: active },
                { [styles.focus]: focus }
            )}
            disabled={!!disabled}
        />
    );
};

Button.propTypes = {
    componentClass: PropTypes.oneOfType([
        PropTypes.element,
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
    dropdown: PropTypes.bool
};

Button.defaultProps = {
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
    dropdown: false
};

export default Button;
