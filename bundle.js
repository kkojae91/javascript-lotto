/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/LottoApp.js":
/*!****************************!*\
  !*** ./src/js/LottoApp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LottoApp)
/* harmony export */ });
/* harmony import */ var _LottoConsumer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LottoConsumer */ "./src/js/LottoConsumer.js");
/* harmony import */ var _LottoSeller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LottoSeller */ "./src/js/LottoSeller.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates */ "./src/js/templates.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./src/js/dom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }








var LottoApp = /*#__PURE__*/function () {
  function LottoApp(app) {
    _classCallCheck(this, LottoApp);

    this.$app = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(app);
    (0,_dom__WEBPACK_IMPORTED_MODULE_5__.render)(this.$app, _templates__WEBPACK_IMPORTED_MODULE_2__["default"].paymentSection());
    this.$paymentInput = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.PAYMENT_INPUT);
    this.$paymentButton = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.PAYMENT_BUTTON);
    this.lottoConsumer = new _LottoConsumer__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.lottoSeller = new _LottoSeller__WEBPACK_IMPORTED_MODULE_1__["default"]();
    (0,_dom__WEBPACK_IMPORTED_MODULE_5__.bindEventListener)(this.$paymentButton, 'click', this.onSubmitPaymentButton.bind(this));
  }

  _createClass(LottoApp, [{
    key: "onSubmitRestartButton",
    value: function onSubmitRestartButton() {
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.enabledElements)([this.$paymentInput, this.$paymentButton], _constants__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME.DISABLED);
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.initInput)(this.$paymentInput);
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.removeChildElements)(this.$app, [(0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LAST_WEEK_WINNING_NUMBER_SECTION), (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.PURCHASED_LOTTO_LIST_SECTION), this.$lottoResultSection, this.$coverTheBackground]);
    }
  }, {
    key: "onClickExitButton",
    value: function onClickExitButton(e) {
      e.preventDefault();
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.removeChildElements)(this.$app, [this.$lottoResultSection, this.$coverTheBackground]);
    }
  }, {
    key: "onSubmitLottoResultButton",
    value: function onSubmitLottoResultButton(e) {
      try {
        e.preventDefault();

        var lastWeekWinningNumberList = _toConsumableArray((0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElements)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LAST_WEEK_NUMBER_INPUT)).map(function (numberInputElement) {
          return numberInputElement.valueAsNumber;
        });

        var lastWeekWinningBonusNumber = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LAST_WEEK_BONUS_NUMBER_INPUT).valueAsNumber;
        this.lottoSeller.setLastWeekWinningLottoNumbers((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getValidWinningNumberAndBonusNumber)(lastWeekWinningNumberList, lastWeekWinningBonusNumber));
        this.lottoSeller.setWinningCount(this.lottoConsumer.getLottoList(), this.lottoSeller.getLastWeekWinningLottoList(), this.lottoSeller.getLastWeekWinningBonusNumber());
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.render)(this.$app, _templates__WEBPACK_IMPORTED_MODULE_2__["default"].lottoResultSection(this.lottoSeller.getWinningCount(), (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getRateOfReturn)(this.lottoSeller.totalWinningAmount(), this.lottoSeller.getPurchasedAmount())));
        this.resultSectionBindEvent();
        this.$lottoResultSection = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LOTTO_RESULT_SECTION);
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.focusInput)(this.$restartButton);
      } catch (error) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.alertMessage)(error.message);
      }
    }
  }, {
    key: "onClickToggleButton",
    value: function onClickToggleButton() {
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.toggleElement)(this.$lottoListToggleButton, _constants__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME.TOGGLE_SWITCH);
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.toggleElement)((0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LOTTO_LIST), _constants__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME.DIRECTION_COLUMN);
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElements)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LOTTO).forEach(function (element) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.toggleElement)(element, _constants__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME.DISPLAY_FLEX);
      });
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElements)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LOTTO_NUMBER).forEach(function (element) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.toggleElement)(element, _constants__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME.INVISIBLE);
      });
    }
  }, {
    key: "onSubmitPaymentButton",
    value: function onSubmitPaymentButton(e) {
      try {
        e.preventDefault();
        var purchasedLottoCount = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getPurchasedLottoCount)(this.$paymentInput.valueAsNumber, _constants__WEBPACK_IMPORTED_MODULE_3__.MONEY.STANDARD);
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.disabledElements)([this.$paymentButton, this.$paymentInput], _constants__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME.DISABLED);
        this.lottoConsumer.setLottoList(purchasedLottoCount);
        this.lottoSeller.setPurchasedAmount(purchasedLottoCount);
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.render)(this.$app, "".concat(_templates__WEBPACK_IMPORTED_MODULE_2__["default"].purchasedSection(this.lottoConsumer.getLottoList()), "\n          ").concat(_templates__WEBPACK_IMPORTED_MODULE_2__["default"].lastWeekWinningNumberSection()));
        this.purchasedLottoListSectionBindEvent();
        this.lastWeekWinningNumberSectionBindEvent();
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.focusInput)((0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)("[data-input-id=\"".concat(1, "\"]")));
      } catch (error) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.alertMessage)(error.message);
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.initInput)(this.$paymentInput);
      }
    }
  }, {
    key: "onKeyUpLastWeekWinningNumberInput",
    value: function onKeyUpLastWeekWinningNumberInput(_ref) {
      var _this = this;

      var target = _ref.target,
          key = _ref.key;

      if (!target.matches(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LAST_WEEK_NUMBER_INPUT) && !target.matches(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LAST_WEEK_BONUS_NUMBER_INPUT)) {
        return;
      }

      if (target.value.length >= 2 && target.dataset.inputId !== '7') {
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.focusInput)((0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)("[data-input-id=\"".concat(Number(target.dataset.inputId) + 1, "\"]")));
      }

      if (target.value.length === 0 && key === 'Backspace' && target.dataset.inputId !== '1') {
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.focusInput)((0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)("[data-input-id=\"".concat(Number(target.dataset.inputId) - 1, "\"]")));
      }

      var count = 0;

      _toConsumableArray(this.$winningNumbers).reduce(function (previousWinningNumbers, winningNumberElement) {
        var currentWinningNumber = winningNumberElement.valueAsNumber;

        if (currentWinningNumber >= _constants__WEBPACK_IMPORTED_MODULE_3__.LOTTO.MIN_NUMBER && currentWinningNumber <= _constants__WEBPACK_IMPORTED_MODULE_3__.LOTTO.MAX_NUMBER && (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isUniqueWinningNumber)({
          winningNumberElements: _this.$winningNumbers,
          winningNumberElement: winningNumberElement,
          previousWinningNumbers: previousWinningNumbers,
          currentWinningNumber: currentWinningNumber
        })) {
          count++;
        }

        return [].concat(_toConsumableArray(previousWinningNumbers), [currentWinningNumber]);
      }, []);

      if (count === 7) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_5__.enabledElement)(this.$resultCheckingButton, _constants__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME.DISABLED);
        return;
      }

      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.disabledElement)(this.$resultCheckingButton, _constants__WEBPACK_IMPORTED_MODULE_3__.CLASS_NAME.DISABLED);
    }
  }, {
    key: "purchasedLottoListSectionBindEvent",
    value: function purchasedLottoListSectionBindEvent() {
      this.$lottoListToggleButton = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.LOTTO_LIST_TOGGLE_BUTTON);
      this.$winningNumbers = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElements)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.WINNING_NUMBERS);
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.bindEventListener)(this.$lottoListToggleButton, 'click', this.onClickToggleButton.bind(this));
    }
  }, {
    key: "lastWeekWinningNumberSectionBindEvent",
    value: function lastWeekWinningNumberSectionBindEvent() {
      this.$resultCheckingButton = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.RESULT_CHECKING_BUTTON);
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.bindEventListener)(this.$resultCheckingButton, 'click', this.onSubmitLottoResultButton.bind(this));
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.bindsEventListener)((0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.WINNING_NUMBER_CONTAINER), 'keyup', this.onKeyUpLastWeekWinningNumberInput.bind(this));
    }
  }, {
    key: "resultSectionBindEvent",
    value: function resultSectionBindEvent() {
      this.$restartButton = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.RESTART_BUTTON);
      this.$coverTheBackground = (0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.COVER_THE_BACKGROUND);
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.bindEventListener)((0,_dom__WEBPACK_IMPORTED_MODULE_5__.getElement)(_constants__WEBPACK_IMPORTED_MODULE_3__.SELECTOR.EXIT_BUTTON), 'click', this.onClickExitButton.bind(this));
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.bindEventListener)(this.$coverTheBackground, 'click', this.onClickExitButton.bind(this));
      (0,_dom__WEBPACK_IMPORTED_MODULE_5__.bindEventListener)(this.$restartButton, 'click', this.onSubmitRestartButton.bind(this));
    }
  }]);

  return LottoApp;
}();



