'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.styl');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ButtonGroup = function ButtonGroup(_ref) {
    var className = _ref.className,
        btnSize = _ref.btnSize,
        vertical = _ref.vertical,
        props = _objectWithoutProperties(_ref, ['className', 'btnSize', 'vertical']);

    return _react2.default.createElement('div', _extends({}, props, {
        className: (0, _classnames2.default)(className, _index2.default['btn-group'], _defineProperty({}, _index2.default['btn-group-lg'], btnSize === 'large' || btnSize === 'lg'), _defineProperty({}, _index2.default['btn-group-md'], btnSize === 'medium' || btnSize === 'md'), _defineProperty({}, _index2.default['btn-group-sm'], btnSize === 'small' || btnSize === 'sm'), _defineProperty({}, _index2.default['btn-group-xs'], btnSize === 'extra-small' || btnSize === 'xs'), _defineProperty({}, _index2.default['btn-group-vertical'], vertical))
    }));
};

ButtonGroup.propTypes = {
    btnSize: _react.PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'large', 'medium', 'small', 'extra-small']),
    vertical: _react.PropTypes.bool
};
ButtonGroup.defaultProps = {
    btnSize: '', // Defaults to empty string
    vertical: false
};

exports.default = ButtonGroup;