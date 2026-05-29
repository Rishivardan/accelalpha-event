import { useMemo, useState } from 'react'
import { matchAndInvite } from '../services/api'

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
	const [shouldShake, setShouldShake] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [result, setResult] = useState(null)
	const [errorMessage, setErrorMessage] = useState('')

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

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (isSubmitting) {
			return
		}
		setTouched({ name: true, email: true, focus: true })
		const hasErrors = Object.values(errors).some((error) => error)
		if (hasErrors) {
			setShouldShake(true)
			setTimeout(() => setShouldShake(false), 450)
			return
		}

		setIsSubmitting(true)
		setErrorMessage('')
		setResult(null)

		try {
			const response = await matchAndInvite({
				name: formValues.name.trim(),
				email: formValues.email.trim(),
				professional_focus: formValues.focus.trim(),
			})
			setResult(response)
			setFormValues({ name: '', email: '', focus: '' })
			setTouched({ name: false, email: false, focus: false })
		} catch (error) {
			setErrorMessage(typeof error === 'string' ? error : 'Something went wrong.')
		} finally {
			setIsSubmitting(false)
		}
	}

	const formatEmailBody = (text) => {
		if (!text) {
			return ''
		}
		const escaped = text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
		return escaped
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\n/g, '<br />')
	}

	return (
		<section className="section section-invite" id="invite" data-reveal>
			<div className="section-header">
				<div className="hero-badge">Personalized Experience</div>
				<h2>Generate Your Personal Invitation</h2>
				<p>
					Tell us about your role and challenges. We'll create a personalized
					conference experience tailored to your needs.
				</p>
			</div>
			<div className={`invite-card ${shouldShake ? 'shake' : ''}`}>
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
						{isSubmitting ? (
							<span className="button-loading">
								<span className="spinner" aria-hidden="true"></span>
								Generating Invite...
							</span>
						) : (
							'Generate Personalized Invite'
						)}
					</button>
				</form>
				{errorMessage ? (
					<div className="invite-response error">{errorMessage}</div>
				) : null}
				{result ? (
					<div className="invite-response success">
						<div className="response-title">Matched Session</div>
						<div className="response-session">
							<strong>{result.matched_session?.title}</strong>
							<span>{result.matched_session?.time}</span>
							<span>{result.matched_session?.speaker}</span>
						</div>
						<div className="response-title">Draft Email</div>
						<div
							className="email-body"
							dangerouslySetInnerHTML={{
								__html: formatEmailBody(result.email_body),
							}}
						/>
					</div>
				) : null}
			</div>
		</section>
	)
}

export default Form
