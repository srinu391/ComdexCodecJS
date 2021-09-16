/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.cdp.v1alpha1";

export interface MsgCreateCDPRequest {
  sender: string;
  collateral?: Coin;
  debt?: Coin;
  collateralType: string;
}

export interface MsgCreateCDPResponse {}

export interface MsgDepositCollateralRequest {
  owner: string;
  collateral?: Coin;
  collateralType: string;
}

export interface MsgDepositCollateralResponse {}

export interface MsgWithdrawCollateralRequest {
  owner: string;
  collateral?: Coin;
  collateralType: string;
}

export interface MsgWithdrawCollateralResponse {}

export interface MsgDrawDebtRequest {
  owner: string;
  collateralType: string;
  debt?: Coin;
}

export interface MsgDrawDebtResponse {}

export interface MsgRepayDebtRequest {
  owner: string;
  collateralType: string;
  debt?: Coin;
}

export interface MsgRepayDebtResponse {}

export interface MsgLiquidateCDPRequest {
  owner: string;
  collateralType: string;
}

export interface MsgLiquidateCDPResponse {}

const baseMsgCreateCDPRequest: object = { sender: "", collateralType: "" };

export const MsgCreateCDPRequest = {
  encode(
    message: MsgCreateCDPRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(34).string(message.collateralType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCDPRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCDPRequest } as MsgCreateCDPRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCDPRequest {
    const message = { ...baseMsgCreateCDPRequest } as MsgCreateCDPRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
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
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = String(object.collateralType);
    } else {
      message.collateralType = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCDPRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCDPRequest>): MsgCreateCDPRequest {
    const message = { ...baseMsgCreateCDPRequest } as MsgCreateCDPRequest;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
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
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = object.collateralType;
    } else {
      message.collateralType = "";
    }
    return message;
  },
};

const baseMsgCreateCDPResponse: object = {};

export const MsgCreateCDPResponse = {
  encode(
    _: MsgCreateCDPResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateCDPResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCDPResponse } as MsgCreateCDPResponse;
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

  fromJSON(_: any): MsgCreateCDPResponse {
    const message = { ...baseMsgCreateCDPResponse } as MsgCreateCDPResponse;
    return message;
  },

  toJSON(_: MsgCreateCDPResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateCDPResponse>): MsgCreateCDPResponse {
    const message = { ...baseMsgCreateCDPResponse } as MsgCreateCDPResponse;
    return message;
  },
};

const baseMsgDepositCollateralRequest: object = {
  owner: "",
  collateralType: "",
};

export const MsgDepositCollateralRequest = {
  encode(
    message: MsgDepositCollateralRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(26).string(message.collateralType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositCollateralRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositCollateralRequest,
    } as MsgDepositCollateralRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgDepositCollateralRequest {
    const message = {
      ...baseMsgDepositCollateralRequest,
    } as MsgDepositCollateralRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = String(object.collateralType);
    } else {
      message.collateralType = "";
    }
    return message;
  },

  toJSON(message: MsgDepositCollateralRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDepositCollateralRequest>
  ): MsgDepositCollateralRequest {
    const message = {
      ...baseMsgDepositCollateralRequest,
    } as MsgDepositCollateralRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = object.collateralType;
    } else {
      message.collateralType = "";
    }
    return message;
  },
};

const baseMsgDepositCollateralResponse: object = {};

export const MsgDepositCollateralResponse = {
  encode(
    _: MsgDepositCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
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

  fromJSON(_: any): MsgDepositCollateralResponse {
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
    return message;
  },

  toJSON(_: MsgDepositCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDepositCollateralResponse>
  ): MsgDepositCollateralResponse {
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
    return message;
  },
};

const baseMsgWithdrawCollateralRequest: object = {
  owner: "",
  collateralType: "",
};

export const MsgWithdrawCollateralRequest = {
  encode(
    message: MsgWithdrawCollateralRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.collateralType !== "") {
      writer.uint32(26).string(message.collateralType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawCollateralRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawCollateralRequest,
    } as MsgWithdrawCollateralRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgWithdrawCollateralRequest {
    const message = {
      ...baseMsgWithdrawCollateralRequest,
    } as MsgWithdrawCollateralRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = String(object.collateralType);
    } else {
      message.collateralType = "";
    }
    return message;
  },

  toJSON(message: MsgWithdrawCollateralRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgWithdrawCollateralRequest>
  ): MsgWithdrawCollateralRequest {
    const message = {
      ...baseMsgWithdrawCollateralRequest,
    } as MsgWithdrawCollateralRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = object.collateralType;
    } else {
      message.collateralType = "";
    }
    return message;
  },
};

