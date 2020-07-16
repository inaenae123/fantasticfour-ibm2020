const Cloudant = require('@cloudant/cloudant');
const account = "eon.john@ibm.com";
const password = process.env.cloud_password;

const cloudant = Cloudant({account,password});

