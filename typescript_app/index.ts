import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises, Entry } from "./exerciseCalculator";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});
app.get("/bmi", (_req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  res.send(calculateBmi(Number(_req.query.height), Number(_req.query.weight)));
});
app.use(express.json());
app.post("/exercice", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body = req.body as Entry;
  return res.send(calculateExercises(body.values, Number(body.target)));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
