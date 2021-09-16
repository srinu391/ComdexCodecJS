import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "comdex.cdp.v1alpha1";
export interface CDP {
    id: Long;
    owner: string;
    type: string;
    collateral?: Coin;
    debt?: Coin;
}
export interface OwnerCDPList {
    ownedCDPs: OwnedCDP[];
}
export interface OwnedCDP {
    id: Long;
    collateralType: string;
}
export declare const CDP: {
    encode(message: CDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CDP;
    fromJSON(object: any): CDP;
    toJSON(message: CDP): unknown;
    fromPartial(object: DeepPartial<CDP>): CDP;
};
export declare const OwnerCDPList: {
    encode(message: OwnerCDPList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OwnerCDPList;
    fromJSON(object: any): OwnerCDPList;
    toJSON(message: OwnerCDPList): unknown;
    fromPartial(object: DeepPartial<OwnerCDPList>): OwnerCDPList;
};
export declare const OwnedCDP: {
    encode(message: OwnedCDP, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OwnedCDP;
    fromJSON(object: any): OwnedCDP;
    toJSON(message: OwnedCDP): unknown;
    fromPartial(object: DeepPartial<OwnedCDP>): OwnedCDP;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
