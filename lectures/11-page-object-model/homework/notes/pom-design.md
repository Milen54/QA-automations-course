# POM Design Plan – Lecture 11 Homework

## 1. Identified Duplications

### Repeated Locators – Task 1 (Session Submission & Confirmation)
| Selector | Appears In | Description |
|-----------|-------------|--------------|
| `#session-format` | both tests | dropdown for session format |
| `#topic-testing` | both tests | checkbox for topic |
| `#level-intro` | both tests | checkbox for level |
| `#code-of-conduct` | both tests | checkbox for agreement |
| `#materials` | both tests | file upload input |
| `#submit-proposal` | both tests | submit button |
| `h1` | both tests | confirmation header |
| `#confirm-*` | positive test | confirmation summary fields |

### Repeated Locators – Task 2 (Submissions Table Moderation)
| Selector | Appears In | Description |
|-----------|-------------|--------------|
| `#submissions-table` | all tests | main submissions table |
| `#submissions-table tbody tr` | all tests | list of submission rows |
| `#submissions-table thead th` | count and header test | table headers |
| `.btn-approve` | approve test | approve button |
| `.btn-decline` | decline test | decline button |
| `#total-count` | all tests | counter showing total submissions |

---

## 2. Repeated Actions

### Task 1 (Form Submission)
- Navigating to the form page  
- Selecting format, topic, and level checkboxes  
- Uploading multiple files  
- Clicking the submit button  
- Handling dialog alerts or confirmations  
- Asserting header and confirmation summary

### Task 2 (Table Moderation)
- Navigating to the table page  
- Counting table rows and headers  
- Extracting header text content  
- Handling dialogs (`alert` and `confirm`)  
- Clicking approve or decline buttons  
- Reading and verifying status cells  
- Checking total count updates

---

## 3. Test Intent (Business-Level)

- **Session Flow:** “Complete session submission and verify confirmation”
- **Validation Flow:** “Prevent submission if required field (Code of Conduct) not accepted”
- **Moderation Flow:** “Approve or decline specific submissions and verify table updates”

---

## 4. Proposed POM Classes and APIs

### 🧩 `SessionFormPage`
Represents the session registration form.

**Properties:**
- `page`
- Locators:  
  `#session-format`, `#topic-testing`, `#level-intro`,  
  `#code-of-conduct`, `#materials`, `#submit-proposal`

**Methods:**
- `open()` – navigate to registration form  
- `selectFormat(format)`  
- `chooseTopic(topic)`  
- `chooseLevel(level)`  
- `acceptCodeOfConduct()`  
- `uploadFiles(filePaths)`  
- `submit()`  
- `handleDialog(expectedMessage)` – handle alert or confirm dialogs  

---

### 🧩 `SessionConfirmationPage`
Represents the page displayed after a successful submission.

**Properties:**
- `page`
- Locators: `h1`, `#confirm-format`, `#confirm-topics`, `#confirm-level`, `#confirm-files`

**Methods:**
- `getHeaderText()`  
- `verifyConfirmationDetails(expectedData)`  

---

### 🧩 `SubmissionsTablePage`
Represents the moderation table with all submitted sessions.

**Properties:**
- `page`
- Locators:  
  `#submissions-table`, `.btn-approve`, `.btn-decline`, `#total-count`

**Methods:**
- `open()` – navigate to table page  
- `getRowCount()`  
- `getHeaderTexts()`  
- `approveSpeaker(name)` – click Approve and handle alert  
- `declineSpeaker(name)` – click Decline and handle confirm  
- `getStatusForSpeaker(name)`  
- `getTotalCount()`  

---

## 5. Benefits

- Eliminates repetition of selectors like `#session-format`, `#materials`, and `#submissions-table`.
- Keeps test files short and focused only on scenario intent.
- Easier to maintain if selectors change.
- Encourages code reuse across positive, negative, and moderation tests.

---

✅ **Next Step:**  
Create skeleton JS classes for:
- `SessionFormPage`
- `SessionConfirmationPage`
- `SubmissionsTablePage`

