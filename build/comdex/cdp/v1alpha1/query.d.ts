import Long from "long";
import _m0 from "protobufjs/minimal";
import { CDP } from "../../../comdex/cdp/v1alpha1/cdp";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "../../../comdex/cdp/v1alpha1/params";
export declare const protobufPackage = "comdex.cdp.v1alpha1";
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
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params?: Params;
}
export declare const QueryCDPRequest: {
    encode(message: QueryCDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCDPRequest;
    fromJSON(object: any): QueryCDPRequest;
    toJSON(message: QueryCDPRequest): unknown;
    fromPartial(object: DeepPartial<QueryCDPRequest>): QueryCDPRequest;
};
export declare const QueryCDPResponse: {
    encode(message: QueryCDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCDPResponse;
    fromJSON(object: any): QueryCDPResponse;
    toJSON(message: QueryCDPResponse): unknown;
    fromPartial(object: DeepPartial<QueryCDPResponse>): QueryCDPResponse;
};
export declare const QueryCDPsRequest: {
    encode(message: QueryCDPsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCDPsRequest;
    fromJSON(object: any): QueryCDPsRequest;
    toJSON(message: QueryCDPsRequest): unknown;
    fromPartial(object: DeepPartial<QueryCDPsRequest>): QueryCDPsRequest;
};
export declare const QueryCDPsResponse: {
    encode(message: QueryCDPsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCDPsResponse;
    fromJSON(object: any): QueryCDPsResponse;
    toJSON(message: QueryCDPsResponse): unknown;
    fromPartial(object: DeepPartial<QueryCDPsResponse>): QueryCDPsResponse;
};
export declare const QueryCDPByIdRequest: {
    encode(message: QueryCDPByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCDPByIdRequest;
    fromJSON(object: any): QueryCDPByIdRequest;
    toJSON(message: QueryCDPByIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryCDPByIdRequest>): QueryCDPByIdRequest;
};
export declare const QueryCDPByIdResponse: {
    encode(message: QueryCDPByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCDPByIdResponse;
    fromJSON(object: any): QueryCDPByIdResponse;
    toJSON(message: QueryCDPByIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryCDPByIdResponse>): QueryCDPByIdResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface QueryService {
    QueryCDP(request: QueryCDPRequest): Promise<QueryCDPResponse>;
    QueryCDPs(request: QueryCDPsRequest): Promise<QueryCDPsResponse>;
    QueryCDPById(request: QueryCDPByIdRequest): Promise<QueryCDPByIdResponse>;
    QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryServiceClientImpl implements QueryService {
    private readonly rpc;
    constructor(rpc: Rpc);
    QueryCDP(request: QueryCDPRequest): Promise<QueryCDPResponse>;
    QueryCDPs(request: QueryCDPsRequest): Promise<QueryCDPsResponse>;
    QueryCDPById(request: QueryCDPByIdRequest): Promise<QueryCDPByIdResponse>;
    QueryParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
