import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import styles from './index.styl';
import ButtonDropdown from './ButtonDropdown';

class Button extends Component {

    renderButton () {
        const {
            type = 'button',
            children,
            className,
            componentClass,
            hover,
            active,
            focus,
            disabled,
            block,
            iconOnly,
            btnSize,
            btnStyle,
            ...others
        } = this.props;
        const Component = componentClass || 'button';

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
            >
                {children}
            </Component>
        );
    }

    renderDropdown () {
        return (<ButtonDropdown {...this.props} />);
    }

    render () {
        return this.props.dropdown ? this.renderDropdown() : this.renderButton();
    }

}

Button.propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
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
    componentClass: PropTypes.element,
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    hover: PropTypes.bool,
    iconOnly: PropTypes.bool,
    type: PropTypes.oneOf([
        'button',
        'reset',
        'submit'
    ]),

    /* following propTypes for dropdown */
    dropdown: PropTypes.bool,
    dropdownStyle: PropTypes.oneOf([
        'single',
        'split',
        'text'
    ]),
    value: PropTypes.any,           // initial field value
    options: PropTypes.array,       // array of options
    placeholder: PropTypes.string,  // field placeholder, displayed when there's no value
    fixedWidth: PropTypes.bool,     // the width of dropdown and menu are consistent
    customedValueRenderer: React.PropTypes.func,    // customedValueRenderer: function (option) {}
    customedOptionRenderer: React.PropTypes.func,   // renders a custom menu with options
    onChange: PropTypes.func       // onChange handler: function (newValue) {}
};
Button.defaultProps = {
    hover: false,
    active: false,
    focus: false,
    disabled: false,
    block: false,
    dropdown: false,
    iconOnly: false,
    btnSize: 'md',
    btnStyle: 'default'
};

export default Button;
