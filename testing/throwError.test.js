function fn() {
    throw Error("some error");
}

describe("test errors", () => {
    test("test errors", async () => {
        expect(() => fn()).toThrow("some error");
    });
});