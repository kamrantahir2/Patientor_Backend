import { NewPatientEntry, NonSensitivePatientData, Patient } from "../types";
import patientsData from "../../data/patients";
import { v1 as uuid } from "uuid";

const getPatients = (): NonSensitivePatientData[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getPatientById = (id: string): Patient => {
  const patient: Patient | undefined = patientsData.find(
    (patient) => patient.id === id
  );

  if (patient === undefined) {
    throw new Error(`Patient with ${id} not found`);
  }

  return patient;
};

const addPatients = (patient: NewPatientEntry): Patient => {
  const newPatient: Patient = { ...patient, id: uuid() };
  patientsData.push(newPatient);
  return newPatient;
};

export default { getPatients, addPatients, getPatientById };
