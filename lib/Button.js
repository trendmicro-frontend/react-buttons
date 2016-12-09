'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.styl');

var _index2 = _interopRequireDefault(_index);

var _ButtonDropdown = require('./ButtonDropdown');

var _ButtonDropdown2 = _interopRequireDefault(_ButtonDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'renderButton',
        value: function renderButton() {
            var _props = this.props,
                _props$type = _props.type,
                type = _props$type === undefined ? 'button' : _props$type,
                children = _props.children,
                className = _props.className,
                componentClass = _props.componentClass,
                hover = _props.hover,
                active = _props.active,
                focus = _props.focus,
                disabled = _props.disabled,
                block = _props.block,
                iconOnly = _props.iconOnly,
                btnSize = _props.btnSize,
                btnStyle = _props.btnStyle,
                others = _objectWithoutProperties(_props, ['type', 'children', 'className', 'componentClass', 'hover', 'active', 'focus', 'disabled', 'block', 'iconOnly', 'btnSize', 'btnStyle']);

            var Component = componentClass || 'button';

            return _react2.default.createElement(
                Component,
                _extends({}, others, {
                    type: type,
                    className: (0, _classnames2.default)(className, _index2.default.btn, _defineProperty({}, _index2.default['btn-lg'], btnSize === 'large' || btnSize === 'lg'), _defineProperty({}, _index2.default['btn-md'], btnSize === 'medium' || btnSize === 'md'), _defineProperty({}, _index2.default['btn-sm'], btnSize === 'small' || btnSize === 'sm'), _defineProperty({}, _index2.default['btn-xs'], btnSize === 'extra-small' || btnSize === 'xs'), _defineProperty({}, _index2.default['btn-default'], btnStyle === 'default'), _defineProperty({}, _index2.default['btn-primary'], btnStyle === 'primary'), _defineProperty({}, _index2.default['btn-danger'], btnStyle === 'danger' || btnStyle === 'emphasis'), _defineProperty({}, _index2.default['btn-border'], btnStyle === 'border' || btnStyle === 'flat'), _defineProperty({}, _index2.default['btn-link'], btnStyle === 'link'), _defineProperty({}, _index2.default['btn-block'], block), _defineProperty({}, _index2.default['btn-icon-only'], iconOnly), _defineProperty({}, _index2.default.hover, hover), _defineProperty({}, _index2.default.active, active), _defineProperty({}, _index2.default.focus, focus)),
                    disabled: !!disabled
                }),
                children
            );
        }
    }, {
        key: 'renderDropdown',
        value: function renderDropdown() {
            return _react2.default.createElement(_ButtonDropdown2.default, this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.dropdown ? this.renderDropdown() : this.renderButton();
        }
    }]);

    return Button;
}(_react.Component);

Button.propTypes = {
    active: _react.PropTypes.bool,
    block: _react.PropTypes.bool,
    btnSize: _react.PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'large', 'medium', 'small', 'extra-small']),
    btnStyle: _react.PropTypes.oneOf(['default', 'primary', 'danger', 'emphasis', // alias of "danger"
    'border', 'flat', // alias of "border"
    'link']),
    componentClass: _react.PropTypes.element,
    disabled: _react.PropTypes.bool,
    focus: _react.PropTypes.bool,
    hover: _react.PropTypes.bool,
    iconOnly: _react.PropTypes.bool,
    type: _react.PropTypes.oneOf(['button', 'reset', 'submit']),

    /* following propTypes for dropdown */
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
Button.defaultProps = {
    hover: false,
    active: false,
    focus: false,
    disabled: false,
    block: false,
    dropdown: false,
    iconOnly: false,
    btnSize: 'md',
    btnStyle: 'default',
    dropdownStyle: 'single',
    fixedWidth: false
};

exports.default = Button;