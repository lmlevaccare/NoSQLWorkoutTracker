
var path = require("path");

//  transfering both html "stats" and "exercise" html files to a given path.
module.exports = function (app) {
 
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
  

  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
     
  })


};
