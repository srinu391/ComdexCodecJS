"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollateralParam = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.cdp.v1alpha1";
const baseParams = {};
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.collateralParams) {
            exports.CollateralParam.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        message.collateralParams = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralParams.push(exports.CollateralParam.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        message.collateralParams = [];
        if (object.collateralParams !== undefined &&
            object.collateralParams !== null) {
            for (const e of object.collateralParams) {
                message.collateralParams.push(exports.CollateralParam.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.collateralParams) {
            obj.collateralParams = message.collateralParams.map((e) => e ? exports.CollateralParam.toJSON(e) : undefined);
        }
        else {
            obj.collateralParams = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        message.collateralParams = [];
        if (object.collateralParams !== undefined &&
            object.collateralParams !== null) {
            for (const e of object.collateralParams) {
                message.collateralParams.push(exports.CollateralParam.fromPartial(e));
            }
        }
        return message;
    },
};
const baseCollateralParam = {
    collateralDenom: "",
    debtDenom: "",
    type: "",
    liquidationRatio: "",
};
exports.CollateralParam = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collateralDenom !== "") {
            writer.uint32(10).string(message.collateralDenom);
        }
        if (message.debtDenom !== "") {
            writer.uint32(18).string(message.debtDenom);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        if (message.liquidationRatio !== "") {
            writer.uint32(34).string(message.liquidationRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCollateralParam };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralDenom = reader.string();
                    break;
                case 2:
                    message.debtDenom = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.liquidationRatio = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCollateralParam };
        if (object.collateralDenom !== undefined &&
            object.collateralDenom !== null) {
            message.collateralDenom = String(object.collateralDenom);
        }
        else {
            message.collateralDenom = "";
        }
        if (object.debtDenom !== undefined && object.debtDenom !== null) {
            message.debtDenom = String(object.debtDenom);
        }
        else {
            message.debtDenom = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.liquidationRatio !== undefined &&
            object.liquidationRatio !== null) {
            message.liquidationRatio = String(object.liquidationRatio);
        }
        else {
            message.liquidationRatio = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collateralDenom !== undefined &&
            (obj.collateralDenom = message.collateralDenom);
        message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
        message.type !== undefined && (obj.type = message.type);
        message.liquidationRatio !== undefined &&
            (obj.liquidationRatio = message.liquidationRatio);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCollateralParam };
        if (object.collateralDenom !== undefined &&
            object.collateralDenom !== null) {
            message.collateralDenom = object.collateralDenom;
        }
        else {
            message.collateralDenom = "";
        }
        if (object.debtDenom !== undefined && object.debtDenom !== null) {
            message.debtDenom = object.debtDenom;
        }
        else {
            message.debtDenom = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.liquidationRatio !== undefined &&
            object.liquidationRatio !== null) {
            message.liquidationRatio = object.liquidationRatio;
        }
        else {
            message.liquidationRatio = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=params.js.map