import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import styles from './index.styl';
import ButtonGroup from './ButtonGroup';

class ButtonDropdown extends Component {

    state = this.getDefaultState();

    actions = {
        dropdown: {
            handleKeyDown: (e) => {
                if (!this.props.dropdown || this.props.disabled) {
                    return;
                }
                const { isOpen } = this.state;
                switch (e.keyCode) {
                case 13: // enter
                    if (!isOpen) {
                        return;
                    }
                    this.selectValue(this.state.focusedOption);
                    break;
                case 27: // escape
                    if (isOpen) {
                        this.closeMenu();
                    }
                    break;
                case 38: // up
                    this.focusPreviousOption();
                    break;
                case 40: // down
                    this.focusNextOption();
                    break;
                default:
                    return;
                }
                e.stopPropagation();
                e.preventDefault();
                this.focusButton();
            },
            handleMouseDown: (e) => {
                if (!this.props.dropdown || this.props.disabled) {
                    return;
                }
                this.setState({
                    isOpen: !this.state.isOpen
                }, () => {
                    if (this.state.isOpen) {
                        this.focusAdjacentOption();
                    }
                    this.focusButton();
                });
                // prevent default event handlers
                e.stopPropagation();
                e.preventDefault();
            },
            handleBlur: (e) => {
                if (!this.props.dropdown || this.props.disabled) {
                    return;
                }
                this.closeMenu();
            }
        },
        menu: {
            handleOptionChanged: (e) => {
                const el = e.currentTarget;
                const index = el.dataset.key;
                const selectedOption = this.state.options[index];
                this.selectValue(selectedOption);
                e.stopPropagation();
                e.preventDefault();
            },
            handleMouseEnter: (e) => {
                this.focusOption(e);
            },
            handleMouseMove: (e) => {
                this.focusOption(e);
            }
        }
    };

    componentDidMount() {
        const {
            dropdown,
            fixedWidth,
            dropdownStyle
        } = this.props;

        if (dropdown && fixedWidth) {
            const {
                btnDropdown,
                menu,
                caret
            } = this.refs;
            const dropdownWidth = btnDropdown.parentElement.offsetWidth;
            let menuWidth = menu.offsetWidth;
            let caretWidth = (dropdownStyle === 'split' ? btnDropdown.offsetWidth : caret.offsetWidth);
            let newWidth = 0;

            menuWidth += caretWidth;
            if (menuWidth > dropdownWidth) {
                newWidth = menuWidth;
            } else if (dropdownWidth > menuWidth) {
                newWidth = dropdownWidth;
            }
            if (newWidth > 0) {
                this.resize({
                    width: newWidth
                });
            }
            this.setState({
                isReady: true
            });
        }
    }

    resize(size) {
        if (!size) {
            return;
        }
        this.refs.btnDropdown.parentElement.style.width = `${size.width}px`;
        this.refs.menu.style.width = `${size.width}px`;
    }

    getDefaultState () {
        const {
            value,
            dropdown,
            options,
            fixedWidth
        } = this.props;
        let focusedOption;
        let initItems;
        if (dropdown && !_.isEmpty(options)) {
            let isChecked;
            // Get default selected option(s) for renderValue function
            initItems = _.map(options, (option, i) => {
                isChecked = (option.value === value);
                const tempObj = {
                    value: option.value,
                    label: option.label,
                    id: _.uniqueId('option_item_'),
                    checked: isChecked
                };
                return tempObj;
            });
            focusedOption = _.find(initItems, ['checked', true]);
        }

        return {
            isOpen: false,
            focusedOption: focusedOption,
            options: initItems,
            isReady: !fixedWidth    // 'isReady' will affect initialization display of menu
        };
    }

    closeMenu () {
        this.setState({
            isOpen: false
        });
    }

    focusButton () {
        this.refs.btnDropdown.focus();
    }

    focusOption (event) {
        const index = event.currentTarget.dataset.key;
        const option = this.props.options[index];
        this.setState({
            focusedOption: option
        });
        event.stopPropagation();
        event.preventDefault();
    }

    focusNextOption () {
        this.focusAdjacentOption('next');
    }

    focusPreviousOption () {
        this.focusAdjacentOption('previous');
    }

    focusAdjacentOption (dir) {
        const options = this.state.options;
        const { focusedOption, isOpen } = this.state;
        if (!isOpen) {
            this.setState({
                isOpen: true,
                focusedOption: focusedOption || options[dir === 'next' ? 0 : options.length - 1]
            });
            return;
        }
        if (_.isEmpty(options)) {
            return;
        }
        let focusedIndex = -1;
        focusedIndex = _.findIndex(options, focusedOption);

        if (dir === 'next' && focusedIndex !== -1) {
            focusedIndex = (focusedIndex + 1) % options.length;
        } else if (dir === 'previous') {
            if (focusedIndex > 0) {
                focusedIndex--;
            } else {
                focusedIndex = options.length - 1;
            }
        }

        if (focusedIndex === -1) {
            focusedIndex = 0;
        }
        this.setState({
            focusedOption: options[focusedIndex]
        });
    }

    getOptionLabel (option) {
        return option.label;
    }

    getSelectedOptions() {
        return _.filter(this.state.options, ['checked', true]);
    }

    selectValue (item) {
        this.focusButton();
        this.setState({
            isOpen: false
        }, () => {
            this.updateValue(item);
        });
    }

    updateValue (option) {
        let newOptions = this.state.options;
        let prevSelectedOption = _.find(newOptions, ['checked', true]);
        if (prevSelectedOption) {
            prevSelectedOption.checked = false;
        }
        let selectedIndex = _.findIndex(newOptions, ['value', option.value]);
        newOptions[selectedIndex].checked = true;
        this.setValue(newOptions);
    }

