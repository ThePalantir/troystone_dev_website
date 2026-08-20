import { ArrowUpRight } from "lucide-react";

type ScheduleEmbedProps = {
  bookingUrl: string;
  embedUrl: string;
};

export function ScheduleEmbed({ bookingUrl, embedUrl }: ScheduleEmbedProps) {
  return (
    <div className="schedule-embed">
      <div className="schedule-frame-shell">
        <iframe
          className="schedule-frame"
          src={embedUrl}
          title="Google Calendar appointment schedule for Troy Stone"
        />
      </div>
      <p className="schedule-fallback">
        Having trouble with the scheduler?{" "}
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          Open the Google scheduling page
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </p>
    </div>
  );
}
