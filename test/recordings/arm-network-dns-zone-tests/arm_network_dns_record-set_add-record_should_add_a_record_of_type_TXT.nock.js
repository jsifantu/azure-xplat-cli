// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7824/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-0c96-e19ddefed101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-0c96-e19ddefed101',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b0ea023a-d08f-4522-8b32-a744cbbed2c4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11994',
  'x-ms-correlation-request-id': 'ec469ffd-5975-469a-a4ee-9efa2a244ba8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T144152Z:ec469ffd-5975-469a-a4ee-9efa2a244ba8',
  date: 'Thu, 25 Aug 2016 14:41:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7824/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-0c96-e19ddefed101\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.azure-dns.com.\",\"ns2-04.azure-dns.net.\",\"ns3-04.azure-dns.org.\",\"ns4-04.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-0c96-e19ddefed101',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b0ea023a-d08f-4522-8b32-a744cbbed2c4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11994',
  'x-ms-correlation-request-id': 'ec469ffd-5975-469a-a4ee-9efa2a244ba8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T144152Z:ec469ffd-5975-469a-a4ee-9efa2a244ba8',
  date: 'Thu, 25 Aug 2016 14:41:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7824/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"8369755b-ba94-45e7-acfe-1264e987114a\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: '8369755b-ba94-45e7-acfe-1264e987114a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4dd7a7e4-ebe0-44f3-80df-72fe038db5cf',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '8827d3cd-7b94-424a-8e5f-827199586168',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T144153Z:8827d3cd-7b94-424a-8e5f-827199586168',
  date: 'Thu, 25 Aug 2016 14:41:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7824/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"8369755b-ba94-45e7-acfe-1264e987114a\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: '8369755b-ba94-45e7-acfe-1264e987114a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4dd7a7e4-ebe0-44f3-80df-72fe038db5cf',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '8827d3cd-7b94-424a-8e5f-827199586168',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T144153Z:8827d3cd-7b94-424a-8e5f-827199586168',
  date: 'Thu, 25 Aug 2016 14:41:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7824/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"d6f1e8d9-e938-43d6-86f4-5a5c8a164195\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '425',
  'content-type': 'application/json; charset=utf-8',
  etag: 'd6f1e8d9-e938-43d6-86f4-5a5c8a164195',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '409c7d22-f68e-4004-8490-30350371cf3c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0ed79a8c-3b72-43d9-971a-5f711c3a4351',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T144154Z:0ed79a8c-3b72-43d9-971a-5f711c3a4351',
  date: 'Thu, 25 Aug 2016 14:41:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7824/providers/Microsoft.Network/dnszones/example1.com/TXT/set-txt?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/set-txt\",\"name\":\"set-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"d6f1e8d9-e938-43d6-86f4-5a5c8a164195\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-txt.example1.com.\",\"TTL\":3600,\"TXTRecords\":[{\"value\":[\"longtexthere\"]}]}}", { 'cache-control': 'private',
  'content-length': '425',
  'content-type': 'application/json; charset=utf-8',
  etag: 'd6f1e8d9-e938-43d6-86f4-5a5c8a164195',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '409c7d22-f68e-4004-8490-30350371cf3c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0ed79a8c-3b72-43d9-971a-5f711c3a4351',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T144154Z:0ed79a8c-3b72-43d9-971a-5f711c3a4351',
  date: 'Thu, 25 Aug 2016 14:41:53 GMT',
  connection: 'close' });
 return result; }]];