import { useMemo, useState } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Form() {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		focus: '',
	})
	const [touched, setTouched] = useState({
		name: false,
		email: false,
		focus: false,
	})

	const errors = useMemo(() => {
		return {
			name: formValues.name.trim() ? '' : 'Full name is required.',
			email: emailPattern.test(formValues.email.trim())
				? ''
				: 'Enter a valid email address.',
			focus: formValues.focus.trim().length >= 12
				? ''
				: 'Please add at least 12 characters.',
		}
	}, [formValues])

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormValues((prev) => ({ ...prev, [name]: value }))
	}

	const handleBlur = (event) => {
		const { name } = event.target
		setTouched((prev) => ({ ...prev, [name]: true }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setTouched({ name: true, email: true, focus: true })
	}

	return (
		<section className="section section-invite" id="invite">
			<div className="section-header">
				<div className="hero-badge">Personalized Experience</div>
				<h2>Generate Your Personal Invitation</h2>
				<p>
					Tell us about your role and challenges. We'll create a personalized
					conference experience tailored to your needs.
				</p>
			</div>
			<div className="invite-card">
				<form noValidate onSubmit={handleSubmit}>
					<label>
						Full Name
						<input
							type="text"
							name="name"
							value={formValues.name}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Enter your full name"
							aria-invalid={Boolean(touched.name && errors.name)}
						/>
						{touched.name && errors.name ? (
							<span className="input-error">{errors.name}</span>
						) : null}
					</label>
					<label>
						Email Address
						<input
							type="email"
							name="email"
							value={formValues.email}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="your.email@company.com"
							aria-invalid={Boolean(touched.email && errors.email)}
						/>
						{touched.email && errors.email ? (
							<span className="input-error">{errors.email}</span>
						) : null}
					</label>
					<label>
						Professional Focus / Career Challenges
						<textarea
							rows="4"
							name="focus"
							value={formValues.focus}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="e.g., implementing AI in legacy supply chain systems, reducing operational costs, improving demand forecasting..."
							aria-invalid={Boolean(touched.focus && errors.focus)}
						/>
						{touched.focus && errors.focus ? (
							<span className="input-error">{errors.focus}</span>
						) : null}
					</label>
					<button type="submit" className="primary-button full">
						Generate Personalized Invite
					</button>
				</form>
			</div>
		</section>
	)
}

export default Form
