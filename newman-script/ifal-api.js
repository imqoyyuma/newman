const newman = require("newman");

newman.run({
    collection: "json-collection/ifal.postman_collection.json",
    environment: "json-env/ifal-env.json",
    reporters: ["cli", "htmlextra"],
});
