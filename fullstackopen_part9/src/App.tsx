import React from "react";
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CoursePartBase, CourseDescription {
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackround extends CoursePartBase, CourseDescription {
  backroundMaterial: string;
  kind: "background";
}

interface CourseDescription {
  description: string;
}
interface CoursePartSpecial extends CoursePartBase, CourseDescription {
  requirements: string[];
  kind: "special";
}
type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackround
  | CoursePartSpecial;
const Header = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const Content = ({ courses }: { courses: CoursePart[] }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <p key={course.name}>
            {course.name} {course.exerciseCount}
          </p>
        );
      })}
    </div>
  );
};

const ContentAll = ({ courses }: { courses: CoursePart[] }) => {
  return (
    <div>
      {courses.map((course) => {
        switch (course.kind) {
          case "basic":
            return (
              <p key={course.name}>
                {course.name} {course.exerciseCount} {course.description}
              </p>
            );
          case "group":
            return (
              <p key={course.name}>
                {course.name} {course.exerciseCount} {course.groupProjectCount}
              </p>
            );
          case "background":
            return (
              <p key={course.name}>
                {course.name} {course.exerciseCount} {course.description}{" "}
                {course.backroundMaterial}
              </p>
            );
          case "special":
            return (
              <p key={course.name}>
                {course.name} {course.exerciseCount} {course.description}{" "}
                {course.requirements.join(" ")}
              </p>
            );
        }
      })}
    </div>
  );
};

const Total = ({ courses }: { courses: CoursePart[] }) => {
  return (
    <h2>
      Number of exercises{" "}
      {courses.reduce((total, course) => total + course.exerciseCount, 0)}
    </h2>
  );
};
const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group",
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backroundMaterial:
        "https://type-level-typescript.com/template-literal-types",
      kind: "background",
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backroundMaterial:
        "https://type-level-typescript.com/template-literal-types",
      kind: "background",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special",
    },
  ];

  return (
    <div>
      <Header name={courseName} />
      <ContentAll courses={courseParts} />
      <Total courses={courseParts} />
    </div>
  );
};

export default App;
