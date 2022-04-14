const Manager = require("../lib/Manager");
const manager = new Manager("Vehbi", "181913", "testing@gmail.com", "1321");

test("Checking the constructor values", () => {
  expect(Manager.name).toBe("Vehbi");
  expect(Manager.id).toBe("181913");
  expect(Manager.email).toBe("testing@gmail.com");
  expect(Manager.officeNumber).toBe("1321");
});

test("Checking the getName() function", () => {
  expect(Manager.getName()).toBe("Vehbi");
});
test("Checking the getID() function", () => {
  expect(Manager.getID()).toBe("181913");
});
test("Checking the getName() function", () => {
  expect(Manager.getEmail()).toBe("testing@gmail.com");
});

test("Checking the getName() function", () => {
  expect(Manager.getOfficeNumber()).toBe("github.com");
});

test("Checking the getRole() function", () => {
  expect(Manager.getRole()).toBe("Manager");
});
