# editorconfig 配置

[editorconfig 官方文档](https://editorconfig.org/)

## .editorconfig 配置

```sh
# 是否位于根目录
root = true

# 作用范围
[*.{js,jsx,ts,tsx,vue}]
# 文档编码格式
charset = utf-8
# 换行符的使用形式（主要是解决window 和 mac或unix 的不同）
end_of_line = lf
# 缩进的大小
indent_size = 2
# 缩进的方式
indent_style = space
# 文档是否需要以换行结尾（/n）
insert_final_newline = true
# 文件结尾是否允许空格
trim_trailing_whitespace = true

```
