import { data, locales, signature } from "@/lib/dokkodo"
import { cn } from "@/utils"
import JapaneseText from "./japanese-text"

export function Notebook() {
	return (
		<div className="mx-auto rounded-xl bg-white px-6 py-12 shadow-[0_0_30px_rgba(100,100,100,0.05)] lg:max-w-4xl lg:px-12">
			<header className="mb-10 border-b border-gray-200 pb-10">
				<h1 className="mb-2 text-center text-4xl font-bold text-gray-900">
					<JapaneseText text={data.title.oldJapanese} />（<JapaneseText text={data.title.modernJapanese} />）
				</h1>
				<h2 className="text-center text-lg text-gray-600">
					{data.title.en} / {data.title.zh} / {data.title.ru}
				</h2>
				<p className="mt-3 text-center text-gray-700">
					<JapaneseText text={data.author.jp} /> — {data.author.en} / {data.author.zh} / {data.author.ru} (
					{data.author.year})
				</p>

				<ul className="mt-10 space-y-4">
					{Object.entries(data.description).map(([lang, desc], i) => (
						<li key={i}>{lang === "jp" ? <JapaneseText text={desc} /> : desc}</li>
					))}
				</ul>
			</header>

			{/* verses */}
			<ol className="list-none space-y-8">
				{data.verses.map((verse, index) => (
					<li key={index} className="py-2">
						{locales.map((lang, i) => (
							<div key={lang}>
								<p className={cn("mb-1", lang === "jp" && "text-lg")}>
									{lang === "jp" ? <JapaneseText text={verse[lang]} /> : verse[lang]}
								</p>
								{verse.explanation[lang] && (
									<div className={cn("text-sm text-gray-600 italic", i !== locales.length - 1 && "mb-3")}>
										{lang === "jp" ? <JapaneseText text={verse.explanation[lang]} /> : verse.explanation[lang]}
									</div>
								)}
							</div>
						))}
					</li>
				))}
			</ol>

			{/* signature */}
			<div className="mt-12 space-y-8 border-t border-gray-200 pt-12">
				{signature.map((line, i) => (
					<div key={i}>
						{locales.map((locale, j) => (
							<div key={j}>
								<span className="text-lg leading-0">{i === 0 ? "" : i === 1 ? "　　" : "　　　　　　　　　　　"}</span>
								<span className={locale === "jp" ? "text-lg" : "text-sm text-gray-600"}>
									{locale === "jp" ? <JapaneseText text={line[locale]} /> : line[locale]}
								</span>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}
