import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool, PoolBatch, Params, SwapMsgState, DepositMsgState, WithdrawMsgState } from "../../../tendermint/liquidity/v1beta1/liquidity";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "tendermint.liquidity.v1beta1";
/** the request type for the QueryLiquidityPool RPC method. requestable specified pool_id. */
export interface QueryLiquidityPoolRequest {
    poolId: Long;
}
/** the response type for the QueryLiquidityPoolResponse RPC method. Returns the liquidity pool that corresponds to the requested pool_id. */
export interface QueryLiquidityPoolResponse {
    pool?: Pool;
}
/** the request type for the QueryLiquidityByPoolCoinDenomPool RPC method. Requestable specified pool_coin_denom. */
export interface QueryLiquidityPoolByPoolCoinDenomRequest {
    poolCoinDenom: string;
}
/** the request type for the QueryLiquidityByReserveAcc RPC method. Requestable specified reserve_acc. */
export interface QueryLiquidityPoolByReserveAccRequest {
    reserveAcc: string;
}
/** the request type for the QueryLiquidityPoolBatch RPC method. requestable including specified pool_id. */
export interface QueryLiquidityPoolBatchRequest {
    /** id of the target pool for query */
    poolId: Long;
}
/** the response type for the QueryLiquidityPoolBatchResponse RPC method. Returns the liquidity pool batch that corresponds to the requested pool_id. */
export interface QueryLiquidityPoolBatchResponse {
    batch?: PoolBatch;
}
/** the request type for the QueryLiquidityPools RPC method. Requestable including pagination offset, limit, key. */
export interface QueryLiquidityPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** the response type for the QueryLiquidityPoolsResponse RPC method. This includes a list of all existing liquidity pools and paging results that contain next_key and total count. */
export interface QueryLiquidityPoolsResponse {
    pools: Pool[];
    /** pagination defines the pagination in the response. not working on this version. */
    pagination?: PageResponse;
}
/** QueryParamsRequest is request type for the QueryParams RPC method. */
export interface QueryParamsRequest {
}
/** the response type for the QueryParamsResponse RPC method. This includes current parameter of the liquidity module. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** the request type for the QueryPoolBatchSwapMsgs RPC method. Requestable including specified pool_id and pagination offset, limit, key. */
export interface QueryPoolBatchSwapMsgsRequest {
    /** id of the target pool for query */
    poolId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** the request type for the QueryPoolBatchSwap RPC method. Requestable including specified pool_id and msg_index. */
export interface QueryPoolBatchSwapMsgRequest {
    /** id of the target pool for query */
    poolId: Long;
    /** target msg_index of the pool */
    msgIndex: Long;
}
/** the response type for the QueryPoolBatchSwapMsgs RPC method. This includes list of all currently existing swap messages of the batch and paging results that contain next_key and total count. */
export interface QueryPoolBatchSwapMsgsResponse {
    swaps: SwapMsgState[];
    /** pagination defines the pagination in the response. not working on this version. */
    pagination?: PageResponse;
}
/** the response type for the QueryPoolBatchSwapMsg RPC method. This includes a batch swap message of the batch. */
export interface QueryPoolBatchSwapMsgResponse {
    swap?: SwapMsgState;
}
/** the request type for the QueryPoolBatchDeposit RPC method. Requestable including specified pool_id and pagination offset, limit, key. */
export interface QueryPoolBatchDepositMsgsRequest {
    /** id of the target pool for query */
    poolId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** the request type for the QueryPoolBatchDeposit RPC method. requestable including specified pool_id and msg_index. */
export interface QueryPoolBatchDepositMsgRequest {
    /** id of the target pool for query */
    poolId: Long;
    /** target msg_index of the pool */
    msgIndex: Long;
}
/** the response type for the QueryPoolBatchDeposit RPC method. This includes a list of all currently existing deposit messages of the batch and paging results that contain next_key and total count. */
export interface QueryPoolBatchDepositMsgsResponse {
    deposits: DepositMsgState[];
    /** pagination defines the pagination in the response. not working on this version. */
    pagination?: PageResponse;
}
/** the response type for the QueryPoolBatchDepositMsg RPC method. This includes a batch swap message of the batch. */
export interface QueryPoolBatchDepositMsgResponse {
    deposit?: DepositMsgState;
}
/** the request type for the QueryPoolBatchWithdraw RPC method. Requestable including specified pool_id and pagination offset, limit, key. */
export interface QueryPoolBatchWithdrawMsgsRequest {
    /** id of the target pool for query */
    poolId: Long;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** the request type for the QueryPoolBatchWithdraw RPC method. requestable including specified pool_id and msg_index. */
export interface QueryPoolBatchWithdrawMsgRequest {
    /** id of the target pool for query */
    poolId: Long;
    /** target msg_index of the pool */
    msgIndex: Long;
}
/** the response type for the QueryPoolBatchWithdraw RPC method. This includes a list of all currently existing withdraw messages of the batch and paging results that contain next_key and total count. */
export interface QueryPoolBatchWithdrawMsgsResponse {
    withdraws: WithdrawMsgState[];
    /** pagination defines the pagination in the response. Not supported on this version. */
    pagination?: PageResponse;
}
/** the response type for the QueryPoolBatchWithdrawMsg RPC method. This includes a batch swap message of the batch. */
export interface QueryPoolBatchWithdrawMsgResponse {
    withdraw?: WithdrawMsgState;
}
export declare const QueryLiquidityPoolRequest: {
    encode(message: QueryLiquidityPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLiquidityPoolRequest;
    fromJSON(object: any): QueryLiquidityPoolRequest;
    toJSON(message: QueryLiquidityPoolRequest): unknown;
    fromPartial(object: DeepPartial<QueryLiquidityPoolRequest>): QueryLiquidityPoolRequest;
};
export declare const QueryLiquidityPoolResponse: {
    encode(message: QueryLiquidityPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLiquidityPoolResponse;
    fromJSON(object: any): QueryLiquidityPoolResponse;
    toJSON(message: QueryLiquidityPoolResponse): unknown;
    fromPartial(object: DeepPartial<QueryLiquidityPoolResponse>): QueryLiquidityPoolResponse;
};
export declare const QueryLiquidityPoolByPoolCoinDenomRequest: {
    encode(message: QueryLiquidityPoolByPoolCoinDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLiquidityPoolByPoolCoinDenomRequest;
    fromJSON(object: any): QueryLiquidityPoolByPoolCoinDenomRequest;
    toJSON(message: QueryLiquidityPoolByPoolCoinDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryLiquidityPoolByPoolCoinDenomRequest>): QueryLiquidityPoolByPoolCoinDenomRequest;
};
export declare const QueryLiquidityPoolByReserveAccRequest: {
    encode(message: QueryLiquidityPoolByReserveAccRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLiquidityPoolByReserveAccRequest;
    fromJSON(object: any): QueryLiquidityPoolByReserveAccRequest;
    toJSON(message: QueryLiquidityPoolByReserveAccRequest): unknown;
    fromPartial(object: DeepPartial<QueryLiquidityPoolByReserveAccRequest>): QueryLiquidityPoolByReserveAccRequest;
};
export declare const QueryLiquidityPoolBatchRequest: {
    encode(message: QueryLiquidityPoolBatchRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLiquidityPoolBatchRequest;
    fromJSON(object: any): QueryLiquidityPoolBatchRequest;
    toJSON(message: QueryLiquidityPoolBatchRequest): unknown;
    fromPartial(object: DeepPartial<QueryLiquidityPoolBatchRequest>): QueryLiquidityPoolBatchRequest;
};
export declare const QueryLiquidityPoolBatchResponse: {
    encode(message: QueryLiquidityPoolBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLiquidityPoolBatchResponse;
    fromJSON(object: any): QueryLiquidityPoolBatchResponse;
    toJSON(message: QueryLiquidityPoolBatchResponse): unknown;
    fromPartial(object: DeepPartial<QueryLiquidityPoolBatchResponse>): QueryLiquidityPoolBatchResponse;
};
export declare const QueryLiquidityPoolsRequest: {
    encode(message: QueryLiquidityPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLiquidityPoolsRequest;
    fromJSON(object: any): QueryLiquidityPoolsRequest;
    toJSON(message: QueryLiquidityPoolsRequest): unknown;
    fromPartial(object: DeepPartial<QueryLiquidityPoolsRequest>): QueryLiquidityPoolsRequest;
};
export declare const QueryLiquidityPoolsResponse: {
    encode(message: QueryLiquidityPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryLiquidityPoolsResponse;
    fromJSON(object: any): QueryLiquidityPoolsResponse;
    toJSON(message: QueryLiquidityPoolsResponse): unknown;
    fromPartial(object: DeepPartial<QueryLiquidityPoolsResponse>): QueryLiquidityPoolsResponse;
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
export declare const QueryPoolBatchSwapMsgsRequest: {
    encode(message: QueryPoolBatchSwapMsgsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchSwapMsgsRequest;
    fromJSON(object: any): QueryPoolBatchSwapMsgsRequest;
    toJSON(message: QueryPoolBatchSwapMsgsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchSwapMsgsRequest>): QueryPoolBatchSwapMsgsRequest;
};
export declare const QueryPoolBatchSwapMsgRequest: {
    encode(message: QueryPoolBatchSwapMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchSwapMsgRequest;
    fromJSON(object: any): QueryPoolBatchSwapMsgRequest;
    toJSON(message: QueryPoolBatchSwapMsgRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchSwapMsgRequest>): QueryPoolBatchSwapMsgRequest;
};
export declare const QueryPoolBatchSwapMsgsResponse: {
    encode(message: QueryPoolBatchSwapMsgsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchSwapMsgsResponse;
    fromJSON(object: any): QueryPoolBatchSwapMsgsResponse;
    toJSON(message: QueryPoolBatchSwapMsgsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchSwapMsgsResponse>): QueryPoolBatchSwapMsgsResponse;
};
export declare const QueryPoolBatchSwapMsgResponse: {
    encode(message: QueryPoolBatchSwapMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchSwapMsgResponse;
    fromJSON(object: any): QueryPoolBatchSwapMsgResponse;
    toJSON(message: QueryPoolBatchSwapMsgResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchSwapMsgResponse>): QueryPoolBatchSwapMsgResponse;
};
export declare const QueryPoolBatchDepositMsgsRequest: {
    encode(message: QueryPoolBatchDepositMsgsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchDepositMsgsRequest;
    fromJSON(object: any): QueryPoolBatchDepositMsgsRequest;
    toJSON(message: QueryPoolBatchDepositMsgsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchDepositMsgsRequest>): QueryPoolBatchDepositMsgsRequest;
};
export declare const QueryPoolBatchDepositMsgRequest: {
    encode(message: QueryPoolBatchDepositMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchDepositMsgRequest;
    fromJSON(object: any): QueryPoolBatchDepositMsgRequest;
    toJSON(message: QueryPoolBatchDepositMsgRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchDepositMsgRequest>): QueryPoolBatchDepositMsgRequest;
};
export declare const QueryPoolBatchDepositMsgsResponse: {
    encode(message: QueryPoolBatchDepositMsgsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchDepositMsgsResponse;
    fromJSON(object: any): QueryPoolBatchDepositMsgsResponse;
    toJSON(message: QueryPoolBatchDepositMsgsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchDepositMsgsResponse>): QueryPoolBatchDepositMsgsResponse;
};
export declare const QueryPoolBatchDepositMsgResponse: {
    encode(message: QueryPoolBatchDepositMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchDepositMsgResponse;
    fromJSON(object: any): QueryPoolBatchDepositMsgResponse;
    toJSON(message: QueryPoolBatchDepositMsgResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchDepositMsgResponse>): QueryPoolBatchDepositMsgResponse;
};
export declare const QueryPoolBatchWithdrawMsgsRequest: {
    encode(message: QueryPoolBatchWithdrawMsgsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchWithdrawMsgsRequest;
    fromJSON(object: any): QueryPoolBatchWithdrawMsgsRequest;
    toJSON(message: QueryPoolBatchWithdrawMsgsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchWithdrawMsgsRequest>): QueryPoolBatchWithdrawMsgsRequest;
};
export declare const QueryPoolBatchWithdrawMsgRequest: {
    encode(message: QueryPoolBatchWithdrawMsgRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchWithdrawMsgRequest;
    fromJSON(object: any): QueryPoolBatchWithdrawMsgRequest;
    toJSON(message: QueryPoolBatchWithdrawMsgRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchWithdrawMsgRequest>): QueryPoolBatchWithdrawMsgRequest;
};
export declare const QueryPoolBatchWithdrawMsgsResponse: {
    encode(message: QueryPoolBatchWithdrawMsgsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchWithdrawMsgsResponse;
    fromJSON(object: any): QueryPoolBatchWithdrawMsgsResponse;
    toJSON(message: QueryPoolBatchWithdrawMsgsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchWithdrawMsgsResponse>): QueryPoolBatchWithdrawMsgsResponse;
};
export declare const QueryPoolBatchWithdrawMsgResponse: {
    encode(message: QueryPoolBatchWithdrawMsgResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolBatchWithdrawMsgResponse;
    fromJSON(object: any): QueryPoolBatchWithdrawMsgResponse;
    toJSON(message: QueryPoolBatchWithdrawMsgResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolBatchWithdrawMsgResponse>): QueryPoolBatchWithdrawMsgResponse;
};
/** Query defines the gRPC query service for the liquidity module. */
export interface Query {
    /** Get existing liquidity pools. */
    LiquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
    /** Get specific liquidity pool. */
    LiquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
    /** Get specific liquidity pool corresponding to the pool_coin_denom. */
    LiquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
    /** Get specific liquidity pool corresponding to the reserve account. */
    LiquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
    /** Get the pool's current batch. */
    LiquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse>;
    /** Get all swap messages in the pool's current batch. */
    PoolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse>;
    /** Get a specific swap message in the pool's current batch. */
    PoolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse>;
    /** Get all deposit messages in the pool's current batch. */
    PoolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse>;
    /** Get a specific deposit message in the pool's current batch. */
    PoolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse>;
    /** Get all withdraw messages in the pool's current batch. */
    PoolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse>;
    /** Get a specific withdraw message in the pool's current batch. */
    PoolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse>;
    /** Get all parameters of the liquidity module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    LiquidityPools(request: QueryLiquidityPoolsRequest): Promise<QueryLiquidityPoolsResponse>;
    LiquidityPool(request: QueryLiquidityPoolRequest): Promise<QueryLiquidityPoolResponse>;
    LiquidityPoolByPoolCoinDenom(request: QueryLiquidityPoolByPoolCoinDenomRequest): Promise<QueryLiquidityPoolResponse>;
    LiquidityPoolByReserveAcc(request: QueryLiquidityPoolByReserveAccRequest): Promise<QueryLiquidityPoolResponse>;
    LiquidityPoolBatch(request: QueryLiquidityPoolBatchRequest): Promise<QueryLiquidityPoolBatchResponse>;
    PoolBatchSwapMsgs(request: QueryPoolBatchSwapMsgsRequest): Promise<QueryPoolBatchSwapMsgsResponse>;
    PoolBatchSwapMsg(request: QueryPoolBatchSwapMsgRequest): Promise<QueryPoolBatchSwapMsgResponse>;
    PoolBatchDepositMsgs(request: QueryPoolBatchDepositMsgsRequest): Promise<QueryPoolBatchDepositMsgsResponse>;
    PoolBatchDepositMsg(request: QueryPoolBatchDepositMsgRequest): Promise<QueryPoolBatchDepositMsgResponse>;
    PoolBatchWithdrawMsgs(request: QueryPoolBatchWithdrawMsgsRequest): Promise<QueryPoolBatchWithdrawMsgsResponse>;
    PoolBatchWithdrawMsg(request: QueryPoolBatchWithdrawMsgRequest): Promise<QueryPoolBatchWithdrawMsgResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
