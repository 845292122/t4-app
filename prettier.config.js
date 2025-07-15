/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false, // 不添加分号
  trailingComma: "none" // 去除尾随逗号
}
