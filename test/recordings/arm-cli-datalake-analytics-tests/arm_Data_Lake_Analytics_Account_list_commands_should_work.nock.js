// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '045c28ea-c686-462f-9081-33c34e871ba3',
    name: 'MDInsightsPROD1_10759063',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsights.azuredatalakeanalytics.net\",\"accountId\":\"3afa2d8c-1a03-4b79-bfe7-30a3d762a0fe\",\"creationTime\":\"2015-06-25T01:05:37.2001105Z\",\"lastModifiedTime\":\"2015-06-25T01:05:37.2001105Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeAnalytics/accounts/datainsights\",\"name\":\"datainsights\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsadhoc.azuredatalakeanalytics.net\",\"accountId\":\"e9779091-207a-4f18-9495-55bd5031b5c0\",\"creationTime\":\"2015-08-18T23:15:09.3262754Z\",\"lastModifiedTime\":\"2015-08-18T23:15:09.3262754Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeAnalytics/accounts/datainsightsadhoc\",\"name\":\"datainsightsadhoc\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4305.azuredatalakeanalytics.net\",\"accountId\":\"b225ccdd-3b17-4972-abf6-ef1369080f9b\",\"creationTime\":\"2016-07-07T01:51:52.0142327Z\",\"lastModifiedTime\":\"2016-07-07T01:51:52.0142327Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4305\",\"name\":\"xplattestadla4305\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5810.azuredatalakeanalytics.net\",\"accountId\":\"2ac859d8-7b09-4697-833a-8df7da69ebbf\",\"creationTime\":\"2016-07-07T01:52:24.739706Z\",\"lastModifiedTime\":\"2016-07-07T01:52:24.739706Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5810\",\"name\":\"xplattestadla5810\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdb.azuredatalakeanalytics.net\",\"accountId\":\"7eaa1e67-53a3-4cef-9561-3bf4d5436de6\",\"creationTime\":\"2016-03-24T21:36:14.5680047Z\",\"lastModifiedTime\":\"2016-06-20T21:21:08.768587Z\"},\"location\":\"northeurope\",\"tags\":{\"Area\":\"Billing\"},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeAnalytics/accounts/datainsightsdb\",\"name\":\"datainsightsdb\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdbadhoc.azuredatalakeanalytics.net\",\"accountId\":\"2205941a-83d4-4bb5-bc58-c948d39cca08\",\"creationTime\":\"2016-03-26T00:58:57.1294914Z\",\"lastModifiedTime\":\"2016-03-26T00:58:57.1294914Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeAnalytics/accounts/datainsightsdbadhoc\",\"name\":\"datainsightsdbadhoc\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': '4805051f-f8ef-4bfa-86d1-4721cd218164, 1766dd1e-10bf-4f56-a1a5-52eecd052a55',
  'x-ms-ratelimit-remaining-subscription-reads': '14536',
  'x-ms-request-id': '63e56b1a-3528-4f88-9487-6bf742525fac',
  'x-ms-correlation-request-id': '63e56b1a-3528-4f88-9487-6bf742525fac',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T015300Z:63e56b1a-3528-4f88-9487-6bf742525fac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 01:53:00 GMT',
  connection: 'close',
  'content-length': '3251' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsights.azuredatalakeanalytics.net\",\"accountId\":\"3afa2d8c-1a03-4b79-bfe7-30a3d762a0fe\",\"creationTime\":\"2015-06-25T01:05:37.2001105Z\",\"lastModifiedTime\":\"2015-06-25T01:05:37.2001105Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeAnalytics/accounts/datainsights\",\"name\":\"datainsights\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsadhoc.azuredatalakeanalytics.net\",\"accountId\":\"e9779091-207a-4f18-9495-55bd5031b5c0\",\"creationTime\":\"2015-08-18T23:15:09.3262754Z\",\"lastModifiedTime\":\"2015-08-18T23:15:09.3262754Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeAnalytics/accounts/datainsightsadhoc\",\"name\":\"datainsightsadhoc\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4305.azuredatalakeanalytics.net\",\"accountId\":\"b225ccdd-3b17-4972-abf6-ef1369080f9b\",\"creationTime\":\"2016-07-07T01:51:52.0142327Z\",\"lastModifiedTime\":\"2016-07-07T01:51:52.0142327Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4305\",\"name\":\"xplattestadla4305\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5810.azuredatalakeanalytics.net\",\"accountId\":\"2ac859d8-7b09-4697-833a-8df7da69ebbf\",\"creationTime\":\"2016-07-07T01:52:24.739706Z\",\"lastModifiedTime\":\"2016-07-07T01:52:24.739706Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5810\",\"name\":\"xplattestadla5810\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdb.azuredatalakeanalytics.net\",\"accountId\":\"7eaa1e67-53a3-4cef-9561-3bf4d5436de6\",\"creationTime\":\"2016-03-24T21:36:14.5680047Z\",\"lastModifiedTime\":\"2016-06-20T21:21:08.768587Z\"},\"location\":\"northeurope\",\"tags\":{\"Area\":\"Billing\"},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeAnalytics/accounts/datainsightsdb\",\"name\":\"datainsightsdb\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"datainsightsdbadhoc.azuredatalakeanalytics.net\",\"accountId\":\"2205941a-83d4-4bb5-bc58-c948d39cca08\",\"creationTime\":\"2016-03-26T00:58:57.1294914Z\",\"lastModifiedTime\":\"2016-03-26T00:58:57.1294914Z\"},\"location\":\"northeurope\",\"tags\":null,\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/InsightServices/providers/Microsoft.DataLakeAnalytics/accounts/datainsightsdbadhoc\",\"name\":\"datainsightsdbadhoc\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-original-request-ids': '4805051f-f8ef-4bfa-86d1-4721cd218164, 1766dd1e-10bf-4f56-a1a5-52eecd052a55',
  'x-ms-ratelimit-remaining-subscription-reads': '14536',
  'x-ms-request-id': '63e56b1a-3528-4f88-9487-6bf742525fac',
  'x-ms-correlation-request-id': '63e56b1a-3528-4f88-9487-6bf742525fac',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T015300Z:63e56b1a-3528-4f88-9487-6bf742525fac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 01:53:00 GMT',
  connection: 'close',
  'content-length': '3251' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4305.azuredatalakeanalytics.net\",\"accountId\":\"b225ccdd-3b17-4972-abf6-ef1369080f9b\",\"creationTime\":\"2016-07-07T01:51:52.0142327Z\",\"lastModifiedTime\":\"2016-07-07T01:51:52.0142327Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4305\",\"name\":\"xplattestadla4305\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5810.azuredatalakeanalytics.net\",\"accountId\":\"2ac859d8-7b09-4697-833a-8df7da69ebbf\",\"creationTime\":\"2016-07-07T01:52:24.739706Z\",\"lastModifiedTime\":\"2016-07-07T01:52:24.739706Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5810\",\"name\":\"xplattestadla5810\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1120',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '72c1d3e8-40bc-4ce2-8400-d1000dbb22bf',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14890',
  'x-ms-correlation-request-id': '32b2133a-5765-4f83-a001-6540f1e9a568',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T015301Z:32b2133a-5765-4f83-a001-6540f1e9a568',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 01:53:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla4305.azuredatalakeanalytics.net\",\"accountId\":\"b225ccdd-3b17-4972-abf6-ef1369080f9b\",\"creationTime\":\"2016-07-07T01:51:52.0142327Z\",\"lastModifiedTime\":\"2016-07-07T01:51:52.0142327Z\"},\"location\":\"eastus2\",\"tags\":{},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla4305\",\"name\":\"xplattestadla4305\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla5810.azuredatalakeanalytics.net\",\"accountId\":\"2ac859d8-7b09-4697-833a-8df7da69ebbf\",\"creationTime\":\"2016-07-07T01:52:24.739706Z\",\"lastModifiedTime\":\"2016-07-07T01:52:24.739706Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/045c28ea-c686-462f-9081-33c34e871ba3/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla5810\",\"name\":\"xplattestadla5810\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1120',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '72c1d3e8-40bc-4ce2-8400-d1000dbb22bf',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14890',
  'x-ms-correlation-request-id': '32b2133a-5765-4f83-a001-6540f1e9a568',
  'x-ms-routing-request-id': 'CENTRALUS:20160707T015301Z:32b2133a-5765-4f83-a001-6540f1e9a568',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 07 Jul 2016 01:53:01 GMT',
  connection: 'close' });
 return result; }]];