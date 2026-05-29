import { useEffect, useMemo, useRef, useState } from 'react'

const agendaItems = [
	{
		time: '09:30 AM - 10:00 AM',
		category: 'Networking',
		title: 'Registrations',
		speaker: 'Event Operations Team',
		theme: 'neutral',
		keywords: ['check-in', 'reception', 'badging', 'entry'],
		description:
			'Morning arrival, check-in, and badge collection for registered executive delegates and partners.',
	},
	{
		time: '10:00 AM - 10:10 AM',
		category: 'Keynotes',
		title: 'Welcome Note',
		speaker:
			'Richard Buxton (VP EMEA, Accelalpha) & Rohan Chitnis (Sales Director Applications, Oracle)',
		theme: 'keynote',
		keywords: ['opening remarks', 'welcome', 'event launch', 'partnership'],
		description:
			'An introduction and official welcome to the summit by leadership figures from Accelalpha and Oracle, outlining the key themes of regional supply chain evolution.',
	},
	{
		time: '10:10 AM - 10:40 AM',
		category: 'Keynotes',
		title:
			'Industry Keynote (Outlook & Challenges on Digital Logistics & Supply Chain)',
		speaker:
			'Srivatsav Sarvepalli (Regional Director, Supply Chain Solutions, ECEMEA, Oracle)',
		theme: 'keynote',
		keywords: [
			'digital logistics',
			'cost reduction',
			'market volatility',
			'future-proofing',
		],
		description:
			'This high-level industry keynote maps out the current market challenges impacting Gulf regional logistics, focusing on rising costs, macroeconomic changes, and how to build a responsive digital framework.',
	},
	{
		time: '10:40 AM - 11:10 AM',
		category: 'Case Studies',
		title: 'A Practical Guide to Successful Implementation',
		speaker: 'Joe Spear (Partner, Accelalpha)',
		theme: 'case',
		keywords: [
			'implementation guide',
			'risk management',
			'deployment',
			'integration milestones',
		],
		description:
			'A down-to-earth breakdown detailing how modern organizations successfully deploy and integrate enterprise logistics and SCM platforms safely without interrupting ongoing operations.',
	},
	{
		time: '11:10 AM - 11:30 AM',
		category: 'Technical',
		title: 'The Resilient Supply Chain & SCM Innovations',
		speaker: 'Ujjwal Kumar (Principal Domain Lead, ECEMEA, Oracle)',
		theme: 'tech',
		keywords: [
			'Gen AI platform',
			'predictive analytics',
			'automation',
			'visibility tools',
		],
		description:
			"Unveiling Oracle's Gen AI SCM Platform capabilities. Discover how predictive analytics, embedded AI automation, and deep inventory tracking help software systems anticipate disruption before it impacts the bottom line.",
	},
	{
		time: '11:30 AM - 11:50 AM',
		category: 'Networking',
		title: 'Coffee Break',
		speaker: 'Networking Team',
		theme: 'neutral',
		keywords: ['intermission', 'coffee', 'break', 'meetup'],
		description:
			'Short intermission for refreshments, informal discussion, and brief peer-to-peer networking.',
	},
	{
		time: '11:50 AM - 12:10 PM',
		category: 'Business Value',
		title: 'Insights from Digital Evolution',
		speaker: 'Dr. Raman Kumar (CEO, Al-Futtaim Logistics)',
		theme: 'business',
		keywords: [
			'digital evolution',
			'automation results',
			'warehouse scalability',
			'execution',
		],
		description:
			'Real-world practical insights shared from the top of the logistics sector on how to navigate large-scale corporate automation and digital transformations successfully.',
	},
	{
		time: '12:10 PM - 12:40 PM',
		category: 'Panel Discussions',
		title: 'Strategies in Action: Insights from Industry Leaders',
		speaker:
			'Panel: David Moono (Weatherford) & Tamer Hamed (Dubai Cable Company)',
		theme: 'panel',
		keywords: [
			'panel debate',
			'case studies',
			'green operations',
			'inventory tracking',
		],
		description:
			'Interactive panel discussion featuring operational executives sharing their raw case studies, supply chain resilience tactics, and ways to handle green sustainability targets without losing operational momentum.',
	},
	{
		time: '12:40 PM - 1:00 PM',
		category: 'Keynotes',
		title: 'Q&A and Closing Remarks',
		speaker: 'Accelalpha Team',
		theme: 'keynote',
		keywords: ['open floor', 'closing remarks', 'summaries', 'future updates'],
		description:
			'Floor opened up to audience members for burning inquiries, wrapped up with final strategic takeaways from the hosting team.',
	},
	{
		time: '1:00 PM - Onwards',
		category: 'Networking',
		title: 'Lunch & Networking',
		speaker: 'Event Catering Group',
		theme: 'neutral',
		keywords: [
			'lunch',
			'networking',
			'business development',
			'introductions',
		],
		description:
			'A dedicated networking lunch allowing delegates, technology partners, and technical leads to connect directly over real opportunities.',
	},
]

