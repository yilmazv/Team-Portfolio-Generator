const Manager = require("../lib/Manager");
const manager = new Manager("Vehbi", "181913", "testing@gmail.com", "1321");

test("Checking the constructor values", () => {
  expect(manager.name).toBe("Vehbi");
  expect(manager.id).toBe("181913");
  expect(manager.email).toBe("testing@gmail.com");
  expect(manager.officeNumber).toBe("1321");
});

test("Checking the getName() function", () => {
  expect(manager.getName()).toBe("Vehbi");
});
test("Checking the getID() function", () => {
  expect(manager.getId()).toBe("181913");
});
test("Checking the getName() function", () => {
  expect(manager.getEmail()).toBe("testing@gmail.com");
});

test("Checking the getName() function", () => {
  expect(manager.getOfficeNumber()).toBe("1321");
});

test("Checking the getRole() function", () => {
  expect(manager.getRole()).toBe("Manager");
});
