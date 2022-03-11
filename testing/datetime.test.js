const mocked_date = new Date(2022, 3, 14);

global.Date = jest.fn(() => mocked_date);

const date = new Date();

describe("test timestamp", () => {
    test("test timestamp", () => {
        expect(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`).toBe("2022-3-14");
    });
});

// jest