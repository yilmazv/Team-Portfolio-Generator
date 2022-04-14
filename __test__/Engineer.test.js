const Engineer = require("../lib/engineer");
const engineer = new Engineer(
  "Vehbi",
  "181913",
  "testing@gmail.com",
  "github.com"
);

test("Checking the constructor values", () => {
  expect(engineer.name).toBe("Vehbi");
  expect(engineer.id).toBe("181913");
  expect(engineer.email).toBe("testing@gmail.com");
  expect(engineer.github).toBe("github.com");
});

test("Checking the getName() function", () => {
  expect(engineer.getName()).toBe("Vehbi");
});
test("Checking the getID() function", () => {
  expect(engineer.getId()).toBe("181913");
});
test("Checking the getName() function", () => {
  expect(engineer.getEmail()).toBe("testing@gmail.com");
});

test("Checking the getName() function", () => {
  expect(engineer.getGitHub()).toBe("github.com");
});

test("Checking the getRole() function", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
