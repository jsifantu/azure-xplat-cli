// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3DB64EE164724\",\"lastModified\":\"2016-09-12T23:31:32.702186Z\",\"creationTime\":\"2016-09-12T23:31:29.060485Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:31:32.702186Z\",\"previousState\":\"disabled\",\"previousStateTransitionTime\":\"2016-09-12T23:31:31.6429262Z\",\"schedule\":{\r\n    \"recurrenceInterval\":\"P2D\"\r\n  },\"jobSpecification\":{\r\n    \"displayName\":\"jobSpecDisplayName\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n    },\"jobManagerTask\":{\r\n      \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"environmentSettings\":[\r\n        {\r\n          \"name\":\"name1\",\"value\":\"value1\"\r\n        },{\r\n          \"name\":\"name2\",\"value\":\"value2\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n    },\"jobPreparationTask\":{\r\n      \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n        }\r\n      ],\"environmentSettings\":[\r\n        {\r\n          \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n        },{\r\n          \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n      },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n    },\"jobReleaseTask\":{\r\n      \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n        }\r\n      ],\"environmentSettings\":[\r\n        {\r\n          \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n        },{\r\n          \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n        }\r\n      ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n    },\"commonEnvironmentSettings\":[\r\n      {\r\n        \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n      },{\r\n        \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n      }\r\n    ],\"poolInfo\":{\r\n      \"autoPoolSpecification\":{\r\n        \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n          \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n            \"nodeFillType\":\"Spread\"\r\n          },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n            \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n          },\"certificateReferences\":[\r\n            {\r\n              \"thumbprint\":\"0123456789abcdef\",\"thumbprintAlgorithm\":\"sha1\",\"storeLocation\":\"LocalMachine\",\"storeName\":\"certStore\",\"visibility\":[\r\n                \"starttask\"\r\n              ]\r\n            }\r\n          ],\"cloudServiceConfiguration\":{\r\n            \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n          }\r\n        }\r\n      }\r\n    },\"metadata\":[\r\n      {\r\n        \"name\":\"specMeta1\",\"value\":\"specMetaValue1\"\r\n      },{\r\n        \"name\":\"specMeta2\",\"value\":\"specMetaValue2\"\r\n      }\r\n    ]\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2016-09-14T23:31:29.060485Z\",\"recentJob\":{\r\n      \"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n    }\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta2\",\"value\":\"value2\"\r\n    },{\r\n      \"name\":\"meta1\",\"value\":\"value1\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:31:32 GMT',
  etag: '0x8D3DB64EE164724',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0c5d9e75-e6ce-4200-8f83-acf8c9c5f880',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '5a4c1408-f90f-4bf9-b3c8-72d9edd5b4df',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:31:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3DB64EE164724\",\"lastModified\":\"2016-09-12T23:31:32.702186Z\",\"creationTime\":\"2016-09-12T23:31:29.060485Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:31:32.702186Z\",\"previousState\":\"disabled\",\"previousStateTransitionTime\":\"2016-09-12T23:31:31.6429262Z\",\"schedule\":{\r\n    \"recurrenceInterval\":\"P2D\"\r\n  },\"jobSpecification\":{\r\n    \"displayName\":\"jobSpecDisplayName\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n    },\"jobManagerTask\":{\r\n      \"id\":\"jobManager\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"environmentSettings\":[\r\n        {\r\n          \"name\":\"name1\",\"value\":\"value1\"\r\n        },{\r\n          \"name\":\"name2\",\"value\":\"value2\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"PT1H\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n    },\"jobPreparationTask\":{\r\n      \"id\":\"jobPrep\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobPrepFilePath\"\r\n        }\r\n      ],\"environmentSettings\":[\r\n        {\r\n          \"name\":\"jobPrepName1\",\"value\":\"jobPrepValue1\"\r\n        },{\r\n          \"name\":\"jobPrepName2\",\"value\":\"jobPrepValue2\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n      },\"runElevated\":false,\"waitForSuccess\":true,\"rerunOnNodeRebootAfterSuccess\":true\r\n    },\"jobReleaseTask\":{\r\n      \"id\":\"jobRelease\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"jobReleaseFilePath\"\r\n        }\r\n      ],\"environmentSettings\":[\r\n        {\r\n          \"name\":\"jobReleaseName1\",\"value\":\"jobReleaseValue1\"\r\n        },{\r\n          \"name\":\"jobReleaseName2\",\"value\":\"jobReleaseValue2\"\r\n        }\r\n      ],\"maxWallClockTime\":\"PT15M\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"runElevated\":false\r\n    },\"commonEnvironmentSettings\":[\r\n      {\r\n        \"name\":\"commonName1\",\"value\":\"commonValue1\"\r\n      },{\r\n        \"name\":\"commonName2\",\"value\":\"commonValue2\"\r\n      }\r\n    ],\"poolInfo\":{\r\n      \"autoPoolSpecification\":{\r\n        \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n          \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n            \"nodeFillType\":\"Spread\"\r\n          },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n            \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n          },\"certificateReferences\":[\r\n            {\r\n              \"thumbprint\":\"0123456789abcdef\",\"thumbprintAlgorithm\":\"sha1\",\"storeLocation\":\"LocalMachine\",\"storeName\":\"certStore\",\"visibility\":[\r\n                \"starttask\"\r\n              ]\r\n            }\r\n          ],\"cloudServiceConfiguration\":{\r\n            \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n          }\r\n        }\r\n      }\r\n    },\"metadata\":[\r\n      {\r\n        \"name\":\"specMeta1\",\"value\":\"specMetaValue1\"\r\n      },{\r\n        \"name\":\"specMeta2\",\"value\":\"specMetaValue2\"\r\n      }\r\n    ]\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2016-09-14T23:31:29.060485Z\",\"recentJob\":{\r\n      \"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n    }\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta2\",\"value\":\"value2\"\r\n    },{\r\n      \"name\":\"meta1\",\"value\":\"value1\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:31:32 GMT',
  etag: '0x8D3DB64EE164724',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0c5d9e75-e6ce-4200-8f83-acf8c9c5f880',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '5a4c1408-f90f-4bf9-b3c8-72d9edd5b4df',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:31:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:31:34 GMT',
  etag: '0x8D3DB64EF0FEF46',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e5279dd-b7c7-4e61-b5d0-953b162ab6c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '084e97f5-00c9-4ef9-849d-f41d061873db',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule',
  date: 'Mon, 12 Sep 2016 23:31:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:31:34 GMT',
  etag: '0x8D3DB64EF0FEF46',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e5279dd-b7c7-4e61-b5d0-953b162ab6c1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '084e97f5-00c9-4ef9-849d-f41d061873db',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule',
  date: 'Mon, 12 Sep 2016 23:31:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3DB64EF0FEF46\",\"lastModified\":\"2016-09-12T23:31:34.3383366Z\",\"creationTime\":\"2016-09-12T23:31:29.060485Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:31:32.702186Z\",\"previousState\":\"disabled\",\"previousStateTransitionTime\":\"2016-09-12T23:31:31.6429262Z\",\"schedule\":{\r\n    \"startWindow\":\"P2D\",\"recurrenceInterval\":\"P1D\"\r\n  },\"jobSpecification\":{\r\n    \"displayName\":\"jobSpecDisplayName2\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n    },\"jobManagerTask\":{\r\n      \"id\":\"jobManager2\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n    },\"poolInfo\":{\r\n      \"autoPoolSpecification\":{\r\n        \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n          \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n            \"nodeFillType\":\"Spread\"\r\n          },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n            \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n          },\"cloudServiceConfiguration\":{\r\n            \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2016-09-13T23:31:29.060485Z\",\"recentJob\":{\r\n      \"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n    }\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:31:34 GMT',
  etag: '0x8D3DB64EF0FEF46',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c8543ec1-0e7a-4dec-a77a-299a098427cd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3e6c21d4-5f98-4e62-862c-60676ac45dc6',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:31:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#jobschedules/@Element\",\"id\":\"xplatJobSchedule\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobschedules/xplatJobSchedule\",\"eTag\":\"0x8D3DB64EF0FEF46\",\"lastModified\":\"2016-09-12T23:31:34.3383366Z\",\"creationTime\":\"2016-09-12T23:31:29.060485Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:31:32.702186Z\",\"previousState\":\"disabled\",\"previousStateTransitionTime\":\"2016-09-12T23:31:31.6429262Z\",\"schedule\":{\r\n    \"startWindow\":\"P2D\",\"recurrenceInterval\":\"P1D\"\r\n  },\"jobSpecification\":{\r\n    \"displayName\":\"jobSpecDisplayName2\",\"priority\":1,\"usesTaskDependencies\":false,\"constraints\":{\r\n      \"maxWallClockTime\":\"P1D\",\"maxTaskRetryCount\":5\r\n    },\"jobManagerTask\":{\r\n      \"id\":\"jobManager2\",\"displayName\":\"jobManagerDisplay\",\"commandLine\":\"cmd /c dir /s\",\"resourceFiles\":[\r\n        {\r\n          \"blobSource\":\"https://testacct.blob.core.windows.net/\",\"filePath\":\"filePath\"\r\n        }\r\n      ],\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":5\r\n      },\"runElevated\":false,\"runExclusive\":true,\"killJobOnCompletion\":false\r\n    },\"poolInfo\":{\r\n      \"autoPoolSpecification\":{\r\n        \"autoPoolIdPrefix\":\"TestSpecPrefix\",\"poolLifetimeOption\":\"jobschedule\",\"keepAlive\":false,\"pool\":{\r\n          \"vmSize\":\"small\",\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n            \"nodeFillType\":\"Spread\"\r\n          },\"resizeTimeout\":\"PT15M\",\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n            \"commandLine\":\"cmd /c dir /s\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n          },\"cloudServiceConfiguration\":{\r\n            \"osFamily\":\"4\",\"targetOSVersion\":\"*\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\"executionInfo\":{\r\n    \"nextRunTime\":\"2016-09-13T23:31:29.060485Z\",\"recentJob\":{\r\n      \"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobSchedule:job-1\",\"id\":\"xplatJobSchedule:job-1\"\r\n    }\r\n  },\"metadata\":[\r\n    {\r\n      \"name\":\"meta3\",\"value\":\"value3\"\r\n    },{\r\n      \"name\":\"meta4\",\"value\":\"value4\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:31:34 GMT',
  etag: '0x8D3DB64EF0FEF46',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c8543ec1-0e7a-4dec-a77a-299a098427cd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '3e6c21d4-5f98-4e62-862c-60676ac45dc6',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:31:33 GMT',
  connection: 'close' });
 return result; }]];