// source: github.com/onosproject/onos-config/api/diags/diags.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var github_com_onosproject_onos$config_api_admin_admin_pb = require('../../../../../github.com/onosproject/onos-config/api/admin/admin_pb.js');
goog.object.extend(proto, github_com_onosproject_onos$config_api_admin_admin_pb);
var github_com_onosproject_onos$config_api_types_change_device_types_pb = require('../../../../../github.com/onosproject/onos-config/api/types/change/device/types_pb.js');
goog.object.extend(proto, github_com_onosproject_onos$config_api_types_change_device_types_pb);
var github_com_onosproject_onos$config_api_types_change_network_types_pb = require('../../../../../github.com/onosproject/onos-config/api/types/change/network/types_pb.js');
goog.object.extend(proto, github_com_onosproject_onos$config_api_types_change_network_types_pb);
goog.exportSymbol('proto.onos.config.diags.ListDeviceChangeRequest', null, global);
goog.exportSymbol('proto.onos.config.diags.ListDeviceChangeResponse', null, global);
goog.exportSymbol('proto.onos.config.diags.ListNetworkChangeRequest', null, global);
goog.exportSymbol('proto.onos.config.diags.ListNetworkChangeResponse', null, global);
goog.exportSymbol('proto.onos.config.diags.OpStateRequest', null, global);
goog.exportSymbol('proto.onos.config.diags.OpStateResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.onos.config.diags.OpStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.onos.config.diags.OpStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.onos.config.diags.OpStateRequest.displayName = 'proto.onos.config.diags.OpStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.onos.config.diags.OpStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.onos.config.diags.OpStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.onos.config.diags.OpStateResponse.displayName = 'proto.onos.config.diags.OpStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.onos.config.diags.ListNetworkChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.onos.config.diags.ListNetworkChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.onos.config.diags.ListNetworkChangeRequest.displayName = 'proto.onos.config.diags.ListNetworkChangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.onos.config.diags.ListNetworkChangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.onos.config.diags.ListNetworkChangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.onos.config.diags.ListNetworkChangeResponse.displayName = 'proto.onos.config.diags.ListNetworkChangeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.onos.config.diags.ListDeviceChangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.onos.config.diags.ListDeviceChangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.onos.config.diags.ListDeviceChangeRequest.displayName = 'proto.onos.config.diags.ListDeviceChangeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.onos.config.diags.ListDeviceChangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.onos.config.diags.ListDeviceChangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.onos.config.diags.ListDeviceChangeResponse.displayName = 'proto.onos.config.diags.ListDeviceChangeResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.onos.config.diags.OpStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.onos.config.diags.OpStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.onos.config.diags.OpStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.OpStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subscribe: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.onos.config.diags.OpStateRequest}
 */
proto.onos.config.diags.OpStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.onos.config.diags.OpStateRequest;
  return proto.onos.config.diags.OpStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.onos.config.diags.OpStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.onos.config.diags.OpStateRequest}
 */
proto.onos.config.diags.OpStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSubscribe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.onos.config.diags.OpStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.onos.config.diags.OpStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.onos.config.diags.OpStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.OpStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscribe();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string deviceId = 1;
 * @return {string}
 */
proto.onos.config.diags.OpStateRequest.prototype.getDeviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.onos.config.diags.OpStateRequest.prototype.setDeviceid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool subscribe = 2;
 * @return {boolean}
 */
proto.onos.config.diags.OpStateRequest.prototype.getSubscribe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.onos.config.diags.OpStateRequest.prototype.setSubscribe = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.onos.config.diags.OpStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.onos.config.diags.OpStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.onos.config.diags.OpStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.OpStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pathvalue: (f = msg.getPathvalue()) && github_com_onosproject_onos$config_api_types_change_device_types_pb.PathValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.onos.config.diags.OpStateResponse}
 */
proto.onos.config.diags.OpStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.onos.config.diags.OpStateResponse;
  return proto.onos.config.diags.OpStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.onos.config.diags.OpStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.onos.config.diags.OpStateResponse}
 */
