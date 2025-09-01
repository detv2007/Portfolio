## Mục tiêu:
Thiết kế, phát triển và triển khai một ứng dụng Portfolio Website 
## Bối cảnh thực tế:
Với sự phát triển của của công nghệ thông tin và kinh nghiệm làm việc, để show bản thân ra cho công nghệ thông tin, tôi xây dựng 1 Portfolio Website cho bản thân để các nhà show kinh nghiệm của bản thân.
và cũng giúp cho các nhà tuyển dụng có thể dễ dàng tiếp cận được thông tin của tôi.

## Phạm vi công việc (theo các giai đoạn SDLC)

### 1. Thu thập & Phân tích Yêu cầu
*Hoạt động:*
- Hiển thị thông tin cho các page About, experience, projects, certificate.


### 2. Lập kế hoạch & Ước tính
*Hoạt động:*
- Lựa chọn công nghệ:
    - Frontend: React.js, Next.js, có hỗ trợ darkmode
    - Backend: 
  + .Net
  + Apply Clean Architech và dùng pattern CQRS
 - Frontend và Backend đều chia làm 2 scope 1 là phần cho user view , 1 dành cho admin để update thông tin.
    - Cơ sở dữ liệu: Blod storage table.
 - Github ci/cd
    - Triển khai trên Cloud: Azure cloud

### 3. Thiết kế hệ thống
*Hoạt động:*
- Kiến trúc tổng quát:
    - CDN phân phối nội dung tĩnh cho front end
- Thiết kế cơ sở dữ liệu:
    - Table lưu trữ url các certificate.
 - Các URL này sẽ lưu trữ tạo google drive để tiết kiệm chi phí.
- Thiết kế API:
    - REST API web
    - Tài liệu Swagger
- Thiết kế UI/UX
---

### 4. Phát triển
*Hoạt động:*
- Thiết lập môi trường phát triển & quản lý phiên bản (GitHub)
- Kiểm tra code và phê duyệt merge
- Tích hợp API với các thành phần frontend
- Unit test cho từng module
- Xây dựng layout responsive

*Tài liệu bàn giao:*
- Repository mã nguồn
- Endpoint API kèm tài liệu
---
### 5. Triển khai
*Hoạt động:*
- Thiết lập pipeline CI/CD với GitHub Actions
- Deploy backend frontend lên Azure cloud
- Phát hành bản sản phẩm cuối