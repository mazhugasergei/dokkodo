"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface ExpandableSectionProps {
	title: string
	children: React.ReactNode
	defaultExpanded?: boolean
}

export function ExpandableSection({ title, children, defaultExpanded = false }: ExpandableSectionProps) {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded)

	return (
		<div>
			<div className="flex items-center gap-1">
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="group flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
				>
					{title}
					{isExpanded ? (
						<ChevronUp
							size={14}
							className="text-gray-500 transition-transform duration-200 group-hover:text-gray-700"
						/>
					) : (
						<ChevronDown
							size={14}
							className="text-gray-500 transition-transform duration-200 group-hover:text-gray-700"
						/>
					)}
				</button>
			</div>
			<div className={`overflow-hidden transition-all duration-200 ease-in-out ${isExpanded ? "max-h-96" : "max-h-0"}`}>
				<div className="pt-2 text-sm text-gray-700">{children}</div>
			</div>
		</div>
	)
}
