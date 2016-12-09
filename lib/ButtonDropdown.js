'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _index = require('./index.styl');

var _index2 = _interopRequireDefault(_index);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonDropdown = function (_Component) {
    _inherits(ButtonDropdown, _Component);

    function ButtonDropdown() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ButtonDropdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ButtonDropdown.__proto__ || Object.getPrototypeOf(ButtonDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.getDefaultState(), _this.actions = {
            dropdown: {
                handleKeyDown: function handleKeyDown(e) {
                    if (!_this.props.dropdown || _this.props.disabled) {
                        return;
                    }
                    var isOpen = _this.state.isOpen;

                    switch (e.keyCode) {
                        case 13:
                            // enter
                            if (!isOpen) {
                                return;
                            }
                            _this.selectValue(_this.state.focusedOption);
                            break;
                        case 27:
                            // escape
                            if (isOpen) {
                                _this.closeMenu();
                            }
                            break;
                        case 38:
                            // up
                            _this.focusPreviousOption();
                            break;
                        case 40:
                            // down
                            _this.focusNextOption();
                            break;
                        default:
                            return;
                    }
                    e.stopPropagation();
                    e.preventDefault();
                    _this.focusButton();
                },
                handleMouseDown: function handleMouseDown(e) {
                    if (!_this.props.dropdown || _this.props.disabled) {
                        return;
                    }
                    _this.setState({
                        isOpen: !_this.state.isOpen
                    }, function () {
                        if (_this.state.isOpen) {
                            _this.focusAdjacentOption();
                        }
                        _this.focusButton();
                    });
                    // prevent default event handlers
                    e.stopPropagation();
                    e.preventDefault();
                },
                handleBlur: function handleBlur(e) {
                    if (!_this.props.dropdown || _this.props.disabled) {
                        return;
                    }
                    _this.closeMenu();
                }
            },
            menu: {
                handleOptionChanged: function handleOptionChanged(e) {
                    var el = e.currentTarget;
                    var index = el.dataset.key;
                    var selectedOption = _this.state.options[index];
                    _this.selectValue(selectedOption);
                    e.stopPropagation();
                    e.preventDefault();
                },
                handleMouseEnter: function handleMouseEnter(e) {
                    _this.focusOption(e);
                },
                handleMouseMove: function handleMouseMove(e) {
                    _this.focusOption(e);
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ButtonDropdown, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                dropdown = _props.dropdown,
                fixedWidth = _props.fixedWidth,
                dropdownStyle = _props.dropdownStyle;


            if (dropdown && fixedWidth) {
                var _refs = this.refs,
                    btnDropdown = _refs.btnDropdown,
                    menu = _refs.menu,
                    caret = _refs.caret;

                var dropdownWidth = btnDropdown.parentElement.offsetWidth;
                var menuWidth = menu.offsetWidth;
                var caretWidth = dropdownStyle === 'split' ? btnDropdown.offsetWidth : caret.offsetWidth;
                var newWidth = 0;

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
    }, {
        key: 'resize',
        value: function resize(size) {
            if (!size) {
                return;
            }
            this.refs.btnDropdown.parentElement.style.width = size.width + 'px';
            this.refs.menu.style.width = size.width + 'px';
        }
    }, {
        key: 'getDefaultState',
        value: function getDefaultState() {
            var _props2 = this.props,
                value = _props2.value,
                dropdown = _props2.dropdown,
                options = _props2.options,
                fixedWidth = _props2.fixedWidth;

            var focusedOption = void 0;
            var initItems = void 0;
            if (dropdown && !_lodash2.default.isEmpty(options)) {
                (function () {
                    var isChecked = void 0;
                    // Get default selected option(s) for renderValue function
                    initItems = _lodash2.default.map(options, function (option, i) {
                        isChecked = option.value === value;
                        var tempObj = {
                            value: option.value,
                            label: option.label,
                            id: _lodash2.default.uniqueId('option_item_'),
                            checked: isChecked
                        };
                        return tempObj;
                    });
                    focusedOption = _lodash2.default.find(initItems, ['checked', true]);
                })();
            }

            return {
                isOpen: false,
                focusedOption: focusedOption,
                options: initItems,
                isReady: !fixedWidth // 'isReady' will affect initialization display of menu
            };
        }
    }, {
        key: 'closeMenu',
        value: function closeMenu() {
            this.setState({
                isOpen: false
            });
        }
    }, {
        key: 'focusButton',
        value: function focusButton() {
            this.refs.btnDropdown.focus();
        }
    }, {
        key: 'focusOption',
        value: function focusOption(event) {
            var index = event.currentTarget.dataset.key;
            var option = this.props.options[index];
            this.setState({
                focusedOption: option
            });
            event.stopPropagation();
            event.preventDefault();
        }
    }, {
        key: 'focusNextOption',
        value: function focusNextOption() {
            this.focusAdjacentOption('next');
        }
    }, {
        key: 'focusPreviousOption',
        value: function focusPreviousOption() {
            this.focusAdjacentOption('previous');
        }
    }, {
        key: 'focusAdjacentOption',
        value: function focusAdjacentOption(dir) {
            var options = this.state.options;
            var _state = this.state,
                focusedOption = _state.focusedOption,
                isOpen = _state.isOpen;

            if (!isOpen) {
                this.setState({
                    isOpen: true,
                    focusedOption: focusedOption || options[dir === 'next' ? 0 : options.length - 1]
                });
                return;
            }
            if (_lodash2.default.isEmpty(options)) {
                return;
            }
            var focusedIndex = -1;
            focusedIndex = _lodash2.default.findIndex(options, focusedOption);

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
    }, {
        key: 'getOptionLabel',
        value: function getOptionLabel(option) {
            return option.label;
        }
    }, {
        key: 'getSelectedOptions',
        value: function getSelectedOptions() {
            return _lodash2.default.filter(this.state.options, ['checked', true]);
        }
    }, {
        key: 'selectValue',
        value: function selectValue(item) {
            var _this2 = this;

            this.focusButton();
            this.setState({
                isOpen: false
            }, function () {
                _this2.updateValue(item);
            });
        }
    }, {
        key: 'updateValue',
        value: function updateValue(option) {
            var newOptions = this.state.options;
            var prevSelectedOption = _lodash2.default.find(newOptions, ['checked', true]);
            if (prevSelectedOption) {
                prevSelectedOption.checked = false;
            }
            var selectedIndex = _lodash2.default.findIndex(newOptions, ['value', option.value]);
            newOptions[selectedIndex].checked = true;
            this.setValue(newOptions);
        }
    }, {
        key: 'setValue',
        value: function setValue(newOptions) {
            var _this3 = this;

            this.setState({
                options: newOptions
            }, function () {
                var value = _this3.getSelectedOptions();
                var returnValue = value;
                if (value) {
                    returnValue = value[0];
                }
                _this3.props.onChange(returnValue);
            });
        }
    }, {
        key: 'renderMenuOptions',
        value: function renderMenuOptions() {
            var _this4 = this;

            var customedOptionRenderer = this.props.customedOptionRenderer;
            var _state2 = this.state,
                focusedOption = _state2.focusedOption,
                options = _state2.options;
            var _actions$menu = this.actions.menu,
                handleOptionChanged = _actions$menu.handleOptionChanged,
                handleMouseEnter = _actions$menu.handleMouseEnter,
                handleMouseMove = _actions$menu.handleMouseMove;

            var defaultMenuOption = function defaultMenuOption(item) {
                return _this4.getOptionLabel(item);
            };
            var renderLabel = customedOptionRenderer || defaultMenuOption;
            return _lodash2.default.map(options, function (item, key) {
                return _react2.default.createElement(
                    'li',
                    { key: 'option_' + key },
                    _react2.default.createElement(
                        'a',
                        {
                            className: (0, _classnames2.default)(_defineProperty({}, _index2.default.focus, item === focusedOption)),
                            'data-key': key,
                            onMouseDown: handleOptionChanged,
                            onMouseEnter: handleMouseEnter,
                            onMouseMove: handleMouseMove
                        },
                        renderLabel(item)
                    )
                );
            });
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu() {
            if (!this.props.dropdown || this.props.disabled) {
                return null;
            }
            var isReady = this.state.isReady;

            return _react2.default.createElement(
                'ul',
                {
                    ref: 'menu',
                    className: (0, _classnames2.default)(_index2.default['dropdown-menu'], _defineProperty({}, _index2.default.ready, isReady))
                },
                this.renderMenuOptions()
            );
        }
    }, {
        key: 'renderValue',
        value: function renderValue() {
            var _props3 = this.props,
                placeholder = _props3.placeholder,
                children = _props3.children,
                customedValueRenderer = _props3.customedValueRenderer;

            var selectedOption = this.getSelectedOptions();
            var el = children;
            if (_lodash2.default.isEmpty(selectedOption)) {
                if (!_lodash2.default.isEmpty(placeholder)) {
                    el = _react2.default.createElement(
                        'span',
                        null,
                        placeholder
                    );
                }
            } else {
                var renderLabel = customedValueRenderer || this.getOptionLabel;
                el = renderLabel(selectedOption[0]);
            }

            return _react2.default.createElement(
                'div',
                { className: _index2.default['select-value-zone'] },
                el
            );
        }
    }, {
        key: 'renderArrow',
        value: function renderArrow() {
            return _react2.default.createElement(
                'div',
                {
                    ref: 'caret',
                    className: (0, _classnames2.default)(_index2.default['select-arrow-zone'])
                },
                _react2.default.createElement('span', { className: _index2.default.caret })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                className = _props4.className,
                hover = _props4.hover,
                active = _props4.active,
                focus = _props4.focus,
                disabled = _props4.disabled,
                btnSize = _props4.btnSize,
                dropdownStyle = _props4.dropdownStyle;
            var _actions$dropdown = this.actions.dropdown,
                handleKeyDown = _actions$dropdown.handleKeyDown,
                handleMouseDown = _actions$dropdown.handleMouseDown,
                handleBlur = _actions$dropdown.handleBlur;
            var isOpen = this.state.isOpen;

            var isSplitLayout = dropdownStyle === 'split';

            return _react2.default.createElement(
                _ButtonGroup2.default,
                {
                    btnSize: btnSize,
                    className: (0, _classnames2.default)(className, _index2.default.dropdown, _defineProperty({}, _index2.default['dropdown-single'], dropdownStyle === 'single'), _defineProperty({}, _index2.default['dropdown-split'], isSplitLayout), _defineProperty({}, _index2.default['dropdown-text'], dropdownStyle === 'text'), _defineProperty({}, _index2.default.dropup, isOpen))
                },
                isSplitLayout && _react2.default.createElement(
                    'button',
                    {
                        type: 'button',
                        className: (0, _classnames2.default)(_index2.default.btn, _index2.default['btn-border']),
                        disabled: !!disabled
                    },
                    this.renderValue()
                ),
                _react2.default.createElement(
                    'button',
                    {
                        ref: 'btnDropdown',
                        type: 'button',
                        className: (0, _classnames2.default)(_index2.default.btn, _index2.default['dropdown-toggle'], _defineProperty({}, _index2.default['btn-border'], dropdownStyle === 'single' || isSplitLayout), _defineProperty({}, _index2.default['btn-link'], dropdownStyle === 'text'), _defineProperty({}, _index2.default.hover, hover || isOpen), _defineProperty({}, _index2.default.active, active), _defineProperty({}, _index2.default.focus, focus)),
                        disabled: !!disabled,
                        onKeyDown: handleKeyDown,
                        onMouseDown: handleMouseDown,
                        onBlur: handleBlur
                    },
                    !isSplitLayout && this.renderValue(),
                    this.renderArrow()
                ),
                this.renderMenu()
            );
        }
    }]);

    return ButtonDropdown;
}(_react.Component);

ButtonDropdown.propTypes = {
    active: _react.PropTypes.bool,
    btnSize: _react.PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'large', 'medium', 'small', 'extra-small']),
    disabled: _react.PropTypes.bool,
    focus: _react.PropTypes.bool,
    hover: _react.PropTypes.bool,
    dropdown: _react.PropTypes.bool,
    dropdownStyle: _react.PropTypes.oneOf(['single', 'split', 'text']),
    value: _react.PropTypes.any, // initial field value
    options: _react.PropTypes.array, // array of options
    placeholder: _react.PropTypes.string, // field placeholder, displayed when there's no value
    fixedWidth: _react.PropTypes.bool, // the width of dropdown and menu are consistent
    customedValueRenderer: _react2.default.PropTypes.func, // customedValueRenderer: function (option) {}
    customedOptionRenderer: _react2.default.PropTypes.func, // renders a custom menu with options
    onChange: _react.PropTypes.func // onChange handler: function (newValue) {}
};

exports.default = ButtonDropdown;