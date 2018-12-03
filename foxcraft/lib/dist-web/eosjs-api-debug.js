var eosjs_api =
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/eosjs-api.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/abi.abi.json":
/*!**************************!*\
  !*** ./src/abi.abi.json ***!
  \**************************/
/*! exports provided: version, structs, default */
/***/ (function(module) {

module.exports = {"version":"eosio::abi/1.1","structs":[{"name":"extensions_entry","base":"","fields":[{"name":"tag","type":"uint16"},{"name":"value","type":"bytes"}]},{"name":"type_def","base":"","fields":[{"name":"new_type_name","type":"string"},{"name":"type","type":"string"}]},{"name":"field_def","base":"","fields":[{"name":"name","type":"string"},{"name":"type","type":"string"}]},{"name":"struct_def","base":"","fields":[{"name":"name","type":"string"},{"name":"base","type":"string"},{"name":"fields","type":"field_def[]"}]},{"name":"action_def","base":"","fields":[{"name":"name","type":"name"},{"name":"type","type":"string"},{"name":"ricardian_contract","type":"string"}]},{"name":"table_def","base":"","fields":[{"name":"name","type":"name"},{"name":"index_type","type":"string"},{"name":"key_names","type":"string[]"},{"name":"key_types","type":"string[]"},{"name":"type","type":"string"}]},{"name":"clause_pair","base":"","fields":[{"name":"id","type":"string"},{"name":"body","type":"string"}]},{"name":"error_message","base":"","fields":[{"name":"error_code","type":"uint64"},{"name":"error_msg","type":"string"}]},{"name":"variant_def","base":"","fields":[{"name":"name","type":"string"},{"name":"types","type":"string[]"}]},{"name":"abi_def","base":"","fields":[{"name":"version","type":"string"},{"name":"types","type":"type_def[]"},{"name":"structs","type":"struct_def[]"},{"name":"actions","type":"action_def[]"},{"name":"tables","type":"table_def[]"},{"name":"ricardian_clauses","type":"clause_pair[]"},{"name":"error_messages","type":"error_message[]"},{"name":"abi_extensions","type":"extensions_entry[]"},{"name":"variants","type":"variant_def[]$"}]}]};

/***/ }),

/***/ "./src/eosjs-api.ts":
/*!**************************!*\
  !*** ./src/eosjs-api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module API
 */
// copyright defined in eosjs/LICENSE.txt
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ser = __webpack_require__(/*! ./eosjs-serialize */ "./src/eosjs-serialize.ts");
// tslint:disable-next-line
var abiAbi = __webpack_require__(/*! ../src/abi.abi.json */ "./src/abi.abi.json");
// tslint:disable-next-line
var transactionAbi = __webpack_require__(/*! ../src/transaction.abi.json */ "./src/transaction.abi.json");
var Api = /** @class */ (function () {
    /**
     * @param args
     *    * `rpc`: Issues RPC calls
     *    * `authorityProvider`: Get public keys needed to meet authorities in a transaction
     *    * `abiProvider`: Supplies ABIs in raw form (binary)
     *    * `signatureProvider`: Signs transactions
     *    * `chainId`: Identifies chain
     *    * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     *    * `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser
     */
    function Api(args) {
        /** Holds information needed to serialize contract actions */
        this.contracts = new Map();
        /** Fetched abis */
        this.cachedAbis = new Map();
        this.rpc = args.rpc;
        this.authorityProvider = args.authorityProvider || args.rpc;
        this.abiProvider = args.abiProvider || args.rpc;
        this.signatureProvider = args.signatureProvider;
        this.chainId = args.chainId;
        this.textEncoder = args.textEncoder;
        this.textDecoder = args.textDecoder;
        this.abiTypes = ser.getTypesFromAbi(ser.createInitialTypes(), abiAbi);
        this.transactionTypes = ser.getTypesFromAbi(ser.createInitialTypes(), transactionAbi);
    }
    /** Decodes an abi as Uint8Array into json. */
    Api.prototype.rawAbiToJson = function (rawAbi) {
        var buffer = new ser.SerialBuffer({
            textEncoder: this.textEncoder,
            textDecoder: this.textDecoder,
            array: rawAbi,
        });
        if (!ser.supportedAbiVersion(buffer.getString())) {
            throw new Error("Unsupported abi version");
        }
        buffer.restartRead();
        return this.abiTypes.get("abi_def").deserialize(buffer);
    };
    /** Get abi in both binary and structured forms. Fetch when needed. */
    Api.prototype.getCachedAbi = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cachedAbi, rawAbi, abi, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!reload && this.cachedAbis.get(accountName)) {
                            return [2 /*return*/, this.cachedAbis.get(accountName)];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.abiProvider.getRawAbi(accountName)];
                    case 2:
                        rawAbi = (_a.sent()).abi;
                        abi = this.rawAbiToJson(rawAbi);
                        cachedAbi = { rawAbi: rawAbi, abi: abi };
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        e_1.message = "fetching abi for " + accountName + ": " + e_1.message;
                        throw e_1;
                    case 4:
                        if (!cachedAbi) {
                            throw new Error("Missing abi for " + accountName);
                        }
                        this.cachedAbis.set(accountName, cachedAbi);
                        return [2 /*return*/, cachedAbi];
                }
            });
        });
    };
    /** Get abi in structured form. Fetch when needed. */
    Api.prototype.getAbi = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCachedAbi(accountName, reload)];
                    case 1: return [2 /*return*/, (_a.sent()).abi];
                }
            });
        });
    };
    /** Get abis needed by a transaction */
    Api.prototype.getTransactionAbis = function (transaction, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var accounts, uniqueAccounts, actionPromises;
            var _this = this;
            return __generator(this, function (_a) {
                accounts = transaction.actions.map(function (action) { return action.account; });
                uniqueAccounts = new Set(accounts);
                actionPromises = __spread(uniqueAccounts).map(function (account) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = {
                                    accountName: account
                                };
                                return [4 /*yield*/, this.getCachedAbi(account, reload)];
                            case 1: return [2 /*return*/, (_a.abi = (_b.sent()).rawAbi,
                                    _a)];
                        }
                    });
                }); });
                return [2 /*return*/, Promise.all(actionPromises)];
            });
        });
    };
    /** Get data needed to serialize actions in a contract */
    Api.prototype.getContract = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var e_2, _a, abi, types, actions, _b, _c, _d, name_1, type, result;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!reload && this.contracts.get(accountName)) {
                            return [2 /*return*/, this.contracts.get(accountName)];
                        }
                        return [4 /*yield*/, this.getAbi(accountName, reload)];
                    case 1:
                        abi = _e.sent();
                        types = ser.getTypesFromAbi(ser.createInitialTypes(), abi);
                        actions = new Map();
                        try {
                            for (_b = __values(abi.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
                                _d = _c.value, name_1 = _d.name, type = _d.type;
                                actions.set(name_1, ser.getType(types, type));
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        result = { types: types, actions: actions };
                        this.contracts.set(accountName, result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** Convert `value` to binary form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    Api.prototype.serialize = function (buffer, type, value) {
        this.transactionTypes.get(type).serialize(buffer, value);
    };
    /** Convert data in `buffer` to structured form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    Api.prototype.deserialize = function (buffer, type) {
        return this.transactionTypes.get(type).deserialize(buffer);
    };
    /** Convert a transaction to binary */
    Api.prototype.serializeTransaction = function (transaction) {
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        this.serialize(buffer, "transaction", __assign({ max_net_usage_words: 0, max_cpu_usage_ms: 0, delay_sec: 0, context_free_actions: [], actions: [], transaction_extensions: [] }, transaction));
        return buffer.asUint8Array();
    };
    /** Convert a transaction from binary. Leaves actions in hex. */
    Api.prototype.deserializeTransaction = function (transaction) {
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        buffer.pushArray(transaction);
        return this.deserialize(buffer, "transaction");
    };
    /** Convert actions to hex */
    Api.prototype.serializeActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(actions.map(function (_a) {
                            var account = _a.account, name = _a.name, authorization = _a.authorization, data = _a.data;
                            return __awaiter(_this, void 0, void 0, function () {
                                var contract;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.getContract(account)];
                                        case 1:
                                            contract = _b.sent();
                                            return [2 /*return*/, ser.serializeAction(contract, account, name, authorization, data, this.textEncoder, this.textDecoder)];
                                    }
                                });
                            });
                        }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Convert actions from hex */
    Api.prototype.deserializeActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(actions.map(function (_a) {
                            var account = _a.account, name = _a.name, authorization = _a.authorization, data = _a.data;
                            return __awaiter(_this, void 0, void 0, function () {
                                var contract;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.getContract(account)];
                                        case 1:
                                            contract = _b.sent();
                                            return [2 /*return*/, ser.deserializeAction(contract, account, name, authorization, data, this.textEncoder, this.textDecoder)];
                                    }
                                });
                            });
                        }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Convert a transaction from binary. Also deserializes actions. */
    Api.prototype.deserializeTransactionWithActions = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var deserializedTransaction, deserializedActions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof transaction === "string") {
                            transaction = ser.hexToUint8Array(transaction);
                        }
                        deserializedTransaction = this.deserializeTransaction(transaction);
                        return [4 /*yield*/, this.deserializeActions(deserializedTransaction.actions)];
                    case 1:
                        deserializedActions = _a.sent();
                        return [2 /*return*/, __assign({}, deserializedTransaction, { actions: deserializedActions })];
                }
            });
        });
    };
    /**
     * Create and optionally broadcast a transaction.
     *
     * Named Parameters:
     *    * `broadcast`: broadcast this transaction?
     *    * If both `blocksBehind` and `expireSeconds` are present,
     *      then fetch the block which is `blocksBehind` behind head block,
     *      use it as a reference for TAPoS, and expire the transaction `expireSeconds` after that block's time.
     * @returns node response if `broadcast`, `{signatures, serializedTransaction}` if `!broadcast`
     */
    Api.prototype.transact = function (transaction, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.broadcast, broadcast = _c === void 0 ? true : _c, blocksBehind = _b.blocksBehind, expireSeconds = _b.expireSeconds;
        return __awaiter(this, void 0, void 0, function () {
            var info, refBlock, abis, _d, _e, serializedTransaction, availableKeys, requiredKeys, signatures, pushTransactionArgs;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!!this.chainId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.get_info()];
                    case 1:
                        info = _f.sent();
                        this.chainId = info.chain_id;
                        _f.label = 2;
                    case 2:
                        if (!(typeof blocksBehind === "number" && expireSeconds)) return [3 /*break*/, 6];
                        if (!!info) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rpc.get_info()];
                    case 3:
                        info = _f.sent();
                        _f.label = 4;
                    case 4: return [4 /*yield*/, this.rpc.get_block(info.head_block_num - blocksBehind)];
                    case 5:
                        refBlock = _f.sent();
                        transaction = __assign({}, ser.transactionHeader(refBlock, expireSeconds), transaction);
                        _f.label = 6;
                    case 6:
                        if (!this.hasRequiredTaposFields(transaction)) {
                            throw new Error("Required configuration or TAPOS fields are not present");
                        }
                        return [4 /*yield*/, this.getTransactionAbis(transaction)];
                    case 7:
                        abis = _f.sent();
                        _d = [{}, transaction];
                        _e = {};
                        return [4 /*yield*/, this.serializeActions(transaction.actions)];
                    case 8:
                        transaction = __assign.apply(void 0, _d.concat([(_e.actions = _f.sent(), _e)]));
                        serializedTransaction = this.serializeTransaction(transaction);
                        return [4 /*yield*/, this.signatureProvider.getAvailableKeys()];
                    case 9:
                        availableKeys = _f.sent();
                        return [4 /*yield*/, this.authorityProvider.getRequiredKeys({ transaction: transaction, availableKeys: availableKeys })];
                    case 10:
                        requiredKeys = _f.sent();
                        return [4 /*yield*/, this.signatureProvider.sign({
                                chainId: this.chainId,
                                requiredKeys: requiredKeys,
                                serializedTransaction: serializedTransaction,
                                abis: abis,
                            })];
                    case 11:
                        signatures = _f.sent();
                        pushTransactionArgs = { signatures: signatures, serializedTransaction: serializedTransaction };
                        if (broadcast) {
                            return [2 /*return*/, this.pushSignedTransaction(pushTransactionArgs)];
                        }
                        return [2 /*return*/, pushTransactionArgs];
                }
            });
        });
    };
    /** Broadcast a signed transaction */
    Api.prototype.pushSignedTransaction = function (_a) {
        var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.rpc.push_transaction({
                        signatures: signatures,
                        serializedTransaction: serializedTransaction,
                    })];
            });
        });
    };
    // eventually break out into TransactionValidator class
    Api.prototype.hasRequiredTaposFields = function (_a) {
        var expiration = _a.expiration, ref_block_num = _a.ref_block_num, ref_block_prefix = _a.ref_block_prefix, transaction = __rest(_a, ["expiration", "ref_block_num", "ref_block_prefix"]);
        return !!(expiration && ref_block_num && ref_block_prefix);
    };
    return Api;
}()); // Api
exports.default = Api;


/***/ }),

/***/ "./src/eosjs-numeric.ts":
/*!******************************!*\
  !*** ./src/eosjs-numeric.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module Numeric
 */
// copyright defined in eosjs/LICENSE.txt
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
var ripemd160 = __webpack_require__(/*! ./ripemd */ "./src/ripemd.js").RIPEMD160.hash;
var base58Chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function create_base58_map() {
    var base58M = Array(256).fill(-1);
    for (var i = 0; i < base58Chars.length; ++i) {
        base58M[base58Chars.charCodeAt(i)] = i;
    }
    return base58M;
}
var base58Map = create_base58_map();
function create_base64_map() {
    var base64M = Array(256).fill(-1);
    for (var i = 0; i < base64Chars.length; ++i) {
        base64M[base64Chars.charCodeAt(i)] = i;
    }
    base64M["=".charCodeAt(0)] = 0;
    return base64M;
}
var base64Map = create_base64_map();
/** Is `bignum` a negative number? */
function isNegative(bignum) {
    return (bignum[bignum.length - 1] & 0x80) !== 0;
}
exports.isNegative = isNegative;
/** Negate `bignum` */
function negate(bignum) {
    var carry = 1;
    for (var i = 0; i < bignum.length; ++i) {
        var x = (~bignum[i] & 0xff) + carry;
        bignum[i] = x;
        carry = x >> 8;
    }
}
exports.negate = negate;
/**
 * Convert an unsigned decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function decimalToBinary(size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var srcDigit = s.charCodeAt(i);
        if (srcDigit < "0".charCodeAt(0) || srcDigit > "9".charCodeAt(0)) {
            throw new Error("invalid number");
        }
        var carry = srcDigit - "0".charCodeAt(0);
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 10 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error("number is out of range");
        }
    }
    return result;
}
exports.decimalToBinary = decimalToBinary;
/**
 * Convert a signed decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function signedDecimalToBinary(size, s) {
    var negative = s[0] === "-";
    if (negative) {
        s = s.substr(1);
    }
    var result = decimalToBinary(size, s);
    if (negative) {
        negate(result);
        if (!isNegative(result)) {
            throw new Error("number is out of range");
        }
    }
    else if (isNegative(result)) {
        throw new Error("number is out of range");
    }
    return result;
}
exports.signedDecimalToBinary = signedDecimalToBinary;
/**
 * Convert `bignum` to an unsigned decimal number
 * @param minDigits 0-pad result to this many digits
 */
function binaryToDecimal(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var result = Array(minDigits).fill("0".charCodeAt(0));
    for (var i = bignum.length - 1; i >= 0; --i) {
        var carry = bignum[i];
        for (var j = 0; j < result.length; ++j) {
            var x = ((result[j] - "0".charCodeAt(0)) << 8) + carry;
            result[j] = "0".charCodeAt(0) + x % 10;
            carry = (x / 10) | 0;
        }
        while (carry) {
            result.push("0".charCodeAt(0) + carry % 10);
            carry = (carry / 10) | 0;
        }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spread(result));
}
exports.binaryToDecimal = binaryToDecimal;
/**
 * Convert `bignum` to a signed decimal number
 * @param minDigits 0-pad result to this many digits
 */
function signedBinaryToDecimal(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    if (isNegative(bignum)) {
        var x = bignum.slice();
        negate(x);
        return "-" + binaryToDecimal(x, minDigits);
    }
    return binaryToDecimal(bignum, minDigits);
}
exports.signedBinaryToDecimal = signedBinaryToDecimal;
/**
 * Convert an unsigned base-58 number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function base58ToBinary(size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var carry = base58Map[s.charCodeAt(i)];
        if (carry < 0) {
            throw new Error("invalid base-58 value");
        }
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 58 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error("base-58 value is out of range");
        }
    }
    result.reverse();
    return result;
}
exports.base58ToBinary = base58ToBinary;
/**
 * Convert `bignum` to a base-58 number
 * @param minDigits 0-pad result to this many digits
 */
function binaryToBase58(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var e_1, _a, e_2, _b;
    var result = [];
    try {
        for (var bignum_1 = __values(bignum), bignum_1_1 = bignum_1.next(); !bignum_1_1.done; bignum_1_1 = bignum_1.next()) {
            var byte = bignum_1_1.value;
            var carry = byte;
            for (var j = 0; j < result.length; ++j) {
                var x = (base58Map[result[j]] << 8) + carry;
                result[j] = base58Chars.charCodeAt(x % 58);
                carry = (x / 58) | 0;
            }
            while (carry) {
                result.push(base58Chars.charCodeAt(carry % 58));
                carry = (carry / 58) | 0;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (bignum_1_1 && !bignum_1_1.done && (_a = bignum_1.return)) _a.call(bignum_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var bignum_2 = __values(bignum), bignum_2_1 = bignum_2.next(); !bignum_2_1.done; bignum_2_1 = bignum_2.next()) {
            var byte = bignum_2_1.value;
            if (byte) {
                break;
            }
            else {
                result.push("1".charCodeAt(0));
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (bignum_2_1 && !bignum_2_1.done && (_b = bignum_2.return)) _b.call(bignum_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spread(result));
}
exports.binaryToBase58 = binaryToBase58;
/** Convert an unsigned base-64 number in `s` to a bignum */
function base64ToBinary(s) {
    var len = s.length;
    if ((len & 3) === 1 && s[len - 1] === "=") {
        len -= 1;
    } // fc appends an extra '='
    if ((len & 3) !== 0) {
        throw new Error("base-64 value is not padded correctly");
    }
    var groups = len >> 2;
    var bytes = groups * 3;
    if (len > 0 && s[len - 1] === "=") {
        if (s[len - 2] === "=") {
            bytes -= 2;
        }
        else {
            bytes -= 1;
        }
    }
    var result = new Uint8Array(bytes);
    for (var group = 0; group < groups; ++group) {
        var digit0 = base64Map[s.charCodeAt(group * 4 + 0)];
        var digit1 = base64Map[s.charCodeAt(group * 4 + 1)];
        var digit2 = base64Map[s.charCodeAt(group * 4 + 2)];
        var digit3 = base64Map[s.charCodeAt(group * 4 + 3)];
        result[group * 3 + 0] = (digit0 << 2) | (digit1 >> 4);
        if (group * 3 + 1 < bytes) {
            result[group * 3 + 1] = ((digit1 & 15) << 4) | (digit2 >> 2);
        }
        if (group * 3 + 2 < bytes) {
            result[group * 3 + 2] = ((digit2 & 3) << 6) | digit3;
        }
    }
    return result;
}
exports.base64ToBinary = base64ToBinary;
/** Public key data size, excluding type field */
exports.publicKeyDataSize = 33;
/** Private key data size, excluding type field */
exports.privateKeyDataSize = 32;
/** Signature data size, excluding type field */
exports.signatureDataSize = 65;
function digestSuffixRipemd160(data, suffix) {
    var d = new Uint8Array(data.length + suffix.length);
    for (var i = 0; i < data.length; ++i) {
        d[i] = data[i];
    }
    for (var i = 0; i < suffix.length; ++i) {
        d[data.length + i] = suffix.charCodeAt(i);
    }
    return ripemd160(d);
}
function stringToKey(s, type, size, suffix) {
    var whole = base58ToBinary(size + 4, s);
    var result = { type: type, data: new Uint8Array(whole.buffer, 0, size) };
    var digest = new Uint8Array(digestSuffixRipemd160(result.data, suffix));
    if (digest[0] !== whole[size + 0] || digest[1] !== whole[size + 1]
        || digest[2] !== whole[size + 2] || digest[3] !== whole[size + 3]) {
        throw new Error("checksum doesn't match");
    }
    return result;
}
function keyToString(key, suffix, prefix) {
    var digest = new Uint8Array(digestSuffixRipemd160(key.data, suffix));
    var whole = new Uint8Array(key.data.length + 4);
    for (var i = 0; i < key.data.length; ++i) {
        whole[i] = key.data[i];
    }
    for (var i = 0; i < 4; ++i) {
        whole[i + key.data.length] = digest[i];
    }
    return prefix + binaryToBase58(whole);
}
/** Convert key in `s` to binary form */
function stringToPublicKey(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing public key");
    }
    if (s.substr(0, 3) === "EOS") {
        var whole = base58ToBinary(exports.publicKeyDataSize + 4, s.substr(3));
        var key = { type: 0 /* k1 */, data: new Uint8Array(exports.publicKeyDataSize) };
        for (var i = 0; i < exports.publicKeyDataSize; ++i) {
            key.data[i] = whole[i];
        }
        var digest = new Uint8Array(ripemd160(key.data));
        if (digest[0] !== whole[exports.publicKeyDataSize] || digest[1] !== whole[34]
            || digest[2] !== whole[35] || digest[3] !== whole[36]) {
            throw new Error("checksum doesn't match");
        }
        return key;
    }
    else if (s.substr(0, 7) === "PUB_K1_") {
        return stringToKey(s.substr(7), 0 /* k1 */, exports.publicKeyDataSize, "K1");
    }
    else if (s.substr(0, 7) === "PUB_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.publicKeyDataSize, "R1");
    }
    else {
        throw new Error("unrecognized public key format");
    }
}
exports.stringToPublicKey = stringToPublicKey;
/** Convert `key` to string (base-58) form */
function publicKeyToString(key) {
    if (key.type === 0 /* k1 */ && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, "K1", "PUB_K1_");
    }
    else if (key.type === 1 /* r1 */ && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, "R1", "PUB_R1_");
    }
    else {
        throw new Error("unrecognized public key format");
    }
}
exports.publicKeyToString = publicKeyToString;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
function convertLegacyPublicKey(s) {
    if (s.substr(0, 3) === "EOS") {
        return publicKeyToString(stringToPublicKey(s));
    }
    return s;
}
exports.convertLegacyPublicKey = convertLegacyPublicKey;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
function convertLegacyPublicKeys(keys) {
    return keys.map(convertLegacyPublicKey);
}
exports.convertLegacyPublicKeys = convertLegacyPublicKeys;
/** Convert key in `s` to binary form */
function stringToPrivateKey(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing private key");
    }
    if (s.substr(0, 7) === "PVT_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.privateKeyDataSize, "R1");
    }
    else {
        throw new Error("unrecognized private key format");
    }
}
exports.stringToPrivateKey = stringToPrivateKey;
/** Convert `key` to string (base-58) form */
function privateKeyToString(key) {
    if (key.type === 1 /* r1 */) {
        return keyToString(key, "R1", "PVT_R1_");
    }
    else {
        throw new Error("unrecognized private key format");
    }
}
exports.privateKeyToString = privateKeyToString;
/** Convert key in `s` to binary form */
function stringToSignature(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing signature");
    }
    if (s.substr(0, 7) === "SIG_K1_") {
        return stringToKey(s.substr(7), 0 /* k1 */, exports.signatureDataSize, "K1");
    }
    else if (s.substr(0, 7) === "SIG_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.signatureDataSize, "R1");
    }
    else {
        throw new Error("unrecognized signature format");
    }
}
exports.stringToSignature = stringToSignature;
/** Convert `signature` to string (base-58) form */
function signatureToString(signature) {
    if (signature.type === 0 /* k1 */) {
        return keyToString(signature, "K1", "SIG_K1_");
    }
    else if (signature.type === 1 /* r1 */) {
        return keyToString(signature, "R1", "SIG_R1_");
    }
    else {
        throw new Error("unrecognized signature format");
    }
}
exports.signatureToString = signatureToString;


/***/ }),

/***/ "./src/eosjs-serialize.ts":
/*!********************************!*\
  !*** ./src/eosjs-serialize.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module Serialize
 */
