const app = require("./app");
const port = 3000;

app.set('port', (process.env.PORT || port));

app.listen( app.get('port') );
