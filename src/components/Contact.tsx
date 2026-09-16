import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  FileText,
  MessageSquare
} from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Job Opportunity / Engineering Project');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || 'Full-Stack / Backend Project Inquiry');
    const bodyContent = encodeURIComponent(
      `Hello Mustafa,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${bodyContent}`;
  };

  return (
    <section id="Contact" className="py-20 bg-[#222222] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference site */}
        <div className="text-center mb-16">
          <span className="text-3xl sm:text-4xl font-light text-white flex items-center justify-center gap-2">
            Get <h4 className="text-3xl sm:text-4xl font-extrabold text-[#bac964] inline-block m-0">In Touch</h4>
          </span>
          <p className="text-white/50 text-sm sm:text-base mt-2 max-w-md mx-auto">
            Feel free to reach out for software engineering roles, freelance systems, or collaboration.
          </p>
        </div>

        {/* Signature Reference Site Container: Asymmetrical border-radius 50px 0 */}
        <div className="contact-container-radius bg-[#333333] p-8 sm:p-12 md:p-14 shadow-2xl shadow-black/50 border border-white/5">
          
          <h6 className="text-[#bac964] text-lg font-mono uppercase tracking-widest mb-8 pb-3 border-b border-white/10 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#89BF55]" />
            <span>My Contact Details</span>
          </h6>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-sm sm:text-base">
            
            {/* Left Column: Direct channels */}
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="block text-[#bac964] font-semibold text-sm mb-1">Email:</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white/70 hover:text-white font-mono text-sm sm:text-base transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-[#222222] text-[#bac964] hover:bg-[#89BF55] hover:text-[#222222] transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="block text-[#bac964] font-semibold text-sm mb-1">WhatsApp:</span>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white font-mono text-sm sm:text-base transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded bg-[#222222] text-[#bac964] hover:bg-[#89BF55] hover:text-[#222222] transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div>
                <span className="block text-[#bac964] font-semibold text-sm mb-1">LinkedIn:</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-mono text-xs sm:text-sm break-all transition-colors underline decoration-white/20"
                >
                  linkedin.com/in/mostafa-essam-384413203
                </a>
              </div>

              {/* GitHub */}
              <div>
                <span className="block text-[#bac964] font-semibold text-sm mb-1">GitHub:</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-mono text-xs sm:text-sm break-all transition-colors underline decoration-white/20"
                >
                  github.com/MostafaEssam2002
                </a>
              </div>

            </div>

            {/* Right Column: Meta & Location */}
            <div className="space-y-6 md:border-l md:border-white/10 md:pl-8">
              
              <div>
                <span className="block text-[#bac964] font-semibold text-sm mb-1">Phone:</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-white/70 hover:text-white font-mono text-sm sm:text-base transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              <div>
                <span className="block text-[#bac964] font-semibold text-sm mb-1">Address / Location:</span>
                <span className="text-white/70 text-sm sm:text-base flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#bac964]" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>

              <div>
                <span className="block text-[#bac964] font-semibold text-sm mb-1">Availability:</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#222222] text-white border border-[#89BF55]/40">
                  <span className="w-2 h-2 rounded-full bg-[#89BF55] animate-pulse" />
                  <span>Open for Full-Time & Freelance</span>
                </span>
              </div>

              {/* Resume CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 rounded-full bg-[#bac964] hover:bg-[#89BF55] text-[#222222] font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Printable CV</span>
                </button>
              </div>

            </div>

          </div>

          {/* Quick Direct Message Form inside the card */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h6 className="text-white font-semibold text-sm mb-4">
              Send a Direct Email to Mustafa
            </h6>
            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#222222] text-white text-sm border border-white/10 focus:border-[#bac964] focus:outline-none placeholder-white/40 font-light"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#222222] text-white text-sm border border-white/10 focus:border-[#bac964] focus:outline-none placeholder-white/40 font-light"
                />
              </div>

              <input
                type="text"
                required
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#222222] text-white text-sm border border-white/10 focus:border-[#bac964] focus:outline-none placeholder-white/40 font-light"
              />

              <textarea
                rows={3}
                required
                placeholder="Your Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#222222] text-white text-sm border border-white/10 focus:border-[#bac964] focus:outline-none placeholder-white/40 font-light resize-y"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#bac964] hover:bg-[#89BF55] text-[#222222] font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
