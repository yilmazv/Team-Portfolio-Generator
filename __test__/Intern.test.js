const Intern = require("../lib/Intern");
const intern = new Intern("Vehbi", "181913", "testing@gmail.com", "Uofa");

test("Checking the constructor values", () => {
  expect(intern.name).toBe("Vehbi");
  expect(intern.id).toBe("181913");
  expect(intern.email).toBe("testing@gmail.com");
  expect(intern.school).toBe("Uofa");
});

test("Checking the getName() function", () => {
  expect(intern.getName()).toBe("Vehbi");
});
test("Checking the getID() function", () => {
  expect(intern.getId()).toBe("181913");
});
test("Checking the getName() function", () => {
  expect(intern.getEmail()).toBe("testing@gmail.com");
});

test("Checking the getName() function", () => {
  expect(intern.getSchool()).toBe("Uofa");
});

test("Checking the getRole() function", () => {
  expect(intern.getRole()).toBe("Intern");
});
