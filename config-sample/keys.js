// RENAME THE PARENT FOLDER TO "config" from "config-sample"
// Use your own MongoDB URI

// Examples:
// mongodb://localhost:27017/database_name
// mongodb://user:password@ds2918.mlab.com:1918/dev-linked

const mongoURI = 'mongodb://user:pass@ds21280.mlab.com:21280/dev-linked'

module.exports = {
  mongoURI
  // 'mongoURI': 'mongodb://sandbox_user:sandbox_user22@ds020218.mlab.com:20218/dev-linked'
}
