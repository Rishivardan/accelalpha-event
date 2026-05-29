import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Agenda from '../components/Agenda'
import Form from '../components/Form'
import Footer from '../components/Footer'

function Home() {
	return (
		<div className="page">
			<Navbar />
			<main>
				<Hero />
				<section className="section section-intro" id="overview" data-reveal>
					<div className="section-header">
						<h2>Chart Your Course to Innovation</h2>
						<p>
							In an era of unprecedented disruption, AI-powered supply chains are
							the compass guiding enterprises through turbulent waters. Join us
							for a transformative day of learning, networking, and strategic
							insights.
						</p>
					</div>
					<div className="feature-grid">
						<article className="feature-card" data-reveal data-reveal-delay="80">
							<div className="feature-icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M7 7h10v10H7z" fill="none" />
									<path
										d="M9 3h6v2H9V3zm0 16h6v2H9v-2zm8-8h4v2h-4v-2zM3 11h4v2H3v-2zm2.2-5.2 1.4-1.4 2.8 2.8-1.4 1.4-2.8-2.8zm9.6 9.6 1.4-1.4 2.8 2.8-1.4 1.4-2.8-2.8zm0-9.6 2.8-2.8 1.4 1.4-2.8 2.8-1.4-1.4zM5.2 16.4l2.8-2.8 1.4 1.4-2.8 2.8-1.4-1.4z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h3>AI & Digital Logistics</h3>
							<p>
								Explore cutting-edge AI and machine learning applications
								transforming supply chain operations.
							</p>
						</article>
						<article className="feature-card" data-reveal data-reveal-delay="140">
							<div className="feature-icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M4 17h4v3H4v-3zm6-5h4v8h-4v-8zm6-7h4v15h-4V5z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h3>Enterprise Innovation</h3>
							<p>
								Learn proven strategies for implementing digital transformation
								at enterprise scale.
							</p>
						</article>
						<article className="feature-card" data-reveal data-reveal-delay="200">
							<div className="feature-icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M7.5 12.5a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3zM4 20a4.5 4.5 0 0 1 9 0H4zm9.5 0a4.5 4.5 0 0 1 9 0h-9z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h3>Industry Networking</h3>
							<p>
								Connect with C-suite executives and thought leaders from leading
								global organizations.
							</p>
						</article>
						<article className="feature-card" data-reveal data-reveal-delay="260">
							<div className="feature-icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M4 4h7v7H4V4zm9 9h7v7h-7v-7zM13 4h7v7h-7V4zM4 13h7v7H4v-7z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h3>Oracle + Accelalpha Expertise</h3>
							<p>
								Gain insights from industry pioneers driving the future of supply
								chain technology.
							</p>
						</article>
					</div>
				</section>
				<Agenda />
				<Form />
				<section className="section section-benefits" id="benefits" data-reveal>
					<div className="section-header">
						<h2>Why Attend This Conference?</h2>
						<p>
							Discover the key technologies and strategies that will define the
							future of supply chain management.
						</p>
					</div>
					<div className="benefit-grid">
						<article className="benefit-card ai" data-reveal data-reveal-delay="80">
							<div className="benefit-icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M9 3h6v2H9V3zm0 16h6v2H9v-2zm8-8h4v2h-4v-2zM3 11h4v2H3v-2zm2.3-5.2 1.4-1.4 2.7 2.7-1.4 1.4-2.7-2.7zm11.7 11.7 1.4-1.4 2.7 2.7-1.4 1.4-2.7-2.7zM7 8h10v8H7V8z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h3>AI Automation</h3>
							<p>
								Leverage machine learning to automate decision-making, optimize
								routes, and reduce manual intervention across your supply chain.
							</p>
						</article>
						<article className="benefit-card analytics" data-reveal data-reveal-delay="140">
							<div className="benefit-icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M5 19h14v2H5v-2zM6 16l4-4 3 3 5-6 2 2-7 8-3-3-3 3-1-3z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h3>Predictive Analytics</h3>
							<p>
								Forecast demand with unprecedented accuracy using advanced AI
								models that learn from historical patterns and market signals.
							</p>
						</article>
						<article className="benefit-card visibility" data-reveal data-reveal-delay="200">
							<div className="benefit-icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M12 5c5 0 9 5 9 7s-4 7-9 7-9-5-9-7 4-7 9-7zm0 3.5A3.5 3.5 0 1 0 12 15a3.5 3.5 0 0 0 0-7z"
										fill="currentColor"
									/>
							</svg>
							</div>
							<h3>Supply Chain Visibility</h3>
							<p>
								Gain real-time insights into every node of your network with IoT
								integration, blockchain tracking, and live dashboards.
							</p>
						</article>
						<article className="benefit-card transformation" data-reveal data-reveal-delay="260">
							<div className="benefit-icon">
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path
										d="M4 4h7v7H4V4zm9 9h7v7h-7v-7zM13 4h7v7h-7V4zM4 13h7v7H4v-7z"
										fill="currentColor"
									/>
							</svg>
							</div>
							<h3>Digital Transformation</h3>
							<p>
								Modernize legacy systems with cloud-native architectures,
								API-first integration, and scalable Oracle infrastructure.
							</p>
						</article>
					</div>
					<div className="stats">
						<div className="stat-card" data-reveal data-reveal-delay="120">
							<h4>500+</h4>
							<span>Enterprise Customers</span>
						</div>
						<div className="stat-card" data-reveal data-reveal-delay="200">
							<h4>35%</h4>
							<span>Average Cost Reduction</span>
						</div>
						<div className="stat-card" data-reveal data-reveal-delay="280">
							<h4>10+</h4>
							<span>Industry Experts</span>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default Home
