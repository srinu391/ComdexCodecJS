/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CDP } from "../../../comdex/cdp/v1alpha1/cdp";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "../../../comdex/cdp/v1alpha1/params";

export const protobufPackage = "comdex.cdp.v1alpha1";

export interface QueryCDPRequest {
  collateralType: string;
  owner: string;
}

export interface QueryCDPResponse {
  cdp?: CDP;
}

export interface QueryCDPsRequest {
  owner: string;
  pagination?: PageRequest;
}

export interface QueryCDPsResponse {
  cdps: CDP[];
  pagination?: PageResponse;
}

export interface QueryCDPByIdRequest {
  id: Long;
}

export interface QueryCDPByIdResponse {
  cdp?: CDP;
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

const baseQueryCDPRequest: object = { collateralType: "", owner: "" };

export const QueryCDPRequest = {
  encode(
    message: QueryCDPRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collateralType !== "") {
      writer.uint32(10).string(message.collateralType);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCDPRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCDPRequest } as QueryCDPRequest;
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

  fromJSON(object: any): QueryCDPRequest {
    const message = { ...baseQueryCDPRequest } as QueryCDPRequest;
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = String(object.collateralType);
    } else {
      message.collateralType = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QueryCDPRequest): unknown {
    const obj: any = {};
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCDPRequest>): QueryCDPRequest {
    const message = { ...baseQueryCDPRequest } as QueryCDPRequest;
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = object.collateralType;
    } else {
      message.collateralType = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQueryCDPResponse: object = {};

export const QueryCDPResponse = {
  encode(
    message: QueryCDPResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cdp !== undefined) {
      CDP.encode(message.cdp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCDPResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCDPResponse } as QueryCDPResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cdp = CDP.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCDPResponse {
    const message = { ...baseQueryCDPResponse } as QueryCDPResponse;
    if (object.cdp !== undefined && object.cdp !== null) {
      message.cdp = CDP.fromJSON(object.cdp);
    } else {
      message.cdp = undefined;
    }
    return message;
  },

  toJSON(message: QueryCDPResponse): unknown {
    const obj: any = {};
    message.cdp !== undefined &&
      (obj.cdp = message.cdp ? CDP.toJSON(message.cdp) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCDPResponse>): QueryCDPResponse {
    const message = { ...baseQueryCDPResponse } as QueryCDPResponse;
    if (object.cdp !== undefined && object.cdp !== null) {
      message.cdp = CDP.fromPartial(object.cdp);
    } else {
      message.cdp = undefined;
    }
    return message;
  },
};

const baseQueryCDPsRequest: object = { owner: "" };

export const QueryCDPsRequest = {
  encode(
    message: QueryCDPsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCDPsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCDPsRequest } as QueryCDPsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCDPsRequest {
    const message = { ...baseQueryCDPsRequest } as QueryCDPsRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCDPsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCDPsRequest>): QueryCDPsRequest {
    const message = { ...baseQueryCDPsRequest } as QueryCDPsRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCDPsResponse: object = {};

export const QueryCDPsResponse = {
  encode(
    message: QueryCDPsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.cdps) {
      CDP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCDPsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCDPsResponse } as QueryCDPsResponse;
    message.cdps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cdps.push(CDP.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCDPsResponse {
    const message = { ...baseQueryCDPsResponse } as QueryCDPsResponse;
    message.cdps = [];
    if (object.cdps !== undefined && object.cdps !== null) {
      for (const e of object.cdps) {
        message.cdps.push(CDP.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCDPsResponse): unknown {
    const obj: any = {};
    if (message.cdps) {
      obj.cdps = message.cdps.map((e) => (e ? CDP.toJSON(e) : undefined));
    } else {
      obj.cdps = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCDPsResponse>): QueryCDPsResponse {
    const message = { ...baseQueryCDPsResponse } as QueryCDPsResponse;
    message.cdps = [];
    if (object.cdps !== undefined && object.cdps !== null) {
      for (const e of object.cdps) {
        message.cdps.push(CDP.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCDPByIdRequest: object = { id: Long.UZERO };

export const QueryCDPByIdRequest = {
  encode(
    message: QueryCDPByIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCDPByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCDPByIdRequest } as QueryCDPByIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCDPByIdRequest {
    const message = { ...baseQueryCDPByIdRequest } as QueryCDPByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },

  toJSON(message: QueryCDPByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCDPByIdRequest>): QueryCDPByIdRequest {
    const message = { ...baseQueryCDPByIdRequest } as QueryCDPByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },
};

const baseQueryCDPByIdResponse: object = {};

export const QueryCDPByIdResponse = {
  encode(
    message: QueryCDPByIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cdp !== undefined) {
      CDP.encode(message.cdp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCDPByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCDPByIdResponse } as QueryCDPByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cdp = CDP.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCDPByIdResponse {
    const message = { ...baseQueryCDPByIdResponse } as QueryCDPByIdResponse;
    if (object.cdp !== undefined && object.cdp !== null) {
      message.cdp = CDP.fromJSON(object.cdp);
    } else {
      message.cdp = undefined;
    }
    return message;
  },

  toJSON(message: QueryCDPByIdResponse): unknown {
    const obj: any = {};
    message.cdp !== undefined &&
      (obj.cdp = message.cdp ? CDP.toJSON(message.cdp) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCDPByIdResponse>): QueryCDPByIdResponse {
    const message = { ...baseQueryCDPByIdResponse } as QueryCDPByIdResponse;
    if (object.cdp !== undefined && object.cdp !== null) {
      message.cdp = CDP.fromPartial(object.cdp);
    } else {
      message.cdp = undefined;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface QueryService {
  QueryCDP(request: QueryCDPRequest): Promise<QueryCDPResponse>;
  QueryCDPs(request: QueryCDPsRequest): Promise<QueryCDPsResponse>;
  QueryCDPById(request: QueryCDPByIdRequest): Promise<QueryCDPByIdResponse>;
  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryCDP = this.QueryCDP.bind(this);
    this.QueryCDPs = this.QueryCDPs.bind(this);
    this.QueryCDPById = this.QueryCDPById.bind(this);
    this.QueryParams = this.QueryParams.bind(this);
  }
  QueryCDP(request: QueryCDPRequest): Promise<QueryCDPResponse> {
    const data = QueryCDPRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.QueryService",
      "QueryCDP",
      data
    );
    return promise.then((data) =>
      QueryCDPResponse.decode(new _m0.Reader(data))
    );
  }

  QueryCDPs(request: QueryCDPsRequest): Promise<QueryCDPsResponse> {
    const data = QueryCDPsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.QueryService",
      "QueryCDPs",
      data
    );
    return promise.then((data) =>
      QueryCDPsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryCDPById(request: QueryCDPByIdRequest): Promise<QueryCDPByIdResponse> {
    const data = QueryCDPByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.QueryService",
      "QueryCDPById",
      data
    );
    return promise.then((data) =>
      QueryCDPByIdResponse.decode(new _m0.Reader(data))
    );
  }

  QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.QueryService",
      "QueryParams",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