// copyright defined in eosjs/LICENSE.txt
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var numeric = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
/** State for serialize() and deserialize() */
var SerializerState = /** @class */ (function () {
    function SerializerState() {
        /** Have any binary extensions been skipped? */
        this.skippedBinaryExtension = false;
    }
    return SerializerState;
}());
exports.SerializerState = SerializerState;
/** Serialize and deserialize data */
var SerialBuffer = /** @class */ (function () {
    /**
     * @param __namedParameters
     *    * `array`: `null` if serializing, or binary data to deserialize
     *    * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     *    * `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser
     */
    function SerialBuffer(_a) {
        var _b = _a === void 0 ? {} : _a, textEncoder = _b.textEncoder, textDecoder = _b.textDecoder, array = _b.array;
        /** Current position while reading (deserializing) */
        this.readPos = 0;
        this.array = array || new Uint8Array(1024);
        this.length = array ? array.length : 0;
        this.textEncoder = textEncoder || new TextEncoder();
        this.textDecoder = textDecoder || new TextDecoder("utf-8", { fatal: true });
    }
    /** Resize `array` if needed to have at least `size` bytes free */
    SerialBuffer.prototype.reserve = function (size) {
        if (this.length + size <= this.array.length) {
            return;
        }
        var l = this.array.length;
        while (this.length + size > l) {
            l = Math.ceil(l * 1.5);
        }
        var newArray = new Uint8Array(l);
        newArray.set(this.array);
        this.array = newArray;
    };
    /** Is there data available to read? */
    SerialBuffer.prototype.haveReadData = function () {
        return this.readPos < this.length;
    };
    /** Restart reading from the beginning */
    SerialBuffer.prototype.restartRead = function () {
        this.readPos = 0;
    };
    /** Return data with excess storage trimmed away */
    SerialBuffer.prototype.asUint8Array = function () {
        return new Uint8Array(this.array.buffer, 0, this.length);
    };
    /** Append bytes */
    SerialBuffer.prototype.pushArray = function (v) {
        this.reserve(v.length);
        this.array.set(v, this.length);
        this.length += v.length;
    };
    /** Append bytes */
    SerialBuffer.prototype.push = function () {
        var v = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            v[_i] = arguments[_i];
        }
        this.pushArray(v);
    };
    /** Get a single byte */
    SerialBuffer.prototype.get = function () {
        if (this.readPos < this.length) {
            return this.array[this.readPos++];
        }
        throw new Error("Read past end of buffer");
    };
    /** Append bytes in `v`. Throws if `len` doesn't match `v.length` */
    SerialBuffer.prototype.pushUint8ArrayChecked = function (v, len) {
        if (v.length !== len) {
            throw new Error("Binary data has incorrect size");
        }
        this.pushArray(v);
    };
    /** Get `len` bytes */
    SerialBuffer.prototype.getUint8Array = function (len) {
        if (this.readPos + len > this.length) {
            throw new Error("Read past end of buffer");
        }
        var result = new Uint8Array(this.array.buffer, this.readPos, len);
        this.readPos += len;
        return result;
    };
    /** Append a `uint16` */
    SerialBuffer.prototype.pushUint16 = function (v) {
        this.push((v >> 0) & 0xff, (v >> 8) & 0xff);
    };
    /** Get a `uint16` */
    SerialBuffer.prototype.getUint16 = function () {
        var v = 0;
        v |= this.get() << 0;
        v |= this.get() << 8;
        return v;
    };
    /** Append a `uint32` */
    SerialBuffer.prototype.pushUint32 = function (v) {
        this.push((v >> 0) & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >> 24) & 0xff);
    };
    /** Get a `uint32` */
    SerialBuffer.prototype.getUint32 = function () {
        var v = 0;
        v |= this.get() << 0;
        v |= this.get() << 8;
        v |= this.get() << 16;
        v |= this.get() << 24;
        return v >>> 0;
    };
    /** Append a `uint64`. *Caution*: `number` only has 53 bits of precision */
    SerialBuffer.prototype.pushNumberAsUint64 = function (v) {
        this.pushUint32(v >>> 0);
        this.pushUint32(Math.floor(v / 4294967296) >>> 0);
    };
    /**
     * Get a `uint64` as a `number`. *Caution*: `number` only has 53 bits of precision; some values will change.
     * `numeric.binaryToDecimal(serialBuffer.getUint8Array(8))` recommended instead
     */
    SerialBuffer.prototype.getUint64AsNumber = function () {
        var low = this.getUint32();
        var high = this.getUint32();
        return (high >>> 0) * 4294967296 + (low >>> 0);
    };
    /** Append a `varuint32` */
    SerialBuffer.prototype.pushVaruint32 = function (v) {
        while (true) {
            if (v >>> 7) {
                this.push(0x80 | (v & 0x7f));
                v = v >>> 7;
            }
            else {
                this.push(v);
                break;
            }
        }
    };
    /** Get a `varuint32` */
    SerialBuffer.prototype.getVaruint32 = function () {
        var v = 0;
        var bit = 0;
        while (true) {
            var b = this.get();
            v |= (b & 0x7f) << bit;
            bit += 7;
            if (!(b & 0x80)) {
                break;
            }
        }
        return v >>> 0;
    };
    /** Append a `varint32` */
    SerialBuffer.prototype.pushVarint32 = function (v) {
        this.pushVaruint32((v << 1) ^ (v >> 31));
    };
    /** Get a `varint32` */
    SerialBuffer.prototype.getVarint32 = function () {
        var v = this.getVaruint32();
        if (v & 1) {
            return ((~v) >> 1) | 2147483648;
        }
        else {
            return v >>> 1;
        }
    };
    /** Append a `float32` */
    SerialBuffer.prototype.pushFloat32 = function (v) {
        this.pushArray(new Uint8Array((new Float32Array([v])).buffer));
    };
    /** Get a `float32` */
    SerialBuffer.prototype.getFloat32 = function () {
        return new Float32Array(this.getUint8Array(4).slice().buffer)[0];
    };
    /** Append a `float64` */
    SerialBuffer.prototype.pushFloat64 = function (v) {
        this.pushArray(new Uint8Array((new Float64Array([v])).buffer));
    };
    /** Get a `float64` */
    SerialBuffer.prototype.getFloat64 = function () {
        return new Float64Array(this.getUint8Array(8).slice().buffer)[0];
    };
    /** Append a `name` */
    SerialBuffer.prototype.pushName = function (s) {
        if (typeof s !== "string") {
            throw new Error("Expected string containing name");
        }
        function charToSymbol(c) {
            if (c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0)) {
                return (c - "a".charCodeAt(0)) + 6;
            }
            if (c >= "1".charCodeAt(0) && c <= "5".charCodeAt(0)) {
                return (c - "1".charCodeAt(0)) + 1;
            }
            return 0;
        }
        var a = new Uint8Array(8);
        var bit = 63;
        for (var i = 0; i < s.length; ++i) {
            var c = charToSymbol(s.charCodeAt(i));
            if (bit < 5) {
                c = c << 1;
            }
            for (var j = 4; j >= 0; --j) {
                if (bit >= 0) {
                    a[Math.floor(bit / 8)] |= ((c >> j) & 1) << (bit % 8);
                    --bit;
                }
            }
        }
        this.pushArray(a);
    };
    /** Get a `name` */
    SerialBuffer.prototype.getName = function () {
        var a = this.getUint8Array(8);
        var result = "";
        for (var bit = 63; bit >= 0;) {
            var c = 0;
            for (var i = 0; i < 5; ++i) {
                if (bit >= 0) {
                    c = (c << 1) | ((a[Math.floor(bit / 8)] >> (bit % 8)) & 1);
                    --bit;
                }
            }
            if (c >= 6) {
                result += String.fromCharCode(c + "a".charCodeAt(0) - 6);
            }
            else if (c >= 1) {
                result += String.fromCharCode(c + "1".charCodeAt(0) - 1);
            }
            else {
                result += ".";
            }
        }
        if (result === ".............") {
            return result;
        }
        while (result.endsWith(".")) {
            result = result.substr(0, result.length - 1);
        }
        return result;
    };
    /** Append length-prefixed binary data */
    SerialBuffer.prototype.pushBytes = function (v) {
        this.pushVaruint32(v.length);
        this.pushArray(v);
    };
    /** Get length-prefixed binary data */
    SerialBuffer.prototype.getBytes = function () {
        return this.getUint8Array(this.getVaruint32());
    };
    /** Append a string */
    SerialBuffer.prototype.pushString = function (v) {
        this.pushBytes(this.textEncoder.encode(v));
    };
    /** Get a string */
    SerialBuffer.prototype.getString = function () {
        return this.textDecoder.decode(this.getBytes());
    };
    /** Append a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision. */
    SerialBuffer.prototype.pushSymbolCode = function (name) {
        if (typeof name !== "string") {
            throw new Error("Expected string containing symbol_code");
        }
        var a = [];
        a.push.apply(a, __spread(this.textEncoder.encode(name)));
        while (a.length < 8) {
            a.push(0);
        }
        this.pushArray(a.slice(0, 8));
    };
    /** Get a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision. */
    SerialBuffer.prototype.getSymbolCode = function () {
        var a = this.getUint8Array(8);
        var len;
        for (len = 0; len < a.length; ++len) {
            if (!a[len]) {
                break;
            }
        }
        var name = this.textDecoder.decode(new Uint8Array(a.buffer, a.byteOffset, len));
        return name;
    };
    /** Append a `symbol` */
    SerialBuffer.prototype.pushSymbol = function (_a) {
        var name = _a.name, precision = _a.precision;
        var a = [precision & 0xff];
        a.push.apply(a, __spread(this.textEncoder.encode(name)));
        while (a.length < 8) {
            a.push(0);
        }
        this.pushArray(a.slice(0, 8));
    };
    /** Get a `symbol` */
    SerialBuffer.prototype.getSymbol = function () {
        var precision = this.get();
        var a = this.getUint8Array(7);
        var len;
        for (len = 0; len < a.length; ++len) {
            if (!a[len]) {
                break;
            }
        }
        var name = this.textDecoder.decode(new Uint8Array(a.buffer, a.byteOffset, len));
        return { name: name, precision: precision };
    };
    /** Append an asset */
    SerialBuffer.prototype.pushAsset = function (s) {
        if (typeof s !== "string") {
            throw new Error("Expected string containing asset");
        }
        s = s.trim();
        var pos = 0;
        var amount = "";
        var precision = 0;
        if (s[pos] === "-") {
            amount += "-";
            ++pos;
        }
        var foundDigit = false;
        while (pos < s.length && s.charCodeAt(pos) >= "0".charCodeAt(0) && s.charCodeAt(pos) <= "9".charCodeAt(0)) {
            foundDigit = true;
            amount += s[pos];
            ++pos;
        }
        if (!foundDigit) {
            throw new Error("Asset must begin with a number");
        }
        if (s[pos] === ".") {
            ++pos;
            while (pos < s.length && s.charCodeAt(pos) >= "0".charCodeAt(0) && s.charCodeAt(pos) <= "9".charCodeAt(0)) {
                amount += s[pos];
                ++precision;
                ++pos;
            }
        }
        var name = s.substr(pos).trim();
        this.pushArray(numeric.signedDecimalToBinary(8, amount));
        this.pushSymbol({ name: name, precision: precision });
    };
    /** Get an asset */
    SerialBuffer.prototype.getAsset = function () {
        var amount = this.getUint8Array(8);
        var _a = this.getSymbol(), name = _a.name, precision = _a.precision;
        var s = numeric.signedBinaryToDecimal(amount, precision + 1);
        if (precision) {
            s = s.substr(0, s.length - precision) + "." + s.substr(s.length - precision);
        }
        return s + " " + name;
    };
    /** Append a public key */
    SerialBuffer.prototype.pushPublicKey = function (s) {
        var key = numeric.stringToPublicKey(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a public key */
    SerialBuffer.prototype.getPublicKey = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.publicKeyDataSize);
        return numeric.publicKeyToString({ type: type, data: data });
    };
    /** Append a private key */
    SerialBuffer.prototype.pushPrivateKey = function (s) {
        var key = numeric.stringToPrivateKey(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a private key */
    SerialBuffer.prototype.getPrivateKey = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.privateKeyDataSize);
        return numeric.privateKeyToString({ type: type, data: data });
    };
    /** Append a signature */
    SerialBuffer.prototype.pushSignature = function (s) {
        var key = numeric.stringToSignature(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a signature */
    SerialBuffer.prototype.getSignature = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.signatureDataSize);
        return numeric.signatureToString({ type: type, data: data });
    };
    return SerialBuffer;
}()); // SerialBuffer
exports.SerialBuffer = SerialBuffer;
/** Is this a supported ABI version? */
function supportedAbiVersion(version) {
    return version.startsWith("eosio::abi/1.");
}
exports.supportedAbiVersion = supportedAbiVersion;
function checkDateParse(date) {
    var result = Date.parse(date);
    if (Number.isNaN(result)) {
        throw new Error("Invalid time format");
    }
    return result;
}
/** Convert date in ISO format to `time_point` (miliseconds since epoch) */
function dateToTimePoint(date) {
    return Math.round(checkDateParse(date + "Z") * 1000);
}
exports.dateToTimePoint = dateToTimePoint;
/** Convert `time_point` (miliseconds since epoch) to date in ISO format */
function timePointToDate(us) {
    var s = (new Date(us / 1000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.timePointToDate = timePointToDate;
/** Convert date in ISO format to `time_point_sec` (seconds since epoch) */
function dateToTimePointSec(date) {
    return Math.round(checkDateParse(date + "Z") / 1000);
}
exports.dateToTimePointSec = dateToTimePointSec;
/** Convert `time_point_sec` (seconds since epoch) to to date in ISO format */
function timePointSecToDate(sec) {
    var s = (new Date(sec * 1000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.timePointSecToDate = timePointSecToDate;
/** Convert date in ISO format to `block_timestamp_type` (half-seconds since a different epoch) */
function dateToBlockTimestamp(date) {
    return Math.round((checkDateParse(date + "Z") - 946684800000) / 500);
}
exports.dateToBlockTimestamp = dateToBlockTimestamp;
/** Convert `block_timestamp_type` (half-seconds since a different epoch) to to date in ISO format */
function blockTimestampToDate(slot) {
    var s = (new Date(slot * 500 + 946684800000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.blockTimestampToDate = blockTimestampToDate;
/** Convert `string` to `Symbol`. format: `precision,NAME`. */
function stringToSymbol(s) {
    if (typeof s !== "string") {
        throw new Error("Expected string containing symbol");
    }
    var m = s.match(/^([0-9]+),([A-Z]+)$/);
    if (!m) {
        throw new Error("Invalid symbol");
    }
    return { name: m[2], precision: +m[1] };
}
exports.stringToSymbol = stringToSymbol;
/** Convert `Symbol` to `string`. format: `precision,NAME`. */
function symbolToString(_a) {
    var name = _a.name, precision = _a.precision;
    return precision + "," + name;
}
exports.symbolToString = symbolToString;
/** Convert binary data to hex */
function arrayToHex(data) {
    var e_1, _a;
    var result = "";
    try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var x = data_1_1.value;
            result += ("00" + x.toString(16)).slice(-2);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result.toUpperCase();
}
exports.arrayToHex = arrayToHex;
/** Convert hex to binary data */
function hexToUint8Array(hex) {
    if (typeof hex !== "string") {
        throw new Error("Expected string containing hex digits");
    }
    if (hex.length % 2) {
        throw new Error("Odd number of hex digits");
    }
    var l = hex.length / 2;
    var result = new Uint8Array(l);
    for (var i = 0; i < l; ++i) {
        var x = parseInt(hex.substr(i * 2, 2), 16);
        if (Number.isNaN(x)) {
            throw new Error("Expected hex string");
        }
        result[i] = x;
    }
    return result;
}
exports.hexToUint8Array = hexToUint8Array;
function serializeUnknown(buffer, data) {
    throw new Error("Don't know how to serialize " + this.name);
}
function deserializeUnknown(buffer) {
    throw new Error("Don't know how to deserialize " + this.name);
}
function serializeStruct(buffer, data, state, allowExtensions) {
    if (state === void 0) { state = new SerializerState(); }
    if (allowExtensions === void 0) { allowExtensions = true; }
    var e_2, _a;
    if (this.base) {
        this.base.serialize(buffer, data, state, allowExtensions);
    }
    try {
        for (var _b = __values(this.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
            var field = _c.value;
            if (field.name in data) {
                if (state.skippedBinaryExtension) {
                    throw new Error("unexpected " + this.name + "." + field.name);
                }
                field.type.serialize(buffer, data[field.name], state, allowExtensions && field === this.fields[this.fields.length - 1]);
            }
            else {
                if (allowExtensions && field.type.extensionOf) {
                    state.skippedBinaryExtension = true;
                }
                else {
                    throw new Error("missing " + this.name + "." + field.name + " (type=" + field.type.name + ")");
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
function deserializeStruct(buffer, state, allowExtensions) {
    if (state === void 0) { state = new SerializerState(); }
    if (allowExtensions === void 0) { allowExtensions = true; }
    var e_3, _a;
    var result;
    if (this.base) {
        result = this.base.deserialize(buffer, state, allowExtensions);
    }
    else {
        result = {};
    }
    try {
        for (var _b = __values(this.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
            var field = _c.value;
            if (allowExtensions && field.type.extensionOf && !buffer.haveReadData()) {
                state.skippedBinaryExtension = true;
            }
            else {
                result[field.name] = field.type.deserialize(buffer, state, allowExtensions);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
function serializeVariant(buffer, data, state, allowExtensions) {
    if (!Array.isArray(data) || data.length !== 2 || typeof data[0] !== "string") {
        throw new Error('expected variant: ["type", value]');
    }
    var i = this.fields.findIndex(function (field) { return field.name === data[0]; });
    if (i < 0) {
        throw new Error("type \"" + data[0] + "\" is not valid for variant");
    }
    buffer.pushVaruint32(i);
    this.fields[i].type.serialize(buffer, data[1], state, allowExtensions);
}
function deserializeVariant(buffer, state, allowExtensions) {
    var i = buffer.getVaruint32();
    if (i >= this.fields.length) {
        throw new Error("type index " + i + " is not valid for variant");
    }
    var field = this.fields[i];
    return [field.name, field.type.deserialize(buffer, state, allowExtensions)];
}
function serializeArray(buffer, data, state, allowExtensions) {
    var e_4, _a;
    buffer.pushVaruint32(data.length);
    try {
        for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
            var item = data_2_1.value;
            this.arrayOf.serialize(buffer, item, state, false);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
function deserializeArray(buffer, state, allowExtensions) {
    var len = buffer.getVaruint32();
    var result = [];
    for (var i = 0; i < len; ++i) {
        result.push(this.arrayOf.deserialize(buffer, state, false));
    }
    return result;
}
function serializeOptional(buffer, data, state, allowExtensions) {
    if (data === null || data === undefined) {
        buffer.push(0);
    }
    else {
        buffer.push(1);
        this.optionalOf.serialize(buffer, data, state, allowExtensions);
    }
}
function deserializeOptional(buffer, state, allowExtensions) {
    if (buffer.get()) {
        return this.optionalOf.deserialize(buffer, state, allowExtensions);
    }
    else {
        return null;
    }
}
function serializeExtension(buffer, data, state, allowExtensions) {
    this.extensionOf.serialize(buffer, data, state, allowExtensions);
}
function deserializeExtension(buffer, state, allowExtensions) {
    return this.extensionOf.deserialize(buffer, state, allowExtensions);
}
function createType(attrs) {
    return __assign({ name: "<missing name>", aliasOfName: "", arrayOf: null, optionalOf: null, extensionOf: null, baseName: "", base: null, fields: [], serialize: serializeUnknown, deserialize: deserializeUnknown }, attrs);
}
function checkRange(orig, converted) {
    if (Number.isNaN(+orig) || Number.isNaN(+converted) || (typeof orig !== "number" && typeof orig !== "string")) {
        throw new Error("Expected number");
    }
    if (+orig !== +converted) {
        throw new Error("Number is out of range");
    }
    return +orig;
}
/** Create the set of types built-in to the abi format */
function createInitialTypes() {
    var result = new Map(Object.entries({
        bool: createType({
            name: "bool",
            serialize: function (buffer, data) {
                if (typeof data !== "boolean") {
                    throw new Error("Expected true or false");
                }
                buffer.push(data ? 1 : 0);
            },
            deserialize: function (buffer) { return !!buffer.get(); },
        }),
        uint8: createType({
            name: "uint8",
            serialize: function (buffer, data) { buffer.push(checkRange(data, data & 0xff)); },
            deserialize: function (buffer) { return buffer.get(); },
        }),
        int8: createType({
            name: "int8",
            serialize: function (buffer, data) { buffer.push(checkRange(data, data << 24 >> 24)); },
            deserialize: function (buffer) { return buffer.get() << 24 >> 24; },
        }),
        uint16: createType({
            name: "uint16",
            serialize: function (buffer, data) { buffer.pushUint16(checkRange(data, data & 0xffff)); },
            deserialize: function (buffer) { return buffer.getUint16(); },
        }),
        int16: createType({
            name: "int16",
            serialize: function (buffer, data) { buffer.pushUint16(checkRange(data, data << 16 >> 16)); },
            deserialize: function (buffer) { return buffer.getUint16() << 16 >> 16; },
        }),
        uint32: createType({
            name: "uint32",
            serialize: function (buffer, data) { buffer.pushUint32(checkRange(data, data >>> 0)); },
            deserialize: function (buffer) { return buffer.getUint32(); },
        }),
        uint64: createType({
            name: "uint64",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.decimalToBinary(8, "" + data));
            },
            deserialize: function (buffer) { return numeric.binaryToDecimal(buffer.getUint8Array(8)); },
        }),
        int64: createType({
            name: "int64",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.signedDecimalToBinary(8, "" + data));
            },
            deserialize: function (buffer) { return numeric.signedBinaryToDecimal(buffer.getUint8Array(8)); },
        }),
        int32: createType({
            name: "int32",
            serialize: function (buffer, data) { buffer.pushUint32(checkRange(data, data | 0)); },
            deserialize: function (buffer) { return buffer.getUint32() | 0; },
        }),
        varuint32: createType({
            name: "varuint32",
            serialize: function (buffer, data) { buffer.pushVaruint32(checkRange(data, data >>> 0)); },
            deserialize: function (buffer) { return buffer.getVaruint32(); },
        }),
        varint32: createType({
            name: "varint32",
            serialize: function (buffer, data) { buffer.pushVarint32(checkRange(data, data | 0)); },
            deserialize: function (buffer) { return buffer.getVarint32(); },
        }),
        uint128: createType({
            name: "uint128",
            serialize: function (buffer, data) { buffer.pushArray(numeric.decimalToBinary(16, "" + data)); },
            deserialize: function (buffer) { return numeric.binaryToDecimal(buffer.getUint8Array(16)); },
        }),
        int128: createType({
            name: "int128",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.signedDecimalToBinary(16, "" + data));
            },
            deserialize: function (buffer) { return numeric.signedBinaryToDecimal(buffer.getUint8Array(16)); },
        }),
        float32: createType({
            name: "float32",
            serialize: function (buffer, data) { buffer.pushFloat32(data); },
            deserialize: function (buffer) { return buffer.getFloat32(); },
        }),
        float64: createType({
            name: "float64",
            serialize: function (buffer, data) { buffer.pushFloat64(data); },
            deserialize: function (buffer) { return buffer.getFloat64(); },
        }),
        float128: createType({
            name: "float128",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 16); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(16)); },
        }),
        bytes: createType({
            name: "bytes",
            serialize: function (buffer, data) { buffer.pushBytes(hexToUint8Array(data)); },
            deserialize: function (buffer) { return arrayToHex(buffer.getBytes()); },
        }),
        string: createType({
            name: "string",
            serialize: function (buffer, data) { buffer.pushString(data); },
            deserialize: function (buffer) { return buffer.getString(); },
        }),
        name: createType({
            name: "name",
            serialize: function (buffer, data) { buffer.pushName(data); },
            deserialize: function (buffer) { return buffer.getName(); },
        }),
        time_point: createType({
            name: "time_point",
            serialize: function (buffer, data) { buffer.pushNumberAsUint64(dateToTimePoint(data)); },
            deserialize: function (buffer) { return timePointToDate(buffer.getUint64AsNumber()); },
        }),
        time_point_sec: createType({
            name: "time_point_sec",
            serialize: function (buffer, data) { buffer.pushUint32(dateToTimePointSec(data)); },
            deserialize: function (buffer) { return timePointSecToDate(buffer.getUint32()); },
        }),
        block_timestamp_type: createType({
            name: "block_timestamp_type",
            serialize: function (buffer, data) { buffer.pushUint32(dateToBlockTimestamp(data)); },
            deserialize: function (buffer) { return blockTimestampToDate(buffer.getUint32()); },
        }),
        symbol_code: createType({
            name: "symbol_code",
            serialize: function (buffer, data) { buffer.pushSymbolCode(data); },
            deserialize: function (buffer) { return buffer.getSymbolCode(); },
        }),
        symbol: createType({
            name: "symbol",
            serialize: function (buffer, data) { buffer.pushSymbol(stringToSymbol(data)); },
            deserialize: function (buffer) { return symbolToString(buffer.getSymbol()); },
        }),
        asset: createType({
            name: "asset",
            serialize: function (buffer, data) { buffer.pushAsset(data); },
            deserialize: function (buffer) { return buffer.getAsset(); },
        }),
        checksum160: createType({
            name: "checksum160",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 20); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(20)); },
        }),
        checksum256: createType({
            name: "checksum256",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 32); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(32)); },
        }),
        checksum512: createType({
            name: "checksum512",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 64); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(64)); },
        }),
        public_key: createType({
            name: "public_key",
            serialize: function (buffer, data) { buffer.pushPublicKey(data); },
            deserialize: function (buffer) { return buffer.getPublicKey(); },
        }),
        private_key: createType({
            name: "private_key",
            serialize: function (buffer, data) { buffer.pushPrivateKey(data); },
            deserialize: function (buffer) { return buffer.getPrivateKey(); },
        }),
        signature: createType({
            name: "signature",
            serialize: function (buffer, data) { buffer.pushSignature(data); },
            deserialize: function (buffer) { return buffer.getSignature(); },
        }),
    }));
    result.set("extended_asset", createType({
        name: "extended_asset",
        baseName: "",
        fields: [
            { name: "quantity", typeName: "asset", type: result.get("asset") },
            { name: "contract", typeName: "name", type: result.get("name") },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    return result;
} // createInitialTypes()
exports.createInitialTypes = createInitialTypes;
/** Get type from `types` */
function getType(types, name) {
    var type = types.get(name);
    if (type && type.aliasOfName) {
        return getType(types, type.aliasOfName);
    }
    if (type) {
        return type;
    }
    if (name.endsWith("[]")) {
        return createType({
            name: name,
            arrayOf: getType(types, name.substr(0, name.length - 2)),
            serialize: serializeArray,
            deserialize: deserializeArray,
        });
    }
    if (name.endsWith("?")) {
        return createType({
            name: name,
            optionalOf: getType(types, name.substr(0, name.length - 1)),
            serialize: serializeOptional,
            deserialize: deserializeOptional,
        });
    }
    if (name.endsWith("$")) {
        return createType({
            name: name,
            extensionOf: getType(types, name.substr(0, name.length - 1)),
            serialize: serializeExtension,
            deserialize: deserializeExtension,
        });
    }
    throw new Error("Unknown type: " + name);
}
exports.getType = getType;
/**
 * Get types from abi
 * @param initialTypes Set of types to build on.
 *     In most cases, it's best to fill this from a fresh call to `getTypesFromAbi()`.
 */
function getTypesFromAbi(initialTypes, abi) {
    var e_5, _a, e_6, _b, e_7, _c, e_8, _d, e_9, _e;
    var types = new Map(initialTypes);
    if (abi.types) {
        try {
            for (var _f = __values(abi.types), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = _g.value, new_type_name = _h.new_type_name, type = _h.type;
                types.set(new_type_name, createType({ name: new_type_name, aliasOfName: type }));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
            }
            finally { if (e_5) throw e_5.error; }
        }
    }
    if (abi.structs) {
        try {
            for (var _j = __values(abi.structs), _k = _j.next(); !_k.done; _k = _j.next()) {
                var _l = _k.value, name_1 = _l.name, base = _l.base, fields = _l.fields;
                types.set(name_1, createType({
                    name: name_1,
                    baseName: base,
                    fields: fields.map(function (_a) {
                        var n = _a.name, type = _a.type;
                        return ({ name: n, typeName: type, type: null });
                    }),
                    serialize: serializeStruct,
                    deserialize: deserializeStruct,
                }));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_6) throw e_6.error; }
        }
    }
    if (abi.variants) {
        try {
            for (var _m = __values(abi.variants), _o = _m.next(); !_o.done; _o = _m.next()) {
                var _p = _o.value, name_2 = _p.name, t = _p.types;
                types.set(name_2, createType({
                    name: name_2,
                    fields: t.map(function (s) { return ({ name: s, typeName: s, type: null }); }),
                    serialize: serializeVariant,
                    deserialize: deserializeVariant,
                }));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_o && !_o.done && (_c = _m.return)) _c.call(_m);
            }
            finally { if (e_7) throw e_7.error; }
        }
    }
    try {
        for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
            var _q = __read(types_1_1.value, 2), name_3 = _q[0], type = _q[1];
            if (type.baseName) {
                type.base = getType(types, type.baseName);
            }
            try {
                for (var _r = __values(type.fields), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var field = _s.value;
                    field.type = getType(types, field.typeName);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_s && !_s.done && (_e = _r.return)) _e.call(_r);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (types_1_1 && !types_1_1.done && (_d = types_1.return)) _d.call(types_1);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return types;
} // getTypesFromAbi
exports.getTypesFromAbi = getTypesFromAbi;
/** TAPoS: Return transaction fields which reference `refBlock` and expire `expireSeconds` after `refBlock.timestamp` */
function transactionHeader(refBlock, expireSeconds) {
    return {
        expiration: timePointSecToDate(dateToTimePointSec(refBlock.timestamp) + expireSeconds),
        ref_block_num: refBlock.block_num & 0xffff,
        ref_block_prefix: refBlock.ref_block_prefix,
    };
}
exports.transactionHeader = transactionHeader;
/** Convert action data to serialized form (hex) */
function serializeActionData(contract, account, name, data, textEncoder, textDecoder) {
    var action = contract.actions.get(name);
    if (!action) {
        throw new Error("Unknown action " + name + " in contract " + account);
    }
    var buffer = new SerialBuffer({ textEncoder: textEncoder, textDecoder: textDecoder });
    action.serialize(buffer, data);
    return arrayToHex(buffer.asUint8Array());
}
exports.serializeActionData = serializeActionData;
/** Return action in serialized form */
function serializeAction(contract, account, name, authorization, data, textEncoder, textDecoder) {
    return {
        account: account,
        name: name,
        authorization: authorization,
        data: serializeActionData(contract, account, name, data, textEncoder, textDecoder),
    };
}
exports.serializeAction = serializeAction;
/** Deserialize action data. If `data` is a `string`, then it's assumed to be in hex. */
function deserializeActionData(contract, account, name, data, textEncoder, textDecoder) {
    var action = contract.actions.get(name);
    if (typeof data === "string") {
        data = hexToUint8Array(data);
    }
    if (!action) {
        throw new Error("Unknown action " + name + " in contract " + account);
    }
    var buffer = new SerialBuffer({ textDecoder: textDecoder, textEncoder: textEncoder });
    buffer.pushArray(data);
    return action.deserialize(buffer);
}
exports.deserializeActionData = deserializeActionData;
/** Deserialize action. If `data` is a `string`, then it's assumed to be in hex. */
function deserializeAction(contract, account, name, authorization, data, textEncoder, textDecoder) {
    return {
        account: account,
        name: name,
        authorization: authorization,
        data: deserializeActionData(contract, account, name, data, textEncoder, textDecoder),
    };
}
exports.deserializeAction = deserializeAction;


/***/ }),

/***/ "./src/ripemd.js":
/*!***********************!*\
  !*** ./src/ripemd.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://gist.githubusercontent.com/wlzla000/bac83df6d3c51916c4dd0bc947e46947/raw/7ee3462b095ab22580ddaf191f44a590da6fe33b/RIPEMD-160.js

/*
	RIPEMD-160.js

		developed
			by K. (https://github.com/wlzla000)
			on December 27-29, 2017,

		licensed under


		the MIT license

		Copyright (c) 2017 K.

		 Permission is hereby granted, free of charge, to any person
		obtaining a copy of this software and associated documentation
		files (the "Software"), to deal in the Software without
		restriction, including without limitation the rights to use,
		copy, modify, merge, publish, distribute, sublicense, and/or
		sell copies of the Software, and to permit persons to whom the
		Software is furnished to do so, subject to the following
		conditions:

		 The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		OTHER DEALINGS IN THE SOFTWARE.
*/



class RIPEMD160
{
	constructor()
	{
		// https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf
		// http://shodhganga.inflibnet.ac.in/bitstream/10603/22978/13/13_appendix.pdf
	}

	static get_n_pad_bytes(message_size /* in bytes, 1 byte is 8 bits. */)
	{
		//  Obtain the number of bytes needed to pad the message.
		// It does not contain the size of the message size information.
		/*
			https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf

			The Cryptographic Hash Function RIPEMD-160

			written by
				Bart Preneel,
				Hans Dobbertin,
				Antoon Bosselaers
			in
				1997.

			--------------------------------------------------

			§5     Description of RIPEMD-160

			......

			 In order to guarantee that the total input size is a
			multiple of 512 bits, the input is padded in the same
			way as for all the members of the MD4-family: one
			appends a single 1 followed by a string of 0s (the
			number of 0s lies between 0 and 511); the last 64 bits
			of the extended input contain the binary representation
			of the input size in bits, least significant byte first.
		*/
		/*
			https://tools.ietf.org/rfc/rfc1186.txt

			RFC 1186: MD4 Message Digest Algorithm.

			written by
				Ronald Linn Rivest
			in
				October 1990.

			--------------------------------------------------

			§3     MD4 Algorithm Description

			......

			Step 1. Append padding bits

			 The message is "padded" (extended) so that its length
			(in bits) is congruent to 448, modulo 512. That is, the
			message is extended so that it is just 64 bits shy of
			being a multiple of 512 bits long. Padding is always
			performed, even if the length of the message is already
			congruent to 448, modulo 512 (in which case 512 bits of
			padding are added).

			 Padding is performed as follows: a single "1" bit is
			appended to the message, and then enough zero bits are
			appended so that the length in bits of the padded
			message becomes congruent to 448, modulo 512.

			Step 2. Append length

			 A 64-bit representation of b (the length of the message
			before the padding bits were added) is appended to the
			result of the previous step. In the unlikely event that
			b is greater than 2^64, then only the low-order 64 bits
			of b are used. (These bits are appended as two 32-bit
			words and appended low-order word first in accordance
			with the previous conventions.)

			 At this point the resulting message (after padding with
			bits and with b) has a length that is an exact multiple
			of 512 bits. Equivalently, this message has a length
			that is an exact multiple of 16 (32-bit) words. Let
			M[0 ... N-1] denote the words of the resulting message,
			where N is a multiple of 16.
		*/
		// https://crypto.stackexchange.com/a/32407/54568
		/*
			Example case  # 1
				[0 bit: message.]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 2
				[512-bits: message]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 3
				[(512 - 64 = 448) bits: message.]
				[1 bit: 1.]
				[511 bits: 0.]
				[64 bits: message size information.]

			Example case  # 4
				[(512 - 65 = 447) bits: message.]
				[1 bit: 1.]
				[0 bit: 0.]
				[64 bits: message size information.]
		*/
		// The number of padding zero bits:
		//      511 - [{(message size in bits) + 64} (mod 512)]
		return 64 - ((message_size + 8) & 0b00111111 /* 63 */);
	}
	static pad(message /* An ArrayBuffer. */)
	{
		const message_size = message.byteLength;
		const n_pad = RIPEMD160.get_n_pad_bytes(message_size);

		//  `Number.MAX_SAFE_INTEGER` is ((2 ** 53) - 1) and
		// bitwise operation in Javascript is done on 32-bits operands.
		const divmod = (dividend, divisor) => [
			Math.floor(dividend / divisor),
			dividend % divisor
		];
		/*
To shift

   00000000 000????? ???????? ???????? ???????? ???????? ???????? ????????
                                     t o
   00000000 ???????? ???????? ???????? ???????? ???????? ???????? ?????000

--------------------------------------------------------------------------------

Method #1

    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
   [00000000 000AAAAA AAAAAAAA AAAAAAAA] (<A> captured)
   [00000000 AAAAAAAA AAAAAAAA AAAAA000] (<A> shifted)
                         (<B> captured) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                     (<B> shifted) [BBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB] (<A> & <B_2> merged)
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		const uint32_max_plus_1 = 0x100000000; // (2 ** 32)
		const [
			msg_byte_size_most, // Value range [0, (2 ** 21) - 1].
			msg_byte_size_least // Value range [0, (2 ** 32) - 1].
		] = divmod(message_size, uint32_max_plus_1);
		const [
			carry, // Value range [0, 7].
			msg_bit_size_least // Value range [0, (2 ** 32) - 8].
		] = divmod(message_byte_size_least * 8, uint32_max_plus_1);
		const message_bit_size_most = message_byte_size_most * 8
			+ carry; // Value range [0, (2 ** 24) - 1].

--------------------------------------------------------------------------------

Method #2
    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
      [00000 000AAAAA AAAAAAAA AAAAAAAA  AAA] (<A> captured)
                         (<B> captured) [000BBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                          (<B> shifted) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAAAAA][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		*/
		const [
			msg_bit_size_most,
			msg_bit_size_least
		] = divmod(message_size, 536870912 /* (2 ** 29) */)
			.map((x, index) => (index ? (x * 8) : x));

		// `ArrayBuffer.transfer()` is not supported.
		const padded = new Uint8Array(message_size + n_pad + 8);
		padded.set(new Uint8Array(message), 0);
		const data_view = new DataView(padded.buffer);
		data_view.setUint8(message_size, 0b10000000);
		data_view.setUint32(
			message_size + n_pad,
			msg_bit_size_least,
			true // Little-endian
		);
		data_view.setUint32(
			message_size + n_pad + 4,
			msg_bit_size_most,
			true // Little-endian
		);

		return padded.buffer;
	}

	static f(j, x, y, z)
	{
		if(0 <= j && j <= 15)
		{ // Exclusive-OR
			return x ^ y ^ z;
		}
		if(16 <= j && j <= 31)
		{ // Multiplexing (muxing)
			return (x & y) | (~x & z);
		}
		if(32 <= j && j <= 47)
		{
			return (x | ~y) ^ z;
		}
		if(48 <= j && j <= 63)
		{ // Multiplexing (muxing)
			return (x & z) | (y & ~z);
		}
		if(64 <= j && j <= 79)
		{
			return x ^ (y | ~z);
		}
	}
	static K(j)
	{
		if(0 <= j && j <= 15)
		{
			return 0x00000000;
		}
		if(16 <= j && j <= 31)
		{
			// Math.floor((2 ** 30) * Math.SQRT2)
			return 0x5A827999;
		}
		if(32 <= j && j <= 47)
		{
			// Math.floor((2 ** 30) * Math.sqrt(3))
			return 0x6ED9EBA1;
		}
		if(48 <= j && j <= 63)
		{
			// Math.floor((2 ** 30) * Math.sqrt(5))
			return 0x8F1BBCDC;
		}
		if(64 <= j && j <= 79)
		{
			// Math.floor((2 ** 30) * Math.sqrt(7))
			return 0xA953FD4E;
		}
	}
	static KP(j) // K'
	{
		if(0 <= j && j <= 15)
		{
			// Math.floor((2 ** 30) * Math.cbrt(2))
			return 0x50A28BE6;
		}
		if(16 <= j && j <= 31)
		{
			// Math.floor((2 ** 30) * Math.cbrt(3))
			return 0x5C4DD124;
		}
		if(32 <= j && j <= 47)
		{
			// Math.floor((2 ** 30) * Math.cbrt(5))
			return 0x6D703EF3;
		}
		if(48 <= j && j <= 63)
		{
			// Math.floor((2 ** 30) * Math.cbrt(7))
			return 0x7A6D76E9;
		}
		if(64 <= j && j <= 79)
		{
			return 0x00000000;
		}
	}
	static add_modulo32(/* ...... */)
	{
		// 1.  Modulo addition (addition modulo) is associative.
		//    https://proofwiki.org/wiki/Modulo_Addition_is_Associative
 		// 2.  Bitwise operation in Javascript
		//    is done on 32-bits operands
		//    and results in a 32-bits value.
		return Array
			.from(arguments)
			.reduce((a, b) => (a + b), 0) | 0;
	}
	static rol32(value, count)
	{ // Cyclic left shift (rotate) on 32-bits value.
		return (value << count) | (value >>> (32 - count));
	}
	static hash(message /* An ArrayBuffer. */)
	{
		//////////       Padding       //////////

		// The padded message.
		const padded = RIPEMD160.pad(message);

		//////////     Compression     //////////

		// Message word selectors.
		const r = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
			7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
			3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
			1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
			4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
		];
		const rP = [ // r'
			5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
			6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
			15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
			8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
			12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
		];

		// Amounts for 'rotate left' operation.
		const s = [
			11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
			7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
			11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
			11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
			9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
		];
		const sP = [ // s'
			8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
			9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
			9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
			15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
			8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
		];

		// The size, in bytes, of a word.
		const word_size = 4;

		// The size, in bytes, of a 16-words block.
		const block_size = 64;

		// The number of the 16-words blocks.
		const t = padded.byteLength / block_size;

		//  The message after padding consists of t 16-word blocks that
		// are denoted with X_i[j], with 0≤i≤(t − 1) and 0≤j≤15.
		const X = (new Array(t))
			.fill(undefined)
			.map((_, i) => new Proxy(
				new DataView(
					padded, i * block_size, block_size
				), {
				get(block_view, j)
				{
					return block_view.getUint32(
						j * word_size,
						true // Little-endian
					);
				}
			}));

		//  The result of RIPEMD-160 is contained in five 32-bit words,
		// which form the internal state of the algorithm. The final
		// content of these five 32-bit words is converted to a 160-bit
		// string, again using the little-endian convention.
		let h = [
			0x67452301, // h_0
			0xEFCDAB89, // h_1
			0x98BADCFE, // h_2
			0x10325476, // h_3
			0xC3D2E1F0  // h_4
		];

		for(let i = 0; i < t; ++i)
		{
			let A = h[0], B = h[1], C = h[2], D = h[3], E = h[4];
			let AP = A, BP = B, CP = C, DP = D, EP = E;
			for(let j = 0; j < 80; ++j)
			{
				// Left rounds
				let T = RIPEMD160.add_modulo32(
					RIPEMD160.rol32(
						RIPEMD160.add_modulo32(
							A,
							RIPEMD160.f(j, B, C, D),
							X[i][r[j]],
							RIPEMD160.K(j)
						),
						s[j]
					),
					E
				);
				A = E;
				E = D;
				D = RIPEMD160.rol32(C, 10);
				C = B;
				B = T;

				// Right rounds
				T = RIPEMD160.add_modulo32(
					RIPEMD160.rol32(
						RIPEMD160.add_modulo32(
							AP,
							RIPEMD160.f(
								79 - j,
								BP,
								CP,
								DP
							),
							X[i][rP[j]],
							RIPEMD160.KP(j)
						),
						sP[j]
					),
					EP
				);
				AP = EP;
				EP = DP;
				DP = RIPEMD160.rol32(CP, 10);
				CP = BP;
				BP = T;
			}
			let T = RIPEMD160.add_modulo32(h[1], C, DP);
			h[1] = RIPEMD160.add_modulo32(h[2], D, EP);
			h[2] = RIPEMD160.add_modulo32(h[3], E, AP);
			h[3] = RIPEMD160.add_modulo32(h[4], A, BP);
			h[4] = RIPEMD160.add_modulo32(h[0], B, CP);
			h[0] = T;
		}

		//  The final output string then consists of the concatenatation
		// of h_0, h_1, h_2, h_3, and h_4 after converting each h_i to a
		// 4-byte string using the little-endian convention.
		const result = new ArrayBuffer(20);
		const data_view = new DataView(result);
		h.forEach((h_i, i) => data_view.setUint32(i * 4, h_i, true));
		return result;
	}
}

module.exports = {
	RIPEMD160
}


/***/ }),

/***/ "./src/transaction.abi.json":
/*!**********************************!*\
  !*** ./src/transaction.abi.json ***!
  \**********************************/
/*! exports provided: version, types, structs, default */
/***/ (function(module) {

module.exports = {"version":"eosio::abi/1.0","types":[{"new_type_name":"account_name","type":"name"},{"new_type_name":"action_name","type":"name"},{"new_type_name":"permission_name","type":"name"}],"structs":[{"name":"permission_level","base":"","fields":[{"name":"actor","type":"account_name"},{"name":"permission","type":"permission_name"}]},{"name":"action","base":"","fields":[{"name":"account","type":"account_name"},{"name":"name","type":"action_name"},{"name":"authorization","type":"permission_level[]"},{"name":"data","type":"bytes"}]},{"name":"extension","base":"","fields":[{"name":"type","type":"uint16"},{"name":"data","type":"bytes"}]},{"name":"transaction_header","base":"","fields":[{"name":"expiration","type":"time_point_sec"},{"name":"ref_block_num","type":"uint16"},{"name":"ref_block_prefix","type":"uint32"},{"name":"max_net_usage_words","type":"varuint32"},{"name":"max_cpu_usage_ms","type":"uint8"},{"name":"delay_sec","type":"varuint32"}]},{"name":"transaction","base":"transaction_header","fields":[{"name":"context_free_actions","type":"action[]"},{"name":"actions","type":"action[]"},{"name":"transaction_extensions","type":"extension[]"}]}]};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9baWRdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtYXBpLnRzIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtbnVtZXJpYy50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL2Vvc2pzLXNlcmlhbGl6ZS50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL3JpcGVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7R0FFRztBQUNILHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pDLG1GQUF5QztBQUV6QywyQkFBMkI7QUFDM0IsSUFBTSxNQUFNLEdBQUcsbUJBQU8sQ0FB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Q0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QztJQUNELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxxQkFBcUIsQ0FBUyxFQUFFLElBQWEsRUFBRSxJQUFZLEVBQUUsTUFBYztJQUN2RSxJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxJQUFNLE1BQU0sR0FBRyxFQUFFLElBQUksUUFBRSxJQUFJLEVBQUUsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNyRSxJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7V0FDM0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMs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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJlb3Nqcy1hcGktZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lb3Nqcy1hcGkudHNcIik7XG4iLCIvKipcbiAqIEBtb2R1bGUgQVBJXG4gKi9cbi8vIGNvcHlyaWdodCBkZWZpbmVkIGluIGVvc2pzL0xJQ0VOU0UudHh0XG5cbmltcG9ydCB7IEFiaVByb3ZpZGVyLCBBdXRob3JpdHlQcm92aWRlciwgQmluYXJ5QWJpLCBDYWNoZWRBYmksIFNpZ25hdHVyZVByb3ZpZGVyIH0gZnJvbSBcIi4vZW9zanMtYXBpLWludGVyZmFjZXNcIjtcbmltcG9ydCBKc29uUnBjIGZyb20gXCIuL2Vvc2pzLWpzb25ycGNcIjtcbmltcG9ydCB7IEFiaSwgR2V0SW5mb1Jlc3VsdCwgUHVzaFRyYW5zYWN0aW9uQXJncyB9IGZyb20gXCIuL2Vvc2pzLXJwYy1pbnRlcmZhY2VzXCI7XG5pbXBvcnQgKiBhcyBzZXIgZnJvbSBcIi4vZW9zanMtc2VyaWFsaXplXCI7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgYWJpQWJpID0gcmVxdWlyZSgnLi4vc3JjL2FiaS5hYmkuanNvbicpO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCB0cmFuc2FjdGlvbkFiaSA9IHJlcXVpcmUoJy4uL3NyYy90cmFuc2FjdGlvbi5hYmkuanNvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICAgIC8qKiBJc3N1ZXMgUlBDIGNhbGxzICovXG4gICAgcHVibGljIHJwYzogSnNvblJwYztcblxuICAgIC8qKiBHZXQgc3Vic2V0IG9mIGBhdmFpbGFibGVLZXlzYCBuZWVkZWQgdG8gbWVldCBhdXRob3JpdGllcyBpbiBhIGB0cmFuc2FjdGlvbmAgKi9cbiAgICBwdWJsaWMgYXV0aG9yaXR5UHJvdmlkZXI6IEF1dGhvcml0eVByb3ZpZGVyO1xuXG4gICAgLyoqIFN1cHBsaWVzIEFCSXMgaW4gcmF3IGZvcm0gKGJpbmFyeSkgKi9cbiAgICBwdWJsaWMgYWJpUHJvdmlkZXI6IEFiaVByb3ZpZGVyO1xuXG4gICAgLyoqIFNpZ25zIHRyYW5zYWN0aW9ucyAqL1xuICAgIHB1YmxpYyBzaWduYXR1cmVQcm92aWRlcjogU2lnbmF0dXJlUHJvdmlkZXI7XG5cbiAgICAvKiogSWRlbnRpZmllcyBjaGFpbiAqL1xuICAgIHB1YmxpYyBjaGFpbklkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyO1xuICAgIHB1YmxpYyB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXI7XG5cbiAgICAvKiogQ29udmVydHMgYWJpIGZpbGVzIGJldHdlZW4gYmluYXJ5IGFuZCBzdHJ1Y3R1cmVkIGZvcm0gKGBhYmkuYWJpLmpzb25gKSAqL1xuICAgIHB1YmxpYyBhYmlUeXBlczogTWFwPHN0cmluZywgc2VyLlR5cGU+O1xuXG4gICAgLyoqIENvbnZlcnRzIHRyYW5zYWN0aW9ucyBiZXR3ZWVuIGJpbmFyeSBhbmQgc3RydWN0dXJlZCBmb3JtIChgdHJhbnNhY3Rpb24uYWJpLmpzb25gKSAqL1xuICAgIHB1YmxpYyB0cmFuc2FjdGlvblR5cGVzOiBNYXA8c3RyaW5nLCBzZXIuVHlwZT47XG5cbiAgICAvKiogSG9sZHMgaW5mb3JtYXRpb24gbmVlZGVkIHRvIHNlcmlhbGl6ZSBjb250cmFjdCBhY3Rpb25zICovXG4gICAgcHVibGljIGNvbnRyYWN0cyA9IG5ldyBNYXA8c3RyaW5nLCBzZXIuQ29udHJhY3Q+KCk7XG5cbiAgICAvKiogRmV0Y2hlZCBhYmlzICovXG4gICAgcHVibGljIGNhY2hlZEFiaXMgPSBuZXcgTWFwPHN0cmluZywgQ2FjaGVkQWJpPigpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKiAgICAqIGBycGNgOiBJc3N1ZXMgUlBDIGNhbGxzXG4gICAgICogICAgKiBgYXV0aG9yaXR5UHJvdmlkZXJgOiBHZXQgcHVibGljIGtleXMgbmVlZGVkIHRvIG1lZXQgYXV0aG9yaXRpZXMgaW4gYSB0cmFuc2FjdGlvblxuICAgICAqICAgICogYGFiaVByb3ZpZGVyYDogU3VwcGxpZXMgQUJJcyBpbiByYXcgZm9ybSAoYmluYXJ5KVxuICAgICAqICAgICogYHNpZ25hdHVyZVByb3ZpZGVyYDogU2lnbnMgdHJhbnNhY3Rpb25zXG4gICAgICogICAgKiBgY2hhaW5JZGA6IElkZW50aWZpZXMgY2hhaW5cbiAgICAgKiAgICAqIGB0ZXh0RW5jb2RlcmA6IGBUZXh0RW5jb2RlcmAgaW5zdGFuY2UgdG8gdXNlLiBQYXNzIGluIGBudWxsYCBpZiBydW5uaW5nIGluIGEgYnJvd3NlclxuICAgICAqICAgICogYHRleHREZWNvZGVyYDogYFRleHREZWNpZGVyYCBpbnN0YW5jZSB0byB1c2UuIFBhc3MgaW4gYG51bGxgIGlmIHJ1bm5pbmcgaW4gYSBicm93c2VyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYXJnczoge1xuICAgICAgICBycGM6IEpzb25ScGMsXG4gICAgICAgIGF1dGhvcml0eVByb3ZpZGVyPzogQXV0aG9yaXR5UHJvdmlkZXIsXG4gICAgICAgIGFiaVByb3ZpZGVyPzogQWJpUHJvdmlkZXIsXG4gICAgICAgIHNpZ25hdHVyZVByb3ZpZGVyOiBTaWduYXR1cmVQcm92aWRlcixcbiAgICAgICAgY2hhaW5JZD86IHN0cmluZyxcbiAgICAgICAgdGV4dEVuY29kZXI/OiBUZXh0RW5jb2RlcixcbiAgICAgICAgdGV4dERlY29kZXI/OiBUZXh0RGVjb2RlcixcbiAgICB9KSB7XG4gICAgICAgIHRoaXMucnBjID0gYXJncy5ycGM7XG4gICAgICAgIHRoaXMuYXV0aG9yaXR5UHJvdmlkZXIgPSBhcmdzLmF1dGhvcml0eVByb3ZpZGVyIHx8IGFyZ3MucnBjO1xuICAgICAgICB0aGlzLmFiaVByb3ZpZGVyID0gYXJncy5hYmlQcm92aWRlciB8fCBhcmdzLnJwYztcbiAgICAgICAgdGhpcy5zaWduYXR1cmVQcm92aWRlciA9IGFyZ3Muc2lnbmF0dXJlUHJvdmlkZXI7XG4gICAgICAgIHRoaXMuY2hhaW5JZCA9IGFyZ3MuY2hhaW5JZDtcbiAgICAgICAgdGhpcy50ZXh0RW5jb2RlciA9IGFyZ3MudGV4dEVuY29kZXI7XG4gICAgICAgIHRoaXMudGV4dERlY29kZXIgPSBhcmdzLnRleHREZWNvZGVyO1xuXG4gICAgICAgIHRoaXMuYWJpVHlwZXMgPSBzZXIuZ2V0VHlwZXNGcm9tQWJpKHNlci5jcmVhdGVJbml0aWFsVHlwZXMoKSwgYWJpQWJpKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblR5cGVzID0gc2VyLmdldFR5cGVzRnJvbUFiaShzZXIuY3JlYXRlSW5pdGlhbFR5cGVzKCksIHRyYW5zYWN0aW9uQWJpKTtcbiAgICB9XG5cbiAgICAvKiogRGVjb2RlcyBhbiBhYmkgYXMgVWludDhBcnJheSBpbnRvIGpzb24uICovXG4gICAgcHVibGljIHJhd0FiaVRvSnNvbihyYXdBYmk6IFVpbnQ4QXJyYXkpOiBBYmkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgc2VyLlNlcmlhbEJ1ZmZlcih7XG4gICAgICAgICAgICB0ZXh0RW5jb2RlcjogdGhpcy50ZXh0RW5jb2RlcixcbiAgICAgICAgICAgIHRleHREZWNvZGVyOiB0aGlzLnRleHREZWNvZGVyLFxuICAgICAgICAgICAgYXJyYXk6IHJhd0FiaSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghc2VyLnN1cHBvcnRlZEFiaVZlcnNpb24oYnVmZmVyLmdldFN0cmluZygpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWJpIHZlcnNpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyLnJlc3RhcnRSZWFkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFiaVR5cGVzLmdldChcImFiaV9kZWZcIikuZGVzZXJpYWxpemUoYnVmZmVyKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGFiaSBpbiBib3RoIGJpbmFyeSBhbmQgc3RydWN0dXJlZCBmb3Jtcy4gRmV0Y2ggd2hlbiBuZWVkZWQuICovXG4gICAgcHVibGljIGFzeW5jIGdldENhY2hlZEFiaShhY2NvdW50TmFtZTogc3RyaW5nLCByZWxvYWQgPSBmYWxzZSk6IFByb21pc2U8Q2FjaGVkQWJpPiB7XG4gICAgICAgIGlmICghcmVsb2FkICYmIHRoaXMuY2FjaGVkQWJpcy5nZXQoYWNjb3VudE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRBYmlzLmdldChhY2NvdW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhY2hlZEFiaTogQ2FjaGVkQWJpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmF3QWJpID0gKGF3YWl0IHRoaXMuYWJpUHJvdmlkZXIuZ2V0UmF3QWJpKGFjY291bnROYW1lKSkuYWJpO1xuICAgICAgICAgICAgY29uc3QgYWJpID0gdGhpcy5yYXdBYmlUb0pzb24ocmF3QWJpKTtcbiAgICAgICAgICAgIGNhY2hlZEFiaSA9IHsgcmF3QWJpLCBhYmkgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZS5tZXNzYWdlID0gYGZldGNoaW5nIGFiaSBmb3IgJHthY2NvdW50TmFtZX06ICR7ZS5tZXNzYWdlfWA7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FjaGVkQWJpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgYWJpIGZvciAke2FjY291bnROYW1lfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVkQWJpcy5zZXQoYWNjb3VudE5hbWUsIGNhY2hlZEFiaSk7XG4gICAgICAgIHJldHVybiBjYWNoZWRBYmk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhYmkgaW4gc3RydWN0dXJlZCBmb3JtLiBGZXRjaCB3aGVuIG5lZWRlZC4gKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWJpKGFjY291bnROYW1lOiBzdHJpbmcsIHJlbG9hZCA9IGZhbHNlKTogUHJvbWlzZTxBYmk+IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLmdldENhY2hlZEFiaShhY2NvdW50TmFtZSwgcmVsb2FkKSkuYWJpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgYWJpcyBuZWVkZWQgYnkgYSB0cmFuc2FjdGlvbiAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRUcmFuc2FjdGlvbkFiaXModHJhbnNhY3Rpb246IGFueSwgcmVsb2FkID0gZmFsc2UpOiBQcm9taXNlPEJpbmFyeUFiaVtdPiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBzdHJpbmdbXSA9IHRyYW5zYWN0aW9uLmFjdGlvbnMubWFwKChhY3Rpb246IHNlci5BY3Rpb24pOiBzdHJpbmcgPT4gYWN0aW9uLmFjY291bnQpO1xuICAgICAgICBjb25zdCB1bmlxdWVBY2NvdW50czogU2V0PHN0cmluZz4gPSBuZXcgU2V0KGFjY291bnRzKTtcbiAgICAgICAgY29uc3QgYWN0aW9uUHJvbWlzZXM6IEFycmF5PFByb21pc2U8QmluYXJ5QWJpPj4gPSBbLi4udW5pcXVlQWNjb3VudHNdLm1hcChcbiAgICAgICAgICAgIGFzeW5jIChhY2NvdW50OiBzdHJpbmcpOiBQcm9taXNlPEJpbmFyeUFiaT4gPT4gKHtcbiAgICAgICAgICAgICAgICBhY2NvdW50TmFtZTogYWNjb3VudCwgYWJpOiAoYXdhaXQgdGhpcy5nZXRDYWNoZWRBYmkoYWNjb3VudCwgcmVsb2FkKSkucmF3QWJpLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoYWN0aW9uUHJvbWlzZXMpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgZGF0YSBuZWVkZWQgdG8gc2VyaWFsaXplIGFjdGlvbnMgaW4gYSBjb250cmFjdCAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRDb250cmFjdChhY2NvdW50TmFtZTogc3RyaW5nLCByZWxvYWQgPSBmYWxzZSk6IFByb21pc2U8c2VyLkNvbnRyYWN0PiB7XG4gICAgICAgIGlmICghcmVsb2FkICYmIHRoaXMuY29udHJhY3RzLmdldChhY2NvdW50TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyYWN0cy5nZXQoYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFiaSA9IGF3YWl0IHRoaXMuZ2V0QWJpKGFjY291bnROYW1lLCByZWxvYWQpO1xuICAgICAgICBjb25zdCB0eXBlcyA9IHNlci5nZXRUeXBlc0Zyb21BYmkoc2VyLmNyZWF0ZUluaXRpYWxUeXBlcygpLCBhYmkpO1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gbmV3IE1hcDxzdHJpbmcsIHNlci5UeXBlPigpO1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgdHlwZSB9IG9mIGFiaS5hY3Rpb25zKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNldChuYW1lLCBzZXIuZ2V0VHlwZSh0eXBlcywgdHlwZSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdHlwZXMsIGFjdGlvbnMgfTtcbiAgICAgICAgdGhpcy5jb250cmFjdHMuc2V0KGFjY291bnROYW1lLCByZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKiBDb252ZXJ0IGB2YWx1ZWAgdG8gYmluYXJ5IGZvcm0uIGB0eXBlYCBtdXN0IGJlIGEgYnVpbHQtaW4gYWJpIHR5cGUgb3IgaW4gYHRyYW5zYWN0aW9uLmFiaS5qc29uYC4gKi9cbiAgICBwdWJsaWMgc2VyaWFsaXplKGJ1ZmZlcjogc2VyLlNlcmlhbEJ1ZmZlciwgdHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25UeXBlcy5nZXQodHlwZSkuc2VyaWFsaXplKGJ1ZmZlciwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKiBDb252ZXJ0IGRhdGEgaW4gYGJ1ZmZlcmAgdG8gc3RydWN0dXJlZCBmb3JtLiBgdHlwZWAgbXVzdCBiZSBhIGJ1aWx0LWluIGFiaSB0eXBlIG9yIGluIGB0cmFuc2FjdGlvbi5hYmkuanNvbmAuICovXG4gICAgcHVibGljIGRlc2VyaWFsaXplKGJ1ZmZlcjogc2VyLlNlcmlhbEJ1ZmZlciwgdHlwZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNhY3Rpb25UeXBlcy5nZXQodHlwZSkuZGVzZXJpYWxpemUoYnVmZmVyKTtcbiAgICB9XG5cbiAgICAvKiogQ29udmVydCBhIHRyYW5zYWN0aW9uIHRvIGJpbmFyeSAqL1xuICAgIHB1YmxpYyBzZXJpYWxpemVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogYW55KTogVWludDhBcnJheSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBzZXIuU2VyaWFsQnVmZmVyKHsgdGV4dEVuY29kZXI6IHRoaXMudGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiB0aGlzLnRleHREZWNvZGVyIH0pO1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZShidWZmZXIsIFwidHJhbnNhY3Rpb25cIiwge1xuICAgICAgICAgICAgbWF4X25ldF91c2FnZV93b3JkczogMCxcbiAgICAgICAgICAgIG1heF9jcHVfdXNhZ2VfbXM6IDAsXG4gICAgICAgICAgICBkZWxheV9zZWM6IDAsXG4gICAgICAgICAgICBjb250ZXh0X2ZyZWVfYWN0aW9uczogW10sXG4gICAgICAgICAgICBhY3Rpb25zOiBbXSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uX2V4dGVuc2lvbnM6IFtdLFxuICAgICAgICAgICAgLi4udHJhbnNhY3Rpb24sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYnVmZmVyLmFzVWludDhBcnJheSgpO1xuICAgIH1cblxuICAgIC8qKiBDb252ZXJ0IGEgdHJhbnNhY3Rpb24gZnJvbSBiaW5hcnkuIExlYXZlcyBhY3Rpb25zIGluIGhleC4gKi9cbiAgICBwdWJsaWMgZGVzZXJpYWxpemVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVWludDhBcnJheSk6IGFueSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBzZXIuU2VyaWFsQnVmZmVyKHsgdGV4dEVuY29kZXI6IHRoaXMudGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiB0aGlzLnRleHREZWNvZGVyIH0pO1xuICAgICAgICBidWZmZXIucHVzaEFycmF5KHRyYW5zYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzZXJpYWxpemUoYnVmZmVyLCBcInRyYW5zYWN0aW9uXCIpO1xuICAgIH1cblxuICAgIC8qKiBDb252ZXJ0IGFjdGlvbnMgdG8gaGV4ICovXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbGl6ZUFjdGlvbnMoYWN0aW9uczogc2VyLkFjdGlvbltdKTogUHJvbWlzZTxzZXIuU2VyaWFsaXplZEFjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChhY3Rpb25zLm1hcChhc3luYyAoeyBhY2NvdW50LCBuYW1lLCBhdXRob3JpemF0aW9uLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgdGhpcy5nZXRDb250cmFjdChhY2NvdW50KTtcbiAgICAgICAgICAgIHJldHVybiBzZXIuc2VyaWFsaXplQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNvbnRyYWN0LCBhY2NvdW50LCBuYW1lLCBhdXRob3JpemF0aW9uLCBkYXRhLCB0aGlzLnRleHRFbmNvZGVyLCB0aGlzLnRleHREZWNvZGVyKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKiBDb252ZXJ0IGFjdGlvbnMgZnJvbSBoZXggKi9cbiAgICBwdWJsaWMgYXN5bmMgZGVzZXJpYWxpemVBY3Rpb25zKGFjdGlvbnM6IHNlci5BY3Rpb25bXSk6IFByb21pc2U8c2VyLkFjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbChhY3Rpb25zLm1hcChhc3luYyAoeyBhY2NvdW50LCBuYW1lLCBhdXRob3JpemF0aW9uLCBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgdGhpcy5nZXRDb250cmFjdChhY2NvdW50KTtcbiAgICAgICAgICAgIHJldHVybiBzZXIuZGVzZXJpYWxpemVBY3Rpb24oXG4gICAgICAgICAgICAgICAgY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGF1dGhvcml6YXRpb24sIGRhdGEsIHRoaXMudGV4dEVuY29kZXIsIHRoaXMudGV4dERlY29kZXIpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqIENvbnZlcnQgYSB0cmFuc2FjdGlvbiBmcm9tIGJpbmFyeS4gQWxzbyBkZXNlcmlhbGl6ZXMgYWN0aW9ucy4gKi9cbiAgICBwdWJsaWMgYXN5bmMgZGVzZXJpYWxpemVUcmFuc2FjdGlvbldpdGhBY3Rpb25zKHRyYW5zYWN0aW9uOiBVaW50OEFycmF5IHwgc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc2FjdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBzZXIuaGV4VG9VaW50OEFycmF5KHRyYW5zYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IHRoaXMuZGVzZXJpYWxpemVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZEFjdGlvbnMgPSBhd2FpdCB0aGlzLmRlc2VyaWFsaXplQWN0aW9ucyhkZXNlcmlhbGl6ZWRUcmFuc2FjdGlvbi5hY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVzZXJpYWxpemVkVHJhbnNhY3Rpb24sIGFjdGlvbnM6IGRlc2VyaWFsaXplZEFjdGlvbnMgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIG9wdGlvbmFsbHkgYnJvYWRjYXN0IGEgdHJhbnNhY3Rpb24uXG4gICAgICpcbiAgICAgKiBOYW1lZCBQYXJhbWV0ZXJzOlxuICAgICAqICAgICogYGJyb2FkY2FzdGA6IGJyb2FkY2FzdCB0aGlzIHRyYW5zYWN0aW9uP1xuICAgICAqICAgICogSWYgYm90aCBgYmxvY2tzQmVoaW5kYCBhbmQgYGV4cGlyZVNlY29uZHNgIGFyZSBwcmVzZW50LFxuICAgICAqICAgICAgdGhlbiBmZXRjaCB0aGUgYmxvY2sgd2hpY2ggaXMgYGJsb2Nrc0JlaGluZGAgYmVoaW5kIGhlYWQgYmxvY2ssXG4gICAgICogICAgICB1c2UgaXQgYXMgYSByZWZlcmVuY2UgZm9yIFRBUG9TLCBhbmQgZXhwaXJlIHRoZSB0cmFuc2FjdGlvbiBgZXhwaXJlU2Vjb25kc2AgYWZ0ZXIgdGhhdCBibG9jaydzIHRpbWUuXG4gICAgICogQHJldHVybnMgbm9kZSByZXNwb25zZSBpZiBgYnJvYWRjYXN0YCwgYHtzaWduYXR1cmVzLCBzZXJpYWxpemVkVHJhbnNhY3Rpb259YCBpZiBgIWJyb2FkY2FzdGBcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgdHJhbnNhY3QodHJhbnNhY3Rpb246IGFueSwgeyBicm9hZGNhc3QgPSB0cnVlLCBibG9ja3NCZWhpbmQsIGV4cGlyZVNlY29uZHMgfTpcbiAgICAgICAgeyBicm9hZGNhc3Q/OiBib29sZWFuOyBibG9ja3NCZWhpbmQ/OiBudW1iZXI7IGV4cGlyZVNlY29uZHM/OiBudW1iZXI7IH0gPSB7fSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGxldCBpbmZvOiBHZXRJbmZvUmVzdWx0O1xuXG4gICAgICAgIGlmICghdGhpcy5jaGFpbklkKSB7XG4gICAgICAgICAgICBpbmZvID0gYXdhaXQgdGhpcy5ycGMuZ2V0X2luZm8oKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaW5JZCA9IGluZm8uY2hhaW5faWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGJsb2Nrc0JlaGluZCA9PT0gXCJudW1iZXJcIiAmJiBleHBpcmVTZWNvbmRzKSB7IC8vIHVzZSBjb25maWcgZmllbGRzIHRvIGdlbmVyYXRlIFRBUE9TIGlmIHRoZXkgZXhpc3RcbiAgICAgICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgICAgICAgIGluZm8gPSBhd2FpdCB0aGlzLnJwYy5nZXRfaW5mbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVmQmxvY2sgPSBhd2FpdCB0aGlzLnJwYy5nZXRfYmxvY2soaW5mby5oZWFkX2Jsb2NrX251bSAtIGJsb2Nrc0JlaGluZCk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbiA9IHsgLi4uc2VyLnRyYW5zYWN0aW9uSGVhZGVyKHJlZkJsb2NrLCBleHBpcmVTZWNvbmRzKSwgLi4udHJhbnNhY3Rpb24gfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYXNSZXF1aXJlZFRhcG9zRmllbGRzKHRyYW5zYWN0aW9uKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWlyZWQgY29uZmlndXJhdGlvbiBvciBUQVBPUyBmaWVsZHMgYXJlIG5vdCBwcmVzZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWJpczogQmluYXJ5QWJpW10gPSBhd2FpdCB0aGlzLmdldFRyYW5zYWN0aW9uQWJpcyh0cmFuc2FjdGlvbik7XG4gICAgICAgIHRyYW5zYWN0aW9uID0geyAuLi50cmFuc2FjdGlvbiwgYWN0aW9uczogYXdhaXQgdGhpcy5zZXJpYWxpemVBY3Rpb25zKHRyYW5zYWN0aW9uLmFjdGlvbnMpIH07XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiA9IHRoaXMuc2VyaWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVLZXlzID0gYXdhaXQgdGhpcy5zaWduYXR1cmVQcm92aWRlci5nZXRBdmFpbGFibGVLZXlzKCk7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkS2V5cyA9IGF3YWl0IHRoaXMuYXV0aG9yaXR5UHJvdmlkZXIuZ2V0UmVxdWlyZWRLZXlzKHsgdHJhbnNhY3Rpb24sIGF2YWlsYWJsZUtleXMgfSk7XG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZXMgPSBhd2FpdCB0aGlzLnNpZ25hdHVyZVByb3ZpZGVyLnNpZ24oe1xuICAgICAgICAgICAgY2hhaW5JZDogdGhpcy5jaGFpbklkLFxuICAgICAgICAgICAgcmVxdWlyZWRLZXlzLFxuICAgICAgICAgICAgc2VyaWFsaXplZFRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgYWJpcyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHB1c2hUcmFuc2FjdGlvbkFyZ3MgPSB7IHNpZ25hdHVyZXMsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiB9O1xuICAgICAgICBpZiAoYnJvYWRjYXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU2lnbmVkVHJhbnNhY3Rpb24ocHVzaFRyYW5zYWN0aW9uQXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHB1c2hUcmFuc2FjdGlvbkFyZ3M7XG4gICAgfVxuXG4gICAgLyoqIEJyb2FkY2FzdCBhIHNpZ25lZCB0cmFuc2FjdGlvbiAqL1xuICAgIHB1YmxpYyBhc3luYyBwdXNoU2lnbmVkVHJhbnNhY3Rpb24oeyBzaWduYXR1cmVzLCBzZXJpYWxpemVkVHJhbnNhY3Rpb24gfTogUHVzaFRyYW5zYWN0aW9uQXJncyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJwYy5wdXNoX3RyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIHNpZ25hdHVyZXMsXG4gICAgICAgICAgICBzZXJpYWxpemVkVHJhbnNhY3Rpb24sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGV2ZW50dWFsbHkgYnJlYWsgb3V0IGludG8gVHJhbnNhY3Rpb25WYWxpZGF0b3IgY2xhc3NcbiAgICBwcml2YXRlIGhhc1JlcXVpcmVkVGFwb3NGaWVsZHMoeyBleHBpcmF0aW9uLCByZWZfYmxvY2tfbnVtLCByZWZfYmxvY2tfcHJlZml4LCAuLi50cmFuc2FjdGlvbiB9OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKGV4cGlyYXRpb24gJiYgcmVmX2Jsb2NrX251bSAmJiByZWZfYmxvY2tfcHJlZml4KTtcbiAgICB9XG5cbn0gLy8gQXBpXG4iLCIvKipcbiAqIEBtb2R1bGUgTnVtZXJpY1xuICovXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdmFyLXJlcXVpcmVzXG5jb25zdCByaXBlbWQxNjAgPSByZXF1aXJlKFwiLi9yaXBlbWRcIikuUklQRU1EMTYwLmhhc2ggYXMgKGE6IFVpbnQ4QXJyYXkpID0+IEFycmF5QnVmZmVyO1xuXG5jb25zdCBiYXNlNThDaGFycyA9IFwiMTIzNDU2Nzg5QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaYWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5elwiO1xuY29uc3QgYmFzZTY0Q2hhcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcblxuZnVuY3Rpb24gY3JlYXRlX2Jhc2U1OF9tYXAoKSB7XG4gICAgY29uc3QgYmFzZTU4TSA9IEFycmF5KDI1NikuZmlsbCgtMSkgYXMgbnVtYmVyW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlNThDaGFycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBiYXNlNThNW2Jhc2U1OENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2U1OE07XG59XG5cbmNvbnN0IGJhc2U1OE1hcCA9IGNyZWF0ZV9iYXNlNThfbWFwKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZV9iYXNlNjRfbWFwKCkge1xuICAgIGNvbnN0IGJhc2U2NE0gPSBBcnJheSgyNTYpLmZpbGwoLTEpIGFzIG51bWJlcltdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFzZTY0Q2hhcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYmFzZTY0TVtiYXNlNjRDaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG4gICAgfVxuICAgIGJhc2U2NE1bXCI9XCIuY2hhckNvZGVBdCgwKV0gPSAwO1xuICAgIHJldHVybiBiYXNlNjRNO1xufVxuXG5jb25zdCBiYXNlNjRNYXAgPSBjcmVhdGVfYmFzZTY0X21hcCgpO1xuXG4vKiogSXMgYGJpZ251bWAgYSBuZWdhdGl2ZSBudW1iZXI/ICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZWdhdGl2ZShiaWdudW06IFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gKGJpZ251bVtiaWdudW0ubGVuZ3RoIC0gMV0gJiAweDgwKSAhPT0gMDtcbn1cblxuLyoqIE5lZ2F0ZSBgYmlnbnVtYCAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lZ2F0ZShiaWdudW06IFVpbnQ4QXJyYXkpIHtcbiAgICBsZXQgY2FycnkgPSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmlnbnVtLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHggPSAofmJpZ251bVtpXSAmIDB4ZmYpICsgY2Fycnk7XG4gICAgICAgIGJpZ251bVtpXSA9IHg7XG4gICAgICAgIGNhcnJ5ID0geCA+PiA4O1xuICAgIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxuICogQHBhcmFtIHNpemUgYmlnbnVtIHNpemUgKGJ5dGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjaW1hbFRvQmluYXJ5KHNpemU6IG51bWJlciwgczogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHNyY0RpZ2l0ID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoc3JjRGlnaXQgPCBcIjBcIi5jaGFyQ29kZUF0KDApIHx8IHNyY0RpZ2l0ID4gXCI5XCIuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBudW1iZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhcnJ5ID0gc3JjRGlnaXQgLSBcIjBcIi5jaGFyQ29kZUF0KDApO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7ICsraikge1xuICAgICAgICAgICAgY29uc3QgeCA9IHJlc3VsdFtqXSAqIDEwICsgY2Fycnk7XG4gICAgICAgICAgICByZXN1bHRbal0gPSB4O1xuICAgICAgICAgICAgY2FycnkgPSB4ID4+IDg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhcnJ5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgaXMgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHNpZ25lZCBkZWNpbWFsIG51bWJlciBpbiBgc2AgdG8gYSBiaWdudW1cbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25lZERlY2ltYWxUb0JpbmFyeShzaXplOiBudW1iZXIsIHM6IHN0cmluZykge1xuICAgIGNvbnN0IG5lZ2F0aXZlID0gc1swXSA9PT0gXCItXCI7XG4gICAgaWYgKG5lZ2F0aXZlKSB7XG4gICAgICAgIHMgPSBzLnN1YnN0cigxKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gZGVjaW1hbFRvQmluYXJ5KHNpemUsIHMpO1xuICAgIGlmIChuZWdhdGl2ZSkge1xuICAgICAgICBuZWdhdGUocmVzdWx0KTtcbiAgICAgICAgaWYgKCFpc05lZ2F0aXZlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzTmVnYXRpdmUocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1iZXIgaXMgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVRvRGVjaW1hbChiaWdudW06IFVpbnQ4QXJyYXksIG1pbkRpZ2l0cyA9IDEpIHtcbiAgICBjb25zdCByZXN1bHQgPSBBcnJheShtaW5EaWdpdHMpLmZpbGwoXCIwXCIuY2hhckNvZGVBdCgwKSkgYXMgbnVtYmVyW107XG4gICAgZm9yIChsZXQgaSA9IGJpZ251bS5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBsZXQgY2FycnkgPSBiaWdudW1baV07XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gKChyZXN1bHRbal0gLSBcIjBcIi5jaGFyQ29kZUF0KDApKSA8PCA4KSArIGNhcnJ5O1xuICAgICAgICAgICAgcmVzdWx0W2pdID0gXCIwXCIuY2hhckNvZGVBdCgwKSArIHggJSAxMDtcbiAgICAgICAgICAgIGNhcnJ5ID0gKHggLyAxMCkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChjYXJyeSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXCIwXCIuY2hhckNvZGVBdCgwKSArIGNhcnJ5ICUgMTApO1xuICAgICAgICAgICAgY2FycnkgPSAoY2FycnkgLyAxMCkgfCAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ucmVzdWx0KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGEgc2lnbmVkIGRlY2ltYWwgbnVtYmVyXG4gKiBAcGFyYW0gbWluRGlnaXRzIDAtcGFkIHJlc3VsdCB0byB0aGlzIG1hbnkgZGlnaXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRCaW5hcnlUb0RlY2ltYWwoYmlnbnVtOiBVaW50OEFycmF5LCBtaW5EaWdpdHMgPSAxKSB7XG4gICAgaWYgKGlzTmVnYXRpdmUoYmlnbnVtKSkge1xuICAgICAgICBjb25zdCB4ID0gYmlnbnVtLnNsaWNlKCk7XG4gICAgICAgIG5lZ2F0ZSh4KTtcbiAgICAgICAgcmV0dXJuIFwiLVwiICsgYmluYXJ5VG9EZWNpbWFsKHgsIG1pbkRpZ2l0cyk7XG4gICAgfVxuICAgIHJldHVybiBiaW5hcnlUb0RlY2ltYWwoYmlnbnVtLCBtaW5EaWdpdHMpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS01OCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYXNlNThUb0JpbmFyeShzaXplOiBudW1iZXIsIHM6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KHNpemUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBsZXQgY2FycnkgPSBiYXNlNThNYXBbcy5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgaWYgKGNhcnJ5IDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBiYXNlLTU4IHZhbHVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcmVzdWx0W2pdICogNTggKyBjYXJyeTtcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XG4gICAgICAgICAgICBjYXJyeSA9IHggPj4gODtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FycnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImJhc2UtNTggdmFsdWUgaXMgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGBiaWdudW1gIHRvIGEgYmFzZS01OCBudW1iZXJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmFyeVRvQmFzZTU4KGJpZ251bTogVWludDhBcnJheSwgbWluRGlnaXRzID0gMSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdIGFzIG51bWJlcltdO1xuICAgIGZvciAoY29uc3QgYnl0ZSBvZiBiaWdudW0pIHtcbiAgICAgICAgbGV0IGNhcnJ5ID0gYnl0ZTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSAoYmFzZTU4TWFwW3Jlc3VsdFtqXV0gPDwgOCkgKyBjYXJyeTtcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IGJhc2U1OENoYXJzLmNoYXJDb2RlQXQoeCAlIDU4KTtcbiAgICAgICAgICAgIGNhcnJ5ID0gKHggLyA1OCkgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChjYXJyeSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYmFzZTU4Q2hhcnMuY2hhckNvZGVBdChjYXJyeSAlIDU4KSk7XG4gICAgICAgICAgICBjYXJyeSA9IChjYXJyeSAvIDU4KSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBieXRlIG9mIGJpZ251bSkge1xuICAgICAgICBpZiAoYnl0ZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChcIjFcIi5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucmV2ZXJzZSgpO1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnJlc3VsdCk7XG59XG5cbi8qKiBDb252ZXJ0IGFuIHVuc2lnbmVkIGJhc2UtNjQgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFRvQmluYXJ5KHM6IHN0cmluZykge1xuICAgIGxldCBsZW4gPSBzLmxlbmd0aDtcbiAgICBpZiAoKGxlbiAmIDMpID09PSAxICYmIHNbbGVuIC0gMV0gPT09IFwiPVwiKSB7XG4gICAgICAgIGxlbiAtPSAxO1xuICAgIH0gLy8gZmMgYXBwZW5kcyBhbiBleHRyYSAnPSdcbiAgICBpZiAoKGxlbiAmIDMpICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJhc2UtNjQgdmFsdWUgaXMgbm90IHBhZGRlZCBjb3JyZWN0bHlcIik7XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwcyA9IGxlbiA+PiAyO1xuICAgIGxldCBieXRlcyA9IGdyb3VwcyAqIDM7XG4gICAgaWYgKGxlbiA+IDAgJiYgc1tsZW4gLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgaWYgKHNbbGVuIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgICAgICBieXRlcyAtPSAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnl0ZXMgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShieXRlcyk7XG5cbiAgICBmb3IgKGxldCBncm91cCA9IDA7IGdyb3VwIDwgZ3JvdXBzOyArK2dyb3VwKSB7XG4gICAgICAgIGNvbnN0IGRpZ2l0MCA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMCldO1xuICAgICAgICBjb25zdCBkaWdpdDEgPSBiYXNlNjRNYXBbcy5jaGFyQ29kZUF0KGdyb3VwICogNCArIDEpXTtcbiAgICAgICAgY29uc3QgZGlnaXQyID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAyKV07XG4gICAgICAgIGNvbnN0IGRpZ2l0MyA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMyldO1xuICAgICAgICByZXN1bHRbZ3JvdXAgKiAzICsgMF0gPSAoZGlnaXQwIDw8IDIpIHwgKGRpZ2l0MSA+PiA0KTtcbiAgICAgICAgaWYgKGdyb3VwICogMyArIDEgPCBieXRlcykge1xuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDFdID0gKChkaWdpdDEgJiAxNSkgPDwgNCkgfCAoZGlnaXQyID4+IDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChncm91cCAqIDMgKyAyIDwgYnl0ZXMpIHtcbiAgICAgICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAyXSA9ICgoZGlnaXQyICYgMykgPDwgNikgfCBkaWdpdDM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIEtleSB0eXBlcyB0aGlzIGxpYnJhcnkgc3VwcG9ydHMgKi9cbmV4cG9ydCBjb25zdCBlbnVtIEtleVR5cGUge1xuICAgIGsxID0gMCxcbiAgICByMSA9IDEsXG59XG5cbi8qKiBQdWJsaWMga2V5IGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cbmV4cG9ydCBjb25zdCBwdWJsaWNLZXlEYXRhU2l6ZSA9IDMzO1xuXG4vKiogUHJpdmF0ZSBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xuZXhwb3J0IGNvbnN0IHByaXZhdGVLZXlEYXRhU2l6ZSA9IDMyO1xuXG4vKiogU2lnbmF0dXJlIGRhdGEgc2l6ZSwgZXhjbHVkaW5nIHR5cGUgZmllbGQgKi9cbmV4cG9ydCBjb25zdCBzaWduYXR1cmVEYXRhU2l6ZSA9IDY1O1xuXG4vKiogUHVibGljIGtleSwgcHJpdmF0ZSBrZXksIG9yIHNpZ25hdHVyZSBpbiBiaW5hcnkgZm9ybSAqL1xuZXhwb3J0IGludGVyZmFjZSBLZXkge1xuICAgIHR5cGU6IEtleVR5cGU7XG4gICAgZGF0YTogVWludDhBcnJheTtcbn1cblxuZnVuY3Rpb24gZGlnZXN0U3VmZml4UmlwZW1kMTYwKGRhdGE6IFVpbnQ4QXJyYXksIHN1ZmZpeDogc3RyaW5nKSB7XG4gICAgY29uc3QgZCA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoICsgc3VmZml4Lmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGRbaV0gPSBkYXRhW2ldO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1ZmZpeC5sZW5ndGg7ICsraSkge1xuICAgICAgICBkW2RhdGEubGVuZ3RoICsgaV0gPSBzdWZmaXguY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJpcGVtZDE2MChkKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nVG9LZXkoczogc3RyaW5nLCB0eXBlOiBLZXlUeXBlLCBzaXplOiBudW1iZXIsIHN1ZmZpeDogc3RyaW5nKTogS2V5IHtcbiAgICBjb25zdCB3aG9sZSA9IGJhc2U1OFRvQmluYXJ5KHNpemUgKyA0LCBzKTtcbiAgICBjb25zdCByZXN1bHQgPSB7IHR5cGUsIGRhdGE6IG5ldyBVaW50OEFycmF5KHdob2xlLmJ1ZmZlciwgMCwgc2l6ZSkgfTtcbiAgICBjb25zdCBkaWdlc3QgPSBuZXcgVWludDhBcnJheShkaWdlc3RTdWZmaXhSaXBlbWQxNjAocmVzdWx0LmRhdGEsIHN1ZmZpeCkpO1xuICAgIGlmIChkaWdlc3RbMF0gIT09IHdob2xlW3NpemUgKyAwXSB8fCBkaWdlc3RbMV0gIT09IHdob2xlW3NpemUgKyAxXVxuICAgICAgICB8fCBkaWdlc3RbMl0gIT09IHdob2xlW3NpemUgKyAyXSB8fCBkaWdlc3RbM10gIT09IHdob2xlW3NpemUgKyAzXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjaGVja3N1bSBkb2Vzbid0IG1hdGNoXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBrZXlUb1N0cmluZyhrZXk6IEtleSwgc3VmZml4OiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkoZGlnZXN0U3VmZml4UmlwZW1kMTYwKGtleS5kYXRhLCBzdWZmaXgpKTtcbiAgICBjb25zdCB3aG9sZSA9IG5ldyBVaW50OEFycmF5KGtleS5kYXRhLmxlbmd0aCArIDQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5LmRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgd2hvbGVbaV0gPSBrZXkuZGF0YVtpXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgICAgd2hvbGVbaSArIGtleS5kYXRhLmxlbmd0aF0gPSBkaWdlc3RbaV07XG4gICAgfVxuICAgIHJldHVybiBwcmVmaXggKyBiaW5hcnlUb0Jhc2U1OCh3aG9sZSk7XG59XG5cbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1B1YmxpY0tleShzOiBzdHJpbmcpOiBLZXkge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBwdWJsaWMga2V5XCIpO1xuICAgIH1cbiAgICBpZiAocy5zdWJzdHIoMCwgMykgPT09IFwiRU9TXCIpIHtcbiAgICAgICAgY29uc3Qgd2hvbGUgPSBiYXNlNThUb0JpbmFyeShwdWJsaWNLZXlEYXRhU2l6ZSArIDQsIHMuc3Vic3RyKDMpKTtcbiAgICAgICAgY29uc3Qga2V5ID0geyB0eXBlOiBLZXlUeXBlLmsxLCBkYXRhOiBuZXcgVWludDhBcnJheShwdWJsaWNLZXlEYXRhU2l6ZSkgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdWJsaWNLZXlEYXRhU2l6ZTsgKytpKSB7XG4gICAgICAgICAgICBrZXkuZGF0YVtpXSA9IHdob2xlW2ldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KHJpcGVtZDE2MChrZXkuZGF0YSkpO1xuICAgICAgICBpZiAoZGlnZXN0WzBdICE9PSB3aG9sZVtwdWJsaWNLZXlEYXRhU2l6ZV0gfHwgZGlnZXN0WzFdICE9PSB3aG9sZVszNF1cbiAgICAgICAgICAgIHx8IGRpZ2VzdFsyXSAhPT0gd2hvbGVbMzVdIHx8IGRpZ2VzdFszXSAhPT0gd2hvbGVbMzZdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjaGVja3N1bSBkb2Vzbid0IG1hdGNoXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfSBlbHNlIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJQVUJfSzFfXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLmsxLCBwdWJsaWNLZXlEYXRhU2l6ZSwgXCJLMVwiKTtcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlBVQl9SMV9cIikge1xuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIHB1YmxpY0tleURhdGFTaXplLCBcIlIxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwdWJsaWMga2V5IGZvcm1hdFwiKTtcbiAgICB9XG59XG5cbi8qKiBDb252ZXJ0IGBrZXlgIHRvIHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1YmxpY0tleVRvU3RyaW5nKGtleTogS2V5KSB7XG4gICAgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLmsxICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gcHVibGljS2V5RGF0YVNpemUpIHtcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgXCJLMVwiLCBcIlBVQl9LMV9cIik7XG4gICAgfSBlbHNlIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5yMSAmJiBrZXkuZGF0YS5sZW5ndGggPT09IHB1YmxpY0tleURhdGFTaXplKSB7XG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhrZXksIFwiUjFcIiwgXCJQVUJfUjFfXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwdWJsaWMga2V5IGZvcm1hdFwiKTtcbiAgICB9XG59XG5cbi8qKiBJZiBhIGtleSBpcyBpbiB0aGUgbGVnYWN5IGZvcm1hdCAoYEVPU2AgcHJlZml4KSwgdGhlbiBjb252ZXJ0IGl0IHRvIHRoZSBuZXcgZm9ybWF0IChgUFVCX0sxX2ApLlxuICogTGVhdmVzIG90aGVyIGZvcm1hdHMgdW50b3VjaGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVnYWN5UHVibGljS2V5KHM6IHN0cmluZykge1xuICAgIGlmIChzLnN1YnN0cigwLCAzKSA9PT0gXCJFT1NcIikge1xuICAgICAgICByZXR1cm4gcHVibGljS2V5VG9TdHJpbmcoc3RyaW5nVG9QdWJsaWNLZXkocykpO1xuICAgIH1cbiAgICByZXR1cm4gcztcbn1cblxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXG4gKiBMZWF2ZXMgb3RoZXIgZm9ybWF0cyB1bnRvdWNoZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZWdhY3lQdWJsaWNLZXlzKGtleXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIGtleXMubWFwKGNvbnZlcnRMZWdhY3lQdWJsaWNLZXkpO1xufVxuXG4vKiogQ29udmVydCBrZXkgaW4gYHNgIHRvIGJpbmFyeSBmb3JtICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9Qcml2YXRlS2V5KHM6IHN0cmluZyk6IEtleSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHByaXZhdGUga2V5XCIpO1xuICAgIH1cbiAgICBpZiAocy5zdWJzdHIoMCwgNykgPT09IFwiUFZUX1IxX1wiKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgcHJpdmF0ZUtleURhdGFTaXplLCBcIlIxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBwcml2YXRlIGtleSBmb3JtYXRcIik7XG4gICAgfVxufVxuXG4vKiogQ29udmVydCBga2V5YCB0byBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcml2YXRlS2V5VG9TdHJpbmcoa2V5OiBLZXkpIHtcbiAgICBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUucjEpIHtcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgXCJSMVwiLCBcIlBWVF9SMV9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHByaXZhdGUga2V5IGZvcm1hdFwiKTtcbiAgICB9XG59XG5cbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1NpZ25hdHVyZShzOiBzdHJpbmcpOiBLZXkge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBzaWduYXR1cmVcIik7XG4gICAgfVxuICAgIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJTSUdfSzFfXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLmsxLCBzaWduYXR1cmVEYXRhU2l6ZSwgXCJLMVwiKTtcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlNJR19SMV9cIikge1xuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUucjEsIHNpZ25hdHVyZURhdGFTaXplLCBcIlIxXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0XCIpO1xuICAgIH1cbn1cblxuLyoqIENvbnZlcnQgYHNpZ25hdHVyZWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlVG9TdHJpbmcoc2lnbmF0dXJlOiBLZXkpIHtcbiAgICBpZiAoc2lnbmF0dXJlLnR5cGUgPT09IEtleVR5cGUuazEpIHtcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKHNpZ25hdHVyZSwgXCJLMVwiLCBcIlNJR19LMV9cIik7XG4gICAgfSBlbHNlIGlmIChzaWduYXR1cmUudHlwZSA9PT0gS2V5VHlwZS5yMSkge1xuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoc2lnbmF0dXJlLCBcIlIxXCIsIFwiU0lHX1IxX1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlY29nbml6ZWQgc2lnbmF0dXJlIGZvcm1hdFwiKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEBtb2R1bGUgU2VyaWFsaXplXG4gKi9cbi8vIGNvcHlyaWdodCBkZWZpbmVkIGluIGVvc2pzL0xJQ0VOU0UudHh0XG5cbmltcG9ydCAqIGFzIG51bWVyaWMgZnJvbSBcIi4vZW9zanMtbnVtZXJpY1wiO1xuaW1wb3J0IHsgQWJpLCBCbG9ja1RhcG9zSW5mbyB9IGZyb20gXCIuL2Vvc2pzLXJwYy1pbnRlcmZhY2VzXCI7XG5cbi8qKiBBIGZpZWxkIGluIGFuIGFiaSAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWVsZCB7XG4gICAgLyoqIEZpZWxkIG5hbWUgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogVHlwZSBuYW1lIGluIHN0cmluZyBmb3JtICovXG4gICAgdHlwZU5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUeXBlIG9mIHRoZSBmaWVsZCAqL1xuICAgIHR5cGU6IFR5cGU7XG59XG5cbi8qKiBTdGF0ZSBmb3Igc2VyaWFsaXplKCkgYW5kIGRlc2VyaWFsaXplKCkgKi9cbmV4cG9ydCBjbGFzcyBTZXJpYWxpemVyU3RhdGUge1xuICAgIC8qKiBIYXZlIGFueSBiaW5hcnkgZXh0ZW5zaW9ucyBiZWVuIHNraXBwZWQ/ICovXG4gICAgcHVibGljIHNraXBwZWRCaW5hcnlFeHRlbnNpb24gPSBmYWxzZTtcbn1cblxuLyoqIEEgdHlwZSBpbiBhbiBhYmkgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZSB7XG4gICAgLyoqIFR5cGUgbmFtZSAqL1xuICAgIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUeXBlIG5hbWUgdGhpcyBpcyBhbiBhbGlhcyBvZiwgaWYgYW55ICovXG4gICAgYWxpYXNPZk5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUeXBlIHRoaXMgaXMgYW4gYXJyYXkgb2YsIGlmIGFueSAqL1xuICAgIGFycmF5T2Y6IFR5cGU7XG5cbiAgICAvKiogVHlwZSB0aGlzIGlzIGFuIG9wdGlvbmFsIG9mLCBpZiBhbnkgKi9cbiAgICBvcHRpb25hbE9mOiBUeXBlO1xuXG4gICAgLyoqIE1hcmtzIGJpbmFyeSBleHRlbnNpb24gZmllbGRzICovXG4gICAgZXh0ZW5zaW9uT2Y/OiBUeXBlO1xuXG4gICAgLyoqIEJhc2UgbmFtZSBvZiB0aGlzIHR5cGUsIGlmIHRoaXMgaXMgYSBzdHJ1Y3QgKi9cbiAgICBiYXNlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqIEJhc2Ugb2YgdGhpcyB0eXBlLCBpZiB0aGlzIGlzIGEgc3RydWN0ICovXG4gICAgYmFzZTogVHlwZTtcblxuICAgIC8qKiBDb250YWluZWQgZmllbGRzLCBpZiB0aGlzIGlzIGEgc3RydWN0ICovXG4gICAgZmllbGRzOiBGaWVsZFtdO1xuXG4gICAgLyoqIENvbnZlcnQgYGRhdGFgIHRvIGJpbmFyeSBmb3JtIGFuZCBzdG9yZSBpbiBgYnVmZmVyYCAqL1xuICAgIHNlcmlhbGl6ZTogKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnksIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSA9PiB2b2lkO1xuXG4gICAgLyoqIENvbnZlcnQgZGF0YSBpbiBgYnVmZmVyYCBmcm9tIGJpbmFyeSBmb3JtICovXG4gICAgZGVzZXJpYWxpemU6IChidWZmZXI6IFNlcmlhbEJ1ZmZlciwgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pID0+IGFueTtcbn1cblxuLyoqIFN0cnVjdHVyYWwgcmVwcmVzZW50YXRpb24gb2YgYSBzeW1ib2wgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3ltYm9sIHtcbiAgICAvKiogTmFtZSBvZiB0aGUgc3ltYm9sLCBub3QgaW5jbHVkaW5nIHByZWNpc2lvbiAqL1xuICAgIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBOdW1iZXIgb2YgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50ICovXG4gICAgcHJlY2lzaW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJhY3Qge1xuICAgIGFjdGlvbnM6IE1hcDxzdHJpbmcsIFR5cGU+O1xuICAgIHR5cGVzOiBNYXA8c3RyaW5nLCBUeXBlPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRob3JpemF0aW9uIHtcbiAgICBhY3Rvcjogc3RyaW5nO1xuICAgIHBlcm1pc3Npb246IHN0cmluZztcbn1cblxuLyoqIEFjdGlvbiB3aXRoIGRhdGEgaW4gc3RydWN0dXJlZCBmb3JtICovXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbiB7XG4gICAgYWNjb3VudDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhdXRob3JpemF0aW9uOiBBdXRob3JpemF0aW9uW107XG4gICAgZGF0YTogYW55O1xufVxuXG4vKiogQWN0aW9uIHdpdGggZGF0YSBpbiBzZXJpYWxpemVkIGhleCBmb3JtICovXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6ZWRBY3Rpb24ge1xuICAgIGFjY291bnQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvbjogQXV0aG9yaXphdGlvbltdO1xuICAgIGRhdGE6IHN0cmluZztcbn1cblxuLyoqIFNlcmlhbGl6ZSBhbmQgZGVzZXJpYWxpemUgZGF0YSAqL1xuZXhwb3J0IGNsYXNzIFNlcmlhbEJ1ZmZlciB7XG4gICAgLyoqIEFtb3VudCBvZiB2YWxpZCBkYXRhIGluIGBhcnJheWAgKi9cbiAgICBwdWJsaWMgbGVuZ3RoOiBudW1iZXI7XG5cbiAgICAvKiogRGF0YSBpbiBzZXJpYWxpemVkIChiaW5hcnkpIGZvcm0gKi9cbiAgICBwdWJsaWMgYXJyYXk6IFVpbnQ4QXJyYXk7XG5cbiAgICAvKiogQ3VycmVudCBwb3NpdGlvbiB3aGlsZSByZWFkaW5nIChkZXNlcmlhbGl6aW5nKSAqL1xuICAgIHB1YmxpYyByZWFkUG9zID0gMDtcblxuICAgIHB1YmxpYyB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXI7XG4gICAgcHVibGljIHRleHREZWNvZGVyOiBUZXh0RGVjb2RlcjtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBfX25hbWVkUGFyYW1ldGVyc1xuICAgICAqICAgICogYGFycmF5YDogYG51bGxgIGlmIHNlcmlhbGl6aW5nLCBvciBiaW5hcnkgZGF0YSB0byBkZXNlcmlhbGl6ZVxuICAgICAqICAgICogYHRleHRFbmNvZGVyYDogYFRleHRFbmNvZGVyYCBpbnN0YW5jZSB0byB1c2UuIFBhc3MgaW4gYG51bGxgIGlmIHJ1bm5pbmcgaW4gYSBicm93c2VyXG4gICAgICogICAgKiBgdGV4dERlY29kZXJgOiBgVGV4dERlY2lkZXJgIGluc3RhbmNlIHRvIHVzZS4gUGFzcyBpbiBgbnVsbGAgaWYgcnVubmluZyBpbiBhIGJyb3dzZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7IHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciwgYXJyYXkgfSA9IHt9IGFzXG4gICAgICAgIHsgdGV4dEVuY29kZXI/OiBUZXh0RW5jb2RlciwgdGV4dERlY29kZXI/OiBUZXh0RGVjb2RlciwgYXJyYXk/OiBVaW50OEFycmF5IH0pIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5IHx8IG5ldyBVaW50OEFycmF5KDEwMjQpO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy50ZXh0RW5jb2RlciA9IHRleHRFbmNvZGVyIHx8IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgICB0aGlzLnRleHREZWNvZGVyID0gdGV4dERlY29kZXIgfHwgbmV3IFRleHREZWNvZGVyKFwidXRmLThcIiwgeyBmYXRhbDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICAvKiogUmVzaXplIGBhcnJheWAgaWYgbmVlZGVkIHRvIGhhdmUgYXQgbGVhc3QgYHNpemVgIGJ5dGVzIGZyZWUgKi9cbiAgICBwdWJsaWMgcmVzZXJ2ZShzaXplOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoICsgc2l6ZSA8PSB0aGlzLmFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsID0gdGhpcy5hcnJheS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0aGlzLmxlbmd0aCArIHNpemUgPiBsKSB7XG4gICAgICAgICAgICBsID0gTWF0aC5jZWlsKGwgKiAxLjUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gbmV3IFVpbnQ4QXJyYXkobCk7XG4gICAgICAgIG5ld0FycmF5LnNldCh0aGlzLmFycmF5KTtcbiAgICAgICAgdGhpcy5hcnJheSA9IG5ld0FycmF5O1xuICAgIH1cblxuICAgIC8qKiBJcyB0aGVyZSBkYXRhIGF2YWlsYWJsZSB0byByZWFkPyAqL1xuICAgIHB1YmxpYyBoYXZlUmVhZERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRQb3MgPCB0aGlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKiogUmVzdGFydCByZWFkaW5nIGZyb20gdGhlIGJlZ2lubmluZyAqL1xuICAgIHB1YmxpYyByZXN0YXJ0UmVhZCgpIHtcbiAgICAgICAgdGhpcy5yZWFkUG9zID0gMDtcbiAgICB9XG5cbiAgICAvKiogUmV0dXJuIGRhdGEgd2l0aCBleGNlc3Mgc3RvcmFnZSB0cmltbWVkIGF3YXkgKi9cbiAgICBwdWJsaWMgYXNVaW50OEFycmF5KCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkodGhpcy5hcnJheS5idWZmZXIsIDAsIHRoaXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGJ5dGVzICovXG4gICAgcHVibGljIHB1c2hBcnJheSh2OiBudW1iZXJbXSB8IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5yZXNlcnZlKHYubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5hcnJheS5zZXQodiwgdGhpcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLmxlbmd0aCArPSB2Lmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGJ5dGVzICovXG4gICAgcHVibGljIHB1c2goLi4udjogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkodik7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIHNpbmdsZSBieXRlICovXG4gICAgcHVibGljIGdldCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZFBvcyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJheVt0aGlzLnJlYWRQb3MrK107XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhZCBwYXN0IGVuZCBvZiBidWZmZXJcIik7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBieXRlcyBpbiBgdmAuIFRocm93cyBpZiBgbGVuYCBkb2Vzbid0IG1hdGNoIGB2Lmxlbmd0aGAgKi9cbiAgICBwdWJsaWMgcHVzaFVpbnQ4QXJyYXlDaGVja2VkKHY6IFVpbnQ4QXJyYXksIGxlbjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2Lmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCaW5hcnkgZGF0YSBoYXMgaW5jb3JyZWN0IHNpemVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoQXJyYXkodik7XG4gICAgfVxuXG4gICAgLyoqIEdldCBgbGVuYCBieXRlcyAqL1xuICAgIHB1YmxpYyBnZXRVaW50OEFycmF5KGxlbjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRQb3MgKyBsZW4gPiB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhZCBwYXN0IGVuZCBvZiBidWZmZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5hcnJheS5idWZmZXIsIHRoaXMucmVhZFBvcywgbGVuKTtcbiAgICAgICAgdGhpcy5yZWFkUG9zICs9IGxlbjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgYHVpbnQxNmAgKi9cbiAgICBwdWJsaWMgcHVzaFVpbnQxNih2OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wdXNoKCh2ID4+IDApICYgMHhmZiwgKHYgPj4gOCkgJiAweGZmKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgYHVpbnQxNmAgKi9cbiAgICBwdWJsaWMgZ2V0VWludDE2KCkge1xuICAgICAgICBsZXQgdiA9IDA7XG4gICAgICAgIHYgfD0gdGhpcy5nZXQoKSA8PCAwO1xuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgODtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBhIGB1aW50MzJgICovXG4gICAgcHVibGljIHB1c2hVaW50MzIodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHVzaCgodiA+PiAwKSAmIDB4ZmYsICh2ID4+IDgpICYgMHhmZiwgKHYgPj4gMTYpICYgMHhmZiwgKHYgPj4gMjQpICYgMHhmZik7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIGB1aW50MzJgICovXG4gICAgcHVibGljIGdldFVpbnQzMigpIHtcbiAgICAgICAgbGV0IHYgPSAwO1xuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgMDtcbiAgICAgICAgdiB8PSB0aGlzLmdldCgpIDw8IDg7XG4gICAgICAgIHYgfD0gdGhpcy5nZXQoKSA8PCAxNjtcbiAgICAgICAgdiB8PSB0aGlzLmdldCgpIDw8IDI0O1xuICAgICAgICByZXR1cm4gdiA+Pj4gMDtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgYHVpbnQ2NGAuICpDYXV0aW9uKjogYG51bWJlcmAgb25seSBoYXMgNTMgYml0cyBvZiBwcmVjaXNpb24gKi9cbiAgICBwdWJsaWMgcHVzaE51bWJlckFzVWludDY0KHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLnB1c2hVaW50MzIodiA+Pj4gMCk7XG4gICAgICAgIHRoaXMucHVzaFVpbnQzMihNYXRoLmZsb29yKHYgLyAweDEwMDAwXzAwMDApID4+PiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBgdWludDY0YCBhcyBhIGBudW1iZXJgLiAqQ2F1dGlvbio6IGBudW1iZXJgIG9ubHkgaGFzIDUzIGJpdHMgb2YgcHJlY2lzaW9uOyBzb21lIHZhbHVlcyB3aWxsIGNoYW5nZS5cbiAgICAgKiBgbnVtZXJpYy5iaW5hcnlUb0RlY2ltYWwoc2VyaWFsQnVmZmVyLmdldFVpbnQ4QXJyYXkoOCkpYCByZWNvbW1lbmRlZCBpbnN0ZWFkXG4gICAgICovXG4gICAgcHVibGljIGdldFVpbnQ2NEFzTnVtYmVyKCkge1xuICAgICAgICBjb25zdCBsb3cgPSB0aGlzLmdldFVpbnQzMigpO1xuICAgICAgICBjb25zdCBoaWdoID0gdGhpcy5nZXRVaW50MzIoKTtcbiAgICAgICAgcmV0dXJuIChoaWdoID4+PiAwKSAqIDB4MTAwMDBfMDAwMCArIChsb3cgPj4+IDApO1xuICAgIH1cblxuICAgIC8qKiBBcHBlbmQgYSBgdmFydWludDMyYCAqL1xuICAgIHB1YmxpYyBwdXNoVmFydWludDMyKHY6IG51bWJlcikge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHYgPj4+IDcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goMHg4MCB8ICh2ICYgMHg3ZikpO1xuICAgICAgICAgICAgICAgIHYgPSB2ID4+PiA3O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2godik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogR2V0IGEgYHZhcnVpbnQzMmAgKi9cbiAgICBwdWJsaWMgZ2V0VmFydWludDMyKCkge1xuICAgICAgICBsZXQgdiA9IDA7XG4gICAgICAgIGxldCBiaXQgPSAwO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgYiA9IHRoaXMuZ2V0KCk7XG4gICAgICAgICAgICB2IHw9IChiICYgMHg3ZikgPDwgYml0O1xuICAgICAgICAgICAgYml0ICs9IDc7XG4gICAgICAgICAgICBpZiAoIShiICYgMHg4MCkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdiA+Pj4gMDtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgYHZhcmludDMyYCAqL1xuICAgIHB1YmxpYyBwdXNoVmFyaW50MzIodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHVzaFZhcnVpbnQzMigodiA8PCAxKSBeICh2ID4+IDMxKSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIGB2YXJpbnQzMmAgKi9cbiAgICBwdWJsaWMgZ2V0VmFyaW50MzIoKSB7XG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLmdldFZhcnVpbnQzMigpO1xuICAgICAgICBpZiAodiAmIDEpIHtcbiAgICAgICAgICAgIHJldHVybiAoKH52KSA+PiAxKSB8IDB4ODAwMF8wMDAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHYgPj4+IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgYGZsb2F0MzJgICovXG4gICAgcHVibGljIHB1c2hGbG9hdDMyKHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLnB1c2hBcnJheShuZXcgVWludDhBcnJheSgobmV3IEZsb2F0MzJBcnJheShbdl0pKS5idWZmZXIpKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgYGZsb2F0MzJgICovXG4gICAgcHVibGljIGdldEZsb2F0MzIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZ2V0VWludDhBcnJheSg0KS5zbGljZSgpLmJ1ZmZlcilbMF07XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBhIGBmbG9hdDY0YCAqL1xuICAgIHB1YmxpYyBwdXNoRmxvYXQ2NCh2OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkobmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDY0QXJyYXkoW3ZdKSkuYnVmZmVyKSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIGBmbG9hdDY0YCAqL1xuICAgIHB1YmxpYyBnZXRGbG9hdDY0KCkge1xuICAgICAgICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmdldFVpbnQ4QXJyYXkoOCkuc2xpY2UoKS5idWZmZXIpWzBdO1xuICAgIH1cblxuICAgIC8qKiBBcHBlbmQgYSBgbmFtZWAgKi9cbiAgICBwdWJsaWMgcHVzaE5hbWUoczogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgbmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGFyVG9TeW1ib2woYzogbnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoYyA+PSBcImFcIi5jaGFyQ29kZUF0KDApICYmIGMgPD0gXCJ6XCIuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYyAtIFwiYVwiLmNoYXJDb2RlQXQoMCkpICsgNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjID49IFwiMVwiLmNoYXJDb2RlQXQoMCkgJiYgYyA8PSBcIjVcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjIC0gXCIxXCIuY2hhckNvZGVBdCgwKSkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYSA9IG5ldyBVaW50OEFycmF5KDgpO1xuICAgICAgICBsZXQgYml0ID0gNjM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGMgPSBjaGFyVG9TeW1ib2wocy5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgIGlmIChiaXQgPCA1KSB7XG4gICAgICAgICAgICAgICAgYyA9IGMgPDwgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSA0OyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgICAgIGlmIChiaXQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhW01hdGguZmxvb3IoYml0IC8gOCldIHw9ICgoYyA+PiBqKSAmIDEpIDw8IChiaXQgJSA4KTtcbiAgICAgICAgICAgICAgICAgICAgLS1iaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaEFycmF5KGEpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgYSBgbmFtZWAgKi9cbiAgICBwdWJsaWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuZ2V0VWludDhBcnJheSg4KTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGJpdCA9IDYzOyBiaXQgPj0gMDspIHtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpdCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSAoYyA8PCAxKSB8ICgoYVtNYXRoLmZsb29yKGJpdCAvIDgpXSA+PiAoYml0ICUgOCkpICYgMSk7XG4gICAgICAgICAgICAgICAgICAgIC0tYml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjID49IDYpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjICsgXCJhXCIuY2hhckNvZGVBdCgwKSAtIDYpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjID49IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjICsgXCIxXCIuY2hhckNvZGVBdCgwKSAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCIuLi4uLi4uLi4uLi4uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHJlc3VsdC5lbmRzV2l0aChcIi5cIikpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBsZW5ndGgtcHJlZml4ZWQgYmluYXJ5IGRhdGEgKi9cbiAgICBwdWJsaWMgcHVzaEJ5dGVzKHY6IG51bWJlcltdIHwgVWludDhBcnJheSkge1xuICAgICAgICB0aGlzLnB1c2hWYXJ1aW50MzIodi5sZW5ndGgpO1xuICAgICAgICB0aGlzLnB1c2hBcnJheSh2KTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGxlbmd0aC1wcmVmaXhlZCBiaW5hcnkgZGF0YSAqL1xuICAgIHB1YmxpYyBnZXRCeXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VWludDhBcnJheSh0aGlzLmdldFZhcnVpbnQzMigpKTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgc3RyaW5nICovXG4gICAgcHVibGljIHB1c2hTdHJpbmcodjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHVzaEJ5dGVzKHRoaXMudGV4dEVuY29kZXIuZW5jb2RlKHYpKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgc3RyaW5nICovXG4gICAgcHVibGljIGdldFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dERlY29kZXIuZGVjb2RlKHRoaXMuZ2V0Qnl0ZXMoKSk7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBhIGBzeW1ib2xfY29kZWAuIFVubGlrZSBgc3ltYm9sYCwgYHN5bWJvbF9jb2RlYCBkb2Vzbid0IGluY2x1ZGUgYSBwcmVjaXNpb24uICovXG4gICAgcHVibGljIHB1c2hTeW1ib2xDb2RlKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHN5bWJvbF9jb2RlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGEgPSBbXTtcbiAgICAgICAgYS5wdXNoKC4uLnRoaXMudGV4dEVuY29kZXIuZW5jb2RlKG5hbWUpKTtcbiAgICAgICAgd2hpbGUgKGEubGVuZ3RoIDwgOCkge1xuICAgICAgICAgICAgYS5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaEFycmF5KGEuc2xpY2UoMCwgOCkpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgYSBgc3ltYm9sX2NvZGVgLiBVbmxpa2UgYHN5bWJvbGAsIGBzeW1ib2xfY29kZWAgZG9lc24ndCBpbmNsdWRlIGEgcHJlY2lzaW9uLiAqL1xuICAgIHB1YmxpYyBnZXRTeW1ib2xDb2RlKCkge1xuICAgICAgICBjb25zdCBhID0gdGhpcy5nZXRVaW50OEFycmF5KDgpO1xuICAgICAgICBsZXQgbGVuO1xuICAgICAgICBmb3IgKGxlbiA9IDA7IGxlbiA8IGEubGVuZ3RoOyArK2xlbikge1xuICAgICAgICAgICAgaWYgKCFhW2xlbl0pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy50ZXh0RGVjb2Rlci5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYS5idWZmZXIsIGEuYnl0ZU9mZnNldCwgbGVuKSk7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIC8qKiBBcHBlbmQgYSBgc3ltYm9sYCAqL1xuICAgIHB1YmxpYyBwdXNoU3ltYm9sKHsgbmFtZSwgcHJlY2lzaW9uIH06IHsgbmFtZTogc3RyaW5nLCBwcmVjaXNpb246IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IGEgPSBbcHJlY2lzaW9uICYgMHhmZl07XG4gICAgICAgIGEucHVzaCguLi50aGlzLnRleHRFbmNvZGVyLmVuY29kZShuYW1lKSk7XG4gICAgICAgIHdoaWxlIChhLmxlbmd0aCA8IDgpIHtcbiAgICAgICAgICAgIGEucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2hBcnJheShhLnNsaWNlKDAsIDgpKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgYHN5bWJvbGAgKi9cbiAgICBwdWJsaWMgZ2V0U3ltYm9sKCk6IHsgbmFtZTogc3RyaW5nLCBwcmVjaXNpb246IG51bWJlciB9IHtcbiAgICAgICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5nZXQoKTtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuZ2V0VWludDhBcnJheSg3KTtcbiAgICAgICAgbGV0IGxlbjtcbiAgICAgICAgZm9yIChsZW4gPSAwOyBsZW4gPCBhLmxlbmd0aDsgKytsZW4pIHtcbiAgICAgICAgICAgIGlmICghYVtsZW5dKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMudGV4dERlY29kZXIuZGVjb2RlKG5ldyBVaW50OEFycmF5KGEuYnVmZmVyLCBhLmJ5dGVPZmZzZXQsIGxlbikpO1xuICAgICAgICByZXR1cm4geyBuYW1lLCBwcmVjaXNpb24gfTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGFuIGFzc2V0ICovXG4gICAgcHVibGljIHB1c2hBc3NldChzOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBhc3NldFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzID0gcy50cmltKCk7XG4gICAgICAgIGxldCBwb3MgPSAwO1xuICAgICAgICBsZXQgYW1vdW50ID0gXCJcIjtcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IDA7XG4gICAgICAgIGlmIChzW3Bvc10gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBhbW91bnQgKz0gXCItXCI7XG4gICAgICAgICAgICArK3BvcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgZm91bmREaWdpdCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAocG9zIDwgcy5sZW5ndGggJiYgcy5jaGFyQ29kZUF0KHBvcykgPj0gXCIwXCIuY2hhckNvZGVBdCgwKSAmJiBzLmNoYXJDb2RlQXQocG9zKSA8PSBcIjlcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICBmb3VuZERpZ2l0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGFtb3VudCArPSBzW3Bvc107XG4gICAgICAgICAgICArK3BvcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvdW5kRGlnaXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2V0IG11c3QgYmVnaW4gd2l0aCBhIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc1twb3NdID09PSBcIi5cIikge1xuICAgICAgICAgICAgKytwb3M7XG4gICAgICAgICAgICB3aGlsZSAocG9zIDwgcy5sZW5ndGggJiYgcy5jaGFyQ29kZUF0KHBvcykgPj0gXCIwXCIuY2hhckNvZGVBdCgwKSAmJiBzLmNoYXJDb2RlQXQocG9zKSA8PSBcIjlcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgYW1vdW50ICs9IHNbcG9zXTtcbiAgICAgICAgICAgICAgICArK3ByZWNpc2lvbjtcbiAgICAgICAgICAgICAgICArK3BvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gcy5zdWJzdHIocG9zKS50cmltKCk7XG4gICAgICAgIHRoaXMucHVzaEFycmF5KG51bWVyaWMuc2lnbmVkRGVjaW1hbFRvQmluYXJ5KDgsIGFtb3VudCkpO1xuICAgICAgICB0aGlzLnB1c2hTeW1ib2woeyBuYW1lLCBwcmVjaXNpb24gfSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhbiBhc3NldCAqL1xuICAgIHB1YmxpYyBnZXRBc3NldCgpIHtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gdGhpcy5nZXRVaW50OEFycmF5KDgpO1xuICAgICAgICBjb25zdCB7IG5hbWUsIHByZWNpc2lvbiB9ID0gdGhpcy5nZXRTeW1ib2woKTtcbiAgICAgICAgbGV0IHMgPSBudW1lcmljLnNpZ25lZEJpbmFyeVRvRGVjaW1hbChhbW91bnQsIHByZWNpc2lvbiArIDEpO1xuICAgICAgICBpZiAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBzID0gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSBwcmVjaXNpb24pICsgXCIuXCIgKyBzLnN1YnN0cihzLmxlbmd0aCAtIHByZWNpc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHMgKyBcIiBcIiArIG5hbWU7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBhIHB1YmxpYyBrZXkgKi9cbiAgICBwdWJsaWMgcHVzaFB1YmxpY0tleShzOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbnVtZXJpYy5zdHJpbmdUb1B1YmxpY0tleShzKTtcbiAgICAgICAgdGhpcy5wdXNoKGtleS50eXBlKTtcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkoa2V5LmRhdGEpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgYSBwdWJsaWMga2V5ICovXG4gICAgcHVibGljIGdldFB1YmxpY0tleSgpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldFVpbnQ4QXJyYXkobnVtZXJpYy5wdWJsaWNLZXlEYXRhU2l6ZSk7XG4gICAgICAgIHJldHVybiBudW1lcmljLnB1YmxpY0tleVRvU3RyaW5nKHsgdHlwZSwgZGF0YSB9KTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgcHJpdmF0ZSBrZXkgKi9cbiAgICBwdWJsaWMgcHVzaFByaXZhdGVLZXkoczogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IG51bWVyaWMuc3RyaW5nVG9Qcml2YXRlS2V5KHMpO1xuICAgICAgICB0aGlzLnB1c2goa2V5LnR5cGUpO1xuICAgICAgICB0aGlzLnB1c2hBcnJheShrZXkuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIHByaXZhdGUga2V5ICovXG4gICAgcHVibGljIGdldFByaXZhdGVLZXkoKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRVaW50OEFycmF5KG51bWVyaWMucHJpdmF0ZUtleURhdGFTaXplKTtcbiAgICAgICAgcmV0dXJuIG51bWVyaWMucHJpdmF0ZUtleVRvU3RyaW5nKHsgdHlwZSwgZGF0YSB9KTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgc2lnbmF0dXJlICovXG4gICAgcHVibGljIHB1c2hTaWduYXR1cmUoczogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IG51bWVyaWMuc3RyaW5nVG9TaWduYXR1cmUocyk7XG4gICAgICAgIHRoaXMucHVzaChrZXkudHlwZSk7XG4gICAgICAgIHRoaXMucHVzaEFycmF5KGtleS5kYXRhKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgc2lnbmF0dXJlICovXG4gICAgcHVibGljIGdldFNpZ25hdHVyZSgpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldFVpbnQ4QXJyYXkobnVtZXJpYy5zaWduYXR1cmVEYXRhU2l6ZSk7XG4gICAgICAgIHJldHVybiBudW1lcmljLnNpZ25hdHVyZVRvU3RyaW5nKHsgdHlwZSwgZGF0YSB9KTtcbiAgICB9XG59IC8vIFNlcmlhbEJ1ZmZlclxuXG4vKiogSXMgdGhpcyBhIHN1cHBvcnRlZCBBQkkgdmVyc2lvbj8gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0ZWRBYmlWZXJzaW9uKHZlcnNpb246IHN0cmluZykge1xuICAgIHJldHVybiB2ZXJzaW9uLnN0YXJ0c1dpdGgoXCJlb3Npbzo6YWJpLzEuXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0RhdGVQYXJzZShkYXRlOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBEYXRlLnBhcnNlKGRhdGUpO1xuICAgIGlmIChOdW1iZXIuaXNOYU4ocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRpbWUgZm9ybWF0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQ29udmVydCBkYXRlIGluIElTTyBmb3JtYXQgdG8gYHRpbWVfcG9pbnRgIChtaWxpc2Vjb25kcyBzaW5jZSBlcG9jaCkgKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9UaW1lUG9pbnQoZGF0ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoY2hlY2tEYXRlUGFyc2UoZGF0ZSArIFwiWlwiKSAqIDEwMDApO1xufVxuXG4vKiogQ29udmVydCBgdGltZV9wb2ludGAgKG1pbGlzZWNvbmRzIHNpbmNlIGVwb2NoKSB0byBkYXRlIGluIElTTyBmb3JtYXQgKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lUG9pbnRUb0RhdGUodXM6IG51bWJlcikge1xuICAgIGNvbnN0IHMgPSAobmV3IERhdGUodXMgLyAxMDAwKSkudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcbn1cblxuLyoqIENvbnZlcnQgZGF0ZSBpbiBJU08gZm9ybWF0IHRvIGB0aW1lX3BvaW50X3NlY2AgKHNlY29uZHMgc2luY2UgZXBvY2gpICovXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvVGltZVBvaW50U2VjKGRhdGU6IHN0cmluZykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGNoZWNrRGF0ZVBhcnNlKGRhdGUgKyBcIlpcIikgLyAxMDAwKTtcbn1cblxuLyoqIENvbnZlcnQgYHRpbWVfcG9pbnRfc2VjYCAoc2Vjb25kcyBzaW5jZSBlcG9jaCkgdG8gdG8gZGF0ZSBpbiBJU08gZm9ybWF0ICovXG5leHBvcnQgZnVuY3Rpb24gdGltZVBvaW50U2VjVG9EYXRlKHNlYzogbnVtYmVyKSB7XG4gICAgY29uc3QgcyA9IChuZXcgRGF0ZShzZWMgKiAxMDAwKSkudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcbn1cblxuLyoqIENvbnZlcnQgZGF0ZSBpbiBJU08gZm9ybWF0IHRvIGBibG9ja190aW1lc3RhbXBfdHlwZWAgKGhhbGYtc2Vjb25kcyBzaW5jZSBhIGRpZmZlcmVudCBlcG9jaCkgKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9CbG9ja1RpbWVzdGFtcChkYXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoY2hlY2tEYXRlUGFyc2UoZGF0ZSArIFwiWlwiKSAtIDk0NjY4NDgwMDAwMCkgLyA1MDApO1xufVxuXG4vKiogQ29udmVydCBgYmxvY2tfdGltZXN0YW1wX3R5cGVgIChoYWxmLXNlY29uZHMgc2luY2UgYSBkaWZmZXJlbnQgZXBvY2gpIHRvIHRvIGRhdGUgaW4gSVNPIGZvcm1hdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrVGltZXN0YW1wVG9EYXRlKHNsb3Q6IG51bWJlcikge1xuICAgIGNvbnN0IHMgPSAobmV3IERhdGUoc2xvdCAqIDUwMCArIDk0NjY4NDgwMDAwMCkpLnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XG59XG5cbi8qKiBDb252ZXJ0IGBzdHJpbmdgIHRvIGBTeW1ib2xgLiBmb3JtYXQ6IGBwcmVjaXNpb24sTkFNRWAuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9TeW1ib2woczogc3RyaW5nKTogeyBuYW1lOiBzdHJpbmcsIHByZWNpc2lvbjogbnVtYmVyIH0ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBzeW1ib2xcIik7XG4gICAgfVxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9eKFswLTldKyksKFtBLVpdKykkLyk7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3ltYm9sXCIpO1xuICAgIH1cbiAgICByZXR1cm4geyBuYW1lOiBtWzJdLCBwcmVjaXNpb246ICttWzFdIH07XG59XG5cbi8qKiBDb252ZXJ0IGBTeW1ib2xgIHRvIGBzdHJpbmdgLiBmb3JtYXQ6IGBwcmVjaXNpb24sTkFNRWAuICovXG5leHBvcnQgZnVuY3Rpb24gc3ltYm9sVG9TdHJpbmcoeyBuYW1lLCBwcmVjaXNpb24gfTogeyBuYW1lOiBzdHJpbmcsIHByZWNpc2lvbjogbnVtYmVyIH0pIHtcbiAgICByZXR1cm4gcHJlY2lzaW9uICsgXCIsXCIgKyBuYW1lO1xufVxuXG4vKiogQ29udmVydCBiaW5hcnkgZGF0YSB0byBoZXggKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvSGV4KGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBmb3IgKGNvbnN0IHggb2YgZGF0YSkge1xuICAgICAgICByZXN1bHQgKz0gKFwiMDBcIiArIHgudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQudG9VcHBlckNhc2UoKTtcbn1cblxuLyoqIENvbnZlcnQgaGV4IHRvIGJpbmFyeSBkYXRhICovXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9VaW50OEFycmF5KGhleDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBoZXggIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgaGV4IGRpZ2l0c1wiKTtcbiAgICB9XG4gICAgaWYgKGhleC5sZW5ndGggJSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9kZCBudW1iZXIgb2YgaGV4IGRpZ2l0c1wiKTtcbiAgICB9XG4gICAgY29uc3QgbCA9IGhleC5sZW5ndGggLyAyO1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGwpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHggPSBwYXJzZUludChoZXguc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBoZXggc3RyaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtpXSA9IHg7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVVua25vd24oYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IGFueSk6IFNlcmlhbEJ1ZmZlciB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRG9uJ3Qga25vdyBob3cgdG8gc2VyaWFsaXplIFwiICsgdGhpcy5uYW1lKTtcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVVbmtub3duKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKTogU2VyaWFsQnVmZmVyIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb24ndCBrbm93IGhvdyB0byBkZXNlcmlhbGl6ZSBcIiArIHRoaXMubmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVN0cnVjdCh0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gbmV3IFNlcmlhbGl6ZXJTdGF0ZSgpLCBhbGxvd0V4dGVuc2lvbnMgPSB0cnVlKSB7XG4gICAgaWYgKHRoaXMuYmFzZSkge1xuICAgICAgICB0aGlzLmJhc2Uuc2VyaWFsaXplKGJ1ZmZlciwgZGF0YSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnNraXBwZWRCaW5hcnlFeHRlbnNpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmV4cGVjdGVkIFwiICsgdGhpcy5uYW1lICsgXCIuXCIgKyBmaWVsZC5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkLnR5cGUuc2VyaWFsaXplKFxuICAgICAgICAgICAgICAgIGJ1ZmZlciwgZGF0YVtmaWVsZC5uYW1lXSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyAmJiBmaWVsZCA9PT0gdGhpcy5maWVsZHNbdGhpcy5maWVsZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFsbG93RXh0ZW5zaW9ucyAmJiBmaWVsZC50eXBlLmV4dGVuc2lvbk9mKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2tpcHBlZEJpbmFyeUV4dGVuc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgXCIgKyB0aGlzLm5hbWUgKyBcIi5cIiArIGZpZWxkLm5hbWUgKyBcIiAodHlwZT1cIiArIGZpZWxkLnR5cGUubmFtZSArIFwiKVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVTdHJ1Y3QodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlID0gbmV3IFNlcmlhbGl6ZXJTdGF0ZSgpLCBhbGxvd0V4dGVuc2lvbnMgPSB0cnVlKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodGhpcy5iYXNlKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuYmFzZS5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHt9O1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGRzKSB7XG4gICAgICAgIGlmIChhbGxvd0V4dGVuc2lvbnMgJiYgZmllbGQudHlwZS5leHRlbnNpb25PZiAmJiAhYnVmZmVyLmhhdmVSZWFkRGF0YSgpKSB7XG4gICAgICAgICAgICBzdGF0ZS5za2lwcGVkQmluYXJ5RXh0ZW5zaW9uID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtmaWVsZC5uYW1lXSA9IGZpZWxkLnR5cGUuZGVzZXJpYWxpemUoYnVmZmVyLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVWYXJpYW50KHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpIHx8IGRhdGEubGVuZ3RoICE9PSAyIHx8IHR5cGVvZiBkYXRhWzBdICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgdmFyaWFudDogW1widHlwZVwiLCB2YWx1ZV0nKTtcbiAgICB9XG4gICAgY29uc3QgaSA9IHRoaXMuZmllbGRzLmZpbmRJbmRleCgoZmllbGQ6IEZpZWxkKSA9PiBmaWVsZC5uYW1lID09PSBkYXRhWzBdKTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB0eXBlIFwiJHtkYXRhWzBdfVwiIGlzIG5vdCB2YWxpZCBmb3IgdmFyaWFudGApO1xuICAgIH1cbiAgICBidWZmZXIucHVzaFZhcnVpbnQzMihpKTtcbiAgICB0aGlzLmZpZWxkc1tpXS50eXBlLnNlcmlhbGl6ZShidWZmZXIsIGRhdGFbMV0sIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVZhcmlhbnQodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgaSA9IGJ1ZmZlci5nZXRWYXJ1aW50MzIoKTtcbiAgICBpZiAoaSA+PSB0aGlzLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGB0eXBlIGluZGV4ICR7aX0gaXMgbm90IHZhbGlkIGZvciB2YXJpYW50YCk7XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZHNbaV07XG4gICAgcmV0dXJuIFtmaWVsZC5uYW1lLCBmaWVsZC50eXBlLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyldO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVBcnJheSh0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYW55W10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikge1xuICAgIGJ1ZmZlci5wdXNoVmFydWludDMyKGRhdGEubGVuZ3RoKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICB0aGlzLmFycmF5T2Yuc2VyaWFsaXplKGJ1ZmZlciwgaXRlbSwgc3RhdGUsIGZhbHNlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplQXJyYXkodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGVuID0gYnVmZmVyLmdldFZhcnVpbnQzMigpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5hcnJheU9mLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGZhbHNlKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZU9wdGlvbmFsKHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikge1xuICAgIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBidWZmZXIucHVzaCgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidWZmZXIucHVzaCgxKTtcbiAgICAgICAgdGhpcy5vcHRpb25hbE9mLnNlcmlhbGl6ZShidWZmZXIsIGRhdGEsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVPcHRpb25hbCh0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pIHtcbiAgICBpZiAoYnVmZmVyLmdldCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbmFsT2YuZGVzZXJpYWxpemUoYnVmZmVyLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUV4dGVuc2lvbih0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XG4gICAgdGhpcy5leHRlbnNpb25PZi5zZXJpYWxpemUoYnVmZmVyLCBkYXRhLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVFeHRlbnNpb24odGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5zaW9uT2YuZGVzZXJpYWxpemUoYnVmZmVyLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcbn1cblxuaW50ZXJmYWNlIENyZWF0ZVR5cGVBcmdzIHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGFsaWFzT2ZOYW1lPzogc3RyaW5nO1xuICAgIGFycmF5T2Y/OiBUeXBlO1xuICAgIG9wdGlvbmFsT2Y/OiBUeXBlO1xuICAgIGV4dGVuc2lvbk9mPzogVHlwZTtcbiAgICBiYXNlTmFtZT86IHN0cmluZztcbiAgICBiYXNlPzogVHlwZTtcbiAgICBmaWVsZHM/OiBGaWVsZFtdO1xuICAgIHNlcmlhbGl6ZT86IChidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYW55LCBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikgPT4gdm9pZDtcbiAgICBkZXNlcmlhbGl6ZT86IChidWZmZXI6IFNlcmlhbEJ1ZmZlciwgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pID0+IGFueTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHlwZShhdHRyczogQ3JlYXRlVHlwZUFyZ3MpOiBUeXBlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBcIjxtaXNzaW5nIG5hbWU+XCIsXG4gICAgICAgIGFsaWFzT2ZOYW1lOiBcIlwiLFxuICAgICAgICBhcnJheU9mOiBudWxsLFxuICAgICAgICBvcHRpb25hbE9mOiBudWxsLFxuICAgICAgICBleHRlbnNpb25PZjogbnVsbCxcbiAgICAgICAgYmFzZU5hbWU6IFwiXCIsXG4gICAgICAgIGJhc2U6IG51bGwsXG4gICAgICAgIGZpZWxkczogW10sXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplVW5rbm93bixcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplVW5rbm93bixcbiAgICAgICAgLi4uYXR0cnMsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY2hlY2tSYW5nZShvcmlnOiBudW1iZXIsIGNvbnZlcnRlZDogbnVtYmVyKSB7XG4gICAgaWYgKE51bWJlci5pc05hTigrb3JpZykgfHwgTnVtYmVyLmlzTmFOKCtjb252ZXJ0ZWQpIHx8ICh0eXBlb2Ygb3JpZyAhPT0gXCJudW1iZXJcIiAmJiB0eXBlb2Ygb3JpZyAhPT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAoK29yaWcgIT09ICtjb252ZXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTnVtYmVyIGlzIG91dCBvZiByYW5nZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuICtvcmlnO1xufVxuXG4vKiogQ3JlYXRlIHRoZSBzZXQgb2YgdHlwZXMgYnVpbHQtaW4gdG8gdGhlIGFiaSBmb3JtYXQgKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0aWFsVHlwZXMoKTogTWFwPHN0cmluZywgVHlwZT4ge1xuICAgIGNvbnN0IHJlc3VsdDogTWFwPHN0cmluZywgVHlwZT4gPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKHtcbiAgICAgICAgYm9vbDogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImJvb2xcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYm9vbGVhbikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgdHJ1ZSBvciBmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZGF0YSA/IDEgOiAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gISFidWZmZXIuZ2V0KCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICB1aW50ODogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInVpbnQ4XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaChjaGVja1JhbmdlKGRhdGEsIGRhdGEgJiAweGZmKSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldCgpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgaW50ODogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImludDhcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSA8PCAyNCA+PiAyNCkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXQoKSA8PCAyNCA+PiAyNDsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHVpbnQxNjogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInVpbnQxNlwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2hVaW50MTYoY2hlY2tSYW5nZShkYXRhLCBkYXRhICYgMHhmZmZmKSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFVpbnQxNigpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgaW50MTY6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJpbnQxNlwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2hVaW50MTYoY2hlY2tSYW5nZShkYXRhLCBkYXRhIDw8IDE2ID4+IDE2KSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFVpbnQxNigpIDw8IDE2ID4+IDE2OyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgdWludDMyOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwidWludDMyXCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaFVpbnQzMihjaGVja1JhbmdlKGRhdGEsIGRhdGEgPj4+IDApKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0VWludDMyKCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICB1aW50NjQ6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJ1aW50NjRcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2hBcnJheShudW1lcmljLmRlY2ltYWxUb0JpbmFyeSg4LCBcIlwiICsgZGF0YSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBudW1lcmljLmJpbmFyeVRvRGVjaW1hbChidWZmZXIuZ2V0VWludDhBcnJheSg4KSk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBpbnQ2NDogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImludDY0XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoQXJyYXkobnVtZXJpYy5zaWduZWREZWNpbWFsVG9CaW5hcnkoOCwgXCJcIiArIGRhdGEpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gbnVtZXJpYy5zaWduZWRCaW5hcnlUb0RlY2ltYWwoYnVmZmVyLmdldFVpbnQ4QXJyYXkoOCkpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgaW50MzI6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJpbnQzMlwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2hVaW50MzIoY2hlY2tSYW5nZShkYXRhLCBkYXRhIHwgMCkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRVaW50MzIoKSB8IDA7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICB2YXJ1aW50MzI6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJ2YXJ1aW50MzJcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoVmFydWludDMyKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSA+Pj4gMCkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRWYXJ1aW50MzIoKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHZhcmludDMyOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwidmFyaW50MzJcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoVmFyaW50MzIoY2hlY2tSYW5nZShkYXRhLCBkYXRhIHwgMCkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRWYXJpbnQzMigpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgdWludDEyODogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInVpbnQxMjhcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoQXJyYXkobnVtZXJpYy5kZWNpbWFsVG9CaW5hcnkoMTYsIFwiXCIgKyBkYXRhKSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gbnVtZXJpYy5iaW5hcnlUb0RlY2ltYWwoYnVmZmVyLmdldFVpbnQ4QXJyYXkoMTYpKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGludDEyODogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImludDEyOFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaEFycmF5KG51bWVyaWMuc2lnbmVkRGVjaW1hbFRvQmluYXJ5KDE2LCBcIlwiICsgZGF0YSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBudW1lcmljLnNpZ25lZEJpbmFyeVRvRGVjaW1hbChidWZmZXIuZ2V0VWludDhBcnJheSgxNikpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgZmxvYXQzMjogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImZsb2F0MzJcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoRmxvYXQzMihkYXRhKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0RmxvYXQzMigpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgZmxvYXQ2NDogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImZsb2F0NjRcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoRmxvYXQ2NChkYXRhKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0RmxvYXQ2NCgpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgZmxvYXQxMjg6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJmbG9hdDEyOFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hVaW50OEFycmF5Q2hlY2tlZChoZXhUb1VpbnQ4QXJyYXkoZGF0YSksIDE2KTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBhcnJheVRvSGV4KGJ1ZmZlci5nZXRVaW50OEFycmF5KDE2KSk7IH0sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGJ5dGVzOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiYnl0ZXNcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoQnl0ZXMoaGV4VG9VaW50OEFycmF5KGRhdGEpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBhcnJheVRvSGV4KGJ1ZmZlci5nZXRCeXRlcygpKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHN0cmluZzogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hTdHJpbmcoZGF0YSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFN0cmluZygpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgbmFtZTogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoTmFtZShkYXRhKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0TmFtZSgpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgdGltZV9wb2ludDogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInRpbWVfcG9pbnRcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoTnVtYmVyQXNVaW50NjQoZGF0ZVRvVGltZVBvaW50KGRhdGEpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiB0aW1lUG9pbnRUb0RhdGUoYnVmZmVyLmdldFVpbnQ2NEFzTnVtYmVyKCkpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgdGltZV9wb2ludF9zZWM6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJ0aW1lX3BvaW50X3NlY1wiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hVaW50MzIoZGF0ZVRvVGltZVBvaW50U2VjKGRhdGEpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiB0aW1lUG9pbnRTZWNUb0RhdGUoYnVmZmVyLmdldFVpbnQzMigpKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGJsb2NrX3RpbWVzdGFtcF90eXBlOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiYmxvY2tfdGltZXN0YW1wX3R5cGVcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoVWludDMyKGRhdGVUb0Jsb2NrVGltZXN0YW1wKGRhdGEpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBibG9ja1RpbWVzdGFtcFRvRGF0ZShidWZmZXIuZ2V0VWludDMyKCkpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgc3ltYm9sX2NvZGU6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJzeW1ib2xfY29kZVwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hTeW1ib2xDb2RlKGRhdGEpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRTeW1ib2xDb2RlKCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBzeW1ib2w6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoU3ltYm9sKHN0cmluZ1RvU3ltYm9sKGRhdGEpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBzeW1ib2xUb1N0cmluZyhidWZmZXIuZ2V0U3ltYm9sKCkpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgYXNzZXQ6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJhc3NldFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hBc3NldChkYXRhKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0QXNzZXQoKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGNoZWNrc3VtMTYwOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiY2hlY2tzdW0xNjBcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoVWludDhBcnJheUNoZWNrZWQoaGV4VG9VaW50OEFycmF5KGRhdGEpLCAyMCk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYXJyYXlUb0hleChidWZmZXIuZ2V0VWludDhBcnJheSgyMCkpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgY2hlY2tzdW0yNTY6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJjaGVja3N1bTI1NlwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hVaW50OEFycmF5Q2hlY2tlZChoZXhUb1VpbnQ4QXJyYXkoZGF0YSksIDMyKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBhcnJheVRvSGV4KGJ1ZmZlci5nZXRVaW50OEFycmF5KDMyKSk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBjaGVja3N1bTUxMjogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImNoZWNrc3VtNTEyXCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFVpbnQ4QXJyYXlDaGVja2VkKGhleFRvVWludDhBcnJheShkYXRhKSwgNjQpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGFycmF5VG9IZXgoYnVmZmVyLmdldFVpbnQ4QXJyYXkoNjQpKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHB1YmxpY19rZXk6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJwdWJsaWNfa2V5XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFB1YmxpY0tleShkYXRhKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0UHVibGljS2V5KCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBwcml2YXRlX2tleTogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInByaXZhdGVfa2V5XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFByaXZhdGVLZXkoZGF0YSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFByaXZhdGVLZXkoKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHNpZ25hdHVyZTogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInNpZ25hdHVyZVwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hTaWduYXR1cmUoZGF0YSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFNpZ25hdHVyZSgpOyB9LFxuICAgICAgICB9KSxcbiAgICB9KSk7XG5cbiAgICByZXN1bHQuc2V0KFwiZXh0ZW5kZWRfYXNzZXRcIiwgY3JlYXRlVHlwZSh7XG4gICAgICAgIG5hbWU6IFwiZXh0ZW5kZWRfYXNzZXRcIixcbiAgICAgICAgYmFzZU5hbWU6IFwiXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgeyBuYW1lOiBcInF1YW50aXR5XCIsIHR5cGVOYW1lOiBcImFzc2V0XCIsIHR5cGU6IHJlc3VsdC5nZXQoXCJhc3NldFwiKSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcImNvbnRyYWN0XCIsIHR5cGVOYW1lOiBcIm5hbWVcIiwgdHlwZTogcmVzdWx0LmdldChcIm5hbWVcIikgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXG4gICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVN0cnVjdCxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSAvLyBjcmVhdGVJbml0aWFsVHlwZXMoKVxuXG4vKiogR2V0IHR5cGUgZnJvbSBgdHlwZXNgICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZSh0eXBlczogTWFwPHN0cmluZywgVHlwZT4sIG5hbWU6IHN0cmluZyk6IFR5cGUge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5nZXQobmFtZSk7XG4gICAgaWYgKHR5cGUgJiYgdHlwZS5hbGlhc09mTmFtZSkge1xuICAgICAgICByZXR1cm4gZ2V0VHlwZSh0eXBlcywgdHlwZS5hbGlhc09mTmFtZSk7XG4gICAgfVxuICAgIGlmICh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgICBpZiAobmFtZS5lbmRzV2l0aChcIltdXCIpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhcnJheU9mOiBnZXRUeXBlKHR5cGVzLCBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDIpKSxcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplQXJyYXksXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVBcnJheSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuYW1lLmVuZHNXaXRoKFwiP1wiKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgb3B0aW9uYWxPZjogZ2V0VHlwZSh0eXBlcywgbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAxKSksXG4gICAgICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZU9wdGlvbmFsLFxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplT3B0aW9uYWwsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobmFtZS5lbmRzV2l0aChcIiRcIikpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGV4dGVuc2lvbk9mOiBnZXRUeXBlKHR5cGVzLCBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDEpKSxcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplRXh0ZW5zaW9uLFxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplRXh0ZW5zaW9uLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biB0eXBlOiBcIiArIG5hbWUpO1xufVxuXG4vKipcbiAqIEdldCB0eXBlcyBmcm9tIGFiaVxuICogQHBhcmFtIGluaXRpYWxUeXBlcyBTZXQgb2YgdHlwZXMgdG8gYnVpbGQgb24uXG4gKiAgICAgSW4gbW9zdCBjYXNlcywgaXQncyBiZXN0IHRvIGZpbGwgdGhpcyBmcm9tIGEgZnJlc2ggY2FsbCB0byBgZ2V0VHlwZXNGcm9tQWJpKClgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZXNGcm9tQWJpKGluaXRpYWxUeXBlczogTWFwPHN0cmluZywgVHlwZT4sIGFiaTogQWJpKSB7XG4gICAgY29uc3QgdHlwZXMgPSBuZXcgTWFwKGluaXRpYWxUeXBlcyk7XG4gICAgaWYgKGFiaS50eXBlcykge1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmV3X3R5cGVfbmFtZSwgdHlwZSB9IG9mIGFiaS50eXBlcykge1xuICAgICAgICAgICAgdHlwZXMuc2V0KG5ld190eXBlX25hbWUsXG4gICAgICAgICAgICAgICAgY3JlYXRlVHlwZSh7IG5hbWU6IG5ld190eXBlX25hbWUsIGFsaWFzT2ZOYW1lOiB0eXBlIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWJpLnN0cnVjdHMpIHtcbiAgICAgICAgZm9yIChjb25zdCB7IG5hbWUsIGJhc2UsIGZpZWxkcyB9IG9mIGFiaS5zdHJ1Y3RzKSB7XG4gICAgICAgICAgICB0eXBlcy5zZXQobmFtZSwgY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBiYXNlTmFtZTogYmFzZSxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IGZpZWxkcy5tYXAoKHsgbmFtZTogbiwgdHlwZSB9KSA9PiAoeyBuYW1lOiBuLCB0eXBlTmFtZTogdHlwZSwgdHlwZTogbnVsbCB9KSksXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVTdHJ1Y3QsXG4gICAgICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChhYmkudmFyaWFudHMpIHtcbiAgICAgICAgZm9yIChjb25zdCB7IG5hbWUsIHR5cGVzOiB0IH0gb2YgYWJpLnZhcmlhbnRzKSB7XG4gICAgICAgICAgICB0eXBlcy5zZXQobmFtZSwgY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHQubWFwKChzKSA9PiAoeyBuYW1lOiBzLCB0eXBlTmFtZTogcywgdHlwZTogbnVsbCB9KSksXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVWYXJpYW50LFxuICAgICAgICAgICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZVZhcmlhbnQsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBbbmFtZSwgdHlwZV0gb2YgdHlwZXMpIHtcbiAgICAgICAgaWYgKHR5cGUuYmFzZU5hbWUpIHtcbiAgICAgICAgICAgIHR5cGUuYmFzZSA9IGdldFR5cGUodHlwZXMsIHR5cGUuYmFzZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdHlwZS5maWVsZHMpIHtcbiAgICAgICAgICAgIGZpZWxkLnR5cGUgPSBnZXRUeXBlKHR5cGVzLCBmaWVsZC50eXBlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHR5cGVzO1xufSAvLyBnZXRUeXBlc0Zyb21BYmlcblxuLyoqIFRBUG9TOiBSZXR1cm4gdHJhbnNhY3Rpb24gZmllbGRzIHdoaWNoIHJlZmVyZW5jZSBgcmVmQmxvY2tgIGFuZCBleHBpcmUgYGV4cGlyZVNlY29uZHNgIGFmdGVyIGByZWZCbG9jay50aW1lc3RhbXBgICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNhY3Rpb25IZWFkZXIocmVmQmxvY2s6IEJsb2NrVGFwb3NJbmZvLCBleHBpcmVTZWNvbmRzOiBudW1iZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBleHBpcmF0aW9uOiB0aW1lUG9pbnRTZWNUb0RhdGUoZGF0ZVRvVGltZVBvaW50U2VjKHJlZkJsb2NrLnRpbWVzdGFtcCkgKyBleHBpcmVTZWNvbmRzKSxcbiAgICAgICAgcmVmX2Jsb2NrX251bTogcmVmQmxvY2suYmxvY2tfbnVtICYgMHhmZmZmLFxuICAgICAgICByZWZfYmxvY2tfcHJlZml4OiByZWZCbG9jay5yZWZfYmxvY2tfcHJlZml4LFxuICAgIH07XG59XG5cbi8qKiBDb252ZXJ0IGFjdGlvbiBkYXRhIHRvIHNlcmlhbGl6ZWQgZm9ybSAoaGV4KSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUFjdGlvbkRhdGEoY29udHJhY3Q6IENvbnRyYWN0LCBhY2NvdW50OiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZGF0YTogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGFjdGlvbiA9IGNvbnRyYWN0LmFjdGlvbnMuZ2V0KG5hbWUpO1xuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb24gJHtuYW1lfSBpbiBjb250cmFjdCAke2FjY291bnR9YCk7XG4gICAgfVxuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBTZXJpYWxCdWZmZXIoeyB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIgfSk7XG4gICAgYWN0aW9uLnNlcmlhbGl6ZShidWZmZXIsIGRhdGEpO1xuICAgIHJldHVybiBhcnJheVRvSGV4KGJ1ZmZlci5hc1VpbnQ4QXJyYXkoKSk7XG59XG5cbi8qKiBSZXR1cm4gYWN0aW9uIGluIHNlcmlhbGl6ZWQgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUFjdGlvbihjb250cmFjdDogQ29udHJhY3QsIGFjY291bnQ6IHN0cmluZywgbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiBBdXRob3JpemF0aW9uW10sIGRhdGE6IGFueSwgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXIpOiBTZXJpYWxpemVkQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY2NvdW50LFxuICAgICAgICBuYW1lLFxuICAgICAgICBhdXRob3JpemF0aW9uLFxuICAgICAgICBkYXRhOiBzZXJpYWxpemVBY3Rpb25EYXRhKGNvbnRyYWN0LCBhY2NvdW50LCBuYW1lLCBkYXRhLCB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIpLFxuICAgIH07XG59XG5cbi8qKiBEZXNlcmlhbGl6ZSBhY3Rpb24gZGF0YS4gSWYgYGRhdGFgIGlzIGEgYHN0cmluZ2AsIHRoZW4gaXQncyBhc3N1bWVkIHRvIGJlIGluIGhleC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUFjdGlvbkRhdGEoY29udHJhY3Q6IENvbnRyYWN0LCBhY2NvdW50OiBzdHJpbmcsIG5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc3RyaW5nIHwgVWludDhBcnJheSB8IG51bWJlcltdLCB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvZGVyOiBUZXh0RGVjb2Rlcik6IGFueSB7XG4gICAgY29uc3QgYWN0aW9uID0gY29udHJhY3QuYWN0aW9ucy5nZXQobmFtZSk7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGRhdGEgPSBoZXhUb1VpbnQ4QXJyYXkoZGF0YSk7XG4gICAgfVxuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBhY3Rpb24gJHtuYW1lfSBpbiBjb250cmFjdCAke2FjY291bnR9YCk7XG4gICAgfVxuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBTZXJpYWxCdWZmZXIoeyB0ZXh0RGVjb2RlciwgdGV4dEVuY29kZXIgfSk7XG4gICAgYnVmZmVyLnB1c2hBcnJheShkYXRhKTtcbiAgICByZXR1cm4gYWN0aW9uLmRlc2VyaWFsaXplKGJ1ZmZlcik7XG59XG5cbi8qKiBEZXNlcmlhbGl6ZSBhY3Rpb24uIElmIGBkYXRhYCBpcyBhIGBzdHJpbmdgLCB0aGVuIGl0J3MgYXNzdW1lZCB0byBiZSBpbiBoZXguICovXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVBY3Rpb24oY29udHJhY3Q6IENvbnRyYWN0LCBhY2NvdW50OiBzdHJpbmcsIG5hbWU6IHN0cmluZywgYXV0aG9yaXphdGlvbjogQXV0aG9yaXphdGlvbltdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXkgfCBudW1iZXJbXSwgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvZGVyOiBUZXh0RGVjb2Rlcik6IEFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWNjb3VudCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYXV0aG9yaXphdGlvbixcbiAgICAgICAgZGF0YTogZGVzZXJpYWxpemVBY3Rpb25EYXRhKGNvbnRyYWN0LCBhY2NvdW50LCBuYW1lLCBkYXRhLCB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIpLFxuICAgIH07XG59XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dsemxhMDAwL2JhYzgzZGY2ZDNjNTE5MTZjNGRkMGJjOTQ3ZTQ2OTQ3L3Jhdy83ZWUzNDYyYjA5NWFiMjI1ODBkZGFmMTkxZjQ0YTU5MGRhNmZlMzNiL1JJUEVNRC0xNjAuanNcblxuLypcblx0UklQRU1ELTE2MC5qc1xuXG5cdFx0ZGV2ZWxvcGVkXG5cdFx0XHRieSBLLiAoaHR0cHM6Ly9naXRodWIuY29tL3dsemxhMDAwKVxuXHRcdFx0b24gRGVjZW1iZXIgMjctMjksIDIwMTcsXG5cblx0XHRsaWNlbnNlZCB1bmRlclxuXG5cblx0XHR0aGUgTUlUIGxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoYykgMjAxNyBLLlxuXG5cdFx0IFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG5cdFx0b2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cblx0XHRmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcblx0XHRyZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcblx0XHRjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Jcblx0XHRzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuXHRcdFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG5cdFx0Y29uZGl0aW9uczpcblxuXHRcdCBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuXHRcdGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0IFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG5cdFx0RVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG5cdFx0T0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcblx0XHROT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuXHRcdEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuXHRcdFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuXHRcdEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1Jcblx0XHRPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgUklQRU1EMTYwXG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdC8vIGh0dHBzOi8vd2ViY2FjaGUuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3NlYXJjaD9xPWNhY2hlOkNuTE9nb2xUSFlFSjpodHRwczovL3d3dy5jb3NpYy5lc2F0Lmt1bGV1dmVuLmJlL3B1YmxpY2F0aW9ucy9hcnRpY2xlLTMxNy5wZGZcblx0XHQvLyBodHRwOi8vc2hvZGhnYW5nYS5pbmZsaWJuZXQuYWMuaW4vYml0c3RyZWFtLzEwNjAzLzIyOTc4LzEzLzEzX2FwcGVuZGl4LnBkZlxuXHR9XG5cblx0c3RhdGljIGdldF9uX3BhZF9ieXRlcyhtZXNzYWdlX3NpemUgLyogaW4gYnl0ZXMsIDEgYnl0ZSBpcyA4IGJpdHMuICovKVxuXHR7XG5cdFx0Ly8gIE9idGFpbiB0aGUgbnVtYmVyIG9mIGJ5dGVzIG5lZWRlZCB0byBwYWQgdGhlIG1lc3NhZ2UuXG5cdFx0Ly8gSXQgZG9lcyBub3QgY29udGFpbiB0aGUgc2l6ZSBvZiB0aGUgbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLlxuXHRcdC8qXG5cdFx0XHRodHRwczovL3dlYmNhY2hlLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zZWFyY2g/cT1jYWNoZTpDbkxPZ29sVEhZRUo6aHR0cHM6Ly93d3cuY29zaWMuZXNhdC5rdWxldXZlbi5iZS9wdWJsaWNhdGlvbnMvYXJ0aWNsZS0zMTcucGRmXG5cblx0XHRcdFRoZSBDcnlwdG9ncmFwaGljIEhhc2ggRnVuY3Rpb24gUklQRU1ELTE2MFxuXG5cdFx0XHR3cml0dGVuIGJ5XG5cdFx0XHRcdEJhcnQgUHJlbmVlbCxcblx0XHRcdFx0SGFucyBEb2JiZXJ0aW4sXG5cdFx0XHRcdEFudG9vbiBCb3NzZWxhZXJzXG5cdFx0XHRpblxuXHRcdFx0XHQxOTk3LlxuXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0XHTCpzUgICAgIERlc2NyaXB0aW9uIG9mIFJJUEVNRC0xNjBcblxuXHRcdFx0Li4uLi4uXG5cblx0XHRcdCBJbiBvcmRlciB0byBndWFyYW50ZWUgdGhhdCB0aGUgdG90YWwgaW5wdXQgc2l6ZSBpcyBhXG5cdFx0XHRtdWx0aXBsZSBvZiA1MTIgYml0cywgdGhlIGlucHV0IGlzIHBhZGRlZCBpbiB0aGUgc2FtZVxuXHRcdFx0d2F5IGFzIGZvciBhbGwgdGhlIG1lbWJlcnMgb2YgdGhlIE1ENC1mYW1pbHk6IG9uZVxuXHRcdFx0YXBwZW5kcyBhIHNpbmdsZSAxIGZvbGxvd2VkIGJ5IGEgc3RyaW5nIG9mIDBzICh0aGVcblx0XHRcdG51bWJlciBvZiAwcyBsaWVzIGJldHdlZW4gMCBhbmQgNTExKTsgdGhlIGxhc3QgNjQgYml0c1xuXHRcdFx0b2YgdGhlIGV4dGVuZGVkIGlucHV0IGNvbnRhaW4gdGhlIGJpbmFyeSByZXByZXNlbnRhdGlvblxuXHRcdFx0b2YgdGhlIGlucHV0IHNpemUgaW4gYml0cywgbGVhc3Qgc2lnbmlmaWNhbnQgYnl0ZSBmaXJzdC5cblx0XHQqL1xuXHRcdC8qXG5cdFx0XHRodHRwczovL3Rvb2xzLmlldGYub3JnL3JmYy9yZmMxMTg2LnR4dFxuXG5cdFx0XHRSRkMgMTE4NjogTUQ0IE1lc3NhZ2UgRGlnZXN0IEFsZ29yaXRobS5cblxuXHRcdFx0d3JpdHRlbiBieVxuXHRcdFx0XHRSb25hbGQgTGlubiBSaXZlc3Rcblx0XHRcdGluXG5cdFx0XHRcdE9jdG9iZXIgMTk5MC5cblxuXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdFx0wqczICAgICBNRDQgQWxnb3JpdGhtIERlc2NyaXB0aW9uXG5cblx0XHRcdC4uLi4uLlxuXG5cdFx0XHRTdGVwIDEuIEFwcGVuZCBwYWRkaW5nIGJpdHNcblxuXHRcdFx0IFRoZSBtZXNzYWdlIGlzIFwicGFkZGVkXCIgKGV4dGVuZGVkKSBzbyB0aGF0IGl0cyBsZW5ndGhcblx0XHRcdChpbiBiaXRzKSBpcyBjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyLiBUaGF0IGlzLCB0aGVcblx0XHRcdG1lc3NhZ2UgaXMgZXh0ZW5kZWQgc28gdGhhdCBpdCBpcyBqdXN0IDY0IGJpdHMgc2h5IG9mXG5cdFx0XHRiZWluZyBhIG11bHRpcGxlIG9mIDUxMiBiaXRzIGxvbmcuIFBhZGRpbmcgaXMgYWx3YXlzXG5cdFx0XHRwZXJmb3JtZWQsIGV2ZW4gaWYgdGhlIGxlbmd0aCBvZiB0aGUgbWVzc2FnZSBpcyBhbHJlYWR5XG5cdFx0XHRjb25ncnVlbnQgdG8gNDQ4LCBtb2R1bG8gNTEyIChpbiB3aGljaCBjYXNlIDUxMiBiaXRzIG9mXG5cdFx0XHRwYWRkaW5nIGFyZSBhZGRlZCkuXG5cblx0XHRcdCBQYWRkaW5nIGlzIHBlcmZvcm1lZCBhcyBmb2xsb3dzOiBhIHNpbmdsZSBcIjFcIiBiaXQgaXNcblx0XHRcdGFwcGVuZGVkIHRvIHRoZSBtZXNzYWdlLCBhbmQgdGhlbiBlbm91Z2ggemVybyBiaXRzIGFyZVxuXHRcdFx0YXBwZW5kZWQgc28gdGhhdCB0aGUgbGVuZ3RoIGluIGJpdHMgb2YgdGhlIHBhZGRlZFxuXHRcdFx0bWVzc2FnZSBiZWNvbWVzIGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIuXG5cblx0XHRcdFN0ZXAgMi4gQXBwZW5kIGxlbmd0aFxuXG5cdFx0XHQgQSA2NC1iaXQgcmVwcmVzZW50YXRpb24gb2YgYiAodGhlIGxlbmd0aCBvZiB0aGUgbWVzc2FnZVxuXHRcdFx0YmVmb3JlIHRoZSBwYWRkaW5nIGJpdHMgd2VyZSBhZGRlZCkgaXMgYXBwZW5kZWQgdG8gdGhlXG5cdFx0XHRyZXN1bHQgb2YgdGhlIHByZXZpb3VzIHN0ZXAuIEluIHRoZSB1bmxpa2VseSBldmVudCB0aGF0XG5cdFx0XHRiIGlzIGdyZWF0ZXIgdGhhbiAyXjY0LCB0aGVuIG9ubHkgdGhlIGxvdy1vcmRlciA2NCBiaXRzXG5cdFx0XHRvZiBiIGFyZSB1c2VkLiAoVGhlc2UgYml0cyBhcmUgYXBwZW5kZWQgYXMgdHdvIDMyLWJpdFxuXHRcdFx0d29yZHMgYW5kIGFwcGVuZGVkIGxvdy1vcmRlciB3b3JkIGZpcnN0IGluIGFjY29yZGFuY2Vcblx0XHRcdHdpdGggdGhlIHByZXZpb3VzIGNvbnZlbnRpb25zLilcblxuXHRcdFx0IEF0IHRoaXMgcG9pbnQgdGhlIHJlc3VsdGluZyBtZXNzYWdlIChhZnRlciBwYWRkaW5nIHdpdGhcblx0XHRcdGJpdHMgYW5kIHdpdGggYikgaGFzIGEgbGVuZ3RoIHRoYXQgaXMgYW4gZXhhY3QgbXVsdGlwbGVcblx0XHRcdG9mIDUxMiBiaXRzLiBFcXVpdmFsZW50bHksIHRoaXMgbWVzc2FnZSBoYXMgYSBsZW5ndGhcblx0XHRcdHRoYXQgaXMgYW4gZXhhY3QgbXVsdGlwbGUgb2YgMTYgKDMyLWJpdCkgd29yZHMuIExldFxuXHRcdFx0TVswIC4uLiBOLTFdIGRlbm90ZSB0aGUgd29yZHMgb2YgdGhlIHJlc3VsdGluZyBtZXNzYWdlLFxuXHRcdFx0d2hlcmUgTiBpcyBhIG11bHRpcGxlIG9mIDE2LlxuXHRcdCovXG5cdFx0Ly8gaHR0cHM6Ly9jcnlwdG8uc3RhY2tleGNoYW5nZS5jb20vYS8zMjQwNy81NDU2OFxuXHRcdC8qXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMVxuXHRcdFx0XHRbMCBiaXQ6IG1lc3NhZ2UuXVxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cblxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDJcblx0XHRcdFx0WzUxMi1iaXRzOiBtZXNzYWdlXVxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxuXHRcdFx0XHRbNDQ3IGJpdHM6IDAuXVxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cblxuXHRcdFx0RXhhbXBsZSBjYXNlICAjIDNcblx0XHRcdFx0Wyg1MTIgLSA2NCA9IDQ0OCkgYml0czogbWVzc2FnZS5dXG5cdFx0XHRcdFsxIGJpdDogMS5dXG5cdFx0XHRcdFs1MTEgYml0czogMC5dXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxuXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgNFxuXHRcdFx0XHRbKDUxMiAtIDY1ID0gNDQ3KSBiaXRzOiBtZXNzYWdlLl1cblx0XHRcdFx0WzEgYml0OiAxLl1cblx0XHRcdFx0WzAgYml0OiAwLl1cblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXG5cdFx0Ki9cblx0XHQvLyBUaGUgbnVtYmVyIG9mIHBhZGRpbmcgemVybyBiaXRzOlxuXHRcdC8vICAgICAgNTExIC0gW3sobWVzc2FnZSBzaXplIGluIGJpdHMpICsgNjR9IChtb2QgNTEyKV1cblx0XHRyZXR1cm4gNjQgLSAoKG1lc3NhZ2Vfc2l6ZSArIDgpICYgMGIwMDExMTExMSAvKiA2MyAqLyk7XG5cdH1cblx0c3RhdGljIHBhZChtZXNzYWdlIC8qIEFuIEFycmF5QnVmZmVyLiAqLylcblx0e1xuXHRcdGNvbnN0IG1lc3NhZ2Vfc2l6ZSA9IG1lc3NhZ2UuYnl0ZUxlbmd0aDtcblx0XHRjb25zdCBuX3BhZCA9IFJJUEVNRDE2MC5nZXRfbl9wYWRfYnl0ZXMobWVzc2FnZV9zaXplKTtcblxuXHRcdC8vICBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgIGlzICgoMiAqKiA1MykgLSAxKSBhbmRcblx0XHQvLyBiaXR3aXNlIG9wZXJhdGlvbiBpbiBKYXZhc2NyaXB0IGlzIGRvbmUgb24gMzItYml0cyBvcGVyYW5kcy5cblx0XHRjb25zdCBkaXZtb2QgPSAoZGl2aWRlbmQsIGRpdmlzb3IpID0+IFtcblx0XHRcdE1hdGguZmxvb3IoZGl2aWRlbmQgLyBkaXZpc29yKSxcblx0XHRcdGRpdmlkZW5kICUgZGl2aXNvclxuXHRcdF07XG5cdFx0LypcblRvIHNoaWZ0XG5cbiAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCBvXG4gICAwMDAwMDAwMCA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NZXRob2QgIzFcblxuICAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xuICAgWzAwMDAwMDAwIDAwMEFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBXSAoPEE+IGNhcHR1cmVkKVxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBMDAwXSAoPEE+IHNoaWZ0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBjYXB0dXJlZCkgW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCXVxuICAgICAgICAgICAgICAgICAgICAgKDxCPiBzaGlmdGVkKSBbQkJCXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUJCQl0gKDxBPiAmIDxCXzI+IG1lcmdlZClcbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUJCQl1bQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXG4gICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXG5cblx0XHRjb25zdCB1aW50MzJfbWF4X3BsdXNfMSA9IDB4MTAwMDAwMDAwOyAvLyAoMiAqKiAzMilcblx0XHRjb25zdCBbXG5cdFx0XHRtc2dfYnl0ZV9zaXplX21vc3QsIC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAyMSkgLSAxXS5cblx0XHRcdG1zZ19ieXRlX3NpemVfbGVhc3QgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDMyKSAtIDFdLlxuXHRcdF0gPSBkaXZtb2QobWVzc2FnZV9zaXplLCB1aW50MzJfbWF4X3BsdXNfMSk7XG5cdFx0Y29uc3QgW1xuXHRcdFx0Y2FycnksIC8vIFZhbHVlIHJhbmdlIFswLCA3XS5cblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMzIpIC0gOF0uXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX2J5dGVfc2l6ZV9sZWFzdCAqIDgsIHVpbnQzMl9tYXhfcGx1c18xKTtcblx0XHRjb25zdCBtZXNzYWdlX2JpdF9zaXplX21vc3QgPSBtZXNzYWdlX2J5dGVfc2l6ZV9tb3N0ICogOFxuXHRcdFx0KyBjYXJyeTsgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDI0KSAtIDFdLlxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NZXRob2QgIzJcbiAgICAwMDAwMDAwMCAwMDA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz9cbiAgICAgIFswMDAwMCAwMDBBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQSAgQUFBXSAoPEE+IGNhcHR1cmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICg8Qj4gY2FwdHVyZWQpIFswMDBCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBzaGlmdGVkKSBbQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUFdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxuICAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PzAwMFxuXG5cdFx0Ki9cblx0XHRjb25zdCBbXG5cdFx0XHRtc2dfYml0X3NpemVfbW9zdCxcblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdFxuXHRcdF0gPSBkaXZtb2QobWVzc2FnZV9zaXplLCA1MzY4NzA5MTIgLyogKDIgKiogMjkpICovKVxuXHRcdFx0Lm1hcCgoeCwgaW5kZXgpID0+IChpbmRleCA/ICh4ICogOCkgOiB4KSk7XG5cblx0XHQvLyBgQXJyYXlCdWZmZXIudHJhbnNmZXIoKWAgaXMgbm90IHN1cHBvcnRlZC5cblx0XHRjb25zdCBwYWRkZWQgPSBuZXcgVWludDhBcnJheShtZXNzYWdlX3NpemUgKyBuX3BhZCArIDgpO1xuXHRcdHBhZGRlZC5zZXQobmV3IFVpbnQ4QXJyYXkobWVzc2FnZSksIDApO1xuXHRcdGNvbnN0IGRhdGFfdmlldyA9IG5ldyBEYXRhVmlldyhwYWRkZWQuYnVmZmVyKTtcblx0XHRkYXRhX3ZpZXcuc2V0VWludDgobWVzc2FnZV9zaXplLCAwYjEwMDAwMDAwKTtcblx0XHRkYXRhX3ZpZXcuc2V0VWludDMyKFxuXHRcdFx0bWVzc2FnZV9zaXplICsgbl9wYWQsXG5cdFx0XHRtc2dfYml0X3NpemVfbGVhc3QsXG5cdFx0XHR0cnVlIC8vIExpdHRsZS1lbmRpYW5cblx0XHQpO1xuXHRcdGRhdGFfdmlldy5zZXRVaW50MzIoXG5cdFx0XHRtZXNzYWdlX3NpemUgKyBuX3BhZCArIDQsXG5cdFx0XHRtc2dfYml0X3NpemVfbW9zdCxcblx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxuXHRcdCk7XG5cblx0XHRyZXR1cm4gcGFkZGVkLmJ1ZmZlcjtcblx0fVxuXG5cdHN0YXRpYyBmKGosIHgsIHksIHopXG5cdHtcblx0XHRpZigwIDw9IGogJiYgaiA8PSAxNSlcblx0XHR7IC8vIEV4Y2x1c2l2ZS1PUlxuXHRcdFx0cmV0dXJuIHggXiB5IF4gejtcblx0XHR9XG5cdFx0aWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxuXHRcdHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXG5cdFx0XHRyZXR1cm4gKHggJiB5KSB8ICh+eCAmIHopO1xuXHRcdH1cblx0XHRpZigzMiA8PSBqICYmIGogPD0gNDcpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICh4IHwgfnkpIF4gejtcblx0XHR9XG5cdFx0aWYoNDggPD0gaiAmJiBqIDw9IDYzKVxuXHRcdHsgLy8gTXVsdGlwbGV4aW5nIChtdXhpbmcpXG5cdFx0XHRyZXR1cm4gKHggJiB6KSB8ICh5ICYgfnopO1xuXHRcdH1cblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIHggXiAoeSB8IH56KTtcblx0XHR9XG5cdH1cblx0c3RhdGljIEsoailcblx0e1xuXHRcdGlmKDAgPD0gaiAmJiBqIDw9IDE1KVxuXHRcdHtcblx0XHRcdHJldHVybiAweDAwMDAwMDAwO1xuXHRcdH1cblx0XHRpZigxNiA8PSBqICYmIGogPD0gMzEpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLlNRUlQyKVxuXHRcdFx0cmV0dXJuIDB4NUE4Mjc5OTk7XG5cdFx0fVxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0Nylcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCgzKSlcblx0XHRcdHJldHVybiAweDZFRDlFQkExO1xuXHRcdH1cblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoNSkpXG5cdFx0XHRyZXR1cm4gMHg4RjFCQkNEQztcblx0XHR9XG5cdFx0aWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxuXHRcdHtcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDcpKVxuXHRcdFx0cmV0dXJuIDB4QTk1M0ZENEU7XG5cdFx0fVxuXHR9XG5cdHN0YXRpYyBLUChqKSAvLyBLJ1xuXHR7XG5cdFx0aWYoMCA8PSBqICYmIGogPD0gMTUpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMikpXG5cdFx0XHRyZXR1cm4gMHg1MEEyOEJFNjtcblx0XHR9XG5cdFx0aWYoMTYgPD0gaiAmJiBqIDw9IDMxKVxuXHRcdHtcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDMpKVxuXHRcdFx0cmV0dXJuIDB4NUM0REQxMjQ7XG5cdFx0fVxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0Nylcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCg1KSlcblx0XHRcdHJldHVybiAweDZENzAzRUYzO1xuXHRcdH1cblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoNykpXG5cdFx0XHRyZXR1cm4gMHg3QTZENzZFOTtcblx0XHR9XG5cdFx0aWYoNjQgPD0gaiAmJiBqIDw9IDc5KVxuXHRcdHtcblx0XHRcdHJldHVybiAweDAwMDAwMDAwO1xuXHRcdH1cblx0fVxuXHRzdGF0aWMgYWRkX21vZHVsbzMyKC8qIC4uLi4uLiAqLylcblx0e1xuXHRcdC8vIDEuICBNb2R1bG8gYWRkaXRpb24gKGFkZGl0aW9uIG1vZHVsbykgaXMgYXNzb2NpYXRpdmUuXG5cdFx0Ly8gICAgaHR0cHM6Ly9wcm9vZndpa2kub3JnL3dpa2kvTW9kdWxvX0FkZGl0aW9uX2lzX0Fzc29jaWF0aXZlXG4gXHRcdC8vIDIuICBCaXR3aXNlIG9wZXJhdGlvbiBpbiBKYXZhc2NyaXB0XG5cdFx0Ly8gICAgaXMgZG9uZSBvbiAzMi1iaXRzIG9wZXJhbmRzXG5cdFx0Ly8gICAgYW5kIHJlc3VsdHMgaW4gYSAzMi1iaXRzIHZhbHVlLlxuXHRcdHJldHVybiBBcnJheVxuXHRcdFx0LmZyb20oYXJndW1lbnRzKVxuXHRcdFx0LnJlZHVjZSgoYSwgYikgPT4gKGEgKyBiKSwgMCkgfCAwO1xuXHR9XG5cdHN0YXRpYyByb2wzMih2YWx1ZSwgY291bnQpXG5cdHsgLy8gQ3ljbGljIGxlZnQgc2hpZnQgKHJvdGF0ZSkgb24gMzItYml0cyB2YWx1ZS5cblx0XHRyZXR1cm4gKHZhbHVlIDw8IGNvdW50KSB8ICh2YWx1ZSA+Pj4gKDMyIC0gY291bnQpKTtcblx0fVxuXHRzdGF0aWMgaGFzaChtZXNzYWdlIC8qIEFuIEFycmF5QnVmZmVyLiAqLylcblx0e1xuXHRcdC8vLy8vLy8vLy8gICAgICAgUGFkZGluZyAgICAgICAvLy8vLy8vLy8vXG5cblx0XHQvLyBUaGUgcGFkZGVkIG1lc3NhZ2UuXG5cdFx0Y29uc3QgcGFkZGVkID0gUklQRU1EMTYwLnBhZChtZXNzYWdlKTtcblxuXHRcdC8vLy8vLy8vLy8gICAgIENvbXByZXNzaW9uICAgICAvLy8vLy8vLy8vXG5cblx0XHQvLyBNZXNzYWdlIHdvcmQgc2VsZWN0b3JzLlxuXHRcdGNvbnN0IHIgPSBbXG5cdFx0XHQwLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxuXHRcdFx0NywgNCwgMTMsIDEsIDEwLCA2LCAxNSwgMywgMTIsIDAsIDksIDUsIDIsIDE0LCAxMSwgOCxcblx0XHRcdDMsIDEwLCAxNCwgNCwgOSwgMTUsIDgsIDEsIDIsIDcsIDAsIDYsIDEzLCAxMSwgNSwgMTIsXG5cdFx0XHQxLCA5LCAxMSwgMTAsIDAsIDgsIDEyLCA0LCAxMywgMywgNywgMTUsIDE0LCA1LCA2LCAyLFxuXHRcdFx0NCwgMCwgNSwgOSwgNywgMTIsIDIsIDEwLCAxNCwgMSwgMywgOCwgMTEsIDYsIDE1LCAxM1xuXHRcdF07XG5cdFx0Y29uc3QgclAgPSBbIC8vIHInXG5cdFx0XHQ1LCAxNCwgNywgMCwgOSwgMiwgMTEsIDQsIDEzLCA2LCAxNSwgOCwgMSwgMTAsIDMsIDEyLFxuXHRcdFx0NiwgMTEsIDMsIDcsIDAsIDEzLCA1LCAxMCwgMTQsIDE1LCA4LCAxMiwgNCwgOSwgMSwgMixcblx0XHRcdDE1LCA1LCAxLCAzLCA3LCAxNCwgNiwgOSwgMTEsIDgsIDEyLCAyLCAxMCwgMCwgNCwgMTMsXG5cdFx0XHQ4LCA2LCA0LCAxLCAzLCAxMSwgMTUsIDAsIDUsIDEyLCAyLCAxMywgOSwgNywgMTAsIDE0LFxuXHRcdFx0MTIsIDE1LCAxMCwgNCwgMSwgNSwgOCwgNywgNiwgMiwgMTMsIDE0LCAwLCAzLCA5LCAxMVxuXHRcdF07XG5cblx0XHQvLyBBbW91bnRzIGZvciAncm90YXRlIGxlZnQnIG9wZXJhdGlvbi5cblx0XHRjb25zdCBzID0gW1xuXHRcdFx0MTEsIDE0LCAxNSwgMTIsIDUsIDgsIDcsIDksIDExLCAxMywgMTQsIDE1LCA2LCA3LCA5LCA4LFxuXHRcdFx0NywgNiwgOCwgMTMsIDExLCA5LCA3LCAxNSwgNywgMTIsIDE1LCA5LCAxMSwgNywgMTMsIDEyLFxuXHRcdFx0MTEsIDEzLCA2LCA3LCAxNCwgOSwgMTMsIDE1LCAxNCwgOCwgMTMsIDYsIDUsIDEyLCA3LCA1LFxuXHRcdFx0MTEsIDEyLCAxNCwgMTUsIDE0LCAxNSwgOSwgOCwgOSwgMTQsIDUsIDYsIDgsIDYsIDUsIDEyLFxuXHRcdFx0OSwgMTUsIDUsIDExLCA2LCA4LCAxMywgMTIsIDUsIDEyLCAxMywgMTQsIDExLCA4LCA1LCA2XG5cdFx0XTtcblx0XHRjb25zdCBzUCA9IFsgLy8gcydcblx0XHRcdDgsIDksIDksIDExLCAxMywgMTUsIDE1LCA1LCA3LCA3LCA4LCAxMSwgMTQsIDE0LCAxMiwgNixcblx0XHRcdDksIDEzLCAxNSwgNywgMTIsIDgsIDksIDExLCA3LCA3LCAxMiwgNywgNiwgMTUsIDEzLCAxMSxcblx0XHRcdDksIDcsIDE1LCAxMSwgOCwgNiwgNiwgMTQsIDEyLCAxMywgNSwgMTQsIDEzLCAxMywgNywgNSxcblx0XHRcdDE1LCA1LCA4LCAxMSwgMTQsIDE0LCA2LCAxNCwgNiwgOSwgMTIsIDksIDEyLCA1LCAxNSwgOCxcblx0XHRcdDgsIDUsIDEyLCA5LCAxMiwgNSwgMTQsIDYsIDgsIDEzLCA2LCA1LCAxNSwgMTMsIDExLCAxMVxuXHRcdF07XG5cblx0XHQvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgd29yZC5cblx0XHRjb25zdCB3b3JkX3NpemUgPSA0O1xuXG5cdFx0Ly8gVGhlIHNpemUsIGluIGJ5dGVzLCBvZiBhIDE2LXdvcmRzIGJsb2NrLlxuXHRcdGNvbnN0IGJsb2NrX3NpemUgPSA2NDtcblxuXHRcdC8vIFRoZSBudW1iZXIgb2YgdGhlIDE2LXdvcmRzIGJsb2Nrcy5cblx0XHRjb25zdCB0ID0gcGFkZGVkLmJ5dGVMZW5ndGggLyBibG9ja19zaXplO1xuXG5cdFx0Ly8gIFRoZSBtZXNzYWdlIGFmdGVyIHBhZGRpbmcgY29uc2lzdHMgb2YgdCAxNi13b3JkIGJsb2NrcyB0aGF0XG5cdFx0Ly8gYXJlIGRlbm90ZWQgd2l0aCBYX2lbal0sIHdpdGggMOKJpGniiaQodCDiiJIgMSkgYW5kIDDiiaRq4omkMTUuXG5cdFx0Y29uc3QgWCA9IChuZXcgQXJyYXkodCkpXG5cdFx0XHQuZmlsbCh1bmRlZmluZWQpXG5cdFx0XHQubWFwKChfLCBpKSA9PiBuZXcgUHJveHkoXG5cdFx0XHRcdG5ldyBEYXRhVmlldyhcblx0XHRcdFx0XHRwYWRkZWQsIGkgKiBibG9ja19zaXplLCBibG9ja19zaXplXG5cdFx0XHRcdCksIHtcblx0XHRcdFx0Z2V0KGJsb2NrX3ZpZXcsIGopXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gYmxvY2tfdmlldy5nZXRVaW50MzIoXG5cdFx0XHRcdFx0XHRqICogd29yZF9zaXplLFxuXHRcdFx0XHRcdFx0dHJ1ZSAvLyBMaXR0bGUtZW5kaWFuXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXG5cdFx0Ly8gIFRoZSByZXN1bHQgb2YgUklQRU1ELTE2MCBpcyBjb250YWluZWQgaW4gZml2ZSAzMi1iaXQgd29yZHMsXG5cdFx0Ly8gd2hpY2ggZm9ybSB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGFsZ29yaXRobS4gVGhlIGZpbmFsXG5cdFx0Ly8gY29udGVudCBvZiB0aGVzZSBmaXZlIDMyLWJpdCB3b3JkcyBpcyBjb252ZXJ0ZWQgdG8gYSAxNjAtYml0XG5cdFx0Ly8gc3RyaW5nLCBhZ2FpbiB1c2luZyB0aGUgbGl0dGxlLWVuZGlhbiBjb252ZW50aW9uLlxuXHRcdGxldCBoID0gW1xuXHRcdFx0MHg2NzQ1MjMwMSwgLy8gaF8wXG5cdFx0XHQweEVGQ0RBQjg5LCAvLyBoXzFcblx0XHRcdDB4OThCQURDRkUsIC8vIGhfMlxuXHRcdFx0MHgxMDMyNTQ3NiwgLy8gaF8zXG5cdFx0XHQweEMzRDJFMUYwICAvLyBoXzRcblx0XHRdO1xuXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHQ7ICsraSlcblx0XHR7XG5cdFx0XHRsZXQgQSA9IGhbMF0sIEIgPSBoWzFdLCBDID0gaFsyXSwgRCA9IGhbM10sIEUgPSBoWzRdO1xuXHRcdFx0bGV0IEFQID0gQSwgQlAgPSBCLCBDUCA9IEMsIERQID0gRCwgRVAgPSBFO1xuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDgwOyArK2opXG5cdFx0XHR7XG5cdFx0XHRcdC8vIExlZnQgcm91bmRzXG5cdFx0XHRcdGxldCBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihcblx0XHRcdFx0XHRSSVBFTUQxNjAucm9sMzIoXG5cdFx0XHRcdFx0XHRSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxuXHRcdFx0XHRcdFx0XHRBLFxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuZihqLCBCLCBDLCBEKSxcblx0XHRcdFx0XHRcdFx0WFtpXVtyW2pdXSxcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLksoailcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRzW2pdXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRFXG5cdFx0XHRcdCk7XG5cdFx0XHRcdEEgPSBFO1xuXHRcdFx0XHRFID0gRDtcblx0XHRcdFx0RCA9IFJJUEVNRDE2MC5yb2wzMihDLCAxMCk7XG5cdFx0XHRcdEMgPSBCO1xuXHRcdFx0XHRCID0gVDtcblxuXHRcdFx0XHQvLyBSaWdodCByb3VuZHNcblx0XHRcdFx0VCA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXG5cdFx0XHRcdFx0UklQRU1EMTYwLnJvbDMyKFxuXHRcdFx0XHRcdFx0UklQRU1EMTYwLmFkZF9tb2R1bG8zMihcblx0XHRcdFx0XHRcdFx0QVAsXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5mKFxuXHRcdFx0XHRcdFx0XHRcdDc5IC0gaixcblx0XHRcdFx0XHRcdFx0XHRCUCxcblx0XHRcdFx0XHRcdFx0XHRDUCxcblx0XHRcdFx0XHRcdFx0XHREUFxuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRYW2ldW3JQW2pdXSxcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLktQKGopXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0c1Bbal1cblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdEVQXG5cdFx0XHRcdCk7XG5cdFx0XHRcdEFQID0gRVA7XG5cdFx0XHRcdEVQID0gRFA7XG5cdFx0XHRcdERQID0gUklQRU1EMTYwLnJvbDMyKENQLCAxMCk7XG5cdFx0XHRcdENQID0gQlA7XG5cdFx0XHRcdEJQID0gVDtcblx0XHRcdH1cblx0XHRcdGxldCBUID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzFdLCBDLCBEUCk7XG5cdFx0XHRoWzFdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzJdLCBELCBFUCk7XG5cdFx0XHRoWzJdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzNdLCBFLCBBUCk7XG5cdFx0XHRoWzNdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzRdLCBBLCBCUCk7XG5cdFx0XHRoWzRdID0gUklQRU1EMTYwLmFkZF9tb2R1bG8zMihoWzBdLCBCLCBDUCk7XG5cdFx0XHRoWzBdID0gVDtcblx0XHR9XG5cblx0XHQvLyAgVGhlIGZpbmFsIG91dHB1dCBzdHJpbmcgdGhlbiBjb25zaXN0cyBvZiB0aGUgY29uY2F0ZW5hdGF0aW9uXG5cdFx0Ly8gb2YgaF8wLCBoXzEsIGhfMiwgaF8zLCBhbmQgaF80IGFmdGVyIGNvbnZlcnRpbmcgZWFjaCBoX2kgdG8gYVxuXHRcdC8vIDQtYnl0ZSBzdHJpbmcgdXNpbmcgdGhlIGxpdHRsZS1lbmRpYW4gY29udmVudGlvbi5cblx0XHRjb25zdCByZXN1bHQgPSBuZXcgQXJyYXlCdWZmZXIoMjApO1xuXHRcdGNvbnN0IGRhdGFfdmlldyA9IG5ldyBEYXRhVmlldyhyZXN1bHQpO1xuXHRcdGguZm9yRWFjaCgoaF9pLCBpKSA9PiBkYXRhX3ZpZXcuc2V0VWludDMyKGkgKiA0LCBoX2ksIHRydWUpKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRSSVBFTUQxNjBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=