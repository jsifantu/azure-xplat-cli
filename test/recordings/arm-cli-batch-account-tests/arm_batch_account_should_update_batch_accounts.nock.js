// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '45b60d85-fd72-427a-a708-f994d26e593e',
    name: 'Azure Storage DM Staging',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-01-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd9a3ef1c-a44e-45b5-a54d-72fed53271f4',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': 'd9a3ef1c-a44e-45b5-a54d-72fed53271f4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091138Z:d9a3ef1c-a44e-45b5-a54d-72fed53271f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 Apr 2016 09:11:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-01-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd9a3ef1c-a44e-45b5-a54d-72fed53271f4',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': 'd9a3ef1c-a44e-45b5-a54d-72fed53271f4',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091138Z:d9a3ef1c-a44e-45b5-a54d-72fed53271f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 Apr 2016 09:11:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/operations/aa2d8ee5-9199-417c-a3bb-1c59ebec82e0?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1155',
  'x-ms-request-id': '8b7df149-aac0-4f5c-9edc-aace2b3242bd',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '8b7df149-aac0-4f5c-9edc-aace2b3242bd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091143Z:8b7df149-aac0-4f5c-9edc-aace2b3242bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 Apr 2016 09:11:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/operations/aa2d8ee5-9199-417c-a3bb-1c59ebec82e0?monitor=true&api-version=2016-01-01',
  'retry-after': '25',
  'x-ms-ratelimit-remaining-subscription-writes': '1155',
  'x-ms-request-id': '8b7df149-aac0-4f5c-9edc-aace2b3242bd',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '8b7df149-aac0-4f5c-9edc-aace2b3242bd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091143Z:8b7df149-aac0-4f5c-9edc-aace2b3242bd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 Apr 2016 09:11:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/operations/aa2d8ee5-9199-417c-a3bb-1c59ebec82e0?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072\",\"kind\":\"Storage\",\"location\":\"eastus2(stage)\",\"name\":\"armclibatch3072\",\"properties\":{\"creationTime\":\"2016-04-21T09:11:43.1767504Z\",\"primaryEndpoints\":{\"blob\":\"https://armclibatch3072.blob.core.windows.net/\",\"file\":\"https://armclibatch3072.file.core.windows.net/\",\"queue\":\"https://armclibatch3072.queue.core.windows.net/\",\"table\":\"https://armclibatch3072.table.core.windows.net/\"},\"primaryLocation\":\"eastus2(stage)\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '735',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e82a1eca-a86a-43b4-884b-63e624c12c23',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'e82a1eca-a86a-43b4-884b-63e624c12c23',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091216Z:e82a1eca-a86a-43b4-884b-63e624c12c23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 Apr 2016 09:12:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/providers/Microsoft.Storage/operations/aa2d8ee5-9199-417c-a3bb-1c59ebec82e0?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072\",\"kind\":\"Storage\",\"location\":\"eastus2(stage)\",\"name\":\"armclibatch3072\",\"properties\":{\"creationTime\":\"2016-04-21T09:11:43.1767504Z\",\"primaryEndpoints\":{\"blob\":\"https://armclibatch3072.blob.core.windows.net/\",\"file\":\"https://armclibatch3072.file.core.windows.net/\",\"queue\":\"https://armclibatch3072.queue.core.windows.net/\",\"table\":\"https://armclibatch3072.table.core.windows.net/\"},\"primaryLocation\":\"eastus2(stage)\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '735',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'e82a1eca-a86a-43b4-884b-63e624c12c23',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'e82a1eca-a86a-43b4-884b-63e624c12c23',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091216Z:e82a1eca-a86a-43b4-884b-63e624c12c23',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 Apr 2016 09:12:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072?api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072\",\"kind\":\"Storage\",\"location\":\"eastus2(stage)\",\"name\":\"armclibatch3072\",\"properties\":{\"creationTime\":\"2016-04-21T09:11:43.1767504Z\",\"primaryEndpoints\":{\"blob\":\"https://armclibatch3072.blob.core.windows.net/\",\"file\":\"https://armclibatch3072.file.core.windows.net/\",\"queue\":\"https://armclibatch3072.queue.core.windows.net/\",\"table\":\"https://armclibatch3072.table.core.windows.net/\"},\"primaryLocation\":\"eastus2(stage)\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '735',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '180a4032-59ac-4ee0-90f3-d2744b6c4ffa',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '180a4032-59ac-4ee0-90f3-d2744b6c4ffa',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091220Z:180a4032-59ac-4ee0-90f3-d2744b6c4ffa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 Apr 2016 09:12:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072?api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072\",\"kind\":\"Storage\",\"location\":\"eastus2(stage)\",\"name\":\"armclibatch3072\",\"properties\":{\"creationTime\":\"2016-04-21T09:11:43.1767504Z\",\"primaryEndpoints\":{\"blob\":\"https://armclibatch3072.blob.core.windows.net/\",\"file\":\"https://armclibatch3072.file.core.windows.net/\",\"queue\":\"https://armclibatch3072.queue.core.windows.net/\",\"table\":\"https://armclibatch3072.table.core.windows.net/\"},\"primaryLocation\":\"eastus2(stage)\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '735',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '180a4032-59ac-4ee0-90f3-d2744b6c4ffa',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '180a4032-59ac-4ee0-90f3-d2744b6c4ffa',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091220Z:180a4032-59ac-4ee0-90f3-d2744b6c4ffa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 21 Apr 2016 09:12:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Batch/batchAccounts/armclibatch2432?api-version=2015-12-01', '*')
  .reply(200, "{\"name\":\"armclibatch2432\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch2432.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072\",\"lastKeySync\":\"2016-04-21T09:12:24.320059Z\"}},\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Batch/batchAccounts/armclibatch2432\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 21 Apr 2016 09:12:23 GMT',
  etag: '0x8D369C50CBF099A',
  'request-id': 'b23090a1-5fa9-4235-ac1d-791ea71d6209',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1154',
  'x-ms-request-id': '51d04463-5832-4151-a8b3-30790d5c4d8d',
  'x-ms-correlation-request-id': '51d04463-5832-4151-a8b3-30790d5c4d8d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091224Z:51d04463-5832-4151-a8b3-30790d5c4d8d',
  date: 'Thu, 21 Apr 2016 09:12:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Batch/batchAccounts/armclibatch2432?api-version=2015-12-01', '*')
  .reply(200, "{\"name\":\"armclibatch2432\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch2432.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072\",\"lastKeySync\":\"2016-04-21T09:12:24.320059Z\"}},\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Batch/batchAccounts/armclibatch2432\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 21 Apr 2016 09:12:23 GMT',
  etag: '0x8D369C50CBF099A',
  'request-id': 'b23090a1-5fa9-4235-ac1d-791ea71d6209',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1154',
  'x-ms-request-id': '51d04463-5832-4151-a8b3-30790d5c4d8d',
  'x-ms-correlation-request-id': '51d04463-5832-4151-a8b3-30790d5c4d8d',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091224Z:51d04463-5832-4151-a8b3-30790d5c4d8d',
  date: 'Thu, 21 Apr 2016 09:12:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Batch/batchAccounts/armclibatch2432?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch2432\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch2432.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072\",\"lastKeySync\":\"2016-04-21T09:12:24.320059Z\"}},\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Batch/batchAccounts/armclibatch2432\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 21 Apr 2016 09:12:27 GMT',
  etag: '0x8D369C50F4C8D85',
  'request-id': '169fc810-db49-406d-a136-590b56e02e7f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-request-id': '84c20efe-948b-48bf-bb90-8a412bded2e8',
  'x-ms-correlation-request-id': '84c20efe-948b-48bf-bb90-8a412bded2e8',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091227Z:84c20efe-948b-48bf-bb90-8a412bded2e8',
  date: 'Thu, 21 Apr 2016 09:12:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Batch/batchAccounts/armclibatch2432?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch2432\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch2432.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Storage/storageAccounts/armclibatch3072\",\"lastKeySync\":\"2016-04-21T09:12:24.320059Z\"}},\"id\":\"/subscriptions/45b60d85-fd72-427a-a708-f994d26e593e/resourceGroups/armclibatchgroup1143/providers/Microsoft.Batch/batchAccounts/armclibatch2432\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 21 Apr 2016 09:12:27 GMT',
  etag: '0x8D369C50F4C8D85',
  'request-id': '169fc810-db49-406d-a136-590b56e02e7f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14973',
  'x-ms-request-id': '84c20efe-948b-48bf-bb90-8a412bded2e8',
  'x-ms-correlation-request-id': '84c20efe-948b-48bf-bb90-8a412bded2e8',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20160421T091227Z:84c20efe-948b-48bf-bb90-8a412bded2e8',
  date: 'Thu, 21 Apr 2016 09:12:26 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclibatch3072'];};