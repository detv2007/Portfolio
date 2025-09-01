# Azure Infrastructure Deployment Script
# This script deploys the portfolio website infrastructure to Azure

param(
    [Parameter(Mandatory=$true)]
    [string]$ResourceGroupName,
    
    [Parameter(Mandatory=$true)]
    [string]$Location,
    
    [Parameter(Mandatory=$true)]
    [string]$StaticWebAppName,
    
    [Parameter(Mandatory=$true)]
    [string]$RepositoryUrl,
    
    [Parameter(Mandatory=$true)]
    [string]$Branch
)

Write-Host "Starting Azure infrastructure deployment..." -ForegroundColor Green

# Check if Azure CLI is installed
if (-not (Get-Command az -ErrorAction SilentlyContinue)) {
    Write-Error "Azure CLI is not installed. Please install it first."
    exit 1
}

# Check if logged in to Azure
$account = az account show 2>$null | ConvertFrom-Json
if (-not $account) {
    Write-Host "Please log in to Azure..." -ForegroundColor Yellow
    az login
}

# Create resource group if it doesn't exist
Write-Host "Creating/checking resource group: $ResourceGroupName" -ForegroundColor Yellow
$rg = az group show --name $ResourceGroupName 2>$null | ConvertFrom-Json
if (-not $rg) {
    Write-Host "Creating resource group..." -ForegroundColor Yellow
    az group create --name $ResourceGroupName --location $Location
}

# Deploy Bicep template
Write-Host "Deploying Bicep template..." -ForegroundColor Yellow
az deployment group create `
    --resource-group $ResourceGroupName `
    --template-file "infrastructure/main.bicep" `
    --parameters `
        staticWebAppName=$StaticWebAppName `
        location=$Location `
        branch=$Branch `
        repositoryUrl=$RepositoryUrl `
    --verbose

Write-Host "Deployment completed successfully!" -ForegroundColor Green

# Get the Static Web App URL
$staticWebApp = az staticwebapp show --name $StaticWebAppName --resource-group $ResourceGroupName | ConvertFrom-Json
Write-Host "Static Web App URL: $($staticWebApp.defaultHostname)" -ForegroundColor Cyan
Write-Host "Resource Group: $ResourceGroupName" -ForegroundColor Cyan
Write-Host "Location: $Location" -ForegroundColor Cyan



