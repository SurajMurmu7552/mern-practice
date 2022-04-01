let student = {
  name: "Jacob",
  sclass: "VI",
  rollno: 12,
};

function listProp(student) {
  console.log(Object.keys(student));
  document.write(Object.keys(student));
}

function delRoll(obj) {
  let newObj = { ...obj };
  console.log(newObj);
  delete obj.rollno;
  console.log(obj);
}

function lenOfObject(obj) {
  console.log(Object.keys(obj).length);
}

listProp(student);
delRoll(student);
lenOfObject(student);
