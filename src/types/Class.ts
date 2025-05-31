export type Class = {
  id: number;
  name: string;
  calendar: string;
  duration: number;
  isSeries: boolean;
  slots: number;
  slotsAvailable: number;
  color: string;
  price: string;
  category: string;
  description: string;
  calendarID: number;
  serviceGroupID: number;
  appointmentTypeID: number;
  calendarTimezone: string;
  time: string;        // ISO 8601 with offset, e.g. "2025-05-31T13:45:00-0700"
  localeTime: string;  // Human-readable, e.g. "May 31, 2025 1:45pm"
};

export type ClassListResponse = Class[];