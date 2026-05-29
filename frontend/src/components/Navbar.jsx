function Navbar() {
	return (
		<header className="navbar">
			<div className="logo">
				<span className="logo-mark">AP</span>
				<span className="logo-text">Accelalpha Conference</span>
			</div>
			<nav className="nav-links">
				<a href="#overview">Event Overview</a>
				<a href="#agenda">Conference Agenda</a>
				<a href="#invite">Register Now</a>
				<a href="#benefits">Why Attend</a>
			</nav>
			<div className="partner-mark" aria-label="Oracle partner">
				<span className="partner-primary">ORACLE</span>
				<span className="partner-separator">|</span>
				<span className="partner-secondary">Partner</span>
			</div>
		</header>
	)
}

export default Navbar
