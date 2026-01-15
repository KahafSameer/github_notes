Perfect 👍
**`git status`** Git ka **dashboard** hota hai.
Is se tumhein **exact pata chalta hai repo ki current condition**.

---

## 🔍 `git status` kya show karta hai?

Jab tum command chalate ho:

```bash
git status
```

Git tumhein **5 cheezen** batata hai:

---

## 1️⃣ Branch ka naam

Example:

```
On branch main
```

👉 Matlab tum **kis branch** pe ho.

Agar branch galat ho to yahin se pata lag jata hai.

---

## 2️⃣ Sync Status (Local vs Remote)

Example:

```
Your branch is up to date with 'origin/main'
```

Ya:

```
Your branch is ahead of 'origin/main' by 2 commits
```

👉 Matlab:

* tumhare commits **push nahi hue**
* ya tum **behind** ho (pull chahiye)

---

## 3️⃣ Untracked Files

Example:

```
Untracked files:
  index.html
  style.css
```

👉 Ye files:

* nayi hain
* Git abhi inko track **nahi** kar raha

📌 Solution:

```bash
git add index.html
```

---

## 4️⃣ Changes Not Staged (Modified Files)

Example:

```
Changes not staged for commit:
  modified: app.js
```

👉 File:

* pehle se tracked hai
* change ho chuki
* lekin **stage nahi hui**

📌 Solution:

```bash
git add app.js
```

---

## 5️⃣ Changes Staged for Commit

Example:

```
Changes to be committed:
  modified: app.js
```

👉 Ye files:

* staging area me hain
* next commit me jayen gi

📌 Next step:

```bash
git commit -m "update app logic"
```

---

## 🧠 One-Line Summary

> **git status batata hai: kya naya hai, kya badla hai, kya commit ke liye ready hai**

---

## 🔄 Typical Workflow (Yaad Rakhna)

```bash
git status   # check situation
git add .    # stage changes
git status   # confirm staged
git commit -m "message"
```

---

## ⚠️ Common Beginner Mistakes

❌ Commit karna without `git status`
❌ Galat branch pe kaam
❌ `.env` staged reh jana

---

## 🎯 Interview Line

> **git status displays the state of the working directory and staging area.**

---

### Next batao 👇

**`git add` deep samjhein ya commit pe move karein?**
