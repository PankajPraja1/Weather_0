export const metadata = {
	title: "Contact us"
}

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-white px-6 py-12 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-10 lg:px-16">
			<div className="mx-auto max-w-6xl">
				<header className="mb-12 flex items-center justify-between">
					<a href="/" className="text-2xl font-bold tracking-tight">
						weather<span className="text-sky-400">X</span>
					</a>
					<a
						href="/"
						className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200 dark:hover:text-sky-300"
					>
						Back to weather
					</a>
				</header>

				<section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
					<div className="pt-4">
						<p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500 dark:text-sky-400">
							Get in touch
						</p>
						<h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
							We&apos;re here to help you read the sky.
						</h1>
						<p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
							Have a question about the forecast, a suggestion for weatherX, or
							need a hand? Send us a message and our team will get back to you.
						</p>

						<div className="mt-10 space-y-6">
							<div className="flex gap-4">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-xl text-sky-500 dark:text-sky-300">
									@
								</span>
								<div>
									<p className="font-semibold">Email us</p>
									<a
										href="mailto:hello@weatherx.app"
										className="mt-1 block text-slate-600 transition hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300"
									>
										hello@weatherx.app
									</a>
								</div>
							</div>
							<div className="flex gap-4">
								<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-xl text-sky-500 dark:text-sky-300">
									?
								</span>
								<div>
									<p className="font-semibold">Support hours</p>
									<p className="mt-1 text-slate-600 dark:text-slate-400">Monday–Friday, 9am–5pm</p>
								</div>
							</div>
						</div>
					</div>

					<form className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-2xl shadow-slate-300/30 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-sky-950/20 sm:p-8">
						<div className="grid gap-6 sm:grid-cols-2">
							<label className="text-sm font-medium text-slate-700 dark:text-slate-200">
								Your name
								<input
									type="text"
									name="name"
									placeholder="Alex Morgan"
									required
									className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600"
								/>
							</label>
							<label className="text-sm font-medium text-slate-700 dark:text-slate-200">
								Email address
								<input
									type="email"
									name="email"
									placeholder="you@example.com"
									required
									className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600"
								/>
							</label>
						</div>
						<label className="mt-6 block text-sm font-medium text-slate-700 dark:text-slate-200">
							Subject
							<select
								name="subject"
								className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
							>
								<option>General question</option>
								<option>Report an issue</option>
								<option>Feature suggestion</option>
								<option>Partnership</option>
							</select>
						</label>
						<label className="mt-6 block text-sm font-medium text-slate-700 dark:text-slate-200">
							Message
							<textarea
								name="message"
								rows="6"
								placeholder="How can we help?"
								required
								className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600"
							/>
						</label>
						<button
							type="submit"
							className="mt-6 w-full rounded-xl bg-sky-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-900"
						>
							Send message
						</button>
						<p className="mt-4 text-center text-xs text-slate-500">
							We typically respond within one business day.
						</p>
					</form>
				</section>
			</div>
		</main>
	)
}
