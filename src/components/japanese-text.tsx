import { Noto_Serif_JP } from "next/font/google"

const notoSerifJP = Noto_Serif_JP()

const JapaneseText = ({ text }: { text: string }) => {
	return <span className={notoSerifJP.className} dangerouslySetInnerHTML={{ __html: text }} />
}

export default JapaneseText
