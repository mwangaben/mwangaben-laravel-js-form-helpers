function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import _ from 'lodash';

var MyForm = /*#__PURE__*/function () {
  function MyForm() {
    var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MyForm);

    this.error = {};
    this.defaults = defaults;

    if (this.defaults) {
      Object.assign(this, this.defaults);
    }
  }

  _createClass(MyForm, [{
    key: "hasError",
    value: function hasError(field) {
      return this.error.hasOwnProperty(field);
    }
  }, {
    key: "errorOut",
    value: function errorOut(field) {
      var b;

      _.forEach(this.error, function (sms, key) {
        if (key === field) {
          b = sms[0];
        }
      });

      return b;
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      return this.error = {};
    }
  }, {
    key: "clear",
    value: function clear(field) {
      delete this.error[field];
    }
  }, {
    key: "any",
    value: function any() {
      return _.isEmpty(this.error);
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      var fields = Object.keys(this);

      _.forEach(fields, function (value) {
        _this[value] = '';
      });

      return this;
    }
  }]);

  return MyForm;
}();

export { MyForm as default };