/***/ }),

/***/ "./src/js/LottoConsumer.js":
/*!*********************************!*\
  !*** ./src/js/LottoConsumer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LottoConsumer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _lottoList = /*#__PURE__*/new WeakMap();

var LottoConsumer = /*#__PURE__*/function () {
  function LottoConsumer() {
    _classCallCheck(this, LottoConsumer);

    _classPrivateFieldInitSpec(this, _lottoList, {
      writable: true,
      value: []
    });
  }

  _createClass(LottoConsumer, [{
    key: "setLottoList",
    value: function setLottoList(count) {
      var _this = this;

      _classPrivateFieldSet(this, _lottoList, Array.from({
        length: count
      }, function () {
        return _this.createLottoList(count);
      }));
    }
  }, {
    key: "getLottoList",
    value: function getLottoList() {
      return _classPrivateFieldGet(this, _lottoList);
    }
  }, {
    key: "createLottoList",
    value: function createLottoList() {
      var shuffleRandomList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.shuffleArray)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createRandomNumberList)());
      return Array.from({
        length: _constants__WEBPACK_IMPORTED_MODULE_1__.LOTTO.LENGTH
      }, function () {
        return shuffleRandomList.pop();
      });
    }
  }]);

  return LottoConsumer;
}();



/***/ }),

/***/ "./src/js/LottoSeller.js":
/*!*******************************!*\
  !*** ./src/js/LottoSeller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LottoSeller)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




var _lastWeekWinningLottoList = /*#__PURE__*/new WeakMap();

var _lastWeekWinningBonusNumber = /*#__PURE__*/new WeakMap();

var _purchasedAmount = /*#__PURE__*/new WeakMap();

var _winningCount = /*#__PURE__*/new WeakMap();

var LottoSeller = /*#__PURE__*/function () {
  function LottoSeller() {
    _classCallCheck(this, LottoSeller);

    _classPrivateFieldInitSpec(this, _lastWeekWinningLottoList, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _lastWeekWinningBonusNumber, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _purchasedAmount, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _winningCount, {
      writable: true,
      value: {
        firstWinner: 0,
        secondWinner: 0,
        thirdWinner: 0,
        forthWinner: 0,
        fifthWinner: 0,
        failed: 0
      }
    });
  }

  _createClass(LottoSeller, [{
    key: "getLastWeekWinningLottoList",
    value: function getLastWeekWinningLottoList() {
      return _classPrivateFieldGet(this, _lastWeekWinningLottoList);
    }
  }, {
    key: "getLastWeekWinningBonusNumber",
    value: function getLastWeekWinningBonusNumber() {
      return _classPrivateFieldGet(this, _lastWeekWinningBonusNumber);
    }
  }, {
    key: "setLastWeekWinningLottoNumbers",
    value: function setLastWeekWinningLottoNumbers(_ref) {
      var winningNumberList = _ref.winningNumberList,
          bonusNumber = _ref.bonusNumber;

      _classPrivateFieldSet(this, _lastWeekWinningLottoList, winningNumberList);

      _classPrivateFieldSet(this, _lastWeekWinningBonusNumber, bonusNumber);
    }
  }, {
    key: "getWinningAmount",
    value: function getWinningAmount() {
      return _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT;
    }
  }, {
    key: "setPurchasedAmount",
    value: function setPurchasedAmount(count) {
      _classPrivateFieldSet(this, _purchasedAmount, count * _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY.STANDARD);
    }
  }, {
    key: "getPurchasedAmount",
    value: function getPurchasedAmount() {
      return _classPrivateFieldGet(this, _purchasedAmount);
    }
  }, {
    key: "setWinningCount",
    value: function setWinningCount(userAllLottoList, lastWeekLottoList, lastWeekBounsNumber) {
      var _this = this;

      Object.keys(_classPrivateFieldGet(this, _winningCount)).forEach(function (winningKey) {
        _classPrivateFieldGet(_this, _winningCount)[winningKey] = userAllLottoList.filter(function (userLottoList) {
          return _this.confirmLottoList(userLottoList, lastWeekLottoList, lastWeekBounsNumber) === _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.changeToUpperSnakeCase)(winningKey)];
        }).length;
      });
    }
  }, {
    key: "getWinningCount",
    value: function getWinningCount() {
      return _classPrivateFieldGet(this, _winningCount);
    }
  }, {
    key: "confirmLottoList",
    value: function confirmLottoList(userLottoList, lastWeekLottoList, lastWeekBounsNumber) {
      var count = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.countingDuplicates)(userLottoList, lastWeekLottoList);

      switch (count) {
        case 3:
          return _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT.FIFTH_WINNER;

        case 4:
          return _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT.FORTH_WINNER;

        case 5:
          if (userLottoList.includes(lastWeekBounsNumber)) {
            return _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT.SECOND_WINNER;
          }

          return _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT.THIRD_WINNER;

        case 6:
          return _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT.FIRST_WINNER;

        default:
          return _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT.FAILED;
      }
    }
  }, {
    key: "totalWinningAmount",
    value: function totalWinningAmount() {
      var _this2 = this;

      var totalAmountList = Object.keys(_classPrivateFieldGet(this, _winningCount)).map(function (amountKey) {
        return _classPrivateFieldGet(_this2, _winningCount)[amountKey] * _constants__WEBPACK_IMPORTED_MODULE_1__.WINNING_AMOUNT[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.changeToUpperSnakeCase)(amountKey)];
      });
      return totalAmountList.reduce(function (sum, amount) {
        return amount + sum;
      }, 0);
    }
  }]);

  return LottoSeller;
}();



