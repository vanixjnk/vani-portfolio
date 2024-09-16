/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Cấu hình xuất tĩnh
    images: {
        unoptimized: true, // Vô hiệu hóa tối ưu hóa hình ảnh khi xuất tĩnh
    },
};

module.exports = nextConfig;