proto.onos.config.diags.OpStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.onos.config.admin.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new github_com_onosproject_onos$config_api_types_change_device_types_pb.PathValue;
      reader.readMessage(value,github_com_onosproject_onos$config_api_types_change_device_types_pb.PathValue.deserializeBinaryFromReader);
      msg.setPathvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.onos.config.diags.OpStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.onos.config.diags.OpStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.onos.config.diags.OpStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.OpStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPathvalue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_onosproject_onos$config_api_types_change_device_types_pb.PathValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional onos.config.admin.Type type = 1;
 * @return {!proto.onos.config.admin.Type}
 */
proto.onos.config.diags.OpStateResponse.prototype.getType = function() {
  return /** @type {!proto.onos.config.admin.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.onos.config.admin.Type} value */
proto.onos.config.diags.OpStateResponse.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional onos.config.change.device.PathValue pathvalue = 2;
 * @return {?proto.onos.config.change.device.PathValue}
 */
proto.onos.config.diags.OpStateResponse.prototype.getPathvalue = function() {
  return /** @type{?proto.onos.config.change.device.PathValue} */ (
    jspb.Message.getWrapperField(this, github_com_onosproject_onos$config_api_types_change_device_types_pb.PathValue, 2));
};


/** @param {?proto.onos.config.change.device.PathValue|undefined} value */
proto.onos.config.diags.OpStateResponse.prototype.setPathvalue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.onos.config.diags.OpStateResponse.prototype.clearPathvalue = function() {
  this.setPathvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.onos.config.diags.OpStateResponse.prototype.hasPathvalue = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.onos.config.diags.ListNetworkChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.onos.config.diags.ListNetworkChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.onos.config.diags.ListNetworkChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.ListNetworkChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscribe: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    changeid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    withoutreplay: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.onos.config.diags.ListNetworkChangeRequest}
 */
proto.onos.config.diags.ListNetworkChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.onos.config.diags.ListNetworkChangeRequest;
  return proto.onos.config.diags.ListNetworkChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.onos.config.diags.ListNetworkChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.onos.config.diags.ListNetworkChangeRequest}
 */
proto.onos.config.diags.ListNetworkChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSubscribe(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChangeid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithoutreplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.onos.config.diags.ListNetworkChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.onos.config.diags.ListNetworkChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.onos.config.diags.ListNetworkChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.ListNetworkChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscribe();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getChangeid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWithoutreplay();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool subscribe = 1;
 * @return {boolean}
 */
proto.onos.config.diags.ListNetworkChangeRequest.prototype.getSubscribe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.onos.config.diags.ListNetworkChangeRequest.prototype.setSubscribe = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string changeid = 2;
 * @return {string}
 */
proto.onos.config.diags.ListNetworkChangeRequest.prototype.getChangeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.onos.config.diags.ListNetworkChangeRequest.prototype.setChangeid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool withoutReplay = 3;
 * @return {boolean}
 */
proto.onos.config.diags.ListNetworkChangeRequest.prototype.getWithoutreplay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.onos.config.diags.ListNetworkChangeRequest.prototype.setWithoutreplay = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.onos.config.diags.ListNetworkChangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.onos.config.diags.ListNetworkChangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.onos.config.diags.ListNetworkChangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.ListNetworkChangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    change: (f = msg.getChange()) && github_com_onosproject_onos$config_api_types_change_network_types_pb.NetworkChange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.onos.config.diags.ListNetworkChangeResponse}
 */
proto.onos.config.diags.ListNetworkChangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.onos.config.diags.ListNetworkChangeResponse;
  return proto.onos.config.diags.ListNetworkChangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.onos.config.diags.ListNetworkChangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.onos.config.diags.ListNetworkChangeResponse}
 */
proto.onos.config.diags.ListNetworkChangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_onosproject_onos$config_api_types_change_network_types_pb.NetworkChange;
      reader.readMessage(value,github_com_onosproject_onos$config_api_types_change_network_types_pb.NetworkChange.deserializeBinaryFromReader);
      msg.setChange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.onos.config.diags.ListNetworkChangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.onos.config.diags.ListNetworkChangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.onos.config.diags.ListNetworkChangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.ListNetworkChangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_onosproject_onos$config_api_types_change_network_types_pb.NetworkChange.serializeBinaryToWriter
    );
  }
};


