import { useEffect, useState } from 'react'
import heroOne from '../assets/hero-1.png'
import heroTwo from '../assets/hero-2.png'

const slides = [heroOne, heroTwo]

function Hero() {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % slides.length)
		}, 5200)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<section className="hero-section" id="hero">
			<div className="hero-slideshow" aria-hidden="true">
				{slides.map((slide, index) => (
					<img
						key={slide}
						src={slide}
						className={`hero-slide ${
							index === activeIndex ? 'active' : ''
						}`}
						alt=""
					/>
				))}
				<div className="hero-overlay"></div>
			</div>
			<div className="hero-content">
				<div className="hero-badge">
					<span className="badge-icon">◆</span>
					Executive Conference 2024
				</div>
				<h1>Troubled Waters</h1>
				<h2>
					Sailing with AI in <span>Supply Chain</span>
				</h2>
				<p className="hero-description">
					Join Oracle and Accelalpha executives for an exclusive exploration of
					AI-powered supply chain transformation, predictive analytics, and
					digital innovation.
				</p>
				<div className="hero-meta">
					<div className="meta-item">
						<span className="meta-icon">◎</span>
						Marriott Resort, The Palm
					</div>
					<div className="meta-item">
						<span className="meta-icon">▣</span>
						November 13, 2024
					</div>
				</div>
				<div className="hero-actions">
					<a className="primary-button" href="#invite">
						Register Now
					</a>
					<a className="secondary-button" href="#agenda">
						Explore Agenda
					</a>
				</div>
				<div className="scroll-indicator">
					<span className="scroll-dot"></span>
				</div>
			</div>
		</section>
	)
}

export default Hero
