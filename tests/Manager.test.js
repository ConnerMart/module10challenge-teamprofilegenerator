const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should construct a manager object with keys of name, id, email, and officeNumber", () => {
    const testManager = new Manager(
      "testName",
      "testID",
      "testEmail",
      "testOffice"
    );
    expect(testManager.name).toEqual("testName");
    expect(testManager.id).toEqual("testID");
    expect(testManager.email).toEqual("testEmail");
    expect(testManager.officeNumber).toEqual("testOffice");
  });

  it("should construct a manager object with methods of getName(), getID(), getEmail(), getOfficeNumber(), and getRole() that return the correct values", () => {
    const testManager = new Manager(
      "testName",
      "testID",
      "testEmail",
      "testOffice"
    );
    expect(testManager.getName()).toEqual("testName");
    expect(testManager.getId()).toEqual("testID");
    expect(testManager.getEmail()).toEqual("testEmail");
    expect(testManager.getOfficeNumber()).toEqual("testOffice");
    expect(testManager.getRole()).toEqual("Manager");
  });
});