/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SELECTOR": () => (/* binding */ SELECTOR),
/* harmony export */   "CLASS_NAME": () => (/* binding */ CLASS_NAME),
/* harmony export */   "MONEY": () => (/* binding */ MONEY),
/* harmony export */   "LOTTO": () => (/* binding */ LOTTO),
/* harmony export */   "WINNING_AMOUNT": () => (/* binding */ WINNING_AMOUNT),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE)
/* harmony export */ });
var SELECTOR = {
  PAYMENT_BUTTON: '#payment-button',
  PAYMENT_INPUT: '#payment-input',
  LOTTO_LIST_TOGGLE_BUTTON: '#lotto-list-toggle-button',
  LOTTO_LIST: '#lotto-list',
  LOTTO_NUMBER: '.lotto-number',
  LOTTO: '.lotto',
  LAST_WEEK_WINNING_NUMBER_SECTION: '#last-week-winning-number-section',
  PURCHASED_TOTAL_COUNT: '.purchased-total-count',
  RESULT_CHECKING_BUTTON: '#result-checking-button',
  PURCHASED_LOTTO_LIST_SECTION: '#purchased-lotto-list-section',
  LOTTO_RESULT_SECTION: '#lotto-result-section',
  COVER_THE_BACKGROUND: '#cover-the-background',
  LAST_WEEK_NUMBER_INPUT: '.last-week-number-input',
  LAST_WEEK_BONUS_NUMBER_INPUT: '.last-week-bonus-number-input',
  RESTART_BUTTON: '#restart-button',
  EXIT_BUTTON: '#exit-button',
  WINNING_NUMBER_CONTAINER: '.winning-number-container',
  WINNING_NUMBERS: '.winning-numbers'
};
var CLASS_NAME = {
  DISABLED: 'disabled',
  TOGGLE_SWITCH: 'toggle-switch',
  DIRECTION_COLUMN: 'direction-column',
  DISPLAY_FLEX: 'display-flex',
  INVISIBLE: 'invisible'
};
var MONEY = {
  STANDARD: 1000
};
var LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6
};
var WINNING_AMOUNT = {
  FIRST_WINNER: 2000000000,
  SECOND_WINNER: 30000000,
  THIRD_WINNER: 1500000,
  FORTH_WINNER: 50000,
  FIFTH_WINNER: 5000,
  FAILED: 0
};
var ERROR_MESSAGE = {
  MONEY_OUT_OF_RANGE: "\uAD6C\uC785\uD560 \uAE08\uC561\uC744 \uC798\uBABB \uC785\uB825 \uD558\uC168\uC2B5\uB2C8\uB2E4. \uAD6C\uC785\uD560 \uAE08\uC561\uC740 ".concat(MONEY.STANDARD, "\uC6D0 \uC774\uC0C1\uC744 \uC785\uB825\uD574\uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4"),
  MONEY_OUT_OF_STANDARD: "\uAD6C\uC785\uD560 \uAE08\uC561\uC744 \uC798\uBABB \uC785\uB825 \uD558\uC168\uC2B5\uB2C8\uB2E4. \uAD6C\uC785\uD560 \uAE08\uC561\uC740 ".concat(MONEY.STANDARD, "\uC6D0 \uB2E8\uC704\uB85C \uC785\uB825\uD574\uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4"),
  NOT_DUPLICATED_NUMBERS: "\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uBC88\uD638\uB294 ".concat(LOTTO.MIN_NUMBER, " ~ ").concat(LOTTO.MAX_NUMBER, " \uC0AC\uC774\uC758 \uC22B\uC790\uB97C \uC911\uBCF5 \uC5C6\uC774 \uC785\uB825\uD574\uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4.")
};

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "getElements": () => (/* binding */ getElements),
/* harmony export */   "toggleElement": () => (/* binding */ toggleElement),
/* harmony export */   "disableElement": () => (/* binding */ disableElement),
/* harmony export */   "removeChildElements": () => (/* binding */ removeChildElements),
/* harmony export */   "disabledElement": () => (/* binding */ disabledElement),
/* harmony export */   "enabledElement": () => (/* binding */ enabledElement),
/* harmony export */   "enabledElements": () => (/* binding */ enabledElements),
/* harmony export */   "disabledElements": () => (/* binding */ disabledElements),
/* harmony export */   "focusInput": () => (/* binding */ focusInput),
/* harmony export */   "initInput": () => (/* binding */ initInput),
/* harmony export */   "alertMessage": () => (/* binding */ alertMessage),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "bindEventListener": () => (/* binding */ bindEventListener),
/* harmony export */   "bindsEventListener": () => (/* binding */ bindsEventListener),
/* harmony export */   "changeBackgroundColor": () => (/* binding */ changeBackgroundColor)
/* harmony export */ });
var getElement = function getElement(selector) {
  return document.querySelector(selector);
};
var getElements = function getElements(selector) {
  return document.querySelectorAll(selector);
};
var toggleElement = function toggleElement(element, className) {
  element.classList.toggle(className);
};
var disableElement = function disableElement(element) {
  element.disabled = !element.disabled;
};
var removeChildElements = function removeChildElements(parentElement, childElements) {
  childElements.forEach(function (childElement) {
    parentElement.removeChild(childElement);
  });
};
var disabledElement = function disabledElement(element, className) {
  element.classList.add(className);
  element.disabled = true;
};
var enabledElement = function enabledElement(element, className) {
  element.classList.remove(className);
  element.disabled = false;
};
var enabledElements = function enabledElements(elements, className) {
  elements.forEach(function (element) {
    toggleElement(element, className);
    disableElement(element);
  });
};
var disabledElements = function disabledElements(elements, className) {
  elements.forEach(function (element) {
    toggleElement(element, className);
    disableElement(element);
  });
};
var focusInput = function focusInput(element) {
  return element.focus();
};
var initInput = function initInput(inputElement) {
  inputElement.value = '';
  inputElement.focus();
};
var alertMessage = function alertMessage(message) {
  return alert(message);
};
var render = function render(element, template) {
  element.insertAdjacentHTML('beforeend', template);
};
var bindEventListener = function bindEventListener(selector, type, callback) {
  selector.addEventListener(type, callback);
};
var bindsEventListener = function bindsEventListener(parentElement, type, callback) {
  parentElement.addEventListener(type, callback);
};
var changeBackgroundColor = function changeBackgroundColor(_ref) {
  var element = _ref.element,
      addClassName = _ref.addClassName,
      removeClassName = _ref.removeClassName;
  element.classList.add(addClassName);
  element.classList.remove(removeClassName);
};

