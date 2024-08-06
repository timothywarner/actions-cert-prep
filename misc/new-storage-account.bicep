param location string = 'eastus'
param storageAccountName string = 'twactionsstg1'
param replication string = 'LRS'

resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: replication
  }
  kind: 'StorageV2'
}
