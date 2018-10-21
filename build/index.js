'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var Query =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Query, _Component);

  function Query() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loading: true,
      error: null,
      data: undefined,
      refetch: function refetch() {
        return _this.fetchData();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState(function (state) {
                return {
                  loading: true,
                  error: null
                };
              });

              _context.prev = 1;
              _context.next = 4;
              return _this.props.getData();

            case 4:
              data = _context.sent;

              _this.setState(function (state) {
                return {
                  loading: false,
                  data: data
                };
              });

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

              _this.setState(function (state) {
                return {
                  loading: false,
                  error: _context.t0
                };
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    })));

    return _this;
  }

  var _proto = Query.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.fetchData();
  };

  _proto.render = function render() {
    return this.props.children(this.state);
  };

  return Query;
}(React.Component);

function withQuery(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "query" : _ref$name,
      _getData = _ref.getData;
  return function (WrappedComponent) {
    return function (props) {
      return React__default.createElement(Query, {
        getData: function getData() {
          return _getData(props);
        }
      }, function (queryState) {
        var _queryProps;

        var queryProps = (_queryProps = {}, _queryProps[name] = queryState, _queryProps);
        return React__default.createElement(WrappedComponent, _extends({}, props, queryProps));
      });
    };
  };
}

exports.Query = Query;
exports.withQuery = withQuery;
