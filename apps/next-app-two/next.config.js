const withTM = require("next-transpile-modules")(["@test-monorepo/ui"]);

const config = {};

module.exports = withTM(config);
