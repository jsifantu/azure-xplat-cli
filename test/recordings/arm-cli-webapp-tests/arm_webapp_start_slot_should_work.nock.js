// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/start?api-version=2015-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c12e2f73-7e62-4b23-9dee-e6ffef271187',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-correlation-request-id': 'b4726a32-0482-4e15-a543-ebc013f74400',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185558Z:b4726a32-0482-4e15-a543-ebc013f74400',
  date: 'Tue, 25 Oct 2016 18:55:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/start?api-version=2015-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c12e2f73-7e62-4b23-9dee-e6ffef271187',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-correlation-request-id': 'b4726a32-0482-4e15-a543-ebc013f74400',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185558Z:b4726a32-0482-4e15-a543-ebc013f74400',
  date: 'Tue, 25 Oct 2016 18:55:57 GMT',
  connection: 'close' });
 return result; }]];