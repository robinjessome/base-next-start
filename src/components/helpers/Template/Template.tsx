type Props = {
	text?: string
}

export default function Template({ text }: Props) {
	if (!text) return null

	return <div className="">{text}</div>
}
