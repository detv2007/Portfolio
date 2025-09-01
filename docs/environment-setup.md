# Multi-Environment Deployment Setup Guide

## Tổng quan
Workflow này hỗ trợ 3 environments:
- **Development**: Tự động deploy khi push vào `develop`
- **Production**: Cần approval khi push vào `master`
- **Preview**: Tự động tạo khi có Pull Request

## 1. Tạo Environments trên GitHub

### Development Environment
1. Vào repository → Settings → Environments
2. Click "New environment"
3. Tên: `development`
4. **KHÔNG** cần protection rules (deploy tự động)

### Production Environment
1. Vào repository → Settings → Environments
2. Click "New environment"
3. Tên: `production`
4. **BẬT** protection rules:
   - ✅ "Required reviewers" (chọn ít nhất 1 reviewer)
   - ✅ "Wait timer" (optional: 5 phút)
   - ✅ "Deployment branches" → "Restrict to": `master`

### Preview Environment
1. Vào repository → Settings → Environments
2. Click "New environment"
3. Tên: `preview`
4. **KHÔNG** cần protection rules (deploy tự động)

## 2. Tạo Azure Static Web Apps

### Development App
1. Azure Portal → Create Resource → Static Web App
2. Name: `portfolio-dev-[yourname]`
3. Region: Chọn gần nhất
4. Build Details:
   - Build Preset: `Next.js`
   - App location: `/`
   - Output location: `.next`
5. Sau khi tạo → Configuration → Deployment tokens → Copy token

### Production App
1. Azure Portal → Create Resource → Static Web App
2. Name: `portfolio-prod-[yourname]`
3. Region: Chọn gần nhất
4. Build Details:
   - Build Preset: `Next.js`
   - App location: `/`
   - Output location: `.next`
5. Sau khi tạo → Configuration → Deployment tokens → Copy token

### Preview App (Optional)
1. Azure Portal → Create Resource → Static Web App
2. Name: `portfolio-preview-[yourname]`
3. Region: Chọn gần nhất
4. Build Details:
   - Build Preset: `Next.js`
   - App location: `/`
   - Output location: `.next`
5. Sau khi tạo → Configuration → Deployment tokens → Copy token

## 3. Setup GitHub Secrets

Vào repository → Settings → Secrets and variables → Actions

### Bắt buộc:
- `AZURE_STATIC_WEB_APPS_DEV_TOKEN`: Token từ Development app
- `AZURE_STATIC_WEB_APPS_PROD_TOKEN`: Token từ Production app

### Tùy chọn:
- `AZURE_STATIC_WEB_APPS_PREVIEW_TOKEN`: Token từ Preview app

## 4. Workflow Flow

### Development Branch
```
Push to develop → Build → Auto Deploy to Dev Environment
```

### Master Branch
```
Push to master → Build → Wait for Approval → Deploy to Production
```

### Pull Request
```
Create PR → Build → Deploy Preview → Close PR → Cleanup Preview
```

## 5. Branch Strategy

```
develop (development) ←→ feature branches
    ↓
master (production) ← Pull Request (cần approval)
```

## 6. Monitoring

- **GitHub Actions**: Xem deployment status
- **Azure Portal**: Monitor app performance
- **GitHub Environments**: Track deployment history

## 7. Troubleshooting

### Common Issues:
1. **Build fails**: Kiểm tra Node.js version và dependencies
2. **Deploy fails**: Kiểm tra Azure tokens và permissions
3. **Approval pending**: Kiểm tra environment protection rules

### Debug Commands:
```bash
# Kiểm tra build locally
npm run build

# Kiểm tra Azure CLI
az staticwebapp list
az staticwebapp show --name <app-name>
```

## 8. Cost Optimization

- **Development**: Free tier (nếu có thể)
- **Production**: Standard tier cho production use
- **Preview**: Auto-cleanup khi PR đóng

## 9. Security Best Practices

- ✅ Sử dụng environment protection rules
- ✅ Rotate Azure tokens định kỳ
- ✅ Limit access to production environment
- ✅ Audit deployment logs
