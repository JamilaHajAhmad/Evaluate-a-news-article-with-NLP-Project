import { scoreConversion } from "../src/client/js/formHandler";
describe("Test score tag different values", () => {
    test("return: Strongly Positive", () => {
        expect(scoreConversion("P+")).toBe("Strongly Positive");
    });
    test("return: Positive", () => {
        expect(scoreConversion("P")).toBe("Positive");
    });
    test("return: Neutral", () => {
        expect(scoreConversion("NEU")).toBe("Neutral");
    });
    test("return: Negative", () => {
        expect(scoreConversion("N")).toBe("Negative");
    });
    test("return: Strongly Negative", () => {
        expect(scoreConversion("N+")).toBe("Strongly Negative");
    });
    test("return: No sentiment", () => {
        expect(scoreConversion("NONE")).toBe("No sentiment");
    });
    test("return: Invalid data", () => {
        expect(scoreConversion("X")).toBe("Invalid data");
    });
});