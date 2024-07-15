export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: String;
}

export type NewPatientEntry = Omit<Patient, "id">;

export type NonSensitivePatientData = Omit<Patient, "ssn">;

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
