const {promises} = require("fs");

jest.mock("fs", () => ({
    promises: {
      readFile: (file) => {
          return "success";
      },
    },
}));

const readFile = promises.readFile("../data/unexisting_file.js");

describe("test mocks", () => {
    test("test fs mock", async () => {
        expect(readFile).toBe("success");
    });
});