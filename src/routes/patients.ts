import express from "express";
const router = express.Router();
import patientsService from "../services/patientsService";
import toNewPatientEntry from "../utils";

router.get("/", (_req, res) => {
  res.send(patientsService.getPatients());
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedPatient = patientsService.addPatients(newPatientEntry);
    res.json(addedPatient);
  } catch (error: unknown) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
