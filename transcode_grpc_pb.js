// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var transcode_pb = require('./transcode_pb.js');

function serialize_transcode_GetCIDRequest(arg) {
  if (!(arg instanceof transcode_pb.GetCIDRequest)) {
    throw new Error('Expected argument of type transcode.GetCIDRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transcode_GetCIDRequest(buffer_arg) {
  return transcode_pb.GetCIDRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transcode_GetCIDResponse(arg) {
  if (!(arg instanceof transcode_pb.GetCIDResponse)) {
    throw new Error('Expected argument of type transcode.GetCIDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transcode_GetCIDResponse(buffer_arg) {
  return transcode_pb.GetCIDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transcode_TranscodeRequest(arg) {
  if (!(arg instanceof transcode_pb.TranscodeRequest)) {
    throw new Error('Expected argument of type transcode.TranscodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transcode_TranscodeRequest(buffer_arg) {
  return transcode_pb.TranscodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_transcode_TranscodeResponse(arg) {
  if (!(arg instanceof transcode_pb.TranscodeResponse)) {
    throw new Error('Expected argument of type transcode.TranscodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_transcode_TranscodeResponse(buffer_arg) {
  return transcode_pb.TranscodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TranscodeServiceService = exports.TranscodeServiceService = {
  transcode: {
    path: '/transcode.TranscodeService/Transcode',
    requestStream: false,
    responseStream: false,
    requestType: transcode_pb.TranscodeRequest,
    responseType: transcode_pb.TranscodeResponse,
    requestSerialize: serialize_transcode_TranscodeRequest,
    requestDeserialize: deserialize_transcode_TranscodeRequest,
    responseSerialize: serialize_transcode_TranscodeResponse,
    responseDeserialize: deserialize_transcode_TranscodeResponse,
  },
  getCID: {
    path: '/transcode.TranscodeService/GetCID',
    requestStream: false,
    responseStream: false,
    requestType: transcode_pb.GetCIDRequest,
    responseType: transcode_pb.GetCIDResponse,
    requestSerialize: serialize_transcode_GetCIDRequest,
    requestDeserialize: deserialize_transcode_GetCIDRequest,
    responseSerialize: serialize_transcode_GetCIDResponse,
    responseDeserialize: deserialize_transcode_GetCIDResponse,
  },
};

exports.TranscodeServiceClient = grpc.makeGenericClientConstructor(TranscodeServiceService);
