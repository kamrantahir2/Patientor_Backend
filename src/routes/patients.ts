import express from "express";
const router = express.Router();
import patientsService from "../services/patientsService";
import toNewPatientEntry from "../utils";
import { Patient } from "../types";

router.get("/", (_req, res) => {
  res.send(patientsService.getPatients());
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const patient: Patient = patientsService.getPatientById(id);
  res.json(patient);
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
