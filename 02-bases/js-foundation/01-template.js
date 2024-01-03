 const emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p>Thanks for registering in our website</p>
</div>
`


// siempre conviene exportarlo como un objeto, pq si en el futuro se quiere exportar más de una cosa,
// se puede hacer
module.exports = {
    emailTemplate
}
