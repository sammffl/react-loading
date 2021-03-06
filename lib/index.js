'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../static/loading.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by SamMFFL on 17/1/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Loading = function (_Component) {
    _inherits(Loading, _Component);

    function Loading(props) {
        _classCallCheck(this, Loading);

        var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));

        _this.state = {
            show: props.showOrHide === 'show'
        };
        return _this;
    }

    _createClass(Loading, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                show: nextProps.showOrHide === 'show'
            });
        }
    }, {
        key: '_renderSpinner',
        value: function _renderSpinner() {
            return _react2.default.createElement(
                'div',
                { className: 'spinner' },
                _react2.default.createElement('div', { className: 'bounce1' }),
                _react2.default.createElement('div', { className: 'bounce2' }),
                _react2.default.createElement('div', { className: 'bounce3' })
            );
        }
    }, {
        key: '_renderCircle',
        value: function _renderCircle() {
            return _react2.default.createElement(
                'div',
                { className: 'sk-circle' },
                _react2.default.createElement('div', { className: 'sk-circle1 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle2 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle3 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle4 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle5 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle6 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle7 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle8 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle9 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle10 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle11 sk-child' }),
                _react2.default.createElement('div', { className: 'sk-circle12 sk-child' })
            );
        }
    }, {
        key: '_renderBrand',
        value: function _renderBrand() {
            return _react2.default.createElement(
                'div',
                { className: 'loading-brand' },
                _react2.default.createElement(
                    'div',
                    { className: 'loading-brand-default' },
                    _react2.default.createElement('div', { className: 'loading-brand-icon' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'loading-brand-loader' },
                        _react2.default.createElement('span', null)
                    )
                )
            );
        }
    }, {
        key: 'show',
        value: function show() {
            this.setState({
                show: true
            });
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.setState({
                show: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var type = this.props.type;

            var renderLoading = _react2.default.createElement('div', null);

            switch (type) {
                case 'spinner':
                    renderLoading = this._renderSpinner();
                    break;
                case 'circle':
                    renderLoading = this._renderCircle();
                    break;
                case 'brand':
                    renderLoading = this._renderBrand();
                    break;
                default:
                    renderLoading = this._renderBrand();
            }

            return _react2.default.createElement(
                'div',
                { className: 'loading-container ' + (this.state.show ? '' : 'loading-hidden') },
                _react2.default.createElement('div', { className: 'loading-mask' }),
                renderLoading
            );
        }
    }]);

    return Loading;
}(_react.Component);

Loading.PropTypes = {
    type: _react.PropTypes.oneOf(['spinner', 'circle', 'brand']),
    showOrHide: _react.PropTypes.oneOf(['show', 'hide'])
};
Loading.defaultProps = {
    type: 'brand',
    showOrHide: 'hide'
};
exports.default = Loading;
