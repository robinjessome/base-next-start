const path = require('path')

const eslintCommand = (filenames) =>
  `next lint --fix --max-warnings=0 --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const prettierCommand = (filenames) =>
  `prettier --write --ignore-unknown ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --write ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [prettierCommand, eslintCommand],
}
