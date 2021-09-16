"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgServiceClientImpl = exports.MsgLiquidateCDPResponse = exports.MsgLiquidateCDPRequest = exports.MsgRepayDebtResponse = exports.MsgRepayDebtRequest = exports.MsgDrawDebtResponse = exports.MsgDrawDebtRequest = exports.MsgWithdrawCollateralResponse = exports.MsgWithdrawCollateralRequest = exports.MsgDepositCollateralResponse = exports.MsgDepositCollateralRequest = exports.MsgCreateCDPResponse = exports.MsgCreateCDPRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.cdp.v1alpha1";
const baseMsgCreateCDPRequest = { sender: "", collateralType: "" };
exports.MsgCreateCDPRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
        }
        if (message.collateralType !== "") {
            writer.uint32(34).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCDPRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.collateralType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCDPRequest };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromJSON(object.collateral);
        }
        else {
            message.collateral = undefined;
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromJSON(object.debt);
        }
        else {
            message.debt = undefined;
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = String(object.collateralType);
        }
        else {
            message.collateralType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.collateral !== undefined &&
            (obj.collateral = message.collateral
                ? coin_1.Coin.toJSON(message.collateral)
                : undefined);
        message.debt !== undefined &&
            (obj.debt = message.debt ? coin_1.Coin.toJSON(message.debt) : undefined);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCDPRequest };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromPartial(object.collateral);
        }
        else {
            message.collateral = undefined;
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromPartial(object.debt);
        }
        else {
            message.debt = undefined;
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = object.collateralType;
        }
        else {
            message.collateralType = "";
        }
        return message;
    },
};
const baseMsgCreateCDPResponse = {};
exports.MsgCreateCDPResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCDPResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateCDPResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateCDPResponse };
        return message;
    },
};
const baseMsgDepositCollateralRequest = {
    owner: "",
    collateralType: "",
};
exports.MsgDepositCollateralRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
        }
        if (message.collateralType !== "") {
            writer.uint32(26).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDepositCollateralRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.collateralType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgDepositCollateralRequest,
        };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromJSON(object.collateral);
        }
        else {
            message.collateral = undefined;
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = String(object.collateralType);
        }
        else {
            message.collateralType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateral !== undefined &&
            (obj.collateral = message.collateral
                ? coin_1.Coin.toJSON(message.collateral)
                : undefined);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDepositCollateralRequest,
        };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromPartial(object.collateral);
        }
        else {
            message.collateral = undefined;
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = object.collateralType;
        }
        else {
            message.collateralType = "";
        }
        return message;
    },
};
const baseMsgDepositCollateralResponse = {};
exports.MsgDepositCollateralResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDepositCollateralResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDepositCollateralResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDepositCollateralResponse,
        };
        return message;
    },
};
const baseMsgWithdrawCollateralRequest = {
    owner: "",
    collateralType: "",
};
exports.MsgWithdrawCollateralRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
        }
        if (message.collateralType !== "") {
            writer.uint32(26).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgWithdrawCollateralRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.collateralType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgWithdrawCollateralRequest,
        };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromJSON(object.collateral);
        }
        else {
            message.collateral = undefined;
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = String(object.collateralType);
        }
        else {
            message.collateralType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateral !== undefined &&
            (obj.collateral = message.collateral
                ? coin_1.Coin.toJSON(message.collateral)
                : undefined);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgWithdrawCollateralRequest,
        };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromPartial(object.collateral);
        }
        else {
            message.collateral = undefined;
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = object.collateralType;
        }
        else {
            message.collateralType = "";
        }
        return message;
    },
};
const baseMsgWithdrawCollateralResponse = {};
exports.MsgWithdrawCollateralResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgWithdrawCollateralResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgWithdrawCollateralResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgWithdrawCollateralResponse,
        };
        return message;
    },
};
const baseMsgDrawDebtRequest = { owner: "", collateralType: "" };
exports.MsgDrawDebtRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDrawDebtRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDrawDebtRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = String(object.collateralType);
        }
        else {
            message.collateralType = "";
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromJSON(object.debt);
        }
        else {
            message.debt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        message.debt !== undefined &&
            (obj.debt = message.debt ? coin_1.Coin.toJSON(message.debt) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDrawDebtRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = object.collateralType;
        }
        else {
            message.collateralType = "";
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromPartial(object.debt);
        }
        else {
            message.debt = undefined;
        }
        return message;
    },
};
const baseMsgDrawDebtResponse = {};
exports.MsgDrawDebtResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDrawDebtResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDrawDebtResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDrawDebtResponse };
        return message;
    },
};
const baseMsgRepayDebtRequest = { owner: "", collateralType: "" };
exports.MsgRepayDebtRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRepayDebtRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRepayDebtRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = String(object.collateralType);
        }
        else {
            message.collateralType = "";
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromJSON(object.debt);
        }
        else {
            message.debt = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        message.debt !== undefined &&
            (obj.debt = message.debt ? coin_1.Coin.toJSON(message.debt) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRepayDebtRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = object.collateralType;
        }
        else {
            message.collateralType = "";
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromPartial(object.debt);
        }
        else {
            message.debt = undefined;
        }
        return message;
    },
};
const baseMsgRepayDebtResponse = {};
exports.MsgRepayDebtResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRepayDebtResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgRepayDebtResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRepayDebtResponse };
        return message;
    },
};
const baseMsgLiquidateCDPRequest = { owner: "", collateralType: "" };
exports.MsgLiquidateCDPRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgLiquidateCDPRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgLiquidateCDPRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = String(object.collateralType);
        }
        else {
            message.collateralType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgLiquidateCDPRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = object.collateralType;
        }
        else {
            message.collateralType = "";
        }
        return message;
    },
};
const baseMsgLiquidateCDPResponse = {};
exports.MsgLiquidateCDPResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgLiquidateCDPResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgLiquidateCDPResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgLiquidateCDPResponse,
        };
        return message;
    },
};
class MsgServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgCreateCDP = this.MsgCreateCDP.bind(this);
        this.MsgDepositCollateral = this.MsgDepositCollateral.bind(this);
        this.MsgWithdrawCollateral = this.MsgWithdrawCollateral.bind(this);
        this.MsgDrawDebt = this.MsgDrawDebt.bind(this);
        this.MsgRepayDebt = this.MsgRepayDebt.bind(this);
        this.MsgLiquidateCDP = this.MsgLiquidateCDP.bind(this);
    }
    MsgCreateCDP(request) {
        const data = exports.MsgCreateCDPRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.MsgService", "MsgCreateCDP", data);
        return promise.then((data) => exports.MsgCreateCDPResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgDepositCollateral(request) {
        const data = exports.MsgDepositCollateralRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.MsgService", "MsgDepositCollateral", data);
        return promise.then((data) => exports.MsgDepositCollateralResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgWithdrawCollateral(request) {
        const data = exports.MsgWithdrawCollateralRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.MsgService", "MsgWithdrawCollateral", data);
        return promise.then((data) => exports.MsgWithdrawCollateralResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgDrawDebt(request) {
        const data = exports.MsgDrawDebtRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.MsgService", "MsgDrawDebt", data);
        return promise.then((data) => exports.MsgDrawDebtResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgRepayDebt(request) {
        const data = exports.MsgRepayDebtRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.MsgService", "MsgRepayDebt", data);
        return promise.then((data) => exports.MsgRepayDebtResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgLiquidateCDP(request) {
        const data = exports.MsgLiquidateCDPRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.MsgService", "MsgLiquidateCDP", data);
        return promise.then((data) => exports.MsgLiquidateCDPResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgServiceClientImpl = MsgServiceClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=msg.js.map