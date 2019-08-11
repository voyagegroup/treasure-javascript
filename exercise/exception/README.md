### 環境
```
❯ node -v
v10.15.3
```
**v6.5以上であれば問題ない**

例外が起きている
```
❯ node exception.js
/Users/l-wei/code/treasure/treasure-javascript/exercise/exception/exception.js:7
    throw new MultiplicatorError("Oops...");
    ^
```

例外が発生しないときもある。
```
❯ node exception.js
16
```

### 課題
1. 例外が発生したらretryしましょう
2. retryした回数をログに出しましょう 
