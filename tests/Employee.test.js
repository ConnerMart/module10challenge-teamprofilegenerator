const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create an employee object with keys of name, id, and email", () => {
    const testEmployee = new Employee("testName", "testID", "testEmail");
    expect(testEmployee.name).toEqual("testName");
    expect(testEmployee.id).toEqual("testID");
    expect(testEmployee.email).toEqual("testEmail");
  });

  it("should create an employee object with methods of getName(), getID(), getEmail(), and getRole() that return the correct values", () => {
    const testEmployee = new Employee("testName", "testID", "testEmail");
    expect(testEmployee.getName()).toEqual("testName");
    expect(testEmployee.getId()).toEqual("testID");
    expect(testEmployee.getEmail()).toEqual("testEmail");
    expect(testEmployee.getRole()).toEqual("Employee");
  });
});