const baseMsgWithdrawCollateralResponse: object = {};

export const MsgWithdrawCollateralResponse = {
  encode(
    _: MsgWithdrawCollateralResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawCollateralResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawCollateralResponse,
    } as MsgWithdrawCollateralResponse;
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

  fromJSON(_: any): MsgWithdrawCollateralResponse {
    const message = {
      ...baseMsgWithdrawCollateralResponse,
    } as MsgWithdrawCollateralResponse;
    return message;
  },

  toJSON(_: MsgWithdrawCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawCollateralResponse>
  ): MsgWithdrawCollateralResponse {
    const message = {
      ...baseMsgWithdrawCollateralResponse,
    } as MsgWithdrawCollateralResponse;
    return message;
  },
};

const baseMsgDrawDebtRequest: object = { owner: "", collateralType: "" };

export const MsgDrawDebtRequest = {
  encode(
    message: MsgDrawDebtRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawDebtRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDrawDebtRequest } as MsgDrawDebtRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDrawDebtRequest {
    const message = { ...baseMsgDrawDebtRequest } as MsgDrawDebtRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = String(object.collateralType);
    } else {
      message.collateralType = "";
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromJSON(object.debt);
    } else {
      message.debt = undefined;
    }
    return message;
  },

  toJSON(message: MsgDrawDebtRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDrawDebtRequest>): MsgDrawDebtRequest {
    const message = { ...baseMsgDrawDebtRequest } as MsgDrawDebtRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = object.collateralType;
    } else {
      message.collateralType = "";
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromPartial(object.debt);
    } else {
      message.debt = undefined;
    }
    return message;
  },
};

const baseMsgDrawDebtResponse: object = {};

export const MsgDrawDebtResponse = {
  encode(
    _: MsgDrawDebtResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDrawDebtResponse } as MsgDrawDebtResponse;
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

  fromJSON(_: any): MsgDrawDebtResponse {
    const message = { ...baseMsgDrawDebtResponse } as MsgDrawDebtResponse;
    return message;
  },

  toJSON(_: MsgDrawDebtResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDrawDebtResponse>): MsgDrawDebtResponse {
    const message = { ...baseMsgDrawDebtResponse } as MsgDrawDebtResponse;
    return message;
  },
};

const baseMsgRepayDebtRequest: object = { owner: "", collateralType: "" };

export const MsgRepayDebtRequest = {
  encode(
    message: MsgRepayDebtRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayDebtRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepayDebtRequest } as MsgRepayDebtRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepayDebtRequest {
    const message = { ...baseMsgRepayDebtRequest } as MsgRepayDebtRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = String(object.collateralType);
    } else {
      message.collateralType = "";
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromJSON(object.debt);
    } else {
      message.debt = undefined;
    }
    return message;
  },

  toJSON(message: MsgRepayDebtRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRepayDebtRequest>): MsgRepayDebtRequest {
    const message = { ...baseMsgRepayDebtRequest } as MsgRepayDebtRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = object.collateralType;
    } else {
      message.collateralType = "";
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromPartial(object.debt);
    } else {
      message.debt = undefined;
    }
    return message;
  },
};

const baseMsgRepayDebtResponse: object = {};

export const MsgRepayDebtResponse = {
  encode(
    _: MsgRepayDebtResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRepayDebtResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepayDebtResponse } as MsgRepayDebtResponse;
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

  fromJSON(_: any): MsgRepayDebtResponse {
    const message = { ...baseMsgRepayDebtResponse } as MsgRepayDebtResponse;
    return message;
  },

  toJSON(_: MsgRepayDebtResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRepayDebtResponse>): MsgRepayDebtResponse {
    const message = { ...baseMsgRepayDebtResponse } as MsgRepayDebtResponse;
    return message;
  },
};

const baseMsgLiquidateCDPRequest: object = { owner: "", collateralType: "" };

