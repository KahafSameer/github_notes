Ahh perfect Kafi 😎 — ab chalte hain **Git Aliases** ki taraf. Ye **bohot useful feature** hai, specially jab tum **frequent Git commands** ko **shortcut me** use karna chahte ho.

---

# 📘 Git Aliases – Detailed Notes (GitHub Focused)

---

## 1️⃣ Definition

**Git Alias**:

> Git me ek **shortcut command** jo **frequently used commands ko chhota aur easy banata hai**.
> Tum complex commands ko ek **simple word** me run kar sakte ho.

💡 Example:

```bash
git log --oneline --graph --decorate
```

isko alias bana ke sirf:

```bash
git lg
```

type kar sakte ho.

---

## 2️⃣ How to Create Aliases

### Temporary (Current Repo Only)

```bash
git config alias.lg "log --oneline --graph --decorate"
```

* Is repo ke liye kaam karega
* Use:

```bash
git lg
```

### Global (All Repos)

```bash
git config --global alias.st "status"
git config --global alias.co "checkout"
git config --global alias.br "branch"
```

* Global aliases **har repo me kaam karega**

---

## 3️⃣ Common Aliases (GitHub Focused)

| Alias     | Command                                  | Purpose                   |
| --------- | ---------------------------------------- | ------------------------- |
| `st`      | `status`                                 | Quick status check        |
| `co`      | `checkout`                               | Switch branches           |
| `br`      | `branch`                                 | List / manage branches    |
| `cm`      | `commit -m`                              | Quick commit with message |
| `lg`      | `log --oneline --graph --decorate --all` | Beautiful commit graph    |
| `unstage` | `reset HEAD --`                          | Unstage files quickly     |
| `last`    | `log -1 HEAD`                            | Show last commit          |

---

## 4️⃣ Example Workflow

### Step 1: Set global aliases

```bash
git config --global alias.st "status"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.cm "commit -m"
git config --global alias.lg "log --oneline --graph --decorate --all"
```

### Step 2: Use them

```bash
git st          # instead of git status
git co main     # instead of git checkout main
git cm "fix bug"  # instead of git commit -m "fix bug"
git lg          # beautiful commit graph
```

---

## 5️⃣ Advanced Aliases

1️⃣ **Undo last commit locally**

```bash
git config --global alias.uncommit "reset --soft HEAD~1"
```

Usage:

```bash
git uncommit
```

2️⃣ **Amend last commit**

```bash
git config --global alias.amend "commit --amend --no-edit"
```

Usage:

```bash
git amend
```

3️⃣ **Show last 3 commits in graph**

```bash
git config --global alias.lg3 "log -3 --oneline --graph --decorate"
```

Usage:

```bash
git lg3
```

---

## 6️⃣ Remove / Edit Aliases

* Remove:

```bash
git config --global --unset alias.st
```

* Edit:

```bash
git config --global --edit
```

* Waha tum **sab aliases** check aur modify kar sakte ho

---

## 7️⃣ Tips & Best Practices

1. **Short, memorable names** choose karo
2. **Graph aliases** commit history ka visualization easy karte hain
3. Team me alias share nahi hote → local convenience ke liye
4. Frequently used commands jaise `status`, `checkout`, `log` ke liye aliases bana lo

---

💡 Example Cheat Sheet (GitHub workflow):

| Task             | Normal Command                               | Alias          |
| ---------------- | -------------------------------------------- | -------------- |
| Check status     | `git status`                                 | `git st`       |
| Commit           | `git commit -m "msg"`                        | `git cm "msg"` |
| Checkout branch  | `git checkout main`                          | `git co main`  |
| Branch list      | `git branch`                                 | `git br`       |
| Commit graph     | `git log --oneline --graph --decorate --all` | `git lg`       |
| Unstage files    | `git reset HEAD -- file.txt`                 | `git unstage`  |
| Undo last commit | `git reset --soft HEAD~1`                    | `git uncommit` |

---

Kafi, agar chaho to mai **ek ready-to-use GitHub aliases setup script** bana dun jise tum **1 command me run kar ke sab useful aliases setup** kar sako.

Chalo mai ye bana dun?