/***/ }),

/***/ "./src/js/templates.js":
/*!*****************************!*\
  !*** ./src/js/templates.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createTemplate = {
  paymentSection: function paymentSection() {
    return "\n    <h1>\uD83C\uDFB1 \uD589\uC6B4\uC758 \uB85C\uB610</h1>\n    <section id=\"payment-section\">\n      <h2 hidden>\uAD6C\uC785\uD560 \uAE08\uC561</h2>\n      <label for=\"payment-input\">\uAD6C\uC785\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n      <form class=\"payment-form\">\n        <input name=\"payment-input\" id=\"payment-input\" type=\"number\" placeholder=\"\uAE08\uC561\" min=\"1000\" step=\"1000\" required autofocus />\n        <button id=\"payment-button\">\uAD6C\uC785</button>\n      </form>\n    </section>\n    ";
  },
  purchasedSection: function purchasedSection(lottoList) {
    var _this = this;

    return "\n    <section id=\"purchased-lotto-list-section\">\n      <h2 hidden>\uAD6C\uC785\uD55C \uB85C\uB610 \uBAA9\uB85D</h2>\n      <div class=\"lotto-list-container\">\n        <p class=\"purchased-total-count\">\uCD1D ".concat(lottoList.length, "\uAC1C\uB97C \uAD6C\uB9E4\uD558\uC600\uC2B5\uB2C8\uB2E4.</p>\n        <ul id=\"lotto-list\">\n          ").concat(lottoList.map(function (lotto) {
      return _this.lottoTicketAndNumberElement(lotto);
    }).join(''), "\n        </ul>\n      </div>\n      <div class=\"lotto-list-toggle-container\">\n        <p>\uBC88\uD638 \uBCF4\uAE30</p>\n        <button id=\"lotto-list-toggle-button\"></button>\n      </div>\n    </section>\n    ");
  },
  lottoTicketAndNumberElement: function lottoTicketAndNumberElement(lotto) {
    return "\n    <li class=\"lotto\">\n      <p class=\"lotto-ticket\">\uD83C\uDF9F\uFE0F</p>\n      <p class=\"lotto-number invisible\">".concat(lotto.join(', '), "</p>\n    </li>\n    ");
  },
  lastWeekWinningNumberSection: function lastWeekWinningNumberSection() {
    return "\n    <section id=\"last-week-winning-number-section\">\n      <h2 hidden>\uC9C0\uB09C \uC8FC \uB2F9\uCCA8 \uBC88\uD638</h2>\n      <p>\uC9C0\uB09C \uC8FC \uB2F9\uCCA8 \uBC88\uD638 6\uAC1C\uC640 \uBCF4\uB108\uC2A4 \uBC88\uD638 1\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</p>\n      <form class=\"winning-number-form\">\n        <div class=\"winning-number-container\">\n          <div class=\"\">\n            <p>\uB2F9\uCCA8 \uBC88\uD638</p>\n            <ul id=\"last-week-number-list\">\n              <li class=\"last-week-number\">\n                <label for=\"last-week-first-input\" hidden>\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uCCAB \uBC88\uC9F8 \uBC88\uD638</label>\n                <input type=\"number\" name=\"last-week-first-input\" class=\"last-week-number-input winning-numbers\" data-input-id=\"1\" min=\"1\" max=\"45\" maxlength=\"2\" required />\n              </li>\n              <li class=\"last-week-number\">\n                <label for=\"last-week-second-input\" hidden>\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uB450 \uBC88\uC9F8 \uBC88\uD638</label>\n                <input type=\"number\" name=\"last-week-second-input\" class=\"last-week-number-input winning-numbers\" data-input-id=\"2\" min=\"1\" max=\"45\" maxlength=\"2\" required />\n              </li>\n              <li class=\"last-week-number\">\n                <label for=\"last-week-third-input\" hidden>\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uC138 \uBC88\uC9F8 \uBC88\uD638</label>\n                <input type=\"number\" name=\"last-week-third-input\" class=\"last-week-number-input winning-numbers\" data-input-id=\"3\" min=\"1\" max=\"45\" maxlength=\"2\" required />\n              </li>\n              <li class=\"last-week-number\">\n                <label for=\"last-week-forth-input\" hidden>\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uB124 \uBC88\uC9F8 \uBC88\uD638</label>\n                <input type=\"number\" name=\"last-week-forth-input\" class=\"last-week-number-input winning-numbers\" data-input-id=\"4\" min=\"1\" max=\"45\" maxlength=\"2\" required />\n              </li>\n              <li class=\"last-week-number\">\n                <label for=\"last-week-fifth-input\" hidden>\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uB2E4\uC12F \uBC88\uC9F8 \uBC88\uD638</label>\n                <input type=\"number\" name=\"last-week-fifth-input\" class=\"last-week-number-input winning-numbers\" data-input-id=\"5\" min=\"1\" max=\"45\" maxlength=\"2\" required />\n              </li>\n              <li class=\"last-week-number\">\n                <label for=\"last-week-sixth-input\" hidden>\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uC5EC\uC12F \uBC88\uC9F8 \uBC88\uD638</label>\n                <input type=\"number\" name=\"last-week-sixth-input\" class=\"last-week-number-input winning-numbers\" data-input-id=\"6\" min=\"1\" max=\"45\" maxlength=\"2\" required />\n              </li>\n            </ul>\n          </div>\n          <div class=\"last-week-bonus-number-container\">\n            <p>\uBCF4\uB108\uC2A4 \uBC88\uD638</p>\n            <label for=\"last-week-bonus-input\" hidden>\uC9C0\uB09C\uC8FC \uB2F9\uCCA8 \uBCF4\uB108\uC2A4 \uBC88\uC9F8 \uBC88\uD638</label>\n            <input type=\"number\" class=\"last-week-bonus-number-input winning-numbers\" data-input-id=\"7\" min=\"1\" max=\"45\" maxlength=\"2\" required />\n          </div>\n        </div>\n        <button id=\"result-checking-button\" class=\"disabled\" disabled>\uACB0\uACFC \uD655\uC778\uD558\uAE30</button>\n      </form>\n    </section>\n  ";
  },
  lottoResultSection: function lottoResultSection(winningCount, rateOfReturn) {
    return "\n    <div id=\"cover-the-background\"></div>\n    <section id=\"lotto-result-section\">\n      <button id=\"exit-button\"></button>\n      <h2 hidden>\uAD6C\uB9E4\uD55C \uB85C\uB610 \uACB0\uACFC</h2>\n      <table>\n      <caption id=\"lotto-result-table-caption\">\n        \uD83C\uDFC6 \uB2F9\uCCA8 \uD1B5\uACC4 \uD83C\uDFC6\n      </caption>\n      <thead>\n          <tr>\n            <th>\uC77C\uCE58 \uAC2F\uC218</th>\n            <th>\uB2F9\uCCA8\uAE08</th>\n            <th>\uB2F9\uCCA8 \uAC2F\uC218</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>3\uAC1C</td>\n            <td>5,000</td>\n            <td class=\"fifth-winning-count\">".concat(winningCount.fifthWinner, "\uAC1C</td>\n          </tr>\n          <tr>\n            <td>4\uAC1C</td>\n            <td>50,000</td>\n            <td class=\"forth-winning-count\">").concat(winningCount.forthWinner, "\uAC1C</td>\n          </tr>\n          <tr>\n            <td>5\uAC1C</td>\n            <td>1,500,000</td>\n            <td class=\"third-winning-count\">").concat(winningCount.thirdWinner, "\uAC1C</td>\n          </tr>\n          <tr>\n            <td>5\uAC1C+\uBCF4\uB108\uC2A4\uBCFC</td>\n            <td>30,000,000</td>\n            <td class=\"second-winning-count\">").concat(winningCount.secondWinner, "\uAC1C</td>\n          </tr>\n          <tr>\n            <td>6\uAC1C</td>\n            <td>2,000,000,000</td>\n            <td class=\"first-winning-count\">").concat(winningCount.firstWinner, "\uAC1C</td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <td colspan=\"3\" class=\"rate-of-return\">\uB2F9\uC2E0\uC758 \uCD1D \uC218\uC775\uB960\uC740 ").concat(rateOfReturn, "%\uC785\uB2C8\uB2E4.</td>\n          </tr>\n        </tfoot>\n      </table>\n      <button id=\"restart-button\">\uB2E4\uC2DC \uC2DC\uC791\uD558\uAE30</button>\n    </section>\n    ");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTemplate);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isEqualToZero": () => (/* binding */ isEqualToZero),
