// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname1025?comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:01:53 GMT',
  etag: '"0x8D37FCC9A9F4618"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0cb4a00a-0001-0046-10b5-b14891000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': 'be66f8fb-f32d-41f7-b24b-84f5806fda20',
  date: 'Thu, 19 May 2016 10:02:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/storage-cli-blob-test/blockblobname1025?comp=lease')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 19 May 2016 10:01:53 GMT',
  etag: '"0x8D37FCC9A9F4618"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '0cb4a00a-0001-0046-10b5-b14891000000',
  'x-ms-version': '2015-04-05',
  'x-ms-lease-id': 'be66f8fb-f32d-41f7-b24b-84f5806fda20',
  date: 'Thu, 19 May 2016 10:02:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname1025')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D37FCC9A9F4618"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '49a63d58-0001-0047-65b5-b1496c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'fixed',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Thu, 19 May 2016 10:02:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname1025')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D37FCC9A9F4618"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '49a63d58-0001-0047-65b5-b1496c000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'locked',
  'x-ms-lease-state': 'leased',
  'x-ms-lease-duration': 'fixed',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Thu, 19 May 2016 10:02:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname1025')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D37FCC9A9F4618"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8536bcf9-0001-0043-2ab5-b1bcee000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'expired',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Thu, 19 May 2016 10:02:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/storage-cli-blob-test/blockblobname1025')
  .reply(200, "", { 'content-length': '10',
  'content-type': 'text/plain',
  'content-md5': 'aOEJ8PQMpyoV4FzCJ4b45g==',
  'last-modified': 'Thu, 19 May 2016 10:01:53 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D37FCC9A9F4618"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8536bcf9-0001-0043-2ab5-b1bcee000000',
  'x-ms-version': '2015-04-05',
  'x-ms-write-protection': 'false',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'expired',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Thu, 19 May 2016 10:02:57 GMT',
  connection: 'close' });
 return result; }]];