import express from "express"

const app = express()

app.use(express.static("public"))

app.listen(3001, () => {
  console.log("App listen on port 3000")
})
