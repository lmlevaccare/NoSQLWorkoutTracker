
var path = require("path");

//  transfering "stats","exercise" and "index" html files to a given paths."index" file is redirecting path to homepage.
module.exports = function (app) {
 
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
  

  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
     
  })
    // app.get('/index', (req, res) => {
    //     res.redirect(path.join(__dirname, "../public/index.html"));
    // });

};
