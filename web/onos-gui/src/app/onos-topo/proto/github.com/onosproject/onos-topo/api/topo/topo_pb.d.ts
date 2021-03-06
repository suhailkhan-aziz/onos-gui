// Code generated by GENERATOR. DO NOT EDIT.

import * as jspb from "google-protobuf"

import * as gogoproto_gogo_pb from '../../../../../gogoproto/gogo_pb';

export class SetRequest extends jspb.Message {
  getObjectsList(): Array<Object>;
  setObjectsList(value: Array<Object>): void;
  clearObjectsList(): void;
  addObjects(value?: Object, index?: number): Object;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetRequest): SetRequest.AsObject;
  static serializeBinaryToWriter(message: SetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRequest;
  static deserializeBinaryFromReader(message: SetRequest, reader: jspb.BinaryReader): SetRequest;
}

export namespace SetRequest {
  export type AsObject = {
    objectsList: Array<Object.AsObject>,
  }
}

export class SetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetResponse): SetResponse.AsObject;
  static serializeBinaryToWriter(message: SetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetResponse;
  static deserializeBinaryFromReader(message: SetResponse, reader: jspb.BinaryReader): SetResponse;
}

export namespace SetResponse {
  export type AsObject = {
  }
}

export class GetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetResponse extends jspb.Message {
  getObject(): Object | undefined;
  setObject(value?: Object): void;
  hasObject(): boolean;
  clearObject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    object?: Object.AsObject,
  }
}

export class DeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
  }
}

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  getObject(): Object | undefined;
  setObject(value?: Object): void;
  hasObject(): boolean;
  clearObject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    object?: Object.AsObject,
  }
}

export class SubscribeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getNoreplay(): boolean;
  setNoreplay(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
  static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
  export type AsObject = {
    id: string,
    noreplay: boolean,
  }
}

export class SubscribeResponse extends jspb.Message {
  getUpdate(): Update | undefined;
  setUpdate(value?: Update): void;
  hasUpdate(): boolean;
  clearUpdate(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeResponse): SubscribeResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeResponse;
  static deserializeBinaryFromReader(message: SubscribeResponse, reader: jspb.BinaryReader): SubscribeResponse;
}

export namespace SubscribeResponse {
  export type AsObject = {
    update?: Update.AsObject,
  }
}

export class Update extends jspb.Message {
  getType(): Update.Type;
  setType(value: Update.Type): void;

  getObject(): Object | undefined;
  setObject(value?: Object): void;
  hasObject(): boolean;
  clearObject(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Update.AsObject;
  static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
  static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Update;
  static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
}

export namespace Update {
  export type AsObject = {
    type: Update.Type,
    object?: Object.AsObject,
  }

  export enum Type { 
    UNSPECIFIED = 0,
    INSERT = 1,
    MODIFY = 2,
    DELETE = 3,
  }
}

export class Object extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): Object.Type;
  setType(value: Object.Type): void;

  getEntity(): Entity | undefined;
  setEntity(value?: Entity): void;
  hasEntity(): boolean;
  clearEntity(): void;

  getRelation(): Relation | undefined;
  setRelation(value?: Relation): void;
  hasRelation(): boolean;
  clearRelation(): void;

  getKind(): Kind | undefined;
  setKind(value?: Kind): void;
  hasKind(): boolean;
  clearKind(): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;

  getObjCase(): Object.ObjCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Object.AsObject;
  static toObject(includeInstance: boolean, msg: Object): Object.AsObject;
  static serializeBinaryToWriter(message: Object, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Object;
  static deserializeBinaryFromReader(message: Object, reader: jspb.BinaryReader): Object;
}

export namespace Object {
  export type AsObject = {
    id: string,
    type: Object.Type,
    entity?: Entity.AsObject,
    relation?: Relation.AsObject,
    kind?: Kind.AsObject,
    attributesMap: Array<[string, string]>,
  }

  export enum Type { 
    UNSPECIFIED = 0,
    ENTITY = 1,
    RELATION = 2,
    KIND = 3,
  }

  export enum ObjCase { 
    OBJ_NOT_SET = 0,
    ENTITY = 3,
    RELATION = 4,
    KIND = 5,
  }
}

export class Entity extends jspb.Message {
  getKindId(): string;
  setKindId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
  static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entity;
  static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
}

export namespace Entity {
  export type AsObject = {
    kindId: string,
  }
}

export class Relation extends jspb.Message {
  getKindId(): string;
  setKindId(value: string): void;

  getSrcEntityId(): string;
  setSrcEntityId(value: string): void;

  getTgtEntityId(): string;
  setTgtEntityId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relation.AsObject;
  static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
  static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relation;
  static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
}

export namespace Relation {
  export type AsObject = {
    kindId: string,
    srcEntityId: string,
    tgtEntityId: string,
  }
}

export class Kind extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Kind.AsObject;
  static toObject(includeInstance: boolean, msg: Kind): Kind.AsObject;
  static serializeBinaryToWriter(message: Kind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Kind;
  static deserializeBinaryFromReader(message: Kind, reader: jspb.BinaryReader): Kind;
}

export namespace Kind {
  export type AsObject = {
    name: string,
    attributesMap: Array<[string, string]>,
  }
}

