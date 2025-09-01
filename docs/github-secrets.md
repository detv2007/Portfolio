fo# GitHub Repository Secrets

This document describes the required GitHub repository secrets for CI/CD deployment to Azure.

## Required Secrets

### For Azure Static Web Apps

1. **AZURE_STATIC_WEB_APPS_API_TOKEN**
   - **Description**: API token for Azure Static Web Apps
   - **How to get**: 
     1. Go to Azure Portal
     2. Navigate to your Static Web App
     3. Go to "Manage deployment tokens"
     4. Copy the token
   - **Usage**: Used in `.github/workflows/azure-static-web-apps.yml`

### For Azure App Service

1. **AZURE_WEBAPP_PUBLISH_PROFILE**
   - **Description**: Publish profile for Azure Web App
   - **How to get**:
     1. Go to Azure Portal
     2. Navigate to your Web App
     3. Go to "Get publish profile"
     4. Download the file
     5. Copy the content and paste as secret
   - **Usage**: Used in `.github/workflows/azure-app-service.yml`

## Setting up Secrets

1. Go to your GitHub repository
2. Click on "Settings"
3. Click on "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add each secret with the exact name above

## Environment Variables

You can also use environment-specific secrets by creating environments in GitHub:

1. Go to repository settings
2. Click "Environments"
3. Create environments like "production", "staging"
4. Add environment-specific secrets

## Security Best Practices

- Never commit secrets to your repository
- Use the minimum required permissions for each secret
- Rotate secrets regularly
- Use environment-specific secrets when possible
- Monitor secret usage in GitHub Actions logs


