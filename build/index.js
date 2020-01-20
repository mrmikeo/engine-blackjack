module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INVALID = exports.INVALID = 'INVALID';
var RESTORE = exports.RESTORE = 'RESTORE';
var DEAL = exports.DEAL = 'DEAL';
var INSURANCE = exports.INSURANCE = 'INSURANCE';
var SPLIT = exports.SPLIT = 'SPLIT';
var HIT = exports.HIT = 'HIT';
var DOUBLE = exports.DOUBLE = 'DOUBLE';
var STAND = exports.STAND = 'STAND';
var SURRENDER = exports.SURRENDER = 'SURRENDER';
var SHOWDOWN = exports.SHOWDOWN = 'SHOWDOWN';
var DEALER_HIT = exports.DEALER_HIT = 'DEALER-HIT';
var RIGHT = exports.RIGHT = 'right';
var LEFT = exports.LEFT = 'left';
var STAGE_READY = exports.STAGE_READY = 'ready';
var STAGE_PLAYER_TURN_RIGHT = exports.STAGE_PLAYER_TURN_RIGHT = 'player-turn-right';
var STAGE_PLAYER_TURN_LEFT = exports.STAGE_PLAYER_TURN_LEFT = 'player-turn-left';
var STAGE_SHOWDOWN = exports.STAGE_SHOWDOWN = 'showdown';
var STAGE_DEALER_TURN = exports.STAGE_DEALER_TURN = 'dealer-turn';
var STAGE_DONE = exports.STAGE_DONE = 'done';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dealerHit = exports.showdown = exports.surrender = exports.stand = exports.double = exports.hit = exports.split = exports.insurance = exports.deal = exports.restore = exports.invalid = undefined;

var _constants = __webpack_require__(0);

