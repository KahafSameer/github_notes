Perfect Kafi 😎 — chalo mai **`git revert` ka full detailed GitHub-focused notes** bana deta hoon, step by step, easy aur practical examples ke saath. Ye tum directly **GitHub repo workflow ke liye** use kar sakte ho.

---

# 📘 Git Revert – Detailed Notes (GitHub Focused)

---

## 1️⃣ Definition

**`git revert`**:

> Git command jo **ek specific commit ke changes ko undo karta hai**, aur **naya commit create karta hai**.
> History safe rehti hai, purana commit delete nahi hota.

**Key point:**

* Remote repo safe
* Team projects me preferred method

---

## 2️⃣ Syntax

```bash
git revert <commit-hash>
```

Optional flags:

* `--no-commit` → changes apply hoti hain but commit automatically create nahi hota
* `--edit` → revert commit message edit karne ke liye
* `--continue` → conflicts resolve karne ke baad use karo

---

## 3️⃣ Use Case (GitHub)

**Scenario:**

* Tumhare repo me 8 commits hain, latest commit `HEAD` hai:

```
c1 - Initial commit
c2 - Feature A
c3 - Feature B
c4 - Bug fix / new feature
c5 - Latest changes
```

* Tum **c3 ko undo karna chahte ho**, c4 aur c5 safe rakhte hue

```bash
git log --oneline  # commit hash check karo
git revert <hash-of-c3>
```

Effect:

* Naya commit `c6` create hoga: **c3 ke changes undo**
* c4, c5 safe
* Remote repo push karne par bhi **history intact**

---

## 4️⃣ Workflow Step by Step (GitHub Context)

### Step 1: Check status

```bash
git status
git log --oneline
```

* Dekho kaunse commits exist karte hain
* Local changes hai? → commit ya stash karo

---

### Step 2: Revert specific commit

```bash
git revert <commit-hash>
```

* Agar conflict aaye → manually resolve
* Resolve ke baad:

```bash
git revert --continue
```

---

### Step 3: Commit message

* Git automatically **“Revert <original commit message>”** use karta hai
* Tum chaaho → edit kar sakte ho with `--edit`

```bash
git revert --edit <commit-hash>
```

---

### Step 4: Push to GitHub

```bash
git push origin main
```

* Remote repo me naya revert commit reflect hoga
* Team members safe
* History intact

---

## 5️⃣ Multiple commits revert

* Agar **c4, c5, c6** revert karna ho → **reverse order** me revert karo:

```bash
git revert c6
git revert c5
git revert c4
```

* Ye safest way hai team repo me
* Conflicts minimum

---

## 6️⃣ Local Changes ke sath Revert

* Agar **local files modified / staged** hai → conflict aa sakta hai
* Options:

  1. Commit ya stash local changes before revert
  2. Direct revert → manually resolve conflicts

---

## 7️⃣ Revert vs Reset (GitHub context)

| Command          | Remote Safe | History | Effect                                           |
| ---------------- | ----------- | ------- | ------------------------------------------------ |
| git revert       | ✅           | ✅       | Naya commit create karta hai, changes undo       |
| git reset --hard | ❌           | ❌       | HEAD aur commits ko move karta hai, history lost |

💡 **Rule:** Team repo → always revert

---

## 8️⃣ Advanced Options

### Undo last commit using revert

```bash
git revert HEAD
```

* Naya commit banega jo last commit undo karega

### Undo multiple commits automatically

```bash
git revert --no-commit <hash1> <hash2> <hash3>
git commit -m "Revert multiple commits"
```

* Saari commits ek hi **manual commit** me revert kar sakte ho

---

## 9️⃣ Tips & Best Practices (GitHub)

1. **Always check commit hash** before revert
2. **Backup messy local changes** → branch ya stash
3. **Reverse order for multiple commits**
4. Use **`git log --oneline`** for clear history
5. **Revert, don’t reset**, for shared GitHub repos

---

## 10️⃣ Real-life Notes

* **Commit delete nahi hota** → history intact
* Revert = “anti-commit” → changes undo
* Team-safe → no force push needed
* Local messy changes → conflict resolution may be required

---

### 🔹 Example Scenario on GitHub

```bash
# 1. Check commits
git log --oneline

# 2. Revert a specific commit
git revert 3f2a1b

# 3. Resolve conflicts if any
git status
# resolve manually
git revert --continue

# 4. Push revert to GitHub
git push origin main
```

Effect:

* GitHub repo me **original commit history intact**
* Specific commit ke changes undo ho gaye

---

💡 Tip: Agar chaho mai tumhare liye **ye poora revert workflow diagram ke saath bana dun**, jisme:

* Mixed local changes
* Staged files
* Multiple commits
* Revert + conflict resolution
* Push to GitHub

Ye **ultimate cheat sheet** ban jayega.

Kya mai ye bana dun?
