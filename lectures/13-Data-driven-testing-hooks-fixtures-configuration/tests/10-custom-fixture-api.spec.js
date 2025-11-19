import { test, expect } from "../fixtures/apiUser.js";

test("test 1: user was created", async ({ apiUser })=>{
    expect(apiUser).toBeDefined();
    expect(apiUser.id).toBeDefined();
    expect(apiUser.name).toBeDefined();
});