import diagnosisData from "../../data/diagnosis";
import { Diagnosis } from "../types";

const diagnosisEntries: Diagnosis[] = diagnosisData;

const getEntries = (): Diagnosis[] => {
  return diagnosisEntries;
};

export default { getEntries };
