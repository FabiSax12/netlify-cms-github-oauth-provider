const randomstring = require('randomstring')

module.exports = (oauth2) => {
  return (req, res, next) => {
    // Generate a unique authorization URI for each request
    const authorizationUri = oauth2.authorizeURL({
      redirect_uri: process.env.REDIRECT_URL,
      scope: process.env.SCOPES || 'repo,user',
      state: randomstring.generate(32)
    })
    res.redirect(authorizationUri)
  }
}
