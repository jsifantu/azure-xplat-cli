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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-9e5c-722ddbfed101\",\"location\":\"global\",\"tags\":{},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":18}}", { 'cache-control': 'private',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-9e5c-722ddbfed101',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4ce3e78d-6b64-4280-b5e2-4fd7d5fdcc14',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'e42b568b-6c95-4b29-9eb8-359cb6d1b035',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T141613Z:e42b568b-6c95-4b29-9eb8-359cb6d1b035',
  date: 'Thu, 25 Aug 2016 14:16:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-9e5c-722ddbfed101\",\"location\":\"global\",\"tags\":{},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":18}}", { 'cache-control': 'private',
  'content-length': '469',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-9e5c-722ddbfed101',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '4ce3e78d-6b64-4280-b5e2-4fd7d5fdcc14',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'e42b568b-6c95-4b29-9eb8-359cb6d1b035',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T141613Z:e42b568b-6c95-4b29-9eb8-359cb6d1b035',
  date: 'Thu, 25 Aug 2016 14:16:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"4122812c-44b0-4d61-8742-b507fba3efba\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"4e042490-1bf1-4344-8691-aa341caaa6bf\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-07.azure-dns.com.\"},{\"nsdname\":\"ns2-07.azure-dns.net.\"},{\"nsdname\":\"ns3-07.azure-dns.org.\"},{\"nsdname\":\"ns4-07.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"f2ba3046-b201-416f-a419-7c77bf32db84\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"hostmaster.example1.com.\",\"expireTime\":1814400,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":10800,\"refreshTime\":43200,\"retryTime\":900,\"serialNumber\":2003080800}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/default\",\"name\":\"default\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"b268fd17-39ed-4298-8f35-d0aa77b9bf12\",\"properties\":{\"fqdn\":\"default.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"0.1.2.3\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/record\",\"name\":\"record\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"4c32633c-0460-4694-aeef-0c233d748f24\",\"properties\":{\"fqdn\":\"record.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"bar.foo.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/subzone\",\"name\":\"subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"f4733f47-53f3-4676-8663-02456cb98c6c\",\"properties\":{\"fqdn\":\"subzone.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"3.4.5.6\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname.subzone\",\"name\":\"test-cname.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"b784e974-301b-479e-9353-6db1d72a9784\",\"properties\":{\"fqdn\":\"test-cname.subzone.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.subzone.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www.subzone\",\"name\":\"www.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"24f13648-7b00-40ee-aa99-d80d0f561e0f\",\"properties\":{\"fqdn\":\"www.subzone.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"4.5.6.7\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/tc\",\"name\":\"tc\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"238e5dae-3cf2-465d-8326-12c2e22db812\",\"properties\":{\"fqdn\":\"tc.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test\",\"name\":\"test\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"02397e3f-5caa-4978-b7b6-339cf52eff5e\",\"properties\":{\"fqdn\":\"test.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"7.8.9.0\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname\",\"name\":\"test-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"25f9346e-c913-4f2e-80ad-69117a8faac9\",\"properties\":{\"fqdn\":\"test-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname2\",\"name\":\"test-cname2\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"61629a8c-8c82-4951-905d-8762d4a90c59\",\"properties\":{\"fqdn\":\"test-cname2.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test-multi-a\",\"name\":\"test-multi-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"148c0a03-5df9-4009-a0ca-3cb4e1d00244\",\"properties\":{\"fqdn\":\"test-multi-a.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"192.168.1.145\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx\",\"name\":\"test-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"0200fd13-2aab-4767-a089-77bfa6fa6dfb\",\"properties\":{\"fqdn\":\"test-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"m1.example1.com.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx2\",\"name\":\"test-mx2\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"b76ff7d8-1795-4e28-8aba-b8d123a0d753\",\"properties\":{\"fqdn\":\"test-mx2.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"m1.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv\",\"name\":\"test-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"60d75b4c-c513-4f72-bb89-c71dc3a0e157\",\"properties\":{\"fqdn\":\"test-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.example1.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv2\",\"name\":\"test-srv2\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"70d50304-6964-42a5-8cca-c0f5686b38ba\",\"properties\":{\"fqdn\":\"test-srv2.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www\",\"name\":\"www\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"28fb66ac-2f08-4d0c-8f69-df960f7605d9\",\"properties\":{\"fqdn\":\"www.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"2.3.4.5\"}]}}]}", { 'cache-control': 'private',
  'content-length': '7019',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '69fa68ae-9d98-4800-be56-8315de889e3c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '20595267-e871-44ae-ae04-295707d4b58f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T141614Z:20595267-e871-44ae-ae04-295707d4b58f',
  date: 'Thu, 25 Aug 2016 14:16:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2016-04-01')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"4122812c-44b0-4d61-8742-b507fba3efba\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/NS\",\"etag\":\"4e042490-1bf1-4344-8691-aa341caaa6bf\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":172800,\"NSRecords\":[{\"nsdname\":\"ns1-07.azure-dns.com.\"},{\"nsdname\":\"ns2-07.azure-dns.net.\"},{\"nsdname\":\"ns3-07.azure-dns.org.\"},{\"nsdname\":\"ns4-07.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/SOA\",\"etag\":\"f2ba3046-b201-416f-a419-7c77bf32db84\",\"properties\":{\"fqdn\":\"example1.com.\",\"TTL\":3600,\"SOARecord\":{\"email\":\"hostmaster.example1.com.\",\"expireTime\":1814400,\"host\":\"ns1-07.azure-dns.com.\",\"minimumTTL\":10800,\"refreshTime\":43200,\"retryTime\":900,\"serialNumber\":2003080800}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/default\",\"name\":\"default\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"b268fd17-39ed-4298-8f35-d0aa77b9bf12\",\"properties\":{\"fqdn\":\"default.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"0.1.2.3\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/record\",\"name\":\"record\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"4c32633c-0460-4694-aeef-0c233d748f24\",\"properties\":{\"fqdn\":\"record.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"bar.foo.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/subzone\",\"name\":\"subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"f4733f47-53f3-4676-8663-02456cb98c6c\",\"properties\":{\"fqdn\":\"subzone.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"3.4.5.6\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname.subzone\",\"name\":\"test-cname.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"b784e974-301b-479e-9353-6db1d72a9784\",\"properties\":{\"fqdn\":\"test-cname.subzone.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.subzone.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www.subzone\",\"name\":\"www.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"24f13648-7b00-40ee-aa99-d80d0f561e0f\",\"properties\":{\"fqdn\":\"www.subzone.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"4.5.6.7\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/tc\",\"name\":\"tc\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"238e5dae-3cf2-465d-8326-12c2e22db812\",\"properties\":{\"fqdn\":\"tc.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test\",\"name\":\"test\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"02397e3f-5caa-4978-b7b6-339cf52eff5e\",\"properties\":{\"fqdn\":\"test.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"7.8.9.0\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname\",\"name\":\"test-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"25f9346e-c913-4f2e-80ad-69117a8faac9\",\"properties\":{\"fqdn\":\"test-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname2\",\"name\":\"test-cname2\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"61629a8c-8c82-4951-905d-8762d4a90c59\",\"properties\":{\"fqdn\":\"test-cname2.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"r1.\"}}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test-multi-a\",\"name\":\"test-multi-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"148c0a03-5df9-4009-a0ca-3cb4e1d00244\",\"properties\":{\"fqdn\":\"test-multi-a.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"192.168.1.145\"}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx\",\"name\":\"test-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"0200fd13-2aab-4767-a089-77bfa6fa6dfb\",\"properties\":{\"fqdn\":\"test-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"m1.example1.com.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx2\",\"name\":\"test-mx2\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"b76ff7d8-1795-4e28-8aba-b8d123a0d753\",\"properties\":{\"fqdn\":\"test-mx2.example1.com.\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"m1.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv\",\"name\":\"test-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"60d75b4c-c513-4f72-bb89-c71dc3a0e157\",\"properties\":{\"fqdn\":\"test-srv.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.example1.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv2\",\"name\":\"test-srv2\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"70d50304-6964-42a5-8cca-c0f5686b38ba\",\"properties\":{\"fqdn\":\"test-srv2.example1.com.\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www\",\"name\":\"www\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"28fb66ac-2f08-4d0c-8f69-df960f7605d9\",\"properties\":{\"fqdn\":\"www.example1.com.\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"2.3.4.5\"}]}}]}", { 'cache-control': 'private',
  'content-length': '7019',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '69fa68ae-9d98-4800-be56-8315de889e3c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '20595267-e871-44ae-ae04-295707d4b58f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160825T141614Z:20595267-e871-44ae-ae04-295707d4b58f',
  date: 'Thu, 25 Aug 2016 14:16:14 GMT',
  connection: 'close' });
 return result; }]];