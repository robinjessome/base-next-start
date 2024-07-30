import plugin from 'tailwindcss/plugin'

interface PresetStyles {
	'font-size': string
	'line-height': string
	'font-weight': number
	bold?: number
	mobile?: Partial<PresetStyles>
}

const presets: Record<string, PresetStyles> = {
	headline: {
		'font-size': '3rem',
		'line-height': '3.625rem',
		'font-weight': 400,
		bold: 700,
		mobile: {
			'font-size': '2.25rem',
			'line-height': '2.875rem',
		},
	},
	subhead: {
		'font-size': '2.125rem',
		'line-height': '2.75rem',
		'font-weight': 400,
		bold: 700,
		mobile: {
			'font-size': '1.625rem',
			'line-height': '2.25rem',
		},
	},
	'body-lg': {
		'font-size': '1.125rem',
		'line-height': '1.75rem',
		'font-weight': 400,
		bold: 700,
	},
}

export default plugin(({ addComponents }) => {
	for (const [name, { bold, mobile, ...styles }] of Object.entries(presets)) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const rules: Record<string, any> = { [`.typography-${name}`]: styles }

		if (bold) {
			const boldStyles = { ...styles, 'font-weight': bold }

			rules[`.typography-${name}-bold`] = boldStyles
			rules[`.typography-${name} b`] = boldStyles
			rules[`.typography-${name} strong`] = boldStyles
		}

		if (mobile) {
			rules['@screen lg'] = {
				[`.typography-${name}`]: { ...styles, ...mobile },
			}

			if (bold) {
				const boldStyles = { ...styles, ...mobile, 'font-weight': bold }

				rules['@screen lg'][`.typography-${name}-bold`] = boldStyles
				rules['@screen lg'][`.typography-${name} b`] = boldStyles
				rules['@screen lg'][`.typography-${name} strong`] = boldStyles
			}
		}

		addComponents(rules)
	}
})