const filters = [
	'All Sessions',
	'Keynotes',
	'Technical',
	'Case Studies',
	'Business Value',
	'Panel Discussions',
	'Networking',
]

function Agenda() {
	const [activeFilter, setActiveFilter] = useState('All Sessions')
	const [openTitle, setOpenTitle] = useState(agendaItems[0]?.title ?? '')
	const [detailHeights, setDetailHeights] = useState({})
	const detailRefs = useRef({})
	const filteredAgenda = useMemo(() => {
		if (activeFilter === 'All Sessions') {
			return agendaItems
		}

		return agendaItems.filter((item) => item.category === activeFilter)
	}, [activeFilter])

	useEffect(() => {
		if (!openTitle) {
			return
		}

		const node = detailRefs.current[openTitle]
		if (!node) {
			return
		}

		setDetailHeights((prev) => ({
			...prev,
			[openTitle]: node.scrollHeight,
		}))
	}, [openTitle, filteredAgenda])

	return (
		<section className="section section-agenda" id="agenda">
			<div className="section-header">
				<h2>Conference Agenda</h2>
				<p>
					A carefully curated journey through AI-powered supply chain
					innovation.
				</p>
			</div>
			<div className="agenda-filters">
				<span className="filter-label">Filter by Category</span>
				<div className="filter-list">
					{filters.map((filter) => (
						<button
							key={filter}
							type="button"
							className={`filter-button ${
								activeFilter === filter ? 'active' : ''
							}`}
							onClick={() => setActiveFilter(filter)}
						>
							{filter}
						</button>
					))}
				</div>
			</div>
			<div className="agenda-list">
				{filteredAgenda.map((item) => {
					const isOpen = openTitle === item.title

					return (
						<article
							key={item.title}
							className={`agenda-card ${item.theme} ${isOpen ? 'open' : ''}`}
						>
							<button
								type="button"
								className="agenda-trigger"
								onClick={() => setOpenTitle(isOpen ? '' : item.title)}
							>
								<div className="agenda-meta">
									<span className="agenda-time">⏰ {item.time}</span>
									<span className="agenda-tag">{item.category}</span>
								</div>
								<h3>{item.title}</h3>
								<p className="agenda-speaker">🎤 {item.speaker}</p>
								<span className="agenda-chevron">⌄</span>
							</button>
							<div
								className="agenda-details"
								ref={(node) => {
									detailRefs.current[item.title] = node
								}}
								style={{
									maxHeight: isOpen
										? `${detailHeights[item.title] ?? 0}px`
										: '0px',
								}}
							>
								<div className="agenda-keywords">
									<span className="keyword-label">Focus Keywords</span>
									<div className="keyword-list">
										{item.keywords.map((keyword, index) => (
											<span
												key={keyword}
												className={`keyword-pill keyword-${index % 5}`}
											>
												{keyword}
											</span>
										))}
									</div>
								</div>
								<p className="agenda-description">{item.description}</p>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Agenda
