// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['website'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/mytestrg005/providers/microsoft.insights/alertrules/logRule?api-version=2016-03-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/mytestrg005/providers/microsoft.insights/alertrules/logRule\",\"name\":\"logRule\",\"type\":\"Microsoft.Insights/alertRules\",\"location\":\"East US\",\"tags\":{\"$type\":\"Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary, Microsoft.WindowsAzure.Management.Common.Storage\"},\"properties\":{\"name\":\"logRule\",\"description\":\"Pura vida\",\"isEnabled\":true,\"condition\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ManagementEventRuleCondition, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource\",\"operationName\":\"create\",\"claims\":{}}},\"lastUpdatedTime\":\"2016-03-30T21:58:09.1442657Z\",\"provisioningState\":\"Succeeded\",\"actions\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '908',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '25f718a2-8de6-4e15-ad4e-2fe95b7eea6b',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '26ca6c1f-a921-467e-99f4-621ca9620221',
  'x-ms-routing-request-id': 'WESTUS:20160330T215809Z:26ca6c1f-a921-467e-99f4-621ca9620221',
  date: 'Wed, 30 Mar 2016 21:58:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/mytestrg005/providers/microsoft.insights/alertrules/logRule?api-version=2016-03-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/mytestrg005/providers/microsoft.insights/alertrules/logRule\",\"name\":\"logRule\",\"type\":\"Microsoft.Insights/alertRules\",\"location\":\"East US\",\"tags\":{\"$type\":\"Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary, Microsoft.WindowsAzure.Management.Common.Storage\"},\"properties\":{\"name\":\"logRule\",\"description\":\"Pura vida\",\"isEnabled\":true,\"condition\":{\"$type\":\"Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.ManagementEventRuleCondition, Microsoft.WindowsAzure.Management.Mon.Client\",\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition\",\"dataSource\":{\"odata.type\":\"Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource\",\"operationName\":\"create\",\"claims\":{}}},\"lastUpdatedTime\":\"2016-03-30T21:58:09.1442657Z\",\"provisioningState\":\"Succeeded\",\"actions\":[]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '908',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '25f718a2-8de6-4e15-ad4e-2fe95b7eea6b',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '26ca6c1f-a921-467e-99f4-621ca9620221',
  'x-ms-routing-request-id': 'WESTUS:20160330T215809Z:26ca6c1f-a921-467e-99f4-621ca9620221',
  date: 'Wed, 30 Mar 2016 21:58:09 GMT',
  connection: 'close' });
 return result; }]];