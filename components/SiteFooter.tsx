import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CalendarDays } from "lucide-react";
import { featureFlags, siteLinks, weatherWidget } from "@/data/siteConfig";

export function SiteFooter() {
  return <footer>
    <Link className="wordmark" href="/" aria-label="Troy Stone, home"><Image className="brand-mark" src="/ts-initials.png" alt="" width={64} height={48} /></Link>
    <p>Enterprise architecture · Technology leadership · Accountable AI</p>
    <div className="footer-links">
      {featureFlags.showTrueCore && <span className="built-by"><strong>Built by</strong> <a className="truecore-link" href={siteLinks.trueCore} target="_blank" rel="noreferrer"><Image className="truecore-logo" src="/truecore-logo.png" alt="" width={24} height={18} /><strong>truecore.services</strong></a></span>}
      {featureFlags.showWeather && (
        <div className="weather-widget-shell" role="group" aria-label="Current weather for Lehigh Valley, Pennsylvania">
          <a
            className="weatherwidget-io"
            href={weatherWidget.forecastUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Current weather for Lehigh Valley, Pennsylvania — opens Forecast7"
            data-label_1={weatherWidget.labelPrimary}
            data-label_2={weatherWidget.labelSecondary}
            data-font="Helvetica"
            data-mode="Current"
            data-basecolor="#08090a"
            data-textcolor="#c8c9cc"
            data-suncolor="#e5ac62"
            data-mooncolor="#c8c9cc"
            data-cloudcolor="#aeb2b8"
            data-raincolor="#6d9ed3"
            data-snowcolor="#c8c9cc"
          >
            Lehigh Valley weather
          </a>
          <Script
            id="weatherwidget-io-js"
            src="https://weatherwidget.io/js/widget.min.js"
            strategy="afterInteractive"
          />
        </div>
      )}
      <div className="footer-contact-links">
        {siteLinks.bookingUrl && (
          <a
            className="calendar-link"
            href={siteLinks.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a conversation"
            title="Schedule a conversation"
          >
            <CalendarDays size={16} strokeWidth={1.7} aria-hidden="true" />
          </a>
        )}
        <a className="linkedin-link" href={siteLinks.linkedIn} aria-label="LinkedIn">in</a>
      </div>
    </div>
  </footer>;
}
