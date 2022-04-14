const Intern = require("../lib/Intern");
const intern = new Intern("Vehbi", "181913", "testing@gmail.com", "Uofa");

test("Checking the constructor values", () => {
  expect(Intern.name).toBe("Vehbi");
  expect(Intern.id).toBe("181913");
  expect(Intern.email).toBe("testing@gmail.com");
  expect(Intern.school).toBe("Uofa");
});

test("Checking the getName() function", () => {
  expect(Intern.getName()).toBe("Vehbi");
});
test("Checking the getID() function", () => {
  expect(Intern.getID()).toBe("181913");
});
test("Checking the getName() function", () => {
  expect(Intern.getEmail()).toBe("testing@gmail.com");
});

test("Checking the getName() function", () => {
  expect(Intern.getSchool()).toBe("Uofa");
});

test("Checking the getRole() function", () => {
  expect(Intern.getRole()).toBe("Intern");
});
