import Image from "next/image";
import Link from "next/link";
import { featureFlags, siteLinks } from "@/data/siteConfig";

export function SiteFooter() {
  return <footer>
    <Link className="wordmark" href="/" aria-label="Troy Stone, home"><Image className="brand-mark" src="/ts-initials.png" alt="" width={64} height={48} /></Link>
    <p>Enterprise architecture · Technology leadership · Accountable AI</p>
    <div className="footer-links">
      {featureFlags.showTrueCore && <span className="built-by"><strong>Built by</strong> <a className="truecore-link" href={siteLinks.trueCore} target="_blank" rel="noreferrer"><Image className="truecore-logo" src="/truecore-logo.png" alt="" width={24} height={18} /><strong>truecore.services</strong></a></span>}
      <a className="linkedin-link" href={siteLinks.linkedIn} aria-label="LinkedIn">in</a>
    </div>
  </footer>;
}
