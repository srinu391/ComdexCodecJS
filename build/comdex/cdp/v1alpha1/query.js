"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryServiceClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryCDPByIdResponse = exports.QueryCDPByIdRequest = exports.QueryCDPsResponse = exports.QueryCDPsRequest = exports.QueryCDPResponse = exports.QueryCDPRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const cdp_1 = require("../../../comdex/cdp/v1alpha1/cdp");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("../../../comdex/cdp/v1alpha1/params");
exports.protobufPackage = "comdex.cdp.v1alpha1";
const baseQueryCDPRequest = { collateralType: "", owner: "" };
exports.QueryCDPRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collateralType !== "") {
            writer.uint32(10).string(message.collateralType);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCDPRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralType = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCDPRequest };
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = String(object.collateralType);
        }
        else {
            message.collateralType = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCDPRequest };
        if (object.collateralType !== undefined && object.collateralType !== null) {
            message.collateralType = object.collateralType;
        }
        else {
            message.collateralType = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        return message;
    },
};
const baseQueryCDPResponse = {};
exports.QueryCDPResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cdp !== undefined) {
            cdp_1.CDP.encode(message.cdp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCDPResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cdp = cdp_1.CDP.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCDPResponse };
        if (object.cdp !== undefined && object.cdp !== null) {
            message.cdp = cdp_1.CDP.fromJSON(object.cdp);
        }
        else {
            message.cdp = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cdp !== undefined &&
            (obj.cdp = message.cdp ? cdp_1.CDP.toJSON(message.cdp) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCDPResponse };
        if (object.cdp !== undefined && object.cdp !== null) {
            message.cdp = cdp_1.CDP.fromPartial(object.cdp);
        }
        else {
            message.cdp = undefined;
        }
        return message;
    },
};
const baseQueryCDPsRequest = { owner: "" };
exports.QueryCDPsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCDPsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCDPsRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCDPsRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryCDPsResponse = {};
exports.QueryCDPsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.cdps) {
            cdp_1.CDP.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCDPsResponse };
        message.cdps = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cdps.push(cdp_1.CDP.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCDPsResponse };
        message.cdps = [];
        if (object.cdps !== undefined && object.cdps !== null) {
            for (const e of object.cdps) {
                message.cdps.push(cdp_1.CDP.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.cdps) {
            obj.cdps = message.cdps.map((e) => (e ? cdp_1.CDP.toJSON(e) : undefined));
        }
        else {
            obj.cdps = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCDPsResponse };
        message.cdps = [];
        if (object.cdps !== undefined && object.cdps !== null) {
            for (const e of object.cdps) {
                message.cdps.push(cdp_1.CDP.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryCDPByIdRequest = { id: long_1.default.UZERO };
exports.QueryCDPByIdRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCDPByIdRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCDPByIdRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCDPByIdRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryCDPByIdResponse = {};
exports.QueryCDPByIdResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.cdp !== undefined) {
            cdp_1.CDP.encode(message.cdp, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCDPByIdResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cdp = cdp_1.CDP.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCDPByIdResponse };
        if (object.cdp !== undefined && object.cdp !== null) {
            message.cdp = cdp_1.CDP.fromJSON(object.cdp);
        }
        else {
            message.cdp = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.cdp !== undefined &&
            (obj.cdp = message.cdp ? cdp_1.CDP.toJSON(message.cdp) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCDPByIdResponse };
        if (object.cdp !== undefined && object.cdp !== null) {
            message.cdp = cdp_1.CDP.fromPartial(object.cdp);
        }
        else {
            message.cdp = undefined;
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryCDP = this.QueryCDP.bind(this);
        this.QueryCDPs = this.QueryCDPs.bind(this);
        this.QueryCDPById = this.QueryCDPById.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
    }
    QueryCDP(request) {
        const data = exports.QueryCDPRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.QueryService", "QueryCDP", data);
        return promise.then((data) => exports.QueryCDPResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryCDPs(request) {
        const data = exports.QueryCDPsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.QueryService", "QueryCDPs", data);
        return promise.then((data) => exports.QueryCDPsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryCDPById(request) {
        const data = exports.QueryCDPByIdRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.QueryService", "QueryCDPById", data);
        return promise.then((data) => exports.QueryCDPByIdResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.cdp.v1alpha1.QueryService", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=query.js.map