/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.cdp.v1alpha1";

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

const baseCDP: object = { id: Long.UZERO, owner: "", type: "" };

export const CDP = {
  encode(message: CDP, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CDP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCDP } as CDP;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CDP {
    const message = { ...baseCDP } as CDP;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromJSON(object.debt);
    } else {
      message.debt = undefined;
    }
    return message;
  },

  toJSON(message: CDP): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.type !== undefined && (obj.type = message.type);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CDP>): CDP {
    const message = { ...baseCDP } as CDP;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromPartial(object.debt);
    } else {
      message.debt = undefined;
    }
    return message;
  },
};

const baseOwnerCDPList: object = {};

export const OwnerCDPList = {
  encode(
    message: OwnerCDPList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ownedCDPs) {
      OwnedCDP.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OwnerCDPList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOwnerCDPList } as OwnerCDPList;
    message.ownedCDPs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownedCDPs.push(OwnedCDP.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OwnerCDPList {
    const message = { ...baseOwnerCDPList } as OwnerCDPList;
    message.ownedCDPs = [];
    if (object.ownedCDPs !== undefined && object.ownedCDPs !== null) {
      for (const e of object.ownedCDPs) {
        message.ownedCDPs.push(OwnedCDP.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OwnerCDPList): unknown {
    const obj: any = {};
    if (message.ownedCDPs) {
      obj.ownedCDPs = message.ownedCDPs.map((e) =>
        e ? OwnedCDP.toJSON(e) : undefined
      );
    } else {
      obj.ownedCDPs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OwnerCDPList>): OwnerCDPList {
    const message = { ...baseOwnerCDPList } as OwnerCDPList;
    message.ownedCDPs = [];
    if (object.ownedCDPs !== undefined && object.ownedCDPs !== null) {
      for (const e of object.ownedCDPs) {
        message.ownedCDPs.push(OwnedCDP.fromPartial(e));
      }
    }
    return message;
  },
};

const baseOwnedCDP: object = { id: Long.UZERO, collateralType: "" };

export const OwnedCDP = {
  encode(
    message: OwnedCDP,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.collateralType !== "") {
      writer.uint32(26).string(message.collateralType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OwnedCDP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOwnedCDP } as OwnedCDP;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OwnedCDP {
    const message = { ...baseOwnedCDP } as OwnedCDP;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = String(object.collateralType);
    } else {
      message.collateralType = "";
    }
    return message;
  },

  toJSON(message: OwnedCDP): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial(object: DeepPartial<OwnedCDP>): OwnedCDP {
    const message = { ...baseOwnedCDP } as OwnedCDP;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = object.collateralType;
    } else {
      message.collateralType = "";
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
