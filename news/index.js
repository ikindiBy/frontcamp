const database = require("./database");
const app = require("./app");
const config = require("./config");

database()
  .then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);

    app.listen(config.PORT, () => {
      console.log(`Example MY_APP listening on port ${config.PORT}!`);
    });
  })
  .catch(() => {
    console.error(`Unable to connect to DB`);
    process.exit(1);
  });
