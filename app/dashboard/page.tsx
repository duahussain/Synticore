"use client";

import { Eye, EyeOff, LockKeyhole, Mail, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

export default function DashboardLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Your themed dashboard login is ready to connect to your authentication service.");
  }

  return (
    <main className="client-portal">
      <header className="portal-header">
        <a className="portal-brand" href="/" aria-label="The Oakmont Digital home">
          <span className="portal-mark"><Sparkles size={22} /></span>
          <span>Oakmont</span>
        </a>
        <span className="portal-label">Client portal</span>
      </header>

      <section className="portal-shell" aria-labelledby="portal-title">
        <div className="portal-intro">
          <span>THE OAKMONT DIGITAL</span>
          <h1>Everything for your growth system, in one place.</h1>
          <p>Review your website, leads, conversations, and follow-up from a single dashboard.</p>
          <div className="portal-points" aria-hidden="true">
            <div><i />Website &amp; visibility</div>
            <div><i />Leads &amp; conversations</div>
            <div><i />Follow-up &amp; results</div>
          </div>
        </div>

        <form className="portal-login" onSubmit={handleSubmit}>
          <div className="portal-login-mark"><Sparkles size={20} /></div>
          <p className="portal-overline">WELCOME BACK</p>
          <h2 id="portal-title">Sign in to your account</h2>
          <p className="portal-copy">Use your Oakmont account details to access your workspace.</p>

          <label htmlFor="portal-email">Email address</label>
          <div className="portal-field">
            <Mail size={18} aria-hidden="true" />
            <input id="portal-email" type="email" autoComplete="email" placeholder="you@company.com" required />
          </div>

          <label htmlFor="portal-password">Password</label>
          <div className="portal-field">
            <LockKeyhole size={18} aria-hidden="true" />
            <input id="portal-password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" required />
            <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <a className="portal-forgot" href="mailto:support@theoakmontdigital.com?subject=Password%20reset">Forgot password?</a>
          <button className="portal-submit" type="submit">Sign in</button>
          {notice && <p className="portal-notice" role="status">{notice}</p>}
        </form>
      </section>
    </main>
  );
}
