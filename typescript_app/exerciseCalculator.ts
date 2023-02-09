interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export interface Entry {
  target: number;
  values: number[];
}
const parseArgumentsCalc = (args: string[]): Entry => {
  if (args.length < 4) throw new Error("Not enough arguments");

  if (args.slice(2).every((num) => !isNaN(Number(num)))) {
    const array: number[] = args.slice(3).map((arg) => Number(arg));
    return {
      target: Number(args[2]),
      values: array,
    };
  } else {
    throw new Error("Provided values were not numbers !");
  }
};
export const calculateExercises = (exo: number[], target: number): Result => {
  const trainingDays: number = exo.filter((x) => x != 0).length;
  const average: number = exo.reduce((s, p) => s + p, 0) / exo.length;

  return {
    periodLength: exo.length,
    trainingDays: trainingDays,
    success: average > target,
    rating: 2,
    ratingDescription: "Training",
    target: target,
    average: average,
  };
};

try{
    const input = parseArgumentsCalc(process.argv);
    console.log(calculateExercises(input.values,input.target));
}catch(e:unknown){
    if(e instanceof Error){
        console.log(e.message);
    }
}
