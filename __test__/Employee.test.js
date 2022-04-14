const Employee = require("../lib/Employee");
const employee = new Employee("Vehbi", "181913", "testing@gmail.com");

test("Checking the constructor values", () => {
  expect(employee.name).toBe("Vehbi");
  expect(employee.id).toBe("181913");
  expect(employee.email).toBe("testing@gmail.com");
});

test("Checking the getName() function", () => {
  expect(employee.getName()).toBe("Vehbi");
});
test("Checking the getID() function", () => {
  expect(employee.getId()).toBe("181913");
});
test("Checking the getName() function", () => {
  expect(employee.getEmail()).toBe("testing@gmail.com");
});

test("Checking the getRole() function", () => {
  expect(employee.getRole()).toBe("Employee");
});
