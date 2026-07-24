const request = require("supertest");
const app = require("../app");

describe("Page Pulse API Tests", () => {

    test("should analyze a valid URL", async () => {
        const response = await request(app)
            .post("/api/audit")
            .send({
                url: "https://example.com"
            });

        console.log("STATUS:", response.statusCode);
        console.log("BODY:", response.body);

        expect(response.statusCode).toBe(200);
    });
    test("should reject invalid URL", async () => {
        const response = await request(app)
            .post("/api/audit")
            .send({
                url: "invalid-url"
            });

        expect(response.statusCode).toBe(400);
    });
    test("should handle unreachable website", async () => {
        const response = await request(app)
            .post("/api/audit")
            .send({
                url: "https://thissitedoesnotexist12345.com"
            });

        expect(response.statusCode).toBe(404);
    });
});