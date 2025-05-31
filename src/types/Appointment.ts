export interface Appointment {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  endTime: string;
  dateCreated?: string; // optional based on presence in only one object
  datetime: string;
  price: string;
  paid: string;
  amountPaid?: string; // optional based on presence in only one object
  type: string;
  appointmentTypeID: number;
  addonIDs: number[];
  classID: number | null;
  duration: string;
  calendar: string;
  calendarID: number;
  canClientCancel: boolean;
  canClientReschedule: boolean;
  location: string;
  certificate?: any; // unknown structure, nullable
  confirmationPage: string;
  formsText: string;
  notes: string;
  timezone: string;
  forms: {
    id: number;
    name: string;
    values: {
      value: string;
      name: string;
      fieldID: number;
      id: number;
    }[];
  }[];
  labels: {
    id: number;
    name: string;
    color: string;
  }[];
};