Each should include constructor + property placeholders + empty methods as defined above.
# POM Design Plan – Lecture 11 Homework

## 1. Identified Duplications

### Repeated Locators – Task 1 (Session Submission & Confirmation)
| Selector | Appears In | Description |
|-----------|-------------|--------------|
| `#session-format` | both tests | dropdown for session format |
| `#topic-testing` | both tests | checkbox for topic |
| `#level-intro` | both tests | checkbox for level |
| `#code-of-conduct` | both tests | checkbox for agreement |
| `#materials` | both tests | file upload input |
| `#submit-proposal` | both tests | submit button |
| `h1` | both tests | confirmation header |
| `#confirm-*` | positive test | confirmation summary fields |

### Repeated Locators – Task 2 (Submissions Table Moderation)
| Selector | Appears In | Description |
|-----------|-------------|--------------|
| `#submissions-table` | all tests | main submissions table |
| `#submissions-table tbody tr` | all tests | list of submission rows |
| `#submissions-table thead th` | count and header test | table headers |
| `.btn-approve` | approve test | approve button |
| `.btn-decline` | decline test | decline button |
| `#total-count` | all tests | counter showing total submissions |

---

## 2. Repeated Actions

### Task 1 (Form Submission)
- Navigating to the form page  
- Selecting format, topic, and level checkboxes  
- Uploading multiple files  
- Clicking the submit button  
- Handling dialog alerts or confirmations  
- Asserting header and confirmation summary

### Task 2 (Table Moderation)
- Navigating to the table page  
- Counting table rows and headers  
- Extracting header text content  
- Handling dialogs (`alert` and `confirm`)  
- Clicking approve or decline buttons  
- Reading and verifying status cells  
- Checking total count updates

---

## 3. Test Intent (Business-Level)

- **Session Flow:** “Complete session submission and verify confirmation”
- **Validation Flow:** “Prevent submission if required field (Code of Conduct) not accepted”
- **Moderation Flow:** “Approve or decline specific submissions and verify table updates”

---

## 4. Proposed POM Classes and APIs

### 🧩 `SessionFormPage`
Represents the session registration form.

**Properties:**
- `page`
- Locators:  
  `#session-format`, `#topic-testing`, `#level-intro`,  
  `#code-of-conduct`, `#materials`, `#submit-proposal`

**Methods:**
- `open()` – navigate to registration form  
- `selectFormat(format)`  
- `chooseTopic(topic)`  
- `chooseLevel(level)`  
- `acceptCodeOfConduct()`  
- `uploadFiles(filePaths)`  
- `submit()`  
- `handleDialog(expectedMessage)` – handle alert or confirm dialogs  

---

### 🧩 `SessionConfirmationPage`
Represents the page displayed after a successful submission.

**Properties:**
- `page`
- Locators: `h1`, `#confirm-format`, `#confirm-topics`, `#confirm-level`, `#confirm-files`

**Methods:**
- `getHeaderText()`  
- `verifyConfirmationDetails(expectedData)`  

---

### 🧩 `SubmissionsTablePage`
Represents the moderation table with all submitted sessions.

**Properties:**
- `page`
- Locators:  
  `#submissions-table`, `.btn-approve`, `.btn-decline`, `#total-count`

**Methods:**
- `open()` – navigate to table page  
- `getRowCount()`  
- `getHeaderTexts()`  
- `approveSpeaker(name)` – click Approve and handle alert  
- `declineSpeaker(name)` – click Decline and handle confirm  
- `getStatusForSpeaker(name)`  
- `getTotalCount()`  

---

## 5. Benefits

- Eliminates repetition of selectors like `#session-format`, `#materials`, and `#submissions-table`.
- Keeps test files short and focused only on scenario intent.
- Easier to maintain if selectors change.
- Encourages code reuse across positive, negative, and moderation tests.

---

✅ **Next Step:**  
Create skeleton JS classes for:
- `SessionFormPage`
- `SessionConfirmationPage`
- `SubmissionsTablePage`

Each should include constructor + property placeholders + empty methods as defined above.
