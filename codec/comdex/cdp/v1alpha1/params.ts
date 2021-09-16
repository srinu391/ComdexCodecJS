/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.cdp.v1alpha1";

export interface Params {
  collateralParams: CollateralParam[];
}

export interface CollateralParam {
  collateralDenom: string;
  debtDenom: string;
  type: string;
  liquidationRatio: string;
}

const baseParams: object = {};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.collateralParams) {
      CollateralParam.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    message.collateralParams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralParams.push(
            CollateralParam.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    message.collateralParams = [];
    if (
      object.collateralParams !== undefined &&
      object.collateralParams !== null
    ) {
      for (const e of object.collateralParams) {
        message.collateralParams.push(CollateralParam.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.collateralParams) {
      obj.collateralParams = message.collateralParams.map((e) =>
        e ? CollateralParam.toJSON(e) : undefined
      );
    } else {
      obj.collateralParams = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    message.collateralParams = [];
    if (
      object.collateralParams !== undefined &&
      object.collateralParams !== null
    ) {
      for (const e of object.collateralParams) {
        message.collateralParams.push(CollateralParam.fromPartial(e));
      }
    }
    return message;
  },
};

const baseCollateralParam: object = {
  collateralDenom: "",
  debtDenom: "",
  type: "",
  liquidationRatio: "",
};

export const CollateralParam = {
  encode(
    message: CollateralParam,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCollateralParam } as CollateralParam;
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

  fromJSON(object: any): CollateralParam {
    const message = { ...baseCollateralParam } as CollateralParam;
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = String(object.collateralDenom);
    } else {
      message.collateralDenom = "";
    }
    if (object.debtDenom !== undefined && object.debtDenom !== null) {
      message.debtDenom = String(object.debtDenom);
    } else {
      message.debtDenom = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (
      object.liquidationRatio !== undefined &&
      object.liquidationRatio !== null
    ) {
      message.liquidationRatio = String(object.liquidationRatio);
    } else {
      message.liquidationRatio = "";
    }
    return message;
  },

  toJSON(message: CollateralParam): unknown {
    const obj: any = {};
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.debtDenom !== undefined && (obj.debtDenom = message.debtDenom);
    message.type !== undefined && (obj.type = message.type);
    message.liquidationRatio !== undefined &&
      (obj.liquidationRatio = message.liquidationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<CollateralParam>): CollateralParam {
    const message = { ...baseCollateralParam } as CollateralParam;
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = object.collateralDenom;
    } else {
      message.collateralDenom = "";
    }
    if (object.debtDenom !== undefined && object.debtDenom !== null) {
      message.debtDenom = object.debtDenom;
    } else {
      message.debtDenom = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (
      object.liquidationRatio !== undefined &&
      object.liquidationRatio !== null
    ) {
      message.liquidationRatio = object.liquidationRatio;
    } else {
      message.liquidationRatio = "";
    }
    return message;
  },
};

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
