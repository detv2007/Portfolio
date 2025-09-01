# Deployment Guide

This guide explains how to deploy the portfolio website to Azure Cloud using GitHub Actions CI/CD.

## Prerequisites

1. **Azure Account**: Active Azure subscription
2. **GitHub Account**: Repository with the portfolio website code
3. **Azure CLI**: Installed and configured locally
4. **Node.js**: Version 18 or higher

## Deployment Options

### Option 1: Azure Static Web Apps (Recommended)

Azure Static Web Apps is perfect for Next.js applications and provides:
- Global CDN
- Built-in authentication
- Serverless API support
- Automatic builds from GitHub

#### Setup Steps:

1. **Create Static Web App in Azure**:
   ```bash
   az staticwebapp create \
     --name "portfolio-website" \
     --resource-group "portfolio-rg" \
     --location "East US" \
     --source "https://github.com/yourusername/portfolio-website" \
     --branch "main" \
     --app-location "/" \
     --output-location ".next"
   ```

2. **Get Deployment Token**:
   ```bash
   az staticwebapp secrets list \
     --name "portfolio-website" \
     --resource-group "portfolio-rg"
   ```

3. **Add GitHub Secret**:
   - Go to GitHub repository → Settings → Secrets
   - Add `AZURE_STATIC_WEB_APPS_API_TOKEN` with the token from step 2

4. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add CI/CD configuration"
   git push origin main
   ```

### Option 2: Azure App Service

For more control over the deployment environment:

#### Setup Steps:

1. **Create Web App in Azure**:
   ```bash
   az webapp create \
     --name "portfolio-website" \
     --resource-group "portfolio-rg" \
     --plan "portfolio-plan" \
     --runtime "NODE|18-lts"
   ```

2. **Get Publish Profile**:
   ```bash
   az webapp deployment list-publishing-profiles \
     --name "portfolio-website" \
     --resource-group "portfolio-rg"
   ```

3. **Add GitHub Secret**:
   - Add `AZURE_WEBAPP_PUBLISH_PROFILE` with the publish profile content

4. **Configure Build Settings**:
   - Set build command: `npm run build`
   - Set output directory: `.next`

## Infrastructure as Code (Optional)

Use the provided Bicep template to deploy infrastructure:

```bash
# Deploy infrastructure
./infrastructure/deploy.ps1 \
  -ResourceGroupName "portfolio-rg" \
  -Location "East US" \
  -StaticWebAppName "portfolio-website" \
  -RepositoryUrl "https://github.com/yourusername/portfolio-website" \
  -Branch "main"
```

## Monitoring and Troubleshooting

### Check Deployment Status

1. **GitHub Actions**: Go to Actions tab in your repository
2. **Azure Portal**: Check the Static Web App or Web App status
3. **Logs**: View build and deployment logs in GitHub Actions

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript compilation errors

2. **Deployment Failures**:
   - Verify Azure credentials and permissions
   - Check resource group and app names
   - Ensure secrets are correctly configured

3. **Runtime Issues**:
   - Check Azure app logs
   - Verify environment variables
   - Check for missing dependencies

## Custom Domain Setup

1. **Add Custom Domain in Azure**:
   - Go to Static Web App → Custom domains
   - Add your domain
   - Follow DNS verification steps

2. **Update DNS Records**:
   - Add CNAME record pointing to your Azure app
   - Wait for DNS propagation

## SSL Certificate

Azure Static Web Apps automatically provides SSL certificates for:
- Default domains (*.azurestaticapps.net)
- Custom domains (requires DNS verification)

## Cost Optimization

- **Static Web Apps**: Free tier available for development
- **App Service**: Use Basic tier for production
- **CDN**: Enable Azure CDN for global performance
- **Monitoring**: Use Azure Application Insights for performance monitoring

## Next Steps

After successful deployment:

1. **Test the Application**: Verify all features work correctly
2. **Performance Testing**: Use tools like Lighthouse for optimization
3. **Monitoring Setup**: Configure Azure Application Insights
4. **Backup Strategy**: Set up automated backups if needed
5. **Scaling Plan**: Plan for traffic growth and scaling needs


