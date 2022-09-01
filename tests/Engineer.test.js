const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should construct an engineer object with keys of name, id, email, and github", () => {
    const testEngineer = new Engineer(
      "testName",
      "testID",
      "testEmail",
      "testGithub"
    );
    expect(testEngineer.name).toEqual("testName");
    expect(testEngineer.id).toEqual("testID");
    expect(testEngineer.email).toEqual("testEmail");
    expect(testEngineer.github).toEqual("testGithub");
  });

  it("should construct an engineer object with methods of getName(), getID(), getEmail(), getGithub(), and getRole() that return the correct values", () => {
    const testEngineer = new Engineer(
      "testName",
      "testID",
      "testEmail",
      "testGithub"
    );
    expect(testEngineer.getName()).toEqual("testName");
    expect(testEngineer.getId()).toEqual("testID");
    expect(testEngineer.getEmail()).toEqual("testEmail");
    expect(testEngineer.getGithub()).toEqual("testGithub");
    expect(testEngineer.getRole()).toEqual("Engineer");
  });
});
