// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandom9234';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"CustomRole Test For Update\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test For Update Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '542',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:1d767ad5-ea91-4abb-8a3e-f6ce572e64ec',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-correlation-request-id': 'e32806dd-16a3-46e8-8d53-a194cc251ea6',
  'x-ms-routing-request-id': 'WESTUS:20150806T213726Z:e32806dd-16a3-46e8-8d53-a194cc251ea6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:37:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"CustomRole Test For Update\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test For Update Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '542',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:1d767ad5-ea91-4abb-8a3e-f6ce572e64ec',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-correlation-request-id': 'e32806dd-16a3-46e8-8d53-a194cc251ea6',
  'x-ms-routing-request-id': 'WESTUS:20150806T213726Z:e32806dd-16a3-46e8-8d53-a194cc251ea6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:37:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"CustomRole Test For Update\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test For Update Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '542',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:1fbf4255-8253-4b5f-8196-6bdd72661da0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '9b3f918b-dc69-42f9-b385-2a2bdafefb0f',
  'x-ms-routing-request-id': 'WESTUS:20150806T213726Z:9b3f918b-dc69-42f9-b385-2a2bdafefb0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:37:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"CustomRole Test For Update\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test For Update Desc\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '542',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:1fbf4255-8253-4b5f-8196-6bdd72661da0',
  'x-ms-ratelimit-remaining-subscription-reads': '14981',
  'x-ms-correlation-request-id': '9b3f918b-dc69-42f9-b385-2a2bdafefb0f',
  'x-ms-routing-request-id': 'WESTUS:20150806T213726Z:9b3f918b-dc69-42f9-b385-2a2bdafefb0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:37:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"Updated Role Name\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:52a18508-99b2-4c03-bf58-2330a85e6a33',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': 'ff911ce5-325d-48b2-bd6d-5986d862be1a',
  'x-ms-routing-request-id': 'WESTUS:20150806T213728Z:ff911ce5-325d-48b2-bd6d-5986d862be1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:37:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"Updated Role Name\",\"type\":\"CustomRole\",\"description\":\"Updated Role Description\",\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}]},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"6a2b6888-aef8-41ad-9bf7-a9d21a6557e1\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '525',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'westus:52a18508-99b2-4c03-bf58-2330a85e6a33',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': 'ff911ce5-325d-48b2-bd6d-5986d862be1a',
  'x-ms-routing-request-id': 'WESTUS:20150806T213728Z:ff911ce5-325d-48b2-bd6d-5986d862be1a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 06 Aug 2015 21:37:28 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['6a2b6888-aef8-41ad-9bf7-a9d21a6557e1'];};