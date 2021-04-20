import express from 'express'

const app = express()

// GET = Buscas
// Post = Criação
// PUT = Alteração
// DELETE = Deletar
// PATCH = Alterar uma informação específica

app.get("/", (request, response) => {
response.json({
    message: "Hello World"
})
})

app.post("/", (request, response) => {
    response.json({ message: "usuario salvo com sucesso"})
})

app.listen(3333, () => console.log("Server is running on port 3333"))