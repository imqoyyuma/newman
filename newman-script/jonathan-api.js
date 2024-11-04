const newman = require("newman")

newman.run({
    collection: "json-collection/jojo.postman_collection.json",
    environment: "json-env/jojo.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
