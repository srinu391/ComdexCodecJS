import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "comdex.cdp.v1alpha1";
export interface MsgCreateCDPRequest {
    sender: string;
    collateral?: Coin;
    debt?: Coin;
    collateralType: string;
}
export interface MsgCreateCDPResponse {
}
export interface MsgDepositCollateralRequest {
    owner: string;
    collateral?: Coin;
    collateralType: string;
}
export interface MsgDepositCollateralResponse {
}
export interface MsgWithdrawCollateralRequest {
    owner: string;
    collateral?: Coin;
    collateralType: string;
}
export interface MsgWithdrawCollateralResponse {
}
export interface MsgDrawDebtRequest {
    owner: string;
    collateralType: string;
    debt?: Coin;
}
export interface MsgDrawDebtResponse {
}
export interface MsgRepayDebtRequest {
    owner: string;
    collateralType: string;
    debt?: Coin;
}
export interface MsgRepayDebtResponse {
}
export interface MsgLiquidateCDPRequest {
    owner: string;
    collateralType: string;
}
export interface MsgLiquidateCDPResponse {
}
export declare const MsgCreateCDPRequest: {
    encode(message: MsgCreateCDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateCDPRequest;
    fromJSON(object: any): MsgCreateCDPRequest;
    toJSON(message: MsgCreateCDPRequest): unknown;
    fromPartial(object: DeepPartial<MsgCreateCDPRequest>): MsgCreateCDPRequest;
};
export declare const MsgCreateCDPResponse: {
    encode(_: MsgCreateCDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateCDPResponse;
    fromJSON(_: any): MsgCreateCDPResponse;
    toJSON(_: MsgCreateCDPResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateCDPResponse>): MsgCreateCDPResponse;
};
export declare const MsgDepositCollateralRequest: {
    encode(message: MsgDepositCollateralRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDepositCollateralRequest;
    fromJSON(object: any): MsgDepositCollateralRequest;
    toJSON(message: MsgDepositCollateralRequest): unknown;
    fromPartial(object: DeepPartial<MsgDepositCollateralRequest>): MsgDepositCollateralRequest;
};
export declare const MsgDepositCollateralResponse: {
    encode(_: MsgDepositCollateralResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDepositCollateralResponse;
    fromJSON(_: any): MsgDepositCollateralResponse;
    toJSON(_: MsgDepositCollateralResponse): unknown;
    fromPartial(_: DeepPartial<MsgDepositCollateralResponse>): MsgDepositCollateralResponse;
};
export declare const MsgWithdrawCollateralRequest: {
    encode(message: MsgWithdrawCollateralRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawCollateralRequest;
    fromJSON(object: any): MsgWithdrawCollateralRequest;
    toJSON(message: MsgWithdrawCollateralRequest): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawCollateralRequest>): MsgWithdrawCollateralRequest;
};
export declare const MsgWithdrawCollateralResponse: {
    encode(_: MsgWithdrawCollateralResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawCollateralResponse;
    fromJSON(_: any): MsgWithdrawCollateralResponse;
    toJSON(_: MsgWithdrawCollateralResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawCollateralResponse>): MsgWithdrawCollateralResponse;
};
export declare const MsgDrawDebtRequest: {
    encode(message: MsgDrawDebtRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDrawDebtRequest;
    fromJSON(object: any): MsgDrawDebtRequest;
    toJSON(message: MsgDrawDebtRequest): unknown;
    fromPartial(object: DeepPartial<MsgDrawDebtRequest>): MsgDrawDebtRequest;
};
export declare const MsgDrawDebtResponse: {
    encode(_: MsgDrawDebtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDrawDebtResponse;
    fromJSON(_: any): MsgDrawDebtResponse;
    toJSON(_: MsgDrawDebtResponse): unknown;
    fromPartial(_: DeepPartial<MsgDrawDebtResponse>): MsgDrawDebtResponse;
};
export declare const MsgRepayDebtRequest: {
    encode(message: MsgRepayDebtRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRepayDebtRequest;
    fromJSON(object: any): MsgRepayDebtRequest;
    toJSON(message: MsgRepayDebtRequest): unknown;
    fromPartial(object: DeepPartial<MsgRepayDebtRequest>): MsgRepayDebtRequest;
};
export declare const MsgRepayDebtResponse: {
    encode(_: MsgRepayDebtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRepayDebtResponse;
    fromJSON(_: any): MsgRepayDebtResponse;
    toJSON(_: MsgRepayDebtResponse): unknown;
    fromPartial(_: DeepPartial<MsgRepayDebtResponse>): MsgRepayDebtResponse;
};
export declare const MsgLiquidateCDPRequest: {
    encode(message: MsgLiquidateCDPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgLiquidateCDPRequest;
    fromJSON(object: any): MsgLiquidateCDPRequest;
    toJSON(message: MsgLiquidateCDPRequest): unknown;
    fromPartial(object: DeepPartial<MsgLiquidateCDPRequest>): MsgLiquidateCDPRequest;
};
export declare const MsgLiquidateCDPResponse: {
    encode(_: MsgLiquidateCDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgLiquidateCDPResponse;
    fromJSON(_: any): MsgLiquidateCDPResponse;
    toJSON(_: MsgLiquidateCDPResponse): unknown;
    fromPartial(_: DeepPartial<MsgLiquidateCDPResponse>): MsgLiquidateCDPResponse;
};
/** Msg defines the Msg service. */
export interface MsgService {
    MsgCreateCDP(request: MsgCreateCDPRequest): Promise<MsgCreateCDPResponse>;
    MsgDepositCollateral(request: MsgDepositCollateralRequest): Promise<MsgDepositCollateralResponse>;
    MsgWithdrawCollateral(request: MsgWithdrawCollateralRequest): Promise<MsgWithdrawCollateralResponse>;
    MsgDrawDebt(request: MsgDrawDebtRequest): Promise<MsgDrawDebtResponse>;
    MsgRepayDebt(request: MsgRepayDebtRequest): Promise<MsgRepayDebtResponse>;
    MsgLiquidateCDP(request: MsgLiquidateCDPRequest): Promise<MsgLiquidateCDPResponse>;
}
export declare class MsgServiceClientImpl implements MsgService {
    private readonly rpc;
    constructor(rpc: Rpc);
    MsgCreateCDP(request: MsgCreateCDPRequest): Promise<MsgCreateCDPResponse>;
    MsgDepositCollateral(request: MsgDepositCollateralRequest): Promise<MsgDepositCollateralResponse>;
    MsgWithdrawCollateral(request: MsgWithdrawCollateralRequest): Promise<MsgWithdrawCollateralResponse>;
    MsgDrawDebt(request: MsgDrawDebtRequest): Promise<MsgDrawDebtResponse>;
    MsgRepayDebt(request: MsgRepayDebtRequest): Promise<MsgRepayDebtResponse>;
    MsgLiquidateCDP(request: MsgLiquidateCDPRequest): Promise<MsgLiquidateCDPResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
