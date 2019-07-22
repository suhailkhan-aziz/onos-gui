/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as jspb from "google-protobuf"

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';
import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';
import * as github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb from '../../../../../github.com/openconfig/gnmi/proto/gnmi_ext/gnmi_ext_pb';

export class Notification extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  getPrefix(): Path | undefined;
  setPrefix(value?: Path): void;
  hasPrefix(): boolean;
  clearPrefix(): void;

  getAlias(): string;
  setAlias(value: string): void;

  getUpdateList(): Array<Update>;
  setUpdateList(value: Array<Update>): void;
  clearUpdateList(): void;
  addUpdate(value?: Update, index?: number): Update;

  getDeleteList(): Array<Path>;
  setDeleteList(value: Array<Path>): void;
  clearDeleteList(): void;
  addDelete(value?: Path, index?: number): Path;

  getAtomic(): boolean;
  setAtomic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    timestamp: number,
    prefix?: Path.AsObject,
    alias: string,
    updateList: Array<Update.AsObject>,
    deleteList: Array<Path.AsObject>,
    atomic: boolean,
  }
}

export class Update extends jspb.Message {
  getPath(): Path | undefined;
  setPath(value?: Path): void;
  hasPath(): boolean;
  clearPath(): void;

  getValue(): Value | undefined;
  setValue(value?: Value): void;
  hasValue(): boolean;
  clearValue(): void;

  getVal(): TypedValue | undefined;
  setVal(value?: TypedValue): void;
  hasVal(): boolean;
  clearVal(): void;

  getDuplicates(): number;
  setDuplicates(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Update.AsObject;
  static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
  static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Update;
  static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
}

export namespace Update {
  export type AsObject = {
    path?: Path.AsObject,
    value?: Value.AsObject,
    val?: TypedValue.AsObject,
    duplicates: number,
  }
}

export class TypedValue extends jspb.Message {
  getStringVal(): string;
  setStringVal(value: string): void;

  getIntVal(): number;
  setIntVal(value: number): void;

  getUintVal(): number;
  setUintVal(value: number): void;

  getBoolVal(): boolean;
  setBoolVal(value: boolean): void;

  getBytesVal(): Uint8Array | string;
  getBytesVal_asU8(): Uint8Array;
  getBytesVal_asB64(): string;
  setBytesVal(value: Uint8Array | string): void;

  getFloatVal(): number;
  setFloatVal(value: number): void;

  getDecimalVal(): Decimal64 | undefined;
  setDecimalVal(value?: Decimal64): void;
  hasDecimalVal(): boolean;
  clearDecimalVal(): void;

  getLeaflistVal(): ScalarArray | undefined;
  setLeaflistVal(value?: ScalarArray): void;
  hasLeaflistVal(): boolean;
  clearLeaflistVal(): void;

  getAnyVal(): google_protobuf_any_pb.Any | undefined;
  setAnyVal(value?: google_protobuf_any_pb.Any): void;
  hasAnyVal(): boolean;
  clearAnyVal(): void;

  getJsonVal(): Uint8Array | string;
  getJsonVal_asU8(): Uint8Array;
  getJsonVal_asB64(): string;
  setJsonVal(value: Uint8Array | string): void;

  getJsonIetfVal(): Uint8Array | string;
  getJsonIetfVal_asU8(): Uint8Array;
  getJsonIetfVal_asB64(): string;
  setJsonIetfVal(value: Uint8Array | string): void;

  getAsciiVal(): string;
  setAsciiVal(value: string): void;

  getProtoBytes(): Uint8Array | string;
  getProtoBytes_asU8(): Uint8Array;
  getProtoBytes_asB64(): string;
  setProtoBytes(value: Uint8Array | string): void;

  getValueCase(): TypedValue.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypedValue.AsObject;
  static toObject(includeInstance: boolean, msg: TypedValue): TypedValue.AsObject;
  static serializeBinaryToWriter(message: TypedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypedValue;
  static deserializeBinaryFromReader(message: TypedValue, reader: jspb.BinaryReader): TypedValue;
}

export namespace TypedValue {
  export type AsObject = {
    stringVal: string,
    intVal: number,
    uintVal: number,
    boolVal: boolean,
    bytesVal: Uint8Array | string,
    floatVal: number,
    decimalVal?: Decimal64.AsObject,
    leaflistVal?: ScalarArray.AsObject,
    anyVal?: google_protobuf_any_pb.Any.AsObject,
    jsonVal: Uint8Array | string,
    jsonIetfVal: Uint8Array | string,
    asciiVal: string,
    protoBytes: Uint8Array | string,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    STRING_VAL = 1,
    INT_VAL = 2,
    UINT_VAL = 3,
    BOOL_VAL = 4,
    BYTES_VAL = 5,
    FLOAT_VAL = 6,
    DECIMAL_VAL = 7,
    LEAFLIST_VAL = 8,
    ANY_VAL = 9,
    JSON_VAL = 10,
    JSON_IETF_VAL = 11,
    ASCII_VAL = 12,
    PROTO_BYTES = 13,
  }
}

export class Path extends jspb.Message {
  getElementList(): Array<string>;
  setElementList(value: Array<string>): void;
  clearElementList(): void;
  addElement(value: string, index?: number): void;

