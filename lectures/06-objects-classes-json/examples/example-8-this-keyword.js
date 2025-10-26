class TestCase {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.status = "PENDING";
        this.startTime = null;
        this.endTime = null;
        this.duration = 0;
    }

    start() {
        this.status = "RUNNING";
        this.startTime = Date.now();
        console.log(`Started test: ${this.name}`);
    }

    complete(status) {
        this.status = status;
        this.endTime = Date.now();
        this.duration = this.endTime - this.startTime;
        console.log(`Completed test: ${this.name} - ${this.status} (${this.duration})`);
    }

    getSummary() {
        return {
            names: this.name,
            status: this.status,
            duration: this.duration
        };
    }
}

let loginTest = new TestCase(
    "login_functionality",
    "Test user login with valid credentials"
);

let logoutTest = new TestCase(
    "logout_functionality",
    "Test user login with valid credentials"
);

loginTest.start;
setTimeout(() =>  {
    loginTest.complete("PASS");
    console.log("Test summary:", loginTest.getSummary());
}, 100);


// TODO final example with logout test 