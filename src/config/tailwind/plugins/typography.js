const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
  const presets = {
    'headline': {
      'font-size': '3rem',
      'line-height': '3.625rem',
      'font-weight': 400,
      'letter-spacing': '0px',
      'bold': 700,
      'mobile': {
        'font-size': '2.25rem',
        'line-height': '2.875rem',
      },
    },
    'subhead': {
      'font-size': '2.125rem',
      'line-height': '2.75rem',
      'font-weight': 400,
      'letter-spacing': '0px',
      'bold': 700,
      'mobile': {
        'font-size': '1.625rem',
        'line-height': '2.25rem',
      },
    },
    'body-lg': {
      'font-size': '1.125rem',
      'line-height': '1.75rem',
      'font-weight': 400,
      'letter-spacing': '0px',
      'bold': 700,
    },
  }

  for (const [name, { bold, mobile, ...styles }] of Object.entries(presets)) {
    const rules = { [`.text-preset-${name}`]: styles }

    if (bold) {
      const boldStyles = { ...styles, 'font-weight': bold }

      rules[`.text-preset-${name}-bold`] = boldStyles
      rules[`.text-preset-${name} b`] = boldStyles
      rules[`.text-preset-${name} strong`] = boldStyles
    }

    if (mobile) {
      rules['@screen lg'] = {
        [`.text-preset-${name}`]: { ...styles, ...mobile },
      }

      if (bold) {
        const boldStyles = { ...styles, ...mobile, 'font-weight': bold }

        rules['@screen lg'][`.text-preset-${name}-bold`] = boldStyles
        rules['@screen lg'][`.text-preset-${name} b`] = boldStyles
        rules['@screen lg'][`.text-preset-${name} strong`] = boldStyles
      }
    }

    addComponents(rules)
  }
})
