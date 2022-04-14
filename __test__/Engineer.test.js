const Engineer = require("../lib/Engineer");
const engineer = new engineer(
  "Vehbi",
  "181913",
  "testing@gmail.com",
  "github.com"
);

test("Checking the constructor values", () => {
  expect(Engineer.name).toBe("Vehbi");
  expect(Engineer.id).toBe("181913");
  expect(Engineer.email).toBe("testing@gmail.com");
  expect(Engineer.github).toBe("github.com");
});

test("Checking the getName() function", () => {
  expect(Engineer.getName()).toBe("Vehbi");
});
test("Checking the getID() function", () => {
  expect(Engineer.getID()).toBe("181913");
});
test("Checking the getName() function", () => {
  expect(Engineer.getEmail()).toBe("testing@gmail.com");
});

test("Checking the getName() function", () => {
  expect(Engineer.getGitHub()).toBe("github.com");
});

test("Checking the getRole() function", () => {
  expect(Engineer.getRole()).toBe("Engineer");
});
