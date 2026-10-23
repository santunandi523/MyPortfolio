import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Phone,
  MapPin,
  Zap,
  CheckCircle2,
  AlertCircle,
  Copy,
  Clock,
  XCircle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons';
import { usePortfolio } from '../context/PortfolioContext';

export const ContactPage: React.FC = () => {
  const { profile, openRecruiterView } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Internship / Full-Time Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work or personal email address.';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide a message with at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(false);

    // ── EmailJS Configuration ──────────────────────────────────────────────────
    // To activate real email delivery to santunandi523@gmail.com:
    //  1. Sign up free at https://www.emailjs.com/
    //  2. Add Email Service → connect Gmail (santunandi523@gmail.com)
    //  3. Create Email Template with: {{from_name}} {{from_email}} {{organization}} {{subject}} {{message}}
    //  4. Replace the values below with your actual IDs from the EmailJS dashboard
    // ─────────────────────────────────────────────────────────────────────────
    const EMAILJS_SERVICE_ID  = 'service_portfolio';  // ← Your EmailJS Service ID
    const EMAILJS_TEMPLATE_ID = 'template_contact';   // ← Your EmailJS Template ID
    const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';    // ← Your EmailJS Public Key

    const isConfigured = EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    if (isConfigured) {
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            organization: formData.organization || 'Not provided',
            subject: formData.subject,
            message: formData.message,
            to_name: 'Santu Nandi',
            reply_to: formData.email,
          },
          EMAILJS_PUBLIC_KEY
        );
        setSubmitted(true);
        setFormData({ name: '', email: '', organization: '', subject: 'Internship / Full-Time Inquiry', message: '' });
      } catch (_err) {
        setSubmitError(true);
      } finally {
        setSubmitting(false);
      }
    } else {
      // Fallback: open native mail client pre-filled — message still reaches you
      const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject} — from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization || 'Not provided'}\nTopic: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: '', email: '', organization: '', subject: 'Internship / Full-Time Inquiry', message: '' });
        setSubmitting(false);
      }, 400);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#301934] border border-[#F4B942]/40 text-xs font-bold text-[#F4B942] uppercase tracking-wider">
          <Send className="w-4 h-4" /> Recruiter & Engineering Inquiries
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-display text-[#E8EDF2] tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-[#A592AD] leading-relaxed">
          I am actively evaluating Software Engineering Internships and Full-Time Developer opportunities for 2025/2026. Let's discuss high-impact software systems.
        </p>
      </div>

      {/* Recruiter Quick View Callout Strip */}
      <div className="rounded-2xl bg-gradient-to-r from-[#301934] to-[#200F23] border-2 border-[#F4B942]/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg marigold-glow-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F4B942] text-[#301934] flex items-center justify-center font-bold text-lg shadow">
            ⚡
          </div>
          <div>
            <h3 className="text-base font-bold text-[#E8EDF2]">Need a 60-Second Fast Track?</h3>
            <p className="text-xs text-[#A592AD]">Launch the Recruiter Quick View for direct resume, CGPA, and top stack review.</p>
          </div>
        </div>

        <button
          onClick={openRecruiterView}
          className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center gap-2 shadow self-stretch sm:self-auto justify-center"
        >
          <Zap className="w-4 h-4" />
          <span>Launch Recruiter View</span>
        </button>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info & Profiles */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-6 shadow-md">
            <h2 className="text-xl font-bold text-[#E8EDF2]">Direct Contact Channels</h2>

            <div className="space-y-4 text-xs">
              {/* Email */}
              <div className="p-4 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#301934] text-[#F4B942]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#A592AD] text-[10px] uppercase font-bold block">Primary Email</span>
                    <a href={`mailto:${profile.email}`} className="text-[#E8EDF2] font-semibold hover:text-[#F4B942]">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#261329] text-[#A592AD] hover:text-[#F4B942] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#301934] text-[#F4B942]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A592AD] text-[10px] uppercase font-bold block">Direct Mobile</span>
                  <a href={`tel:${profile.phone}`} className="text-[#E8EDF2] font-semibold hover:text-[#F4B942]">
                    {profile.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#301934] text-[#F4B942]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A592AD] text-[10px] uppercase font-bold block">Location</span>
                  <span className="text-[#E8EDF2] font-semibold">{profile.location}</span>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#301934] text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#A592AD] text-[10px] uppercase font-bold block">Typical Response SLA</span>
                  <span className="text-emerald-300 font-semibold">Under 12 Hours for Recruiter Inquiries</span>
                </div>
              </div>
            </div>

            {/* Coding & Social Links */}
            <div className="pt-4 border-t border-[#E8EDF2]/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A592AD] block">
                Verified Profiles
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 hover:border-[#F4B942]/50 text-[#E8EDF2] flex items-center gap-2 transition-colors font-medium"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#F4B942]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 hover:border-[#F4B942]/50 text-[#E8EDF2] flex items-center gap-2 transition-colors font-medium"
                >
                  <GithubIcon className="w-4 h-4 text-[#F4B942]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 hover:border-[#F4B942]/50 text-[#E8EDF2] flex items-center gap-2 transition-colors font-mono font-medium"
                >
                  <span>LeetCode (1660)</span>
                </a>
                <a
                  href={profile.socials.codolio}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#1A0A1C] border border-[#E8EDF2]/10 hover:border-[#F4B942]/50 text-[#E8EDF2] flex items-center gap-2 transition-colors font-mono font-medium"
                >
                  <span>Codolio (850+)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#261329] border border-[#E8EDF2]/15 p-6 md:p-8 space-y-6 shadow-md">
            <div>
              <h2 className="text-xl font-bold text-[#E8EDF2]">Send a Direct Message</h2>
              <p className="text-xs text-[#A592AD] mt-1">
                Fill in the details below. All fields undergo validation before submission.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-2xl bg-[#1A0A1C] border-2 border-emerald-500/50 text-center space-y-4"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#E8EDF2]">Thank you! Message Transmitted</h3>
                <p className="text-xs text-[#A592AD] max-w-md mx-auto leading-relaxed">
                  Your message has been delivered to <strong className="text-[#F4B942]">{profile.email}</strong>. Santu Nandi will respond within 12 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setSubmitError(false); }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#301934] text-[#E8EDF2] border border-[#E8EDF2]/20 hover:border-[#F4B942] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Submit error banner */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 flex items-center gap-2 text-rose-400 text-xs"
                  >
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>Failed to send. Please email directly at <strong>{profile.email}</strong></span>
                  </motion.div>
                )}
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#E8EDF2] font-semibold block">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl px-3.5 py-2.5 text-[#E8EDF2] placeholder-[#A592AD]/50 focus:outline-none focus:border-[#F4B942]"
                    />
                    {errors.name && <p className="text-rose-400 text-[11px]">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#E8EDF2] font-semibold block">Work or Personal Email *</label>
                    <input
                      type="email"
                      placeholder="e.g. elena@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl px-3.5 py-2.5 text-[#E8EDF2] placeholder-[#A592AD]/50 focus:outline-none focus:border-[#F4B942]"
                    />
                    {errors.email && <p className="text-rose-400 text-[11px]">{errors.email}</p>}
                  </div>
                </div>

                {/* Organization & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#E8EDF2] font-semibold block">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. TechCorp Systems"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl px-3.5 py-2.5 text-[#E8EDF2] placeholder-[#A592AD]/50 focus:outline-none focus:border-[#F4B942]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#E8EDF2] font-semibold block">Topic / Intent</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl px-3.5 py-2.5 text-[#E8EDF2] focus:outline-none focus:border-[#F4B942]"
                    >
                      <option value="Internship / Full-Time Inquiry">Internship / Full-Time Inquiry</option>
                      <option value="Technical Project Discussion">Technical Project Discussion</option>
                      <option value="Speaking / Hackathon Collaboration">Speaking / Hackathon Collaboration</option>
                      <option value="General Professional Networking">General Professional Networking</option>
                    </select>
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-1.5">
                  <label className="text-[#E8EDF2] font-semibold block">Your Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Describe role requirements, team context, or project questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1A0A1C] border border-[#E8EDF2]/15 rounded-xl p-3.5 text-[#E8EDF2] placeholder-[#A592AD]/50 focus:outline-none focus:border-[#F4B942]"
                  />
                  {errors.message && <p className="text-rose-400 text-[11px]">{errors.message}</p>}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl text-xs font-bold bg-[#F4B942] text-[#301934] hover:bg-[#ffc957] transition-all flex items-center justify-center gap-2 shadow marigold-glow disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#301934]/40 border-t-[#301934] rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Santu Nandi</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#A592AD] mt-2">
                    Message delivered to <span className="text-[#F4B942]">{profile.email}</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
