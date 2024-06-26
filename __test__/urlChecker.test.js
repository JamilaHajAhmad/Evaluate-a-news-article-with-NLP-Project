import { urlChecker } from "../src/client/js/urlChecker";
describe("URL test function", () => {
    test("URL with no protocol", () => {
        const url = 'udacity.com';
        expect(urlChecker(url)).toBe(false);
    });
    test("URL with misspelled protocol", () => {
        const url = 'htps://udacity.com';
        expect(urlChecker(url)).toBe(false);
    });
    test("valid URL", () => {
        const url1 = 'https://udacity.com';
        expect(urlChecker(url1)).toBe(true);
        const url2 = 'http://udacity.com';
        expect(urlChecker(url2)).toBe(true);
    });
});