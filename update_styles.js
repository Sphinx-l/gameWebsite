const fs = require('fs');

// 读取profile.html文件
const profileContent = fs.readFileSync('profile.html', 'utf8');

// 定义新的样式
const newTagStyles = `        .tag {
            background: rgba(255, 255, 255, 0.85);
            color: #FF6B6B;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            border: 1px solid rgba(255, 107, 107, 0.3);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-right: 0.35rem;
            display: inline-flex;
            align-items: center;
            font-weight: 500;
        }
        .tag::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #FF6B6B;
            border-radius: 50%;
            margin-right: 4px;
        }`;

// 替换原来的tag样式
const oldTagStylePattern = /\.tag\s*\{[^}]*\}/;
const updatedProfileContent = profileContent.replace(oldTagStylePattern, newTagStyles);

// 添加暗黑模式的tag样式
const darkModeTagStyles = `        .dark-mode .tag {
            background: rgba(60, 60, 70, 0.9);
            color: #FF8C8C;
            border-color: rgba(255, 140, 140, 0.3);
        }`;
        
// 找到暗黑模式的text-gray-900样式的结束位置，并在其后添加暗黑模式的tag样式
const textGray900Pattern = /\.dark-mode\s*\.text-gray-900\s*\{[^}]*\}/;
const finalProfileContent = updatedProfileContent.replace(textGray900Pattern, (match) => {
    return match + '\n' + darkModeTagStyles;
});

// 写入文件
fs.writeFileSync('profile.html', finalProfileContent, 'utf8');

console.log('Profile.html styles updated successfully!'); 