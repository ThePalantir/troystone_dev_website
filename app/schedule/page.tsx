import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { ScheduleEmbed } from "@/components/ScheduleEmbed";
import { SiteFooter } from "@/components/SiteFooter";
import { getBookingEmbedUrl, siteLinks } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "Schedule a Conversation | Troy Stone" },
  description:
    "Choose a convenient time to schedule a conversation with Troy Stone.",
  alternates: { canonical: "/schedule" },
  robots: { index: false, follow: true },
};

export default function SchedulePage() {
  const bookingUrl = siteLinks.bookingUrl;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main className="schedule-page" id="main">
        <section className="schedule-content" aria-labelledby="schedule-title">
          <Link className="schedule-back-link" href="/">
            <ArrowLeft size={15} aria-hidden="true" />
            Return to TroyStone.dev
          </Link>

          <div className="schedule-intro">
            <p className="eyebrow">Calendar</p>
            <h1 id="schedule-title">Schedule a conversation</h1>
            <p>
              Choose a time that works for you. Meeting details will be sent
              automatically after your appointment is scheduled.
            </p>
          </div>

          {bookingUrl ? (
            <ScheduleEmbed embedUrl={getBookingEmbedUrl(bookingUrl)} />
          ) : (
            <p className="schedule-unavailable">
              Scheduling is temporarily unavailable. Please check back soon.
            </p>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
