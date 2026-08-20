"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { getBookingEmbedUrl } from "@/data/siteConfig";

type GoogleSchedulingButton = {
  load: (options: {
    url: string;
    color: string;
    label: string;
    target: HTMLElement;
  }) => void;
};

declare global {
  interface Window {
    calendar?: {
      schedulingButton?: GoogleSchedulingButton;
    };
  }
}

type SchedulePopupControlProps = {
  bookingUrl: string;
};

export function SchedulePopupControl({ bookingUrl }: SchedulePopupControlProps) {
  const router = useRouter();
  const popupTargetRef = useRef<HTMLSpanElement>(null);
  const officialButtonRef = useRef<HTMLButtonElement | null>(null);

  const initializePopup = useCallback(() => {
    const target = popupTargetRef.current;
    const schedulingButton = window.calendar?.schedulingButton;

    if (!target || !schedulingButton || officialButtonRef.current) return;

    schedulingButton.load({
      url: getBookingEmbedUrl(bookingUrl),
      color: "#039BE5",
      label: "Schedule a conversation",
      target,
    });

    const officialButton = target.parentElement?.querySelector<HTMLButtonElement>(
      "button",
    );

    if (officialButton) {
      officialButton.tabIndex = -1;
      officialButton.setAttribute("aria-hidden", "true");
      officialButtonRef.current = officialButton;
    }
  }, [bookingUrl]);

  useEffect(() => {
    const scriptId = "google-calendar-scheduling-button";
    const existingScript = document.getElementById(scriptId);

    if (window.calendar?.schedulingButton) {
      initializePopup();
      return;
    }

    const handleLoad = () => initializePopup();

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad);
      return () => existingScript.removeEventListener("load", handleLoad);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.addEventListener("load", handleLoad);
    document.head.appendChild(script);

    return () => script.removeEventListener("load", handleLoad);
  }, [initializePopup]);

  const openScheduler = () => {
    initializePopup();

    if (officialButtonRef.current) {
      officialButtonRef.current.click();
      return;
    }

    router.push("/schedule");
  };

  return (
    <>
      <button
        className="calendar-link"
        type="button"
        onClick={openScheduler}
        aria-label="Schedule a conversation"
        title="Schedule a conversation"
      >
        <CalendarDays size={16} strokeWidth={1.7} aria-hidden="true" />
      </button>
      <span className="google-scheduling-popup-host" aria-hidden="true">
        <span ref={popupTargetRef} />
      </span>
    </>
  );
}
