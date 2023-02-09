interface bmiValue {
  value1: number;
  value2: number;
}
const parseArguments = (args: string[]): bmiValue => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers !");
  }
};
const calculateBmi = (taille: number, poids: number) => {
  let bmi: number = poids / (((taille / 100) * taille) / 100);

  if (bmi < 16) {
    return "Underweight (Severe thinness)";
  } else if (bmi >= 16 && bmi < 16.9) {
    return "Underweight (Moderate thinness)";
  } else if (bmi >= 17 && bmi < 18.4) {
    return "Underweight (Mild thinness)";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal range";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight (Pre-obese)";
  } else if (bmi >= 30 && bmi < 34.9) {
    return "Obese (Class I)";
  } else if (bmi >= 35 && bmi < 39.9) {
    return "Obese (Class II)";
  } else if (bmi >= 40) {
    return "Obese (Class III)";
  }
};

try {
  const values = parseArguments(process.argv);
  console.log(calculateBmi(values.value1, values.value2));
} catch (e: unknown) {
  if (e instanceof Error) {
    console.log(e.message);
  }
}

