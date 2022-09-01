const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should construct an intern object with keys of name, id, email, and school", () => {
    const testIntern = new Intern(
      "testName",
      "testID",
      "testEmail",
      "testSchool"
    );
    expect(testIntern.name).toEqual("testName");
    expect(testIntern.id).toEqual("testID");
    expect(testIntern.email).toEqual("testEmail");
    expect(testIntern.school).toEqual("testSchool");
  });

  it("should construct an intern object with methods of getName(), getID(), getEmail(), getGithub(), and getRole() that return the correct values", () => {
    const testIntern = new Intern(
      "testName",
      "testID",
      "testEmail",
      "testSchool"
    );
    expect(testIntern.getName()).toEqual("testName");
    expect(testIntern.getId()).toEqual("testID");
    expect(testIntern.getEmail()).toEqual("testEmail");
    expect(testIntern.getSchool()).toEqual("testSchool");
    expect(testIntern.getRole()).toEqual("Intern");
  });
});
