/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
  // Create teacher with C experience
  export const cTeacher: Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
  };

  // Create subject instances
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // C++ Subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // Java Subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // React Subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}