    setValue (newOptions) {
        this.setState({
            options: newOptions
        }, () => {
            const value = this.getSelectedOptions();
            let returnValue = value;
            if (value) {
                returnValue = value[0];
            }
            this.props.onChange(returnValue);
        });
    }

    renderMenuOptions () {
        const { customedOptionRenderer } = this.props;
        const { focusedOption, options } = this.state;
        const {
            handleOptionChanged,
            handleMouseEnter,
            handleMouseMove
        } = this.actions.menu;
        const defaultMenuOption = (item) => {
            return this.getOptionLabel(item);
        };
        const renderLabel = customedOptionRenderer || defaultMenuOption;
        return _.map(options, (item, key) => {
            return (
                <li key={`option_${key}`}>
                    <a
                        className={classNames({ [styles.focus]: item === focusedOption })}
                        data-key={key}
                        onMouseDown={handleOptionChanged}
                        onMouseEnter={handleMouseEnter}
                        onMouseMove={handleMouseMove}
                    >
                        {renderLabel(item)}
                    </a>
                </li>
            );
        });
    }

    renderMenu () {
        if (!this.props.dropdown || this.props.disabled) {
            return null;
        }
        const { isReady, options } = this.state;
        if (options && options.length) {
            return (
                <ul
                    ref="menu"
                    className={classNames(
                        styles['dropdown-menu'],
                        { [styles.ready]: isReady }
                    )}
                >
                    {this.renderMenuOptions()}
                </ul>
            );
        } else if (this.props.noOptionsText) {
            return (
                <div
                    ref="menu"
                    className={classNames(
                        styles['dropdown-nooptions'],
                        { [styles.ready]: isReady }
                    )}
                >
                    {this.props.noOptionsText}
                </div>
            );
        } else {
            return null;
        }
    }

    renderValue () {
        const {
            placeholder,
            children,
            customedValueRenderer
        } = this.props;
        const selectedOption = this.getSelectedOptions();
        let el = children;
        if (_.isEmpty(selectedOption)) {
            if (!_.isEmpty(placeholder)) {
                el = (<span>{placeholder}</span>);
            }
        } else {
            const renderLabel = customedValueRenderer || this.getOptionLabel;
            el = renderLabel(selectedOption[0]);
        }

        return (
            <div className={styles['select-value-zone']}>
                {el}
            </div>
        );
    }

    renderArrow () {
        return (
            <div
                ref="caret"
                className={classNames(
                    styles['select-arrow-zone']
                )}
            >
                <span className={styles.caret} />
            </div>
        );
    }

    render () {
        const {
            className,
            hover,
            active,
            focus,
            disabled,
            btnSize,
            dropdownStyle
        } = this.props;
        const {
            handleKeyDown,
            handleMouseDown,
            handleBlur
        } = this.actions.dropdown;
        const { isOpen } = this.state;
        const isSplitLayout = (dropdownStyle === 'split');

        return (
            <ButtonGroup
                btnSize={btnSize}
                className={classNames(
                    className,
                    styles.dropdown,
                    { [styles['dropdown-single']]: dropdownStyle === 'single' },
                    { [styles['dropdown-split']]: isSplitLayout },
                    { [styles['dropdown-text']]: dropdownStyle === 'text' },
                    { [styles.dropup]: isOpen }
                )}
            >
                { isSplitLayout &&
                    <button
                        type="button"
                        className={classNames(
                            styles.btn,
                            styles['btn-border']
                        )}
                        disabled={!!disabled}
                    >
                        {this.renderValue()}
                    </button>
                }
                <button
                    ref="btnDropdown"
                    type="button"
                    className={classNames(
                        styles.btn,
                        styles['dropdown-toggle'],
                        { [styles['btn-border']]: dropdownStyle === 'single' || isSplitLayout },
                        { [styles['btn-link']]: dropdownStyle === 'text' },
                        { [styles.hover]: hover || isOpen },
                        { [styles.active]: active },
                        { [styles.focus]: focus }
                    )}
                    disabled={!!disabled}
                    onKeyDown={handleKeyDown}
                    onMouseDown={handleMouseDown}
                    onBlur={handleBlur}
                >
                    { !isSplitLayout && this.renderValue() }
                    {this.renderArrow()}
                </button>
                {this.renderMenu()}
            </ButtonGroup>
        );
    }

}

ButtonDropdown.propTypes = {
    active: PropTypes.bool,
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
    disabled: PropTypes.bool,
    focus: PropTypes.bool,
    hover: PropTypes.bool,
    dropdown: PropTypes.bool,
    dropdownStyle: PropTypes.oneOf([
        'single',
        'split',
        'text'
    ]),
    value: PropTypes.any,           // initial field value
    options: PropTypes.array,       // array of options
    placeholder: PropTypes.string,  // field placeholder, displayed when there's no value
    noOptionsText: PropTypes.stringOrNode,    // text displayed when there are no any options
    fixedWidth: PropTypes.bool,     // the width of dropdown and menu are consistent
    customedValueRenderer: React.PropTypes.func,    // customedValueRenderer: function (option) {}
    customedOptionRenderer: React.PropTypes.func,   // renders a custom menu with options
    onChange: PropTypes.func       // onChange handler: function (newValue) {}
};
ButtonDropdown.defaultProps = {
    hover: false,
    active: false,
    focus: false,
    disabled: false,
    block: false,
    dropdown: true,
    iconOnly: false,
    btnSize: 'md',
    btnStyle: 'default',
    dropdownStyle: 'single',
    fixedWidth: false,
    noOptionsText: 'No options found'
};

export default ButtonDropdown;
