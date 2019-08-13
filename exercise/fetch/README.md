課題：最強なfetchを実装する

### install
```
npm install
```

### start json server
```
node -v
npm start
open http://localhost:3001/
```

1. GET http://localhost:3001/posts
2. GET http://localhost:3001/404
3. GET http://localhost:3001/timeout
4. GET http://localhost:3001/index.html
5. PUT http://localhost:3001/posts/1
6. GET http://localhost:3001/timeout
7. GET http://localhost:3001/retryme
8. GET http://localhost:3001/posts/1 & http://localhost:3001/comments?post_id=1


#### 参考
```
❯ curl http://localhost:3001/comments
[
  {
    "id": 1,
    "post_id": 1,
    "content": "Hi this is a comment",
    "user": 1
  },
  {
    "id": 2,
    "post_id": 1,
    "content": "Hi this is another comment",
    "user": 2
  }
]
```

```
curl http://localhost:3001/posts/1
{
  "id": 1,
  "title": "treasure",
  "author": "yang-wei"
}
```

```
❯ curl http://localhost:3001/comments\?post_id\=1
[
  {
    "id": 1,
    "post_id": 1,
    "content": "Hi this is a comment",
    "user": 1
  },
  {
    "id": 2,
    "post_id": 1,
    "content": "Hi this is another comment",
    "user": 2
  }
]
```

