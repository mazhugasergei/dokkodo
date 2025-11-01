import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "獨行道 - The Way of Walking Alone",
	description:
		"The Dokkodo (The Way of Walking Alone) is a collection of 21 precepts written by legendary swordsman Miyamoto Musashi shortly before his death. It teaches the importance of non-attachment and living with an independent spirit, distilling the warrior's mindset and life philosophy into concise principles.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
