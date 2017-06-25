webpackJsonp([1],{

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createClass({
	  displayName: "exports",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "header",
	        null,
	        _react2.default.createElement(
	          "ul",
	          null,
	          _react2.default.createElement(
	            "li",
	            null,
	            _react2.default.createElement(
	              Link,
	              { to: "/dash" },
	              "Dashboard"
	            )
	          )
	        ),
	        "Logged in as Jane"
	      ),
	      this.props.children
	    );
	  }
	});

/***/ }

});