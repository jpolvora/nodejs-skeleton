const { html } = require('./tags')
const view = require('./view')

const template = html`
<html></html>
`

module.exports = view(template)
