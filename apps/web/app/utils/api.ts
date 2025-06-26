import { Appointment, Class, Client } from "../types";

export const fetchAppointments = async (): Promise<Appointment[]> => {
  try {
    console.log(process.env.GATSBY_API_BASE_URL);
    const response = await fetch(
      `${process.env.GATSBY_API_BASE_URL}/appointments`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: Appointment[] = await response.json();
    return data.slice(0, 9);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};

export const fetchAppointmentById = async (
  id: number
): Promise<Appointment> => {
  try {
    const response = await fetch(
      `${process.env.GATSBY_API_BASE_URL}/appointments/${id}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: Appointment = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching appointment ${id}:`, error);
    throw error;
  }
};

export const fetchAppointmentsByDateRange = async (
  minDate: string,
  maxDate: string
): Promise<Appointment[]> => {
  try {
    const queryParams = new URLSearchParams({
      minDate,
      maxDate,
    });

    const response = await fetch(
      `${
        process.env.GATSBY_API_BASE_URL
      }/appointments?${queryParams.toString()}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: Appointment[] = await response.json();
    return data;
  } catch (error) {
    console.error(
      `Error fetching appointments between ${minDate} and ${maxDate}:`,
      error
    );
    throw error;
  }
};

export const fetchClassesByDateRange = async (
  minDate: string,
  maxDate: string
): Promise<Class[]> => {
  console.log(process.env.GATSBY_API_BASE_URL);
  try {
    const queryParams = new URLSearchParams({
      minDate,
      maxDate,
    });

    const response = await fetch(
      `${
        process.env.GATSBY_API_BASE_URL
      }/availability/classes?${queryParams.toString()}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: Class[] = await response.json();

    return data;
  } catch (error) {
    console.error(
      `Error fetching classes between ${minDate} and ${maxDate}:`,
      error
    );
    throw error;
  }
};

export const fetchClients = async (search: string): Promise<Client[]> => {
  try {
    const queryParams = new URLSearchParams({ search });

    const response = await fetch(
      `${process.env.GATSBY_API_BASE_URL}/clients?${queryParams.toString()}`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: Client[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching clients with search query "${search}":`, error);
    throw error;
  }
};