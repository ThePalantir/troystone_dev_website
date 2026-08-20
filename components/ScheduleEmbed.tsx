type ScheduleEmbedProps = {
  embedUrl: string;
};

export function ScheduleEmbed({ embedUrl }: ScheduleEmbedProps) {
  return (
    <div className="schedule-embed">
      <div className="schedule-frame-shell">
        <iframe
          className="schedule-frame"
          src={embedUrl}
          title="Google Calendar appointment schedule for Troy Stone"
        />
      </div>
    </div>
  );
}
