import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "comdex.asset.v1beta1";
export interface Asset {
    id: Long;
    name: string;
    denom: string;
    decimals: Long;
}
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial(object: DeepPartial<Asset>): Asset;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