var TYPES = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var invalid = exports.invalid = function invalid(action, info) {
  return {
    type: TYPES.INVALID,
    payload: {
      type: action.type,
      payload: action.payload,
      info: info
    }
  };
};
/*!
 engine-blackjack
 Copyright (C) 2016 Marco Casula

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

var restore = exports.restore = function restore() {
  return {
    type: TYPES.RESTORE
  };
};

var deal = exports.deal = function deal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$bet = _ref.bet,
      bet = _ref$bet === undefined ? 10 : _ref$bet,
      _ref$sideBets = _ref.sideBets,
      sideBets = _ref$sideBets === undefined ? { luckyLucky: 0 } : _ref$sideBets;

  return {
    type: TYPES.DEAL,
    payload: {
      bet: bet,
      sideBets: sideBets
    }
  };
};

var insurance = exports.insurance = function insurance(_ref2) {
  var _ref2$bet = _ref2.bet,
      bet = _ref2$bet === undefined ? 0 : _ref2$bet;

  return {
    type: TYPES.INSURANCE,
    payload: {
      bet: bet
    }
  };
};

var split = exports.split = function split() {
  return {
    type: TYPES.SPLIT
  };
};

var hit = exports.hit = function hit(_ref3) {
  var _ref3$position = _ref3.position,
      position = _ref3$position === undefined ? 'right' : _ref3$position;

  return {
    type: TYPES.HIT,
    payload: {
      position: position
    }
  };
};

var double = exports.double = function double(_ref4) {
  var _ref4$position = _ref4.position,
      position = _ref4$position === undefined ? 'right' : _ref4$position;

  return {
    type: TYPES.DOUBLE,
    payload: {
      position: position
    }
  };
};

var stand = exports.stand = function stand(_ref5) {
  var _ref5$position = _ref5.position,
      position = _ref5$position === undefined ? 'right' : _ref5$position;

  return {
    type: TYPES.STAND,
    payload: {
      position: position
    }
  };
};

var surrender = exports.surrender = function surrender() {
  return {
    type: TYPES.SURRENDER
  };
};

var showdown = exports.showdown = function showdown() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref6$dealerHoleCardO = _ref6.dealerHoleCardOnly,
      dealerHoleCardOnly = _ref6$dealerHoleCardO === undefined ? false : _ref6$dealerHoleCardO;

  return {
    type: TYPES.SHOWDOWN,
    payload: {
      dealerHoleCardOnly: dealerHoleCardOnly
    }
  };
};

var dealerHit = exports.dealerHit = function dealerHit() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dealerHoleCard = _ref7.dealerHoleCard;

  return {
    type: TYPES.DEALER_HIT,
    payload: {
      dealerHoleCard: dealerHoleCard
    }
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrizes = exports.getPrize = exports.isActionAllowed = exports.getSideBetsInfo = exports.isPerfectPairs = exports.getLuckyLuckyMultiplier = exports.isLuckyLucky = exports.getHandInfoAfterInsurance = exports.getHandInfoAfterSurrender = exports.getHandInfoAfterStand = exports.getHandInfoAfterDouble = exports.getHandInfoAfterHit = exports.getHandInfoAfterSplit = exports.getHandInfoAfterDeal = exports.getHandInfo = exports.countCards = exports.isSuited = exports.isSoftHand = exports.isBlackjack = exports.checkForBusted = exports.getHigherValidValue = exports.calculate = exports.isNullOrUndef = exports.isUndefined = exports.isNull = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/*!
 engine-blackjack
 Copyright (C) 2016 Marco Casula

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

var _luchyLuchy = __webpack_require__(6);

var _luchyLuchy2 = _interopRequireDefault(_luchyLuchy);

var _constants = __webpack_require__(0);

var TYPES = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNull = exports.isNull = function isNull(obj) {
  return obj === null;
};

var isUndefined = exports.isUndefined = function isUndefined(obj) {
  return obj === undefined;
};

var isNullOrUndef = exports.isNullOrUndef = function isNullOrUndef(obj) {
  return isUndefined(obj) || isNull(obj);
};

var calculate = exports.calculate = function calculate(array) {
  if (array.length === 1) {
    if (isNullOrUndef(array[0])) {
      return null;
    }
    var _value = array[0].value;
    return {
      hi: _value === 1 ? 11 : _value,
      lo: _value === 1 ? 1 : _value
    };
  }
  var aces = [];
  var value = array.reduce(function (memo, x) {
    if (x.value === 1) {
      aces.push(1);
      return memo;
    }
    memo += x.value;
    return memo;
  }, 0);
  return aces.reduce(function (memo) {
    if (memo.hi + 11 <= 21) {
      memo.hi += 11;
      memo.lo += 1;
    } else {
      memo.hi += 1;
      memo.lo += 1;
    }
    if (memo.hi > 21 && memo.lo <= 21) {
      memo.hi = memo.lo;
    }
    return memo;
  }, {
    hi: value,
    lo: value
  });
};

var getHigherValidValue = exports.getHigherValidValue = function getHigherValidValue(handValue) {
  return handValue.hi <= 21 ? handValue.hi : handValue.lo;
};

var checkForBusted = exports.checkForBusted = function checkForBusted(handValue) {
  return handValue.hi > 21 && handValue.lo === handValue.hi;
};

var isBlackjack = exports.isBlackjack = function isBlackjack(array) {
  return array.length === 2 && calculate(array).hi === 21;
};

var isSoftHand = exports.isSoftHand = function isSoftHand(array) {
  return array.some(function (x) {
    return x.value === 1;
  }) && array.reduce(function (memo, x) {
    memo += x.value === 1 && memo < 11 ? 11 : x.value;
    return memo;
  }, 0) === 17;
};

var isSuited = exports.isSuited = function isSuited() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (array.length === 0) {
    return false;
  }
  var suite = array[0].suite;
  return array.every(function (x) {
    return x.suite === suite;
  });
};

var countCards = exports.countCards = function countCards(array) {
  var systems = {
    'Hi-Lo': [-1, 1, 1, 1, 1, 1, 0, 0, 0, -1, -1, -1, -1]
  };
  return array.reduce(function (memo, x) {
    memo += systems['Hi-Lo'][x.value - 1];
    return memo;
  }, 0);
};

var getHandInfo = exports.getHandInfo = function getHandInfo(playerCards, dealerCards) {
  var hasSplit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var handValue = calculate(playerCards);
  if (!handValue) {
    return null;
  }
  var hasBlackjack = isBlackjack(playerCards) && hasSplit === false;
  var hasBusted = checkForBusted(handValue);
  var isClosed = hasBusted || hasBlackjack || handValue.hi === 21;
  var canDoubleDown = !isClosed && true;
  var canSplit = playerCards.length > 1 && playerCards[0].value === playerCards[1].value && !isClosed;
  var canInsure = dealerCards[0].value === 1 && !isClosed;
  return {
    cards: playerCards,
    playerValue: handValue,
    playerHasBlackjack: hasBlackjack,
    playerHasBusted: hasBusted,
    playerHasSurrendered: false,
    close: isClosed,
    availableActions: {
      double: canDoubleDown,
      split: canSplit,
      insurance: canInsure,
      hit: !isClosed,
      stand: !isClosed,
      surrender: !isClosed
    }
  };
};

var getHandInfoAfterDeal = exports.getHandInfoAfterDeal = function getHandInfoAfterDeal(playerCards, dealerCards, initialBet) {
  var hand = getHandInfo(playerCards, dealerCards);
  hand.bet = initialBet;
  // After deal, even if we got a blackjack the hand cannot be considered closed.
  var availableActions = hand.availableActions;
  hand.availableActions = _extends({}, availableActions, {
    stand: true,
    hit: true,
    surrender: true
  });
  return _extends({}, hand, {
    close: hand.playerHasBlackjack
  });
};

var getHandInfoAfterSplit = exports.getHandInfoAfterSplit = function getHandInfoAfterSplit(playerCards, dealerCards, initialBet) {
  var hand = getHandInfo(playerCards, dealerCards, true);
  var availableActions = hand.availableActions;
  hand.availableActions = _extends({}, availableActions, {
    split: false,
    double: !hand.close && playerCards.length === 2,
    insurance: false,
    surrender: false
  });
  hand.bet = initialBet;
  return hand;
};

var getHandInfoAfterHit = exports.getHandInfoAfterHit = function getHandInfoAfterHit(playerCards, dealerCards, initialBet, hasSplit) {
  var hand = getHandInfo(playerCards, dealerCards, hasSplit);
  var availableActions = hand.availableActions;
  hand.availableActions = _extends({}, availableActions, {
    double: playerCards.length === 2,
    split: false,
    insurance: false,
    surrender: false
  });
  hand.bet = initialBet;
  return hand;
};

var getHandInfoAfterDouble = exports.getHandInfoAfterDouble = function getHandInfoAfterDouble(playerCards, dealerCards, initialBet, hasSplit) {
  var hand = getHandInfoAfterHit(playerCards, dealerCards, initialBet, hasSplit);
  var availableActions = hand.availableActions;
  hand.availableActions = _extends({}, availableActions, {
    hit: false,
    stand: false
  });
  hand.bet = initialBet * 2;
  return _extends({}, hand, {
    close: true
  });
};

var getHandInfoAfterStand = exports.getHandInfoAfterStand = function getHandInfoAfterStand(handInfo) {
  return _extends({}, handInfo, {
    close: true,
    availableActions: {
      double: false,
      split: false,
      insurance: false,
      hit: false,
      stand: false,
      surrender: false
    }
  });
};

var getHandInfoAfterSurrender = exports.getHandInfoAfterSurrender = function getHandInfoAfterSurrender(handInfo) {
  var hand = getHandInfoAfterStand(handInfo);
  return _extends({}, hand, {
    playerHasSurrendered: true,
    close: true
  });
};

var getHandInfoAfterInsurance = exports.getHandInfoAfterInsurance = function getHandInfoAfterInsurance(playerCards, dealerCards) {
  var hand = getHandInfo(playerCards, dealerCards);
  var availableActions = hand.availableActions;
  hand.availableActions = _extends({}, availableActions, {
    stand: true,
    hit: true,
    surrender: true,
    insurance: false
  });
  return _extends({}, hand, {
    close: hand.playerHasBlackjack
  });
};

var isLuckyLucky = exports.isLuckyLucky = function isLuckyLucky(playerCards, dealerCards) {
  // Player hand and dealer's up card sum to 19, 20, or 21 ("Lucky Lucky")
  var v1 = calculate(playerCards).hi + calculate(dealerCards).hi;
  var v2 = calculate(playerCards).lo + calculate(dealerCards).lo;
  var v3 = calculate(playerCards).hi + calculate(dealerCards).lo;
  var v4 = calculate(playerCards).lo + calculate(dealerCards).hi;
  return v1 >= 19 && v1 <= 21 || v2 >= 19 && v2 <= 21 || v3 >= 19 && v3 <= 21 || v4 >= 19 && v4 <= 21;
};

var getLuckyLuckyMultiplier = exports.getLuckyLuckyMultiplier = function getLuckyLuckyMultiplier(playerCards, dealerCards) {
  var cards = [].concat(playerCards, dealerCards);
  var isSameSuite = isSuited(cards);
  var flatCards = cards.map(function (x) {
    return x.value;
  }).join('');
  var value = calculate(cards);
  return (0, _luchyLuchy2.default)(flatCards, isSameSuite, value);
};

var isPerfectPairs = exports.isPerfectPairs = function isPerfectPairs(playerCards) {
  return playerCards[0].value === playerCards[1].value;
};

var getSideBetsInfo = exports.getSideBetsInfo = function getSideBetsInfo(availableBets, sideBets, playerCards, dealerCards) {
  var sideBetsInfo = {
    luckyLucky: 0,
    perfectPairs: 0
  };
  if (availableBets.luckyLucky && sideBets.luckyLucky && isLuckyLucky(playerCards, dealerCards)) {
    var multiplier = getLuckyLuckyMultiplier(playerCards, dealerCards);
    sideBetsInfo.luckyLucky = sideBets.luckyLucky * multiplier;
  }
  if (availableBets.perfectPairs && sideBets.perfectPairs && isPerfectPairs(playerCards)) {
    // TODO: impl colored pairs
    // TODO: impl mixed pairs
    sideBetsInfo.perfectPairs = sideBets.perfectPairs * 5;
  }
  return sideBetsInfo;
};

var isActionAllowed = exports.isActionAllowed = function isActionAllowed(actionName, stage) {
  if (actionName === TYPES.RESTORE) {
    return true;
  }
  switch (stage) {
    case TYPES.STAGE_READY:
      {
        return [TYPES.RESTORE, TYPES.DEAL].indexOf(actionName) > -1;
      }
    case TYPES.STAGE_PLAYER_TURN_RIGHT:
      {
        return [TYPES.STAND, TYPES.INSURANCE, TYPES.SURRENDER, TYPES.SPLIT, TYPES.HIT, TYPES.DOUBLE].indexOf(actionName) > -1;
      }
    case TYPES.STAGE_PLAYER_TURN_LEFT:
      {
        return [TYPES.STAND, TYPES.HIT, TYPES.DOUBLE].indexOf(actionName) > -1;
      }
    case TYPES.SHOWDOWN:
      {
        return [TYPES.SHOWDOWN, TYPES.STAND].indexOf(actionName) > -1;
      }
    case TYPES.STAGE_DEALER_TURN:
      {
        return [TYPES.DEALER_HIT].indexOf(actionName) > -1;
      }
    default:
      {
        return false;
      }
  }
};

var getPrize = exports.getPrize = function getPrize(playerHand, dealerCards) {
  var _playerHand$close = playerHand.close,
      close = _playerHand$close === undefined ? false : _playerHand$close,
      _playerHand$playerHas = playerHand.playerHasSurrendered,
      playerHasSurrendered = _playerHand$playerHas === undefined ? true : _playerHand$playerHas,
      _playerHand$playerHas2 = playerHand.playerHasBlackjack,
      playerHasBlackjack = _playerHand$playerHas2 === undefined ? false : _playerHand$playerHas2,
      _playerHand$playerHas3 = playerHand.playerHasBusted,
      playerHasBusted = _playerHand$playerHas3 === undefined ? true : _playerHand$playerHas3,
      _playerHand$playerVal = playerHand.playerValue,
      playerValue = _playerHand$playerVal === undefined ? {} : _playerHand$playerVal,
      _playerHand$bet = playerHand.bet,
      bet = _playerHand$bet === undefined ? 0 : _playerHand$bet;

  var higherValidDealerValue = getHigherValidValue(calculate(dealerCards));
  var dealerHasBlackjack = isBlackjack(dealerCards);
  if (!close) {
    return 0;
  }
  if (playerHasBusted) {
    return 0;
  }
  if (playerHasSurrendered) {
    return bet / 2;
  }
  if (playerHasBlackjack && !dealerHasBlackjack) {
    return bet + bet * 1.5;
  }
  var dealerHasBusted = higherValidDealerValue > 21;
  if (dealerHasBusted) {
    return bet + bet;
  }
  var higherValidPlayerValue = getHigherValidValue(playerValue);
  if (higherValidPlayerValue > higherValidDealerValue) {
    return bet + bet;
  } else if (higherValidPlayerValue === higherValidDealerValue) {
    return bet;
  }
  return 0;
};

var getPrizes = exports.getPrizes = function getPrizes(_ref) {
  var history = _ref.history,
      _ref$handInfo = _ref.handInfo,
      left = _ref$handInfo.left,
      right = _ref$handInfo.right,
      dealerCards = _ref.dealerCards;

  var finalBet = history.reduce(function (memo, x) {
    memo += x.value;
    return memo;
  }, 0);
  var wonOnRight = getPrize(right, dealerCards);
  var wonOnLeft = getPrize(left, dealerCards);
  return {
    finalBet: finalBet,
    wonOnRight: wonOnRight,
    wonOnLeft: wonOnLeft
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultState = exports.getRules = exports.getDefaultSideBets = undefined;

var _constants = __webpack_require__(0);

var TYPES = _interopRequireWildcard(_constants);

var _deck = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*!
 engine-blackjack
 Copyright (C) 2016 Marco Casula

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
var getDefaultSideBets = exports.getDefaultSideBets = function getDefaultSideBets() {
  var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return {
    luckyLucky: active,
    perfectPairs: active,
    royalMatch: active,
    luckyLadies: active,
    inBet: active,
    MatchTheDealer: active
  };
};

var getRules = exports.getRules = function getRules(_ref) {
  var _ref$decks = _ref.decks,
      decks = _ref$decks === undefined ? 1 : _ref$decks,
      _ref$standOnSoft = _ref.standOnSoft17,
      standOnSoft17 = _ref$standOnSoft === undefined ? true : _ref$standOnSoft,
      _ref$double = _ref.double,
      double = _ref$double === undefined ? 'any' : _ref$double,
      _ref$split = _ref.split,
      split = _ref$split === undefined ? true : _ref$split,
      _ref$doubleAfterSplit = _ref.doubleAfterSplit,
      doubleAfterSplit = _ref$doubleAfterSplit === undefined ? true : _ref$doubleAfterSplit,
      _ref$surrender = _ref.surrender,
      surrender = _ref$surrender === undefined ? true : _ref$surrender,
      _ref$insurance = _ref.insurance,
      insurance = _ref$insurance === undefined ? true : _ref$insurance,
      _ref$showdownAfterAce = _ref.showdownAfterAceSplit,
      showdownAfterAceSplit = _ref$showdownAfterAce === undefined ? true : _ref$showdownAfterAce;

  return {
    decks: decks || 1,
    standOnSoft17: standOnSoft17,
    double: double,
    split: split,
    doubleAfterSplit: doubleAfterSplit,
    surrender: surrender,
    insurance: insurance,
    showdownAfterAceSplit: showdownAfterAceSplit
  };
};

var defaultState = exports.defaultState = function defaultState(rules) {
  return {
    hits: 0,
    initialBet: 0,
    finalBet: 0,
    finalWin: 0,
    wonOnRight: 0,
    wonOnLeft: 0,
    stage: TYPES.STAGE_READY,
    deck: (0, _deck.shuffle)((0, _deck.newDecks)(rules.decks)),
    handInfo: {
      left: {},
      right: {}
    },
    history: [],
    availableBets: getDefaultSideBets(true),
    sideBetsInfo: {},
    rules: rules,
    dealerHoleCard: null,
    dealerHasBlackjack: false,
    dealerHasBusted: false
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * engine-blackjack
 * Copyright(c) 2016 Marco Casula
 * GPL 2.0 Licensed
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = exports.actions = exports.presets = exports.engine = exports.constants = undefined;

var _constants = __webpack_require__(0);

var constants = _interopRequireWildcard(_constants);

var _engine = __webpack_require__(2);

var engine = _interopRequireWildcard(_engine);

var _presets = __webpack_require__(3);

var presets = _interopRequireWildcard(_presets);

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

var _game = __webpack_require__(5);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.constants = constants;
exports.engine = engine;
exports.presets = presets;
exports.actions = actions;
exports.Game = _game2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/*!
 engine-blackjack
 Copyright (C) 2016 Marco Casula

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

var _constants = __webpack_require__(0);

var TYPES = _interopRequireWildcard(_constants);

var _engine = __webpack_require__(2);

var engine = _interopRequireWildcard(_engine);

var _presets = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var actions = __webpack_require__(1);

var appendEpoch = function appendEpoch(obj) {
  var _obj$payload = obj.payload,
      payload = _obj$payload === undefined ? { bet: 0 } : _obj$payload;

  return Object.assign({}, obj, {
    value: payload.bet || 0,
    ts: new Date().getTime()
  });
};

var Game = function () {
  function Game(initialState) {
    var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _presets.getRules)({});

    _classCallCheck(this, Game);

    this.state = {};

    this.state = initialState ? Object.assign({}, initialState) : (0, _presets.defaultState)(rules);
    this.dispatch = this.dispatch.bind(this);
    this.getState = this.getState.bind(this);
    this.setState = this.setState.bind(this);
    this.enforceRules = this.enforceRules.bind(this);
    this._dispatch = this._dispatch.bind(this);
  }

  _createClass(Game, [{
    key: 'canDouble',
    value: function canDouble(double, playerValue) {
      if (double === 'none') {
        return false;
      } else if (double === '9or10') {
        return playerValue.hi === 9 || playerValue.hi === 10;
      } else if (double === '9or10or11') {
        return playerValue.hi >= 9 && playerValue.hi <= 11;
      } else if (double === '9thru15') {
        return playerValue.hi >= 9 && playerValue.hi <= 15;
      } else {
        return true;
      }
    }
  }, {
    key: 'enforceRules',
    value: function enforceRules(handInfo) {
      var availableActions = handInfo.availableActions;
      var playerValue = handInfo.playerValue;
      var _state = this.state,
          rules = _state.rules,
          history = _state.history;

      if (!this.canDouble(rules.double, playerValue)) {
        availableActions.double = false;
      }
      if (!rules.split) {
        availableActions.split = false;
      }
      if (!rules.surrender) {
        availableActions.surrender = false;
      }
      if (!rules.doubleAfterSplit) {
        if (history.some(function (x) {
          return x.type === TYPES.SPLIT;
        })) {
          availableActions.double = false;
        }
      }
      if (!rules.insurance) {
        availableActions.insurance = false;
      }
      return handInfo;
    }
  }, {
    key: 'getState',
    value: function getState() {
      return _extends({}, this.state);
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = _extends({}, this.state, state);
    }
  }, {
    key: 'dispatch',
    value: function dispatch(action) {
      var _state2 = this.state,
          stage = _state2.stage,
          handInfo = _state2.handInfo,
          history = _state2.history;
      var type = action.type,
          _action$payload = action.payload,
          payload = _action$payload === undefined ? {} : _action$payload;
      var _payload$position = payload.position,
          position = _payload$position === undefined ? TYPES.RIGHT : _payload$position;

      var isLeft = position === TYPES.LEFT;
      var historyHasSplit = history.some(function (x) {
        return x.type === TYPES.SPLIT;
      });
      var hand = handInfo[position];

      var isActionAllowed = engine.isActionAllowed(type, stage);

      if (!isActionAllowed) {
        return this._dispatch(actions.invalid(action, type + ' is not allowed when stage is ' + stage));
      }

      var whiteList = [TYPES.RESTORE, TYPES.DEAL, TYPES.SHOWDOWN];

      if (isActionAllowed && whiteList.some(function (x) {
        return x === type;
      })) {
        // this is a safe action. We do not need to check the status of the stage
        // so we return the result now!
        if (type === TYPES.DEAL && typeof payload.bet !== 'number') {
          return this._dispatch(actions.invalid(action, type + ' without bet value on stage ' + stage));
        }
        return this._dispatch(action);
      }

      if (hand.close) {
        // TODO: consolidate this one, probably is just enough to consider the availableActions (see more below)
        return this._dispatch(actions.invalid(action, type + ' is not allowed because "' + position + '" side of the table is closed on "' + stage + '"'));
      }

      if (isLeft && !historyHasSplit) {
        // You want to do something on "left" but no split found in history.
        // default side is "right". When an action want to edit the "left" side of the table
        // a valid split should be appear in the history. If not, "left" position is not ready to be changed
        if (!history.some(function (x) {
          return x.type === TYPES.SPLIT;
        })) {
          return this._dispatch(actions.invalid(action, type + ' is not allowed because there is no SPLIT in current stage "' + stage + '"'));
        }
      }

      if (isLeft && !handInfo.right.close) {
        // You want to do something on "left" but "right" is still open
        return this._dispatch(actions.invalid(action, type + ' is not allowed because you need to finish "left" hand "' + stage + '"'));
      }

      if (!hand.availableActions[type.toLowerCase()]) {
        return this._dispatch(actions.invalid(action, type + ' is not currently allowed on position "' + position + '". Stage is "' + stage + '"'));
      }

      return this._dispatch(action);
    }
  }, {
    key: '_dispatch',
    value: function _dispatch(action) {
      switch (action.type) {
        case TYPES.DEAL:
          {
            var _action$payload2 = action.payload,
                bet = _action$payload2.bet,
                sideBets = _action$payload2.sideBets;
            var _state3 = this.state,
                insurance = _state3.rules.insurance,
                availableBets = _state3.availableBets,
                history = _state3.history,
                hits = _state3.hits;
            /*
            const playerCards = this.state.deck.splice(this.state.deck.length - 2, 2)
            const dealerCards = this.state.deck.splice(this.state.deck.length - 1, 1)
            playerCards.concat(this.state.deck.splice(this.state.deck.length - 2, 2)
            const dealerHoleCard = this.state.deck.splice(this.state.deck.length - 1, 1)[ 0 ]
            */

            var playerDeal = this.state.deck.splice(this.state.deck.length - 1, 1);
            var dealerHoleCard = this.state.deck.splice(this.state.deck.length - 1, 1)[0];
            playerDeal = playerDeal.concat(this.state.deck.splice(this.state.deck.length - 1, 1));
            var dealerCards = this.state.deck.splice(this.state.deck.length - 1, 1);

            var playerCards = playerDeal;

            var dealerValue = engine.calculate(dealerCards);
            var dealerHasBlackjack = engine.isBlackjack(dealerCards.concat([dealerHoleCard]));
            var right = this.enforceRules(engine.getHandInfoAfterDeal(playerCards, dealerCards, bet));
            if (insurance && dealerValue.lo === 1) {
              dealerHasBlackjack = false;
              right.availableActions = _extends({}, right.availableActions, {
                stand: false,
                double: false,
                hit: false,
                split: false,
                surrender: false
              });
            }
            var sideBetsInfo = engine.getSideBetsInfo(availableBets, sideBets, playerCards, dealerCards);
            var historyItem = appendEpoch(_extends({}, action, {
              right: playerCards,
              dealerCards: dealerCards
            }));
            this.setState({
              initialBet: bet,
              stage: TYPES.STAGE_PLAYER_TURN_RIGHT,
              dealerCards: dealerCards,
              dealerHoleCard: dealerHoleCard,
              dealerValue: dealerValue,
              dealerHasBlackjack: dealerHasBlackjack,
              deck: this.state.deck.filter(function (x) {
                return dealerCards.concat(playerCards).indexOf(x) === -1;
              }),
              cardCount: engine.countCards(playerCards.concat(dealerCards)),
              handInfo: {
                left: {},
                right: right
              },
              sideBetsInfo: sideBetsInfo,
              availableBets: (0, _presets.getDefaultSideBets)(false),
              history: history.concat(historyItem),
              hits: hits + 1
            });

            if (right.playerHasBlackjack) {
              // purpose of the game archived !!!
              this._dispatch(actions.showdown());
              break;
            }
            if (dealerHasBlackjack) {
              if (!right.availableActions.insurance) {
                // nothing left, let's go and tell the customer he loses this game
                this._dispatch(actions.showdown());
              }
              // else
              // in this case, the game must continue in "player-turn-right"
              // waiting for the insurance action
            }
            break;
          }
        case TYPES.INSURANCE:
          {
            var _action$payload$bet = action.payload.bet,
                _bet = _action$payload$bet === undefined ? 0 : _action$payload$bet;

            var _state4 = this.state,
                _sideBetsInfo = _state4.sideBetsInfo,
                handInfo = _state4.handInfo,
                _dealerCards = _state4.dealerCards,
                _dealerHoleCard = _state4.dealerHoleCard,
                initialBet = _state4.initialBet,
                _history = _state4.history,
                _hits = _state4.hits;

            var _dealerHasBlackjack = engine.isBlackjack(_dealerCards.concat([_dealerHoleCard]));
            var insuranceValue = _bet > 0 ? initialBet / 2 : 0;
            var isFirstCardAce = _dealerCards[0].value === 1;
            var insurancePrize = isFirstCardAce && _dealerHasBlackjack && insuranceValue > 0 && _bet > 0 ? insuranceValue * 3 : 0;
            var _right = this.enforceRules(engine.getHandInfoAfterInsurance(handInfo.right.cards, _dealerCards));
            _right.bet = initialBet;
            _right.close = _dealerHasBlackjack;
            var _historyItem = appendEpoch(_extends({}, action, {
              payload: { bet: insuranceValue || 0 }
            }));
            this.setState({
              handInfo: { left: {}, right: _right },
              history: _history.concat(_historyItem),
              hits: _hits + 1,
              sideBetsInfo: _extends({}, _sideBetsInfo, {
                insurance: {
                  risk: insuranceValue,
                  win: insurancePrize
                }
              })
            });
            if (_dealerHasBlackjack) {
              this._dispatch(actions.showdown());
            }
            break;
          }
        case TYPES.SPLIT:
          {
            var _state5 = this.state,
                rules = _state5.rules,
                _initialBet = _state5.initialBet,
                _handInfo = _state5.handInfo,
                _dealerCards2 = _state5.dealerCards,
                _history2 = _state5.history,
                _hits2 = _state5.hits;

            var deck = this.state.deck;
            var playerCardsLeftPosition = [_handInfo.right.cards[0]];
            var playerCardsRightPosition = [_handInfo.right.cards[1]];
            var forceShowdown = rules.showdownAfterAceSplit && playerCardsRightPosition[0].value === 1;
            var cardRight = deck.splice(deck.length - 2, 1);
            var cardLeft = deck.splice(deck.length - 1, 1);
            deck = deck.filter(function (x) {
              return [cardLeft, cardRight].indexOf(x) === -1;
            });
            playerCardsLeftPosition.push(cardLeft[0]);
            playerCardsRightPosition.push(cardRight[0]);
            var _historyItem2 = appendEpoch(_extends({}, action, {
              payload: { bet: _initialBet },
              left: playerCardsLeftPosition,
              right: playerCardsRightPosition
            }));
            var left = this.enforceRules(engine.getHandInfoAfterSplit(playerCardsLeftPosition, _dealerCards2, _initialBet));
            var _right2 = this.enforceRules(engine.getHandInfoAfterSplit(playerCardsRightPosition, _dealerCards2, _initialBet));
            var stage = '';
            if (forceShowdown) {
              stage = TYPES.STAGE_SHOWDOWN;
              left.close = true;
              _right2.close = true;
            } else {
              if (_right2.close) {
                stage = TYPES.STAGE_PLAYER_TURN_LEFT;
              } else {
                stage = TYPES.STAGE_PLAYER_TURN_RIGHT;
              }
            }
            if (_right2.close && left.close) {
              stage = TYPES.STAGE_SHOWDOWN;
            }
            this.setState({
              stage: stage,
              handInfo: {
                left: left,
                right: _right2
              },
              deck: deck,
              history: _history2.concat(_historyItem2),
              hits: _hits2 + 1
            });
            if (stage === TYPES.STAGE_SHOWDOWN) {
              this._dispatch(actions.showdown());
            }
            break;
          }
        case TYPES.HIT:
          {
            var _stage = '';
            var _state6 = this.state,
                _initialBet2 = _state6.initialBet,
                _deck = _state6.deck,
                _handInfo2 = _state6.handInfo,
                _dealerCards3 = _state6.dealerCards,
                cardCount = _state6.cardCount,
                _history3 = _state6.history,
                _hits3 = _state6.hits;

            var position = action.payload.position;
            var card = _deck.splice(_deck.length - 1, 1);
            var _playerCards = [];
            var _left = {};
            var _right3 = {};
            var hasSplit = _history3.some(function (x) {
              return x.type === TYPES.SPLIT;
            });
            if (position === TYPES.LEFT) {
              _playerCards = _handInfo2.left.cards.concat(card);
              _left = engine.getHandInfoAfterHit(_playerCards, _dealerCards3, _initialBet2, hasSplit);
              _right3 = Object.assign({}, _handInfo2.right);
              if (_left.close) {
                _stage = TYPES.STAGE_SHOWDOWN;
              } else {
                _stage = 'player-turn-' + position;
              }
            } else {
              _playerCards = _handInfo2.right.cards.concat(card);
              _right3 = engine.getHandInfoAfterHit(_playerCards, _dealerCards3, _initialBet2, hasSplit);
              _left = Object.assign({}, _handInfo2.left);
              if (_right3.close) {
                if (_history3.some(function (x) {
                  return x.type === TYPES.SPLIT;
                })) {
                  _stage = TYPES.STAGE_PLAYER_TURN_LEFT;
                } else {
                  _stage = TYPES.STAGE_SHOWDOWN;
                }
              } else {
                _stage = 'player-turn-' + position;
              }
              if (_right3.close && _left.close) {
                _stage = TYPES.STAGE_SHOWDOWN;
              }
            }
            var objCards = {};
            objCards[position] = _playerCards;
            var _historyItem3 = appendEpoch(_extends({}, action, objCards));
            this.setState({
              stage: _stage,
              handInfo: { left: _left, right: _right3 },
              deck: _deck.filter(function (x) {
                return _playerCards.indexOf(x) === -1;
              }),
              cardCount: cardCount + engine.countCards(card),
              history: _history3.concat(_historyItem3),
              hits: _hits3 + 1
            });
            if (_stage === TYPES.STAGE_SHOWDOWN) {
              this._dispatch(actions.showdown());
            }
            break;
          }
        case TYPES.DOUBLE:
          {
            var _stage2 = '';
            var _state7 = this.state,
                _initialBet3 = _state7.initialBet,
                _deck2 = _state7.deck,
                _handInfo3 = _state7.handInfo,
                _dealerCards4 = _state7.dealerCards,
                _cardCount = _state7.cardCount,
                _history4 = _state7.history,
                _hits4 = _state7.hits;

            var _position = action.payload.position;
            var _card = _deck2.splice(_deck2.length - 1, 1);
            var _playerCards2 = [];
            var _left2 = {};
            var _right4 = {};
            var _hasSplit = _history4.some(function (x) {
              return x.type === TYPES.SPLIT;
            });
            // TODO: remove position and replace it with stage info #hit
            if (_position === TYPES.LEFT) {
              _right4 = Object.assign({}, _handInfo3.right);
              _playerCards2 = _handInfo3.left.cards.concat(_card);
              _left2 = engine.getHandInfoAfterDouble(_playerCards2, _dealerCards4, _initialBet3, _hasSplit);
              if (_left2.close) {
                _stage2 = TYPES.STAGE_SHOWDOWN;
              } else {
                _stage2 = 'player-turn-' + _position;
              }
            } else {
              _playerCards2 = _handInfo3.right.cards.concat(_card);
              _left2 = Object.assign({}, _handInfo3.left);
              _right4 = engine.getHandInfoAfterDouble(_playerCards2, _dealerCards4, _initialBet3, _hasSplit);
              if (_right4.close) {
                if (_history4.some(function (x) {
                  return x.type === TYPES.SPLIT;
                })) {
                  _stage2 = TYPES.STAGE_PLAYER_TURN_LEFT;
                } else {
                  _stage2 = TYPES.STAGE_SHOWDOWN;
                }
              } else {
                _stage2 = 'player-turn-' + _position;
              }
            }
            var _objCards = {};
            _objCards[_position] = _playerCards2;
            var _historyItem4 = appendEpoch(_extends({}, action, {
              payload: { bet: _initialBet3 }
            }, _objCards));
            this.setState({
              stage: _stage2,
              handInfo: { left: _left2, right: _right4 },
              deck: _deck2.filter(function (x) {
                return _playerCards2.indexOf(x) === -1;
              }),
              cardCount: _cardCount + engine.countCards(_card),
              history: _history4.concat(_historyItem4),
              hits: _hits4 + 1
            });
            this._dispatch(actions.stand(_position));
            break;
          }
        case TYPES.STAND:
          {
            var _stage3 = '';
            var _state8 = this.state,
                _handInfo4 = _state8.handInfo,
                _history5 = _state8.history,
                _hits5 = _state8.hits;

            var _position2 = action.payload.position;
            var _left3 = {};
            var _right5 = {};
            var _hasSplit2 = _history5.some(function (x) {
              return x.type === TYPES.SPLIT;
            });
            if (_position2 === TYPES.LEFT) {
              _right5 = Object.assign({}, _handInfo4.right);
              _left3 = engine.getHandInfoAfterStand(_handInfo4.left);
              _stage3 = TYPES.STAGE_SHOWDOWN;
            }
            if (_position2 === TYPES.RIGHT) {
              _left3 = Object.assign({}, _handInfo4.left);
              _right5 = engine.getHandInfoAfterStand(_handInfo4.right);
              if (_right5.close) {
                _stage3 = TYPES.STAGE_SHOWDOWN;
              }
            }
            if (_hasSplit2) {
              _stage3 = _stage3 !== TYPES.STAGE_SHOWDOWN ? TYPES.STAGE_PLAYER_TURN_LEFT : TYPES.STAGE_SHOWDOWN;
            }
            if (_hasSplit2 && !_left3.close) {
              _stage3 = TYPES.STAGE_PLAYER_TURN_LEFT;
            }
            var _historyItem5 = appendEpoch(action);
            this.setState({
              stage: _stage3,
              handInfo: { left: _left3, right: _right5 },
              history: _history5.concat(_historyItem5),
              hits: _hits5 + 1
            });
            if (_stage3 === TYPES.STAGE_SHOWDOWN) {
              this._dispatch(actions.showdown());
            }
            break;
          }
        case TYPES.SHOWDOWN:
          {
            var _state9 = this.state,
                _dealerHoleCard2 = _state9.dealerHoleCard,
                _handInfo5 = _state9.handInfo,
                _history6 = _state9.history,
                _hits6 = _state9.hits;
            var dealerHoleCardOnly = action.payload.dealerHoleCardOnly;

            var _historyItem6 = appendEpoch(action);
            this.setState({
              stage: TYPES.STAGE_DEALER_TURN,
              history: _history6.concat(_historyItem6),
              hits: _hits6 + 1
            });
            // we want to include in the calculation the dealerHoleCard obtained in initial deal()
            this._dispatch(actions.dealerHit({ dealerHoleCard: _dealerHoleCard2 }));
            if (dealerHoleCardOnly) {
              this.setState(_extends({
                stage: TYPES.STAGE_DONE
              }, engine.getPrizes(this.state)));
              break;
            }
            var checkLeftStatus = _history6.some(function (x) {
              return x.type === TYPES.SPLIT;
            });
            var check1 = (_handInfo5.right.playerHasBusted || _handInfo5.right.playerHasBlackjack) && !checkLeftStatus;
            if (check1) {
              this.setState(_extends({
                stage: TYPES.STAGE_DONE
              }, engine.getPrizes(this.state)));
              break;
            }
            var check2 = checkLeftStatus && (_handInfo5.left.playerHasBusted || _handInfo5.left.playerHasBlackjack) && check1;
            if (check2) {
              this.setState(_extends({
                stage: TYPES.STAGE_DONE
              }, engine.getPrizes(this.state)));
              break;
            }
            if (checkLeftStatus && _handInfo5.left.playerHasBusted && _handInfo5.right.playerHasBusted) {
              this.setState(_extends({
                stage: TYPES.STAGE_DONE
              }, engine.getPrizes(this.state)));
              break;
            }
            while (this.getState().stage === TYPES.STAGE_DEALER_TURN) {
              this._dispatch(actions.dealerHit());
            }
            this.setState(_extends({}, engine.getPrizes(this.state)));
            break;
          }
        case TYPES.SURRENDER:
          {
            var _state10 = this.state,
                _handInfo6 = _state10.handInfo,
                _history7 = _state10.history,
                _hits7 = _state10.hits;

            _handInfo6.right = engine.getHandInfoAfterSurrender(_handInfo6.right);
            var _historyItem7 = appendEpoch(action);
            this.setState({
              stage: TYPES.STAGE_SHOWDOWN,
              handInfo: _handInfo6,
              history: _history7.concat(_historyItem7),
              hits: _hits7 + 1
            });
            this._dispatch(actions.showdown({ dealerHoleCardOnly: true }));
            break;
          }
        case TYPES.DEALER_HIT:
          {
            var _state11 = this.state,
                _rules = _state11.rules,
                _deck3 = _state11.deck,
                _cardCount2 = _state11.cardCount,
                _history8 = _state11.history,
                _hits8 = _state11.hits;
            // the new card for dealer can be the "dealerHoleCard" or a new card
            // dealerHoleCard was set at the deal()

            var _dealerHoleCard3 = action.payload.dealerHoleCard;

            var _card2 = _dealerHoleCard3 || _deck3.splice(_deck3.length - 1, 1)[0];
            var _dealerCards5 = this.state.dealerCards.concat([_card2]);
            var _dealerValue = engine.calculate(_dealerCards5);
            var _dealerHasBlackjack2 = engine.isBlackjack(_dealerCards5);
            var dealerHasBusted = _dealerValue.hi > 21;
            var _stage4 = null;
            if (_dealerValue.hi < 17) {
              _stage4 = TYPES.STAGE_DEALER_TURN;
            } else {
              if (!_rules.standOnSoft17 && engine.isSoftHand(_dealerCards5)) {
                _stage4 = TYPES.STAGE_DEALER_TURN;
              } else {
                _stage4 = TYPES.STAGE_DONE;
              }
            }
            var _historyItem8 = appendEpoch(_extends({}, action, {
              dealerCards: _dealerCards5
            }));
            this.setState({
              stage: _stage4,
              dealerCards: _dealerCards5,
              dealerValue: _dealerValue,
              dealerHasBlackjack: _dealerHasBlackjack2,
              dealerHasBusted: dealerHasBusted,
              deck: _deck3.filter(function (x) {
                return _dealerCards5.indexOf(x) === -1;
              }),
              cardCount: _cardCount2 + engine.countCards([_card2]),
              history: _history8.concat(_historyItem8),
              hits: _hits8 + 1
            });
            break;
          }
        default:
          {
            var _state12 = this.state,
                _history9 = _state12.history,
                _hits9 = _state12.hits;

            var _historyItem9 = appendEpoch(action);
            this.setState({
              hits: _hits9 + 1,
              history: _history9.concat(_historyItem9)
            });
            break;
          }
      }
      return this.getState();
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (flatCards, suited, value) {
  var key = '' + flatCards + (suited ? 's' : '');
  if (key === '777s') {
    return 200;
  }
  if (key === '678s') {
    return 100;
  }
  if (key === '777') {
    return 50;
  }
  if (key === '678') {
    return 30;
  }
  if ((value.hi === 21 || value.lo === 21) && suited) {
    return 10;
  }
  if ((value.hi === 21 || value.lo === 21) && !suited) {
    return 3;
  }
  if (value.hi === 20 || value.lo === 20) {
    return 3;
  }
  if (value.hi === 19 || value.lo === 19) {
    return 2;
  }
  return 0;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("52-deck");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map