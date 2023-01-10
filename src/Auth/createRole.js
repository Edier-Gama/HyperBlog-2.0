import React from "react";

function createRole(username) {

  let isTeacher;
  let isStudent;
  let isPremiumStudent;

  const teachers = ['JuanDC', 'Retaxmaster', 'Freddier']
  const students = ['Edier']
  const premiumStudents = ['Petro']
  isTeacher = teachers.find(user => user === username);
  isStudent = students.find(user => user === username);
  isPremiumStudent = premiumStudents.find(user => user === username);

  return {
    isTeacher,
    isStudent,
    isPremiumStudent,
  };
}

export {createRole};