/**
 * optional onos.config.change.network.NetworkChange change = 1;
 * @return {?proto.onos.config.change.network.NetworkChange}
 */
proto.onos.config.diags.ListNetworkChangeResponse.prototype.getChange = function() {
  return /** @type{?proto.onos.config.change.network.NetworkChange} */ (
    jspb.Message.getWrapperField(this, github_com_onosproject_onos$config_api_types_change_network_types_pb.NetworkChange, 1));
};


/** @param {?proto.onos.config.change.network.NetworkChange|undefined} value */
proto.onos.config.diags.ListNetworkChangeResponse.prototype.setChange = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.onos.config.diags.ListNetworkChangeResponse.prototype.clearChange = function() {
  this.setChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.onos.config.diags.ListNetworkChangeResponse.prototype.hasChange = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.onos.config.diags.ListDeviceChangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.onos.config.diags.ListDeviceChangeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.ListDeviceChangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscribe: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    deviceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    withoutreplay: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.onos.config.diags.ListDeviceChangeRequest}
 */
proto.onos.config.diags.ListDeviceChangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.onos.config.diags.ListDeviceChangeRequest;
  return proto.onos.config.diags.ListDeviceChangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.onos.config.diags.ListDeviceChangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.onos.config.diags.ListDeviceChangeRequest}
 */
proto.onos.config.diags.ListDeviceChangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSubscribe(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceVersion(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithoutreplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.onos.config.diags.ListDeviceChangeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.onos.config.diags.ListDeviceChangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.ListDeviceChangeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubscribe();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWithoutreplay();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional bool subscribe = 1;
 * @return {boolean}
 */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.getSubscribe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.setSubscribe = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string device_id = 2;
 * @return {string}
 */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.setDeviceId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string device_version = 3;
 * @return {string}
 */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.getDeviceVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.setDeviceVersion = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool withoutReplay = 4;
 * @return {boolean}
 */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.getWithoutreplay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.onos.config.diags.ListDeviceChangeRequest.prototype.setWithoutreplay = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.onos.config.diags.ListDeviceChangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.onos.config.diags.ListDeviceChangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.onos.config.diags.ListDeviceChangeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.ListDeviceChangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    change: (f = msg.getChange()) && github_com_onosproject_onos$config_api_types_change_device_types_pb.DeviceChange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.onos.config.diags.ListDeviceChangeResponse}
 */
proto.onos.config.diags.ListDeviceChangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.onos.config.diags.ListDeviceChangeResponse;
  return proto.onos.config.diags.ListDeviceChangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.onos.config.diags.ListDeviceChangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.onos.config.diags.ListDeviceChangeResponse}
 */
proto.onos.config.diags.ListDeviceChangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_onosproject_onos$config_api_types_change_device_types_pb.DeviceChange;
      reader.readMessage(value,github_com_onosproject_onos$config_api_types_change_device_types_pb.DeviceChange.deserializeBinaryFromReader);
      msg.setChange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.onos.config.diags.ListDeviceChangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.onos.config.diags.ListDeviceChangeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.onos.config.diags.ListDeviceChangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.onos.config.diags.ListDeviceChangeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_onosproject_onos$config_api_types_change_device_types_pb.DeviceChange.serializeBinaryToWriter
    );
  }
};


/**
 * optional onos.config.change.device.DeviceChange change = 1;
 * @return {?proto.onos.config.change.device.DeviceChange}
 */
proto.onos.config.diags.ListDeviceChangeResponse.prototype.getChange = function() {
  return /** @type{?proto.onos.config.change.device.DeviceChange} */ (
    jspb.Message.getWrapperField(this, github_com_onosproject_onos$config_api_types_change_device_types_pb.DeviceChange, 1));
};


/** @param {?proto.onos.config.change.device.DeviceChange|undefined} value */
proto.onos.config.diags.ListDeviceChangeResponse.prototype.setChange = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.onos.config.diags.ListDeviceChangeResponse.prototype.clearChange = function() {
  this.setChange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.onos.config.diags.ListDeviceChangeResponse.prototype.hasChange = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.onos.config.diags);
