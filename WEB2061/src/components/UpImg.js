import axios from "axios";
const UpImg = async (files) => {
    if (files) {
        const CLOUD_NAME = "phuong-fpoly";
        const PRESENT_NAME = "upload_exam";
        const urls = [];
        const FOLDER_NAME = "EXAM_ECMA"
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

        // khởi tạo đối tượng biểu mẫu xử lí ảnh
        const formData = new FormData();
        formData.append("upload_preset", PRESENT_NAME)
        formData.append("folder", FOLDER_NAME)
        for (const file of files) {
            formData.append("file", file)
            const response = await axios.post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            urls.push(response.data.secure_url);
        }
        return urls;
    }
}

export default UpImg