/* harmony export */   "isNegativeInteger": () => (/* binding */ isNegativeInteger),
/* harmony export */   "hasRemainder": () => (/* binding */ hasRemainder),
/* harmony export */   "getPurchasedLottoCount": () => (/* binding */ getPurchasedLottoCount),
/* harmony export */   "isOutOfRange": () => (/* binding */ isOutOfRange),
/* harmony export */   "isDuplicateNumbers": () => (/* binding */ isDuplicateNumbers),
/* harmony export */   "getValidWinningNumberAndBonusNumber": () => (/* binding */ getValidWinningNumberAndBonusNumber),
/* harmony export */   "createRandomNumberList": () => (/* binding */ createRandomNumberList),
/* harmony export */   "shuffleArray": () => (/* binding */ shuffleArray),
/* harmony export */   "countingDuplicates": () => (/* binding */ countingDuplicates),
/* harmony export */   "getRateOfReturn": () => (/* binding */ getRateOfReturn),
/* harmony export */   "changeToUpperSnakeCase": () => (/* binding */ changeToUpperSnakeCase),
/* harmony export */   "findDuplicateIndex": () => (/* binding */ findDuplicateIndex),
/* harmony export */   "isUniqueWinningNumber": () => (/* binding */ isUniqueWinningNumber)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/js/constants.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/js/dom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var isString = function isString(payment) {
  return typeof payment === 'string';
};
var isEqualToZero = function isEqualToZero(payment) {
  return payment === 0;
};
var isNegativeInteger = function isNegativeInteger(payment) {
  return Number.isInteger(payment) && payment < 0;
};
var hasRemainder = function hasRemainder(payment, price) {
  return payment % price !== 0;
};
var getPurchasedLottoCount = function getPurchasedLottoCount(payment, price) {
  if (isString(payment) || isNegativeInteger(payment) || isEqualToZero(payment)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.MONEY_OUT_OF_RANGE);
  }

  if (hasRemainder(payment, price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.MONEY_OUT_OF_STANDARD);
  }

  return parseInt(payment / price);
};
var isOutOfRange = function isOutOfRange(winningNumberList, bonusNumber) {
  var winningNumbers = [].concat(_toConsumableArray(winningNumberList), [bonusNumber]);
  var lottoAllNumberList = Array.from({
    length: _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.MAX_NUMBER
  }, function (_, index) {
    return index + 1;
  });
  return !winningNumbers.every(function (winningNumber) {
    return lottoAllNumberList.includes(winningNumber);
  });
};
var isDuplicateNumbers = function isDuplicateNumbers(winningNumberList, bonusNumber) {
  var winningNumbers = [].concat(_toConsumableArray(winningNumberList), [bonusNumber]);
  return winningNumbers.length !== new Set(winningNumbers).size;
};
var getValidWinningNumberAndBonusNumber = function getValidWinningNumberAndBonusNumber(winningNumberList, bonusNumber) {
  if (isOutOfRange(winningNumberList, bonusNumber) || isDuplicateNumbers(winningNumberList, bonusNumber)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.NOT_DUPLICATED_NUMBERS);
  }

  return {
    winningNumberList: winningNumberList,
    bonusNumber: bonusNumber
  };
};
var createRandomNumberList = function createRandomNumberList() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants__WEBPACK_IMPORTED_MODULE_0__.LOTTO.MAX_NUMBER;
  return Array.from({
    length: length
  }, function (_, index) {
    return index + 1;
  });
};
var shuffleArray = function shuffleArray(array) {
  var currentIndex = array.length;
  var randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    var _ref = [array[randomIndex], array[currentIndex]];
    array[currentIndex] = _ref[0];
    array[randomIndex] = _ref[1];
  }

  return array;
};
var countingDuplicates = function countingDuplicates(userLottoList, lastWeekLottoList) {
  var count = 0;
  userLottoList.forEach(function (userLottoNumber) {
    lastWeekLottoList.forEach(function (lastWeekLottoNumber) {
      if (userLottoNumber === lastWeekLottoNumber) {
        count++;
      }
    });
  });
  return count;
};
var getRateOfReturn = function getRateOfReturn(totalWinningAmount, purchasedAmount) {
  return Number(((totalWinningAmount - purchasedAmount) / purchasedAmount * 100).toFixed(2));
};
var changeToUpperSnakeCase = function changeToUpperSnakeCase(string) {
  return string.split('').map(function (character) {
    if (character === character.toUpperCase()) {
      return "_".concat(character.toUpperCase());
    }

    return character.toUpperCase();
  }).join('');
};
var findDuplicateIndex = function findDuplicateIndex(checkWinningNumbers, winningNumber) {
  return checkWinningNumbers.findIndex(function (checkWinningNumber) {
    return checkWinningNumber === winningNumber;
  });
};
var isUniqueWinningNumber = function isUniqueWinningNumber(_ref2) {
  var winningNumberElements = _ref2.winningNumberElements,
      winningNumberElement = _ref2.winningNumberElement,
      previousWinningNumbers = _ref2.previousWinningNumbers,
      currentWinningNumber = _ref2.currentWinningNumber;

  if (!previousWinningNumbers.includes(currentWinningNumber)) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeBackgroundColor)({
      element: winningNumberElement,
      addClassName: 'background-color-white',
      removeClassName: 'background-color-red'
    });
    return true;
  }

  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeBackgroundColor)({
    element: winningNumberElements[findDuplicateIndex(previousWinningNumbers, currentWinningNumber)],
    addClassName: 'background-color-red',
    removeClassName: 'background-color-white'
  });
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeBackgroundColor)({
    element: winningNumberElement,
    addClassName: 'background-color-red',
    removeClassName: 'background-color-white'
  });
  return false;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/toggle_off.svg */ "./images/toggle_off.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/toggle_on.svg */ "./images/toggle_on.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/exit_button.svg */ "./images/exit_button.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* font Roboto */\n/* reset css */\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #e5e5e5;\n  height: 100vh;\n}\n\n/* ****** */\n/* COMMON */\n/* ****** */\np,\nlabel {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\ninput {\n  border: 1px solid #b4b4b4;\n}\n\ninput:invalid {\n  border-color: rgb(250, 105, 105);\n  background-color: rgb(254, 234, 234);\n}\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput:valid,\ninput:focus {\n  outline: 1px solid #00bcd4;\n  border: none;\n}\n\nbutton {\n  background: inherit;\n  border: none;\n  box-shadow: none;\n  padding: 0;\n  overflow: visible;\n  cursor: pointer;\n}\n\n.invisible {\n  display: none;\n}\n\n.background-color-red {\n  background-color: rgb(254, 234, 234);\n}\n\n.background-color-white {\n  background-color: #fff;\n}\n\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button.disabled,\n#payment-section .payment-form #payment-button.disabled {\n  background-color: #828282;\n  opacity: 0.6;\n\n  cursor: default;\n}\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button.disabled:hover,\n#payment-section .payment-form #payment-button.disabled:hover {\n  background-color: #828282;\n  opacity: 0.6;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n\n  position: relative;\n\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-color: white;\n\n  height: 727px;\n  width: 414px;\n  padding: 52px 16px;\n\n  overflow: scroll;\n}\n\nh1 {\n  font-size: 34px;\n  font-weight: 600;\n  line-height: 36px;\n  text-align: center;\n\n  margin-bottom: 16px;\n}\n\n/* *************** */\n/* payment-section */\n/* *************** */\n#payment-section {\n  margin-bottom: 28px;\n}\n\n#payment-section label {\n  display: block;\n\n  margin-bottom: 4px;\n}\n\n#payment-section .payment-form {\n  display: flex;\n}\n\n#payment-section .payment-form #payment-input {\n  flex-grow: 1;\n\n  border-radius: 4px;\n\n  padding: 8px 8px;\n  margin-right: 16px;\n}\n\n#payment-section .payment-form #payment-input::placeholder {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: #8b8b8b;\n\n  margin: 0 10px;\n}\n\n#payment-section .payment-form #payment-button {\n  width: 56px;\n  height: 36px;\n}\n\n#lotto-result-section #restart-button,\n#payment-section .payment-form #payment-button,\n#last-week-winning-number-section .winning-number-form #result-checking-button {\n  font-weight: 700;\n  font-size: 14px;\n  color: white;\n\n  background-color: #00bcd4;\n\n  border-radius: 4px;\n  transition: all 300ms ease-in-out;\n}\n\n#lotto-result-section #restart-button:hover,\n#payment-section .payment-form #payment-button:hover,\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button:hover {\n  background-color: #80deea;\n}\n\n#lotto-result-section #restart-button:active,\n#payment-section .payment-form #payment-button:active,\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button:active {\n  transform: translateY(2px);\n}\n\n#lotto-result-section #restart-button:focus {\n  outline: none;\n}\n\n/* **************************** */\n/* purchased-lotto-list section */\n/* **************************** */\n#purchased-lotto-list-section {\n  display: flex;\n  justify-content: space-between;\n\n  margin-bottom: 32px;\n}\n\n#purchased-lotto-list-section .lotto-list-container .purchased-total-count {\n  margin-bottom: 8px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list {\n  display: flex;\n  flex-wrap: wrap;\n\n  gap: 8px;\n  max-width: 320px;\n}\n\n#purchased-lotto-list-section\n  .lotto-list-container\n  #lotto-list.direction-column {\n  flex-direction: column;\n\n  gap: 4px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list .lotto-ticket {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n}\n\n#purchased-lotto-list-section\n  .lotto-list-container\n  #lotto-list\n  .lotto.display-flex {\n  display: flex;\n  align-items: center;\n}\n\n#purchased-lotto-list-section\n  .lotto-list-container\n  #lotto-list\n  .lotto.display-flex\n  .lotto-ticket {\n  margin-right: 8px;\n}\n\n#purchased-lotto-list-section .lotto-list-toggle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#purchased-lotto-list-section .lotto-list-toggle-container p {\n  margin-bottom: 12px;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button {\n  width: 34px;\n  height: 20px;\n\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button.toggle-switch {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  transition: all 300ms ease-in-out;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button:hover,\n#purchased-lotto-list-section #lotto-list-toggle-button.toggle-switch:hover {\n  opacity: 85%;\n  transform: scale(1.05);\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button:active,\n#purchased-lotto-list-section #lotto-list-toggle-button.toggle-switch:active {\n  transform: translateY(1px);\n}\n\n/* ******************************** */\n/* last-week-winning-number-section */\n/* ******************************** */\n#last-week-winning-number-section {\n  margin-bottom: 24px;\n}\n\n#last-week-winning-number-section p {\n  margin-bottom: 8px;\n}\n\n#last-week-winning-number-section .winning-number-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n#last-week-winning-number-section\n  .winning-number-container\n  #last-week-number-list {\n  display: flex;\n\n  gap: 8px;\n}\n\n#last-week-winning-number-section\n  .winning-number-container\n  .last-week-bonus-number-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#last-week-winning-number-section\n  .winning-number-container\n  .last-week-bonus-number-input,\n#last-week-winning-number-section\n  .winning-number-container\n  #last-week-number-list\n  .last-week-number-input {\n  text-align: center;\n\n  width: 34px;\n  height: 36px;\n  padding: 0;\n\n  border-radius: 4px;\n}\n\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button.disabled,\n#last-week-winning-number-section .winning-number-form #result-checking-button {\n  width: 100%;\n  margin-top: 24px;\n  height: 36px;\n  padding: 6px 6px 8px;\n}\n\n/* ******************** */\n/* lotto-result-section */\n/* ******************** */\n#lotto-result-section {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n\n  width: 350px;\n  height: 500px;\n\n  padding: 0 16px;\n\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n#lotto-result-section #exit-button {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  width: 14px;\n  height: 14px;\n}\n\n#lotto-result-section table {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n\n  width: 100%;\n  margin-bottom: 32px;\n}\n\n#lotto-result-section table #lotto-result-table-caption {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n\n  margin: 40px 0 32px;\n}\n\n#lotto-result-section table thead {\n  font-weight: 600;\n}\n\n#lotto-result-section table tr {\n  border-top: 1px solid #dcdcdc;\n  border-bottom: 1px solid #dcdcdc;\n}\n\n#lotto-result-section table th,\n#lotto-result-section table td {\n  text-align: center;\n  padding: 8px 0;\n}\n\n#lotto-result-section table tfoot td {\n  font-weight: 600;\n  padding: 16px 0 0;\n}\n\n#lotto-result-section table tfoot tr {\n  border-bottom: none;\n}\n\n#lotto-result-section #restart-button {\n  display: block;\n\n  line-height: 16px;\n  letter-spacing: 1.25px;\n\n  width: 152px;\n  height: 36px;\n\n  padding: 6px 6px 6px 8px;\n  margin: 32px auto 49px;\n}\n\n/* ******************** */\n/* cover-the-background */\n/* ******************** */\n#cover-the-background {\n  position: fixed;\n\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  height: 727px;\n  width: 414px;\n\n  background-color: rgba(0, 0, 0, 0.5);\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB,cAAc;;AAGd;EACE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,yBAAyB;EACzB,aAAa;AACf;;AAEA,WAAW;AACX,WAAW;AACX,WAAW;AACX;;EAEE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,oCAAoC;AACtC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;;EAEE,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;;EAIE,yBAAyB;EACzB,YAAY;;EAEZ,eAAe;AACjB;AACA;;;;EAIE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,kBAAkB;;EAElB,qCAAqC;EACrC,kBAAkB;EAClB,uBAAuB;;EAEvB,aAAa;EACb,YAAY;EACZ,kBAAkB;;EAElB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;;EAElB,mBAAmB;AACrB;;AAEA,oBAAoB;AACpB,oBAAoB;AACpB,oBAAoB;AACpB;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;;EAEd,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;;EAEZ,kBAAkB;;EAElB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;;EAEd,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;;EAGE,gBAAgB;EAChB,eAAe;EACf,YAAY;;EAEZ,yBAAyB;;EAEzB,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;;;;;EAKE,yBAAyB;AAC3B;;AAEA;;;;;EAKE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA,iCAAiC;AACjC,iCAAiC;AACjC,iCAAiC;AACjC;EACE,aAAa;EACb,8BAA8B;;EAE9B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;;EAEf,QAAQ;EACR,gBAAgB;AAClB;;AAEA;;;EAGE,sBAAsB;;EAEtB,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;;;;EAIE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;;;;EAKE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;;EAEZ,yDAAoD;EACpD,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,yDAAmD;EACnD,iCAAiC;AACnC;;AAEA;;EAEE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,0BAA0B;AAC5B;;AAEA,qCAAqC;AACrC,qCAAqC;AACrC,qCAAqC;AACrC;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;EAGE,aAAa;;EAEb,QAAQ;AACV;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;;;;;;;EAOE,kBAAkB;;EAElB,WAAW;EACX,YAAY;EACZ,UAAU;;EAEV,kBAAkB;AACpB;;AAEA;;;;EAIE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;AACtB;;AAEA,yBAAyB;AACzB,yBAAyB;AACzB,yBAAyB;AACzB;EACE,eAAe;EACf,QAAQ;EACR,SAAS;;EAET,YAAY;EACZ,aAAa;;EAEb,eAAe;;EAEf,gCAAgC;EAChC,sBAAsB;;EAEtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,yDAAqD;;EAErD,kBAAkB;EAClB,SAAS;EACT,WAAW;;EAEX,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;;EAErB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;;EAEtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;;EAEE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;;EAEd,iBAAiB;EACjB,sBAAsB;;EAEtB,YAAY;EACZ,YAAY;;EAEZ,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA,yBAAyB;AACzB,yBAAyB;AACzB,yBAAyB;AACzB;EACE,eAAe;;EAEf,QAAQ;EACR,SAAS;;EAET,gCAAgC;;EAEhC,aAAa;EACb,YAAY;;EAEZ,oCAAoC;AACtC","sourcesContent":["/* font Roboto */\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\n/* reset css */\n@import url('https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css');\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #e5e5e5;\n  height: 100vh;\n}\n\n/* ****** */\n/* COMMON */\n/* ****** */\np,\nlabel {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\ninput {\n  border: 1px solid #b4b4b4;\n}\n\ninput:invalid {\n  border-color: rgb(250, 105, 105);\n  background-color: rgb(254, 234, 234);\n}\n\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput:valid,\ninput:focus {\n  outline: 1px solid #00bcd4;\n  border: none;\n}\n\nbutton {\n  background: inherit;\n  border: none;\n  box-shadow: none;\n  padding: 0;\n  overflow: visible;\n  cursor: pointer;\n}\n\n.invisible {\n  display: none;\n}\n\n.background-color-red {\n  background-color: rgb(254, 234, 234);\n}\n\n.background-color-white {\n  background-color: #fff;\n}\n\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button.disabled,\n#payment-section .payment-form #payment-button.disabled {\n  background-color: #828282;\n  opacity: 0.6;\n\n  cursor: default;\n}\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button.disabled:hover,\n#payment-section .payment-form #payment-button.disabled:hover {\n  background-color: #828282;\n  opacity: 0.6;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n\n  position: relative;\n\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  background-color: white;\n\n  height: 727px;\n  width: 414px;\n  padding: 52px 16px;\n\n  overflow: scroll;\n}\n\nh1 {\n  font-size: 34px;\n  font-weight: 600;\n  line-height: 36px;\n  text-align: center;\n\n  margin-bottom: 16px;\n}\n\n/* *************** */\n/* payment-section */\n/* *************** */\n#payment-section {\n  margin-bottom: 28px;\n}\n\n#payment-section label {\n  display: block;\n\n  margin-bottom: 4px;\n}\n\n#payment-section .payment-form {\n  display: flex;\n}\n\n#payment-section .payment-form #payment-input {\n  flex-grow: 1;\n\n  border-radius: 4px;\n\n  padding: 8px 8px;\n  margin-right: 16px;\n}\n\n#payment-section .payment-form #payment-input::placeholder {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  color: #8b8b8b;\n\n  margin: 0 10px;\n}\n\n#payment-section .payment-form #payment-button {\n  width: 56px;\n  height: 36px;\n}\n\n#lotto-result-section #restart-button,\n#payment-section .payment-form #payment-button,\n#last-week-winning-number-section .winning-number-form #result-checking-button {\n  font-weight: 700;\n  font-size: 14px;\n  color: white;\n\n  background-color: #00bcd4;\n\n  border-radius: 4px;\n  transition: all 300ms ease-in-out;\n}\n\n#lotto-result-section #restart-button:hover,\n#payment-section .payment-form #payment-button:hover,\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button:hover {\n  background-color: #80deea;\n}\n\n#lotto-result-section #restart-button:active,\n#payment-section .payment-form #payment-button:active,\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button:active {\n  transform: translateY(2px);\n}\n\n#lotto-result-section #restart-button:focus {\n  outline: none;\n}\n\n/* **************************** */\n/* purchased-lotto-list section */\n/* **************************** */\n#purchased-lotto-list-section {\n  display: flex;\n  justify-content: space-between;\n\n  margin-bottom: 32px;\n}\n\n#purchased-lotto-list-section .lotto-list-container .purchased-total-count {\n  margin-bottom: 8px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list {\n  display: flex;\n  flex-wrap: wrap;\n\n  gap: 8px;\n  max-width: 320px;\n}\n\n#purchased-lotto-list-section\n  .lotto-list-container\n  #lotto-list.direction-column {\n  flex-direction: column;\n\n  gap: 4px;\n}\n\n#purchased-lotto-list-section .lotto-list-container #lotto-list .lotto-ticket {\n  font-weight: 600;\n  font-size: 34px;\n  line-height: 36px;\n}\n\n#purchased-lotto-list-section\n  .lotto-list-container\n  #lotto-list\n  .lotto.display-flex {\n  display: flex;\n  align-items: center;\n}\n\n#purchased-lotto-list-section\n  .lotto-list-container\n  #lotto-list\n  .lotto.display-flex\n  .lotto-ticket {\n  margin-right: 8px;\n}\n\n#purchased-lotto-list-section .lotto-list-toggle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#purchased-lotto-list-section .lotto-list-toggle-container p {\n  margin-bottom: 12px;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button {\n  width: 34px;\n  height: 20px;\n\n  background-image: url('../../images/toggle_off.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button.toggle-switch {\n  background-image: url('../../images/toggle_on.svg');\n  transition: all 300ms ease-in-out;\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button:hover,\n#purchased-lotto-list-section #lotto-list-toggle-button.toggle-switch:hover {\n  opacity: 85%;\n  transform: scale(1.05);\n}\n\n#purchased-lotto-list-section #lotto-list-toggle-button:active,\n#purchased-lotto-list-section #lotto-list-toggle-button.toggle-switch:active {\n  transform: translateY(1px);\n}\n\n/* ******************************** */\n/* last-week-winning-number-section */\n/* ******************************** */\n#last-week-winning-number-section {\n  margin-bottom: 24px;\n}\n\n#last-week-winning-number-section p {\n  margin-bottom: 8px;\n}\n\n#last-week-winning-number-section .winning-number-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n#last-week-winning-number-section\n  .winning-number-container\n  #last-week-number-list {\n  display: flex;\n\n  gap: 8px;\n}\n\n#last-week-winning-number-section\n  .winning-number-container\n  .last-week-bonus-number-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#last-week-winning-number-section\n  .winning-number-container\n  .last-week-bonus-number-input,\n#last-week-winning-number-section\n  .winning-number-container\n  #last-week-number-list\n  .last-week-number-input {\n  text-align: center;\n\n  width: 34px;\n  height: 36px;\n  padding: 0;\n\n  border-radius: 4px;\n}\n\n#last-week-winning-number-section\n  .winning-number-form\n  #result-checking-button.disabled,\n#last-week-winning-number-section .winning-number-form #result-checking-button {\n  width: 100%;\n  margin-top: 24px;\n  height: 36px;\n  padding: 6px 6px 8px;\n}\n\n/* ******************** */\n/* lotto-result-section */\n/* ******************** */\n#lotto-result-section {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n\n  width: 350px;\n  height: 500px;\n\n  padding: 0 16px;\n\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n#lotto-result-section #exit-button {\n  background-image: url('../../images/exit_button.svg');\n\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  width: 14px;\n  height: 14px;\n}\n\n#lotto-result-section table {\n  font-size: 15px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n\n  width: 100%;\n  margin-bottom: 32px;\n}\n\n#lotto-result-section table #lotto-result-table-caption {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n\n  margin: 40px 0 32px;\n}\n\n#lotto-result-section table thead {\n  font-weight: 600;\n}\n\n#lotto-result-section table tr {\n  border-top: 1px solid #dcdcdc;\n  border-bottom: 1px solid #dcdcdc;\n}\n\n#lotto-result-section table th,\n#lotto-result-section table td {\n  text-align: center;\n  padding: 8px 0;\n}\n\n#lotto-result-section table tfoot td {\n  font-weight: 600;\n  padding: 16px 0 0;\n}\n\n#lotto-result-section table tfoot tr {\n  border-bottom: none;\n}\n\n#lotto-result-section #restart-button {\n  display: block;\n\n  line-height: 16px;\n  letter-spacing: 1.25px;\n\n  width: 152px;\n  height: 36px;\n\n  padding: 6px 6px 6px 8px;\n  margin: 32px auto 49px;\n}\n\n/* ******************** */\n/* cover-the-background */\n/* ******************** */\n#cover-the-background {\n  position: fixed;\n\n  top: 50%;\n  left: 50%;\n\n  transform: translate(-50%, -50%);\n\n  height: 727px;\n  width: 414px;\n\n  background-color: rgba(0, 0, 0, 0.5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./images/exit_button.svg":
/*!********************************!*\
  !*** ./images/exit_button.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbd1de2f83cda5ed3d38.svg";

/***/ }),

/***/ "./images/toggle_off.svg":
/*!*******************************!*\
  !*** ./images/toggle_off.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ce49890bd05ce1e4a1d.svg";

/***/ }),

/***/ "./images/toggle_on.svg":
/*!******************************!*\
  !*** ./images/toggle_on.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e528c4b32572cb18db2.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_LottoApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/LottoApp */ "./src/js/LottoApp.js");
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");



(function main() {
  new _js_LottoApp__WEBPACK_IMPORTED_MODULE_0__["default"]('#app');
})();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map