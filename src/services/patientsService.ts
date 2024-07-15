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

const addPatients = (patient: NewPatientEntry): Patient => {
  const newPatient: Patient = { ...patient, id: uuid() };
  patientsData.push(newPatient);
  return newPatient;
};

export default { getPatients, addPatients };
