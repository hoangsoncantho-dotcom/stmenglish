/**
 * GOOGLE APPS SCRIPT - BACKEND TỰ ĐỘNG LƯU BÀI TẬP VÀO GOOGLE DRIVE 5TB
 * Dành riêng cho Trung tâm STM English - Thầy Nguyễn Hoàng Sơn
 * 
 * Hướng dẫn:
 * 1. Mở trang: https://script.google.com/home/start
 * 2. Bấm "Dự án mới" (New project), đặt tên: "STM_English_Drive_Backend"
 * 3. Xóa hết code mặc định, dán toàn bộ đoạn mã này vào.
 * 4. Bấm nút "Triển khai" (Deploy) ở góc trên bên phải -> Chọn "Tùy chọn triển khai mới" (New deployment).
 * 5. Chọn loại: "Ứng dụng web" (Web app).
 *    - Mô tả: "Nộp bài tập học sinh STM"
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me - hoangson_cantho@...)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone).
 * 6. Bấm "Triển khai" (Deploy) -> Cấp quyền cho ứng dụng (Authorize access).
 * 7. Sao chép đường link URL của ứng dụng web (Web App URL) và dán vào file classroom.html!
 */

function doPost(e) {
  try {
    // 1. Đọc dữ liệu JSON gửi từ website
    var data = JSON.parse(e.postData.contents);
    
    // 2. Tên thư mục lưu bài tập trên Google Drive 5TB của Thầy Sơn
    var folderName = "BaiTap_STM_English";
    
    // 3. Tìm hoặc tự động tạo thư mục nếu chưa có
    var folders = DriveApp.getFoldersByName(folderName);
    var targetFolder;
    if (folders.hasNext()) {
      targetFolder = folders.next();
    } else {
      targetFolder = DriveApp.createFolder(folderName);
    }
    
    // 4. Giải mã dữ liệu file (Base64) và tạo file mới vào thư mục
    var contentType = data.mimeType || "application/octet-stream";
    var decodedBytes = Utilities.base64Decode(data.base64);
    var blob = Utilities.newBlob(decodedBytes, contentType, data.fileName);
    var savedFile = targetFolder.createFile(blob);
    
    // 5. Trả về kết quả thành công cho trang web
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Tải lên thành công",
      fileUrl: savedFile.getUrl(),
      fileName: savedFile.getName()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    // Trả về thông báo lỗi nếu có trục trặc
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Hàm doGet để kiểm tra xem máy chủ Google Apps Script có đang hoạt động tốt không
function doGet(e) {
  return ContentService.createTextOutput("Backend Google Drive STM English đang hoạt động bình thường!");
}

