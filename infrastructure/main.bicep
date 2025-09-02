@description('Name of the Static Web App')
param staticWebAppName string = 'portfolio-website'

@description('Location for all resources')
param location string = resourceGroup().location

@description('Branch name to deploy')
param branch string = 'main'

@description('Repository URL')
param repositoryUrl string = 'https://github.com/yourusername/portfolio-website'

@description('Repository token')
@secure()
param repositoryToken string

@description('App settings for the Static Web App')
param appSettings object = {
  'NODE_ENV': 'production'
}

// Static Web App
resource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    branch: branch
    repositoryUrl: repositoryUrl
    buildProperties: {
      apiLocation: ''
      appLocation: '/'
      outputLocation: '.next'
      skipAppBuild: true
    }
  }
}

// App settings
resource appSettingsResource 'Microsoft.Web/staticSites/config@2022-03-01' = {
  name: 'appsettings'
  parent: staticWebApp
  properties: appSettings
}

// Custom domain (optional)
resource customDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  name: 'www.yourdomain.com'
  parent: staticWebApp
  properties: {
    domainName: 'www.yourdomain.com'
    validationMethod: 'dns-txt-token'
  }
}

// Output the Static Web App URL
output staticWebAppUrl string = staticWebApp.properties.defaultHostname
output staticWebAppId string = staticWebApp.id




