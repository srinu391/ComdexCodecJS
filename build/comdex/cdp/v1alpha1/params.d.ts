import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.cdp.v1alpha1";
export interface Params {
    collateralParams: CollateralParam[];
}
export interface CollateralParam {
    collateralDenom: string;
    debtDenom: string;
    type: string;
    liquidationRatio: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const CollateralParam: {
    encode(message: CollateralParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CollateralParam;
    fromJSON(object: any): CollateralParam;
    toJSON(message: CollateralParam): unknown;
    fromPartial(object: DeepPartial<CollateralParam>): CollateralParam;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
