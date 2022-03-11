function fn(resolves = true) {
    return new Promise((resolve, reject) => {
            if (resolves === true) {
                setTimeout(() => {
                    resolve("hello");
                }, 1000);
            } else {
                reject("error")
            }
    });
}

describe("test errors", () => {
    test("test errors", () => {
        expect(fn(false)).rejects.toEqual("error");
    });
});

describe("test errors", () => {
    test("test errors", () => {
        expect(fn(true)).resolves.toEqual("hello");
    });
});