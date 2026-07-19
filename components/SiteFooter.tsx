import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return <footer>
    <Link className="wordmark" href="/" aria-label="Troy Stone, home"><Image className="brand-mark" src="/ts-initials.png" alt="" width={64} height={48} /></Link>
    <p>Enterprise architecture · Technology leadership · Accountable AI</p>
    <div className="footer-links">
      <span className="built-by"><strong>Built by</strong> <a className="truecore-link" href="https://truecore.services/" target="_blank" rel="noreferrer"><Image className="truecore-logo" src="/truecore-logo.png" alt="" width={24} height={18} /><strong>truecore.services</strong></a></span>
      <a className="linkedin-link" href="https://www.linkedin.com/in/troystone" aria-label="LinkedIn">in</a>
    </div>
  </footer>;
}
