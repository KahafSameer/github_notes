Perfect 😎
Ab **`git restore`** pe focus karte hain — ye beginners ke liye **life saver** hai.

---

## 🔄 `git restore` kya hai?

`git restore` Git ka **undo / revert tool** hai.
Ye tumhari **working directory** ko **previous state** me le jata hai.

Simple words me:

> **“Agar kuch galat edit ho gaya, ya stage me file add ho gayi, to wapis original version pe le aao”**

---

## 🧩 Use Cases

### 1️⃣ Modified file ko undo karna (unstaged)

Socho:

* `app.js` me galti ho gayi
* Commit nahi kiya
* Wapis original version chahte ho

Command:

```bash
git restore app.js
```

Result:

* File **last committed version** pe revert ho jayegi
* Jo changes tumne kiye the, wo **lose** ho jaye ge

---

### 2️⃣ File ko staging area se remove karna

Agar accidentally `git add app.js` kar diya:

```bash
git restore --staged app.js
```

Effect:

* File **unstage** ho gayi
* Changes working directory me rahe gi
* Commit me **ab include nahi hogi**

---

### 3️⃣ Entire project restore

```bash
git restore .
```

Effect:

* Saari **modified unstaged files** wapis last commit pe aa jaye gi

---

## 🧠 Difference: `git restore` vs `git reset`

| Command       | Use Case                              |
| ------------- | ------------------------------------- |
| `git restore` | Working directory / staging undo      |
| `git reset`   | Commit level undo (soft, mixed, hard) |

---

## ⚠️ Warning

* `git restore` **unstaged changes ko permanently remove kar deta hai**
* Agar important changes hain, pehle **backup** le lo

---

## 🎯 Quick Summary Commands

```bash
git restore <file>          # undo local changes (unstaged)
git restore --staged <file> # unstage staged file
git restore .               # undo all unstaged changes
```

---

### Example Flow

1️⃣ Check status:

```bash
git status
```

2️⃣ File edited:

```bash
modified: app.js
```

3️⃣ Undo change:

```bash
git restore app.js
```

4️⃣ Check status again:

```bash
git status
```

✅ File now back to last commit version

---

Kafi, agar chaho to mai **git restore + git reset + git checkout ka ek diagram** bana ke easy yaad karwane layak bana dun.

Kya mai wo bana dun?
