"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnedCDP = exports.OwnerCDPList = exports.CDP = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.cdp.v1alpha1";
const baseCDP = { id: long_1.default.UZERO, owner: "", type: "" };
exports.CDP = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCDP };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
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
        const message = { ...baseCDP };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.type !== undefined && (obj.type = message.type);
        message.collateral !== undefined &&
            (obj.collateral = message.collateral
                ? coin_1.Coin.toJSON(message.collateral)
                : undefined);
        message.debt !== undefined &&
            (obj.debt = message.debt ? coin_1.Coin.toJSON(message.debt) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCDP };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
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
        return message;
    },
};
const baseOwnerCDPList = {};
exports.OwnerCDPList = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.ownedCDPs) {
            exports.OwnedCDP.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOwnerCDPList };
        message.ownedCDPs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ownedCDPs.push(exports.OwnedCDP.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOwnerCDPList };
        message.ownedCDPs = [];
        if (object.ownedCDPs !== undefined && object.ownedCDPs !== null) {
            for (const e of object.ownedCDPs) {
                message.ownedCDPs.push(exports.OwnedCDP.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ownedCDPs) {
            obj.ownedCDPs = message.ownedCDPs.map((e) => e ? exports.OwnedCDP.toJSON(e) : undefined);
        }
        else {
            obj.ownedCDPs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOwnerCDPList };
        message.ownedCDPs = [];
        if (object.ownedCDPs !== undefined && object.ownedCDPs !== null) {
            for (const e of object.ownedCDPs) {
                message.ownedCDPs.push(exports.OwnedCDP.fromPartial(e));
            }
        }
        return message;
    },
};
const baseOwnedCDP = { id: long_1.default.UZERO, collateralType: "" };
exports.OwnedCDP = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.collateralType !== "") {
            writer.uint32(26).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOwnedCDP };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        const message = { ...baseOwnedCDP };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
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
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOwnedCDP };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=cdp.js.map