  getOrigin(): string;
  setOrigin(value: string): void;

  getElemList(): Array<PathElem>;
  setElemList(value: Array<PathElem>): void;
  clearElemList(): void;
  addElem(value?: PathElem, index?: number): PathElem;

  getTarget(): string;
  setTarget(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Path.AsObject;
  static toObject(includeInstance: boolean, msg: Path): Path.AsObject;
  static serializeBinaryToWriter(message: Path, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Path;
  static deserializeBinaryFromReader(message: Path, reader: jspb.BinaryReader): Path;
}

export namespace Path {
  export type AsObject = {
    elementList: Array<string>,
    origin: string,
    elemList: Array<PathElem.AsObject>,
    target: string,
  }
}

export class PathElem extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getKeyMap(): jspb.Map<string, string>;
  clearKeyMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PathElem.AsObject;
  static toObject(includeInstance: boolean, msg: PathElem): PathElem.AsObject;
  static serializeBinaryToWriter(message: PathElem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PathElem;
  static deserializeBinaryFromReader(message: PathElem, reader: jspb.BinaryReader): PathElem;
}

export namespace PathElem {
  export type AsObject = {
    name: string,
    keyMap: Array<[string, string]>,
  }
}

export class Value extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getType(): Encoding;
  setType(value: Encoding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    value: Uint8Array | string,
    type: Encoding,
  }
}

export class Error extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): void;
  hasData(): boolean;
  clearData(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    code: number,
    message: string,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class Decimal64 extends jspb.Message {
  getDigits(): number;
  setDigits(value: number): void;

  getPrecision(): number;
  setPrecision(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decimal64.AsObject;
  static toObject(includeInstance: boolean, msg: Decimal64): Decimal64.AsObject;
  static serializeBinaryToWriter(message: Decimal64, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decimal64;
  static deserializeBinaryFromReader(message: Decimal64, reader: jspb.BinaryReader): Decimal64;
}

export namespace Decimal64 {
  export type AsObject = {
    digits: number,
    precision: number,
  }
}

export class ScalarArray extends jspb.Message {
  getElementList(): Array<TypedValue>;
  setElementList(value: Array<TypedValue>): void;
  clearElementList(): void;
  addElement(value?: TypedValue, index?: number): TypedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScalarArray.AsObject;
  static toObject(includeInstance: boolean, msg: ScalarArray): ScalarArray.AsObject;
  static serializeBinaryToWriter(message: ScalarArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScalarArray;
  static deserializeBinaryFromReader(message: ScalarArray, reader: jspb.BinaryReader): ScalarArray;
}

export namespace ScalarArray {
  export type AsObject = {
    elementList: Array<TypedValue.AsObject>,
  }
}

export class SubscribeRequest extends jspb.Message {
  getSubscribe(): SubscriptionList | undefined;
  setSubscribe(value?: SubscriptionList): void;
  hasSubscribe(): boolean;
  clearSubscribe(): void;

  getPoll(): Poll | undefined;
  setPoll(value?: Poll): void;
  hasPoll(): boolean;
  clearPoll(): void;

  getAliases(): AliasList | undefined;
  setAliases(value?: AliasList): void;
  hasAliases(): boolean;
  clearAliases(): void;

  getExtensionList(): Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>;
  setExtensionList(value: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>): void;
  clearExtensionList(): void;
  addExtension(value?: github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension, index?: number): github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension;

  getRequestCase(): SubscribeRequest.RequestCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
  static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
  export type AsObject = {
    subscribe?: SubscriptionList.AsObject,
    poll?: Poll.AsObject,
    aliases?: AliasList.AsObject,
    extensionList: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension.AsObject>,
  }

  export enum RequestCase { 
    REQUEST_NOT_SET = 0,
    SUBSCRIBE = 1,
    POLL = 3,
    ALIASES = 4,
  }
}

export class Poll extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Poll.AsObject;
  static toObject(includeInstance: boolean, msg: Poll): Poll.AsObject;
  static serializeBinaryToWriter(message: Poll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Poll;
  static deserializeBinaryFromReader(message: Poll, reader: jspb.BinaryReader): Poll;
}

export namespace Poll {
  export type AsObject = {
  }
}

export class SubscribeResponse extends jspb.Message {
  getUpdate(): Notification | undefined;
  setUpdate(value?: Notification): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  getSyncResponse(): boolean;
  setSyncResponse(value: boolean): void;

  getError(): Error | undefined;
  setError(value?: Error): void;
  hasError(): boolean;
  clearError(): void;

  getExtensionList(): Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>;
  setExtensionList(value: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>): void;
  clearExtensionList(): void;
  addExtension(value?: github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension, index?: number): github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension;

  getResponseCase(): SubscribeResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeResponse): SubscribeResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeResponse;
  static deserializeBinaryFromReader(message: SubscribeResponse, reader: jspb.BinaryReader): SubscribeResponse;
}

export namespace SubscribeResponse {
  export type AsObject = {
    update?: Notification.AsObject,
    syncResponse: boolean,
    error?: Error.AsObject,
    extensionList: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension.AsObject>,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    UPDATE = 1,
    SYNC_RESPONSE = 3,
    ERROR = 4,
  }
}

export class SubscriptionList extends jspb.Message {
  getPrefix(): Path | undefined;
  setPrefix(value?: Path): void;
  hasPrefix(): boolean;
  clearPrefix(): void;

  getSubscriptionList(): Array<Subscription>;
  setSubscriptionList(value: Array<Subscription>): void;
  clearSubscriptionList(): void;
  addSubscription(value?: Subscription, index?: number): Subscription;

  getUseAliases(): boolean;
  setUseAliases(value: boolean): void;

  getQos(): QOSMarking | undefined;
  setQos(value?: QOSMarking): void;
  hasQos(): boolean;
  clearQos(): void;

  getMode(): SubscriptionList.Mode;
  setMode(value: SubscriptionList.Mode): void;

  getAllowAggregation(): boolean;
  setAllowAggregation(value: boolean): void;

  getUseModelsList(): Array<ModelData>;
  setUseModelsList(value: Array<ModelData>): void;
  clearUseModelsList(): void;
  addUseModels(value?: ModelData, index?: number): ModelData;

  getEncoding(): Encoding;
  setEncoding(value: Encoding): void;

  getUpdatesOnly(): boolean;
  setUpdatesOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionList.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionList): SubscriptionList.AsObject;
  static serializeBinaryToWriter(message: SubscriptionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionList;
  static deserializeBinaryFromReader(message: SubscriptionList, reader: jspb.BinaryReader): SubscriptionList;
}

export namespace SubscriptionList {
  export type AsObject = {
    prefix?: Path.AsObject,
    subscriptionList: Array<Subscription.AsObject>,
    useAliases: boolean,
    qos?: QOSMarking.AsObject,
    mode: SubscriptionList.Mode,
    allowAggregation: boolean,
    useModelsList: Array<ModelData.AsObject>,
    encoding: Encoding,
    updatesOnly: boolean,
  }

  export enum Mode { 
    STREAM = 0,
    ONCE = 1,
    POLL = 2,
  }
}

export class Subscription extends jspb.Message {
  getPath(): Path | undefined;
  setPath(value?: Path): void;
  hasPath(): boolean;
  clearPath(): void;

  getMode(): SubscriptionMode;
  setMode(value: SubscriptionMode): void;

  getSampleInterval(): number;
  setSampleInterval(value: number): void;

  getSuppressRedundant(): boolean;
  setSuppressRedundant(value: boolean): void;

  getHeartbeatInterval(): number;
  setHeartbeatInterval(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    path?: Path.AsObject,
    mode: SubscriptionMode,
    sampleInterval: number,
    suppressRedundant: boolean,
    heartbeatInterval: number,
  }
}

export class QOSMarking extends jspb.Message {
  getMarking(): number;
  setMarking(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QOSMarking.AsObject;
  static toObject(includeInstance: boolean, msg: QOSMarking): QOSMarking.AsObject;
  static serializeBinaryToWriter(message: QOSMarking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QOSMarking;
  static deserializeBinaryFromReader(message: QOSMarking, reader: jspb.BinaryReader): QOSMarking;
}

export namespace QOSMarking {
  export type AsObject = {
    marking: number,
  }
}

export class Alias extends jspb.Message {
  getPath(): Path | undefined;
  setPath(value?: Path): void;
  hasPath(): boolean;
  clearPath(): void;

  getAlias(): string;
  setAlias(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Alias.AsObject;
  static toObject(includeInstance: boolean, msg: Alias): Alias.AsObject;
  static serializeBinaryToWriter(message: Alias, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Alias;
  static deserializeBinaryFromReader(message: Alias, reader: jspb.BinaryReader): Alias;
}

export namespace Alias {
  export type AsObject = {
    path?: Path.AsObject,
    alias: string,
  }
}

export class AliasList extends jspb.Message {
  getAliasList(): Array<Alias>;
  setAliasList(value: Array<Alias>): void;
  clearAliasList(): void;
  addAlias(value?: Alias, index?: number): Alias;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AliasList.AsObject;
  static toObject(includeInstance: boolean, msg: AliasList): AliasList.AsObject;
  static serializeBinaryToWriter(message: AliasList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AliasList;
  static deserializeBinaryFromReader(message: AliasList, reader: jspb.BinaryReader): AliasList;
}

export namespace AliasList {
  export type AsObject = {
    aliasList: Array<Alias.AsObject>,
  }
}

export class SetRequest extends jspb.Message {
  getPrefix(): Path | undefined;
  setPrefix(value?: Path): void;
  hasPrefix(): boolean;
  clearPrefix(): void;

  getDeleteList(): Array<Path>;
  setDeleteList(value: Array<Path>): void;
  clearDeleteList(): void;
  addDelete(value?: Path, index?: number): Path;

  getReplaceList(): Array<Update>;
  setReplaceList(value: Array<Update>): void;
  clearReplaceList(): void;
  addReplace(value?: Update, index?: number): Update;

  getUpdateList(): Array<Update>;
  setUpdateList(value: Array<Update>): void;
  clearUpdateList(): void;
  addUpdate(value?: Update, index?: number): Update;

  getExtensionList(): Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>;
  setExtensionList(value: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>): void;
  clearExtensionList(): void;
  addExtension(value?: github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension, index?: number): github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetRequest): SetRequest.AsObject;
  static serializeBinaryToWriter(message: SetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRequest;
  static deserializeBinaryFromReader(message: SetRequest, reader: jspb.BinaryReader): SetRequest;
}

export namespace SetRequest {
  export type AsObject = {
    prefix?: Path.AsObject,
    deleteList: Array<Path.AsObject>,
    replaceList: Array<Update.AsObject>,
    updateList: Array<Update.AsObject>,
    extensionList: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension.AsObject>,
  }
}

export class SetResponse extends jspb.Message {
  getPrefix(): Path | undefined;
  setPrefix(value?: Path): void;
  hasPrefix(): boolean;
  clearPrefix(): void;

  getResponseList(): Array<UpdateResult>;
  setResponseList(value: Array<UpdateResult>): void;
  clearResponseList(): void;
  addResponse(value?: UpdateResult, index?: number): UpdateResult;

  getMessage(): Error | undefined;
  setMessage(value?: Error): void;
  hasMessage(): boolean;
  clearMessage(): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getExtensionList(): Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>;
  setExtensionList(value: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>): void;
  clearExtensionList(): void;
  addExtension(value?: github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension, index?: number): github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetResponse): SetResponse.AsObject;
  static serializeBinaryToWriter(message: SetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetResponse;
  static deserializeBinaryFromReader(message: SetResponse, reader: jspb.BinaryReader): SetResponse;
}

export namespace SetResponse {
  export type AsObject = {
    prefix?: Path.AsObject,
    responseList: Array<UpdateResult.AsObject>,
    message?: Error.AsObject,
    timestamp: number,
    extensionList: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension.AsObject>,
  }
}

export class UpdateResult extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  getPath(): Path | undefined;
  setPath(value?: Path): void;
  hasPath(): boolean;
  clearPath(): void;

  getMessage(): Error | undefined;
  setMessage(value?: Error): void;
  hasMessage(): boolean;
  clearMessage(): void;

  getOp(): UpdateResult.Operation;
  setOp(value: UpdateResult.Operation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResult): UpdateResult.AsObject;
  static serializeBinaryToWriter(message: UpdateResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResult;
  static deserializeBinaryFromReader(message: UpdateResult, reader: jspb.BinaryReader): UpdateResult;
}

export namespace UpdateResult {
  export type AsObject = {
    timestamp: number,
    path?: Path.AsObject,
    message?: Error.AsObject,
    op: UpdateResult.Operation,
  }

  export enum Operation { 
    INVALID = 0,
    DELETE = 1,
    REPLACE = 2,
    UPDATE = 3,
  }
}

export class GetRequest extends jspb.Message {
  getPrefix(): Path | undefined;
  setPrefix(value?: Path): void;
  hasPrefix(): boolean;
  clearPrefix(): void;

  getPathList(): Array<Path>;
  setPathList(value: Array<Path>): void;
  clearPathList(): void;
  addPath(value?: Path, index?: number): Path;

  getType(): GetRequest.DataType;
  setType(value: GetRequest.DataType): void;

  getEncoding(): Encoding;
  setEncoding(value: Encoding): void;

  getUseModelsList(): Array<ModelData>;
  setUseModelsList(value: Array<ModelData>): void;
  clearUseModelsList(): void;
  addUseModels(value?: ModelData, index?: number): ModelData;

  getExtensionList(): Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>;
  setExtensionList(value: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>): void;
  clearExtensionList(): void;
  addExtension(value?: github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension, index?: number): github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    prefix?: Path.AsObject,
    pathList: Array<Path.AsObject>,
    type: GetRequest.DataType,
    encoding: Encoding,
    useModelsList: Array<ModelData.AsObject>,
    extensionList: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension.AsObject>,
  }

  export enum DataType { 
    ALL = 0,
    CONFIG = 1,
    STATE = 2,
    OPERATIONAL = 3,
  }
}

export class GetResponse extends jspb.Message {
  getNotificationList(): Array<Notification>;
  setNotificationList(value: Array<Notification>): void;
  clearNotificationList(): void;
  addNotification(value?: Notification, index?: number): Notification;

  getError(): Error | undefined;
  setError(value?: Error): void;
  hasError(): boolean;
  clearError(): void;

  getExtensionList(): Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>;
  setExtensionList(value: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>): void;
  clearExtensionList(): void;
  addExtension(value?: github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension, index?: number): github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    notificationList: Array<Notification.AsObject>,
    error?: Error.AsObject,
    extensionList: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension.AsObject>,
  }
}

export class CapabilityRequest extends jspb.Message {
  getExtensionList(): Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>;
  setExtensionList(value: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>): void;
  clearExtensionList(): void;
  addExtension(value?: github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension, index?: number): github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityRequest): CapabilityRequest.AsObject;
  static serializeBinaryToWriter(message: CapabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityRequest;
  static deserializeBinaryFromReader(message: CapabilityRequest, reader: jspb.BinaryReader): CapabilityRequest;
}

export namespace CapabilityRequest {
  export type AsObject = {
    extensionList: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension.AsObject>,
  }
}

export class CapabilityResponse extends jspb.Message {
  getSupportedModelsList(): Array<ModelData>;
  setSupportedModelsList(value: Array<ModelData>): void;
  clearSupportedModelsList(): void;
  addSupportedModels(value?: ModelData, index?: number): ModelData;

  getSupportedEncodingsList(): Array<Encoding>;
  setSupportedEncodingsList(value: Array<Encoding>): void;
  clearSupportedEncodingsList(): void;
  addSupportedEncodings(value: Encoding, index?: number): void;

  getGnmiVersion(): string;
  setGnmiVersion(value: string): void;

  getExtensionList(): Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>;
  setExtensionList(value: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension>): void;
  clearExtensionList(): void;
  addExtension(value?: github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension, index?: number): github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityResponse): CapabilityResponse.AsObject;
  static serializeBinaryToWriter(message: CapabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityResponse;
  static deserializeBinaryFromReader(message: CapabilityResponse, reader: jspb.BinaryReader): CapabilityResponse;
}

export namespace CapabilityResponse {
  export type AsObject = {
    supportedModelsList: Array<ModelData.AsObject>,
    supportedEncodingsList: Array<Encoding>,
    gnmiVersion: string,
    extensionList: Array<github_com_openconfig_gnmi_proto_gnmi_ext_gnmi_ext_pb.Extension.AsObject>,
  }
}

export class ModelData extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOrganization(): string;
  setOrganization(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModelData.AsObject;
  static toObject(includeInstance: boolean, msg: ModelData): ModelData.AsObject;
  static serializeBinaryToWriter(message: ModelData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModelData;
  static deserializeBinaryFromReader(message: ModelData, reader: jspb.BinaryReader): ModelData;
}

export namespace ModelData {
  export type AsObject = {
    name: string,
    organization: string,
    version: string,
  }
}

export enum Encoding { 
  JSON = 0,
  BYTES = 1,
  PROTO = 2,
  ASCII = 3,
  JSON_IETF = 4,
}
export enum SubscriptionMode { 
  TARGET_DEFINED = 0,
  ON_CHANGE = 1,
  SAMPLE = 2,
}
