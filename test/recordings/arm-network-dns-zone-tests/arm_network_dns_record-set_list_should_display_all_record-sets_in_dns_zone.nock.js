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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7824/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"109c9983-808e-4505-8443-2fb1452dbb7b\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-04.azure-dns.com.\"},{\"nsdname\":\"ns2-04.azure-dns.net.\"},{\"nsdname\":\"ns3-04.azure-dns.org.\"},{\"nsdname\":\"ns4-04.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"3d47b939-3651-47f7-b724-86c639554691\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"azuredns-hostmaster.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-04.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300,\"serialNumber\":1}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"627590bb-c4f0-4c64-b267-ce0aef518a66\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[]}}]}", { 'cache-control': 'private',
  'content-length': '1399',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b7a04815-653b-4adc-bbac-f4f21a828bf5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c944ec20-8035-42eb-a5fc-cd90b89af411',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T144038Z:c944ec20-8035-42eb-a5fc-cd90b89af411',
  date: 'Thu, 25 Aug 2016 14:40:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set7824/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"109c9983-808e-4505-8443-2fb1452dbb7b\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-04.azure-dns.com.\"},{\"nsdname\":\"ns2-04.azure-dns.net.\"},{\"nsdname\":\"ns3-04.azure-dns.org.\"},{\"nsdname\":\"ns4-04.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"3d47b939-3651-47f7-b724-86c639554691\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"azuredns-hostmaster.microsoft.com\",\"expireTime\":2419200,\"host\":\"ns1-04.azure-dns.com.\",\"minimumTTL\":300,\"refreshTime\":3600,\"retryTime\":300,\"serialNumber\":1}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set7824\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"627590bb-c4f0-4c64-b267-ce0aef518a66\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[]}}]}", { 'cache-control': 'private',
  'content-length': '1399',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b7a04815-653b-4adc-bbac-f4f21a828bf5',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c944ec20-8035-42eb-a5fc-cd90b89af411',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T144038Z:c944ec20-8035-42eb-a5fc-cd90b89af411',
  date: 'Thu, 25 Aug 2016 14:40:38 GMT',
  connection: 'close' });
 return result; }]];