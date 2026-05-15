export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Optimization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Eliminate Expensive Tokens<br />
          <span className="text-[#58a6ff]">from Your AI Prompts</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste any prompt and instantly see which words, phrases, and formatting are wasting your budget — with exact cost savings estimates and A/B testing built in.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $39/mo
        </a>
        <p className="text-[#484f58] text-sm mt-4">No credit card required for free analysis. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Token counting', 'Redundancy detection', 'Cost estimates', 'A/B testing', 'GPT-4 & Claude support'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt analyses',
              'Token-level waste breakdown',
              'Cost savings calculator',
              'A/B test original vs optimized',
              'Supports GPT-4, Claude, Gemini',
              'Export optimized prompts',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the optimizer detect wasteful tokens?</h3>
            <p className="text-[#8b949e] text-sm">We use NLP techniques to identify filler words, redundant phrases, over-specified formatting instructions, and verbose preambles that models ignore — then show you exactly what to cut and how much you save.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Will optimizing my prompts change the output quality?</h3>
            <p className="text-[#8b949e] text-sm">Only redundant tokens are flagged. The A/B testing feature lets you compare outputs side-by-side before committing to any change, so you stay in full control of quality.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which AI models are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support OpenAI (GPT-3.5, GPT-4, GPT-4o), Anthropic Claude, and Google Gemini — with accurate per-model token pricing so cost estimates are always precise.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Prompt Token Waste Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