export const MsgLiquidateCDPRequest = {
  encode(
    message: MsgLiquidateCDPRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCDPRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidateCDPRequest } as MsgLiquidateCDPRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCDPRequest {
    const message = { ...baseMsgLiquidateCDPRequest } as MsgLiquidateCDPRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = String(object.collateralType);
    } else {
      message.collateralType = "";
    }
    return message;
  },

  toJSON(message: MsgLiquidateCDPRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCDPRequest>
  ): MsgLiquidateCDPRequest {
    const message = { ...baseMsgLiquidateCDPRequest } as MsgLiquidateCDPRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.collateralType !== undefined && object.collateralType !== null) {
      message.collateralType = object.collateralType;
    } else {
      message.collateralType = "";
    }
    return message;
  },
};

const baseMsgLiquidateCDPResponse: object = {};

export const MsgLiquidateCDPResponse = {
  encode(
    _: MsgLiquidateCDPResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCDPResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCDPResponse,
    } as MsgLiquidateCDPResponse;
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

  fromJSON(_: any): MsgLiquidateCDPResponse {
    const message = {
      ...baseMsgLiquidateCDPResponse,
    } as MsgLiquidateCDPResponse;
    return message;
  },

  toJSON(_: MsgLiquidateCDPResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgLiquidateCDPResponse>
  ): MsgLiquidateCDPResponse {
    const message = {
      ...baseMsgLiquidateCDPResponse,
    } as MsgLiquidateCDPResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface MsgService {
  MsgCreateCDP(request: MsgCreateCDPRequest): Promise<MsgCreateCDPResponse>;
  MsgDepositCollateral(
    request: MsgDepositCollateralRequest
  ): Promise<MsgDepositCollateralResponse>;
  MsgWithdrawCollateral(
    request: MsgWithdrawCollateralRequest
  ): Promise<MsgWithdrawCollateralResponse>;
  MsgDrawDebt(request: MsgDrawDebtRequest): Promise<MsgDrawDebtResponse>;
  MsgRepayDebt(request: MsgRepayDebtRequest): Promise<MsgRepayDebtResponse>;
  MsgLiquidateCDP(
    request: MsgLiquidateCDPRequest
  ): Promise<MsgLiquidateCDPResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgCreateCDP = this.MsgCreateCDP.bind(this);
    this.MsgDepositCollateral = this.MsgDepositCollateral.bind(this);
    this.MsgWithdrawCollateral = this.MsgWithdrawCollateral.bind(this);
    this.MsgDrawDebt = this.MsgDrawDebt.bind(this);
    this.MsgRepayDebt = this.MsgRepayDebt.bind(this);
    this.MsgLiquidateCDP = this.MsgLiquidateCDP.bind(this);
  }
  MsgCreateCDP(request: MsgCreateCDPRequest): Promise<MsgCreateCDPResponse> {
    const data = MsgCreateCDPRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.MsgService",
      "MsgCreateCDP",
      data
    );
    return promise.then((data) =>
      MsgCreateCDPResponse.decode(new _m0.Reader(data))
    );
  }

  MsgDepositCollateral(
    request: MsgDepositCollateralRequest
  ): Promise<MsgDepositCollateralResponse> {
    const data = MsgDepositCollateralRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.MsgService",
      "MsgDepositCollateral",
      data
    );
    return promise.then((data) =>
      MsgDepositCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  MsgWithdrawCollateral(
    request: MsgWithdrawCollateralRequest
  ): Promise<MsgWithdrawCollateralResponse> {
    const data = MsgWithdrawCollateralRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.MsgService",
      "MsgWithdrawCollateral",
      data
    );
    return promise.then((data) =>
      MsgWithdrawCollateralResponse.decode(new _m0.Reader(data))
    );
  }

  MsgDrawDebt(request: MsgDrawDebtRequest): Promise<MsgDrawDebtResponse> {
    const data = MsgDrawDebtRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.MsgService",
      "MsgDrawDebt",
      data
    );
    return promise.then((data) =>
      MsgDrawDebtResponse.decode(new _m0.Reader(data))
    );
  }

  MsgRepayDebt(request: MsgRepayDebtRequest): Promise<MsgRepayDebtResponse> {
    const data = MsgRepayDebtRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.MsgService",
      "MsgRepayDebt",
      data
    );
    return promise.then((data) =>
      MsgRepayDebtResponse.decode(new _m0.Reader(data))
    );
  }

  MsgLiquidateCDP(
    request: MsgLiquidateCDPRequest
  ): Promise<MsgLiquidateCDPResponse> {
    const data = MsgLiquidateCDPRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.cdp.v1alpha1.MsgService",
      "MsgLiquidateCDP",
      data
    );
    return promise.then((data) =>
      MsgLiquidateCDPResponse.decode(new _m0.Reader(data))
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
