
var path = require("path");

module.exports = function (app) {
  app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html", function (err) {
      if (err) {
        next(err);
      } else {
        console.log('stats:', fileName);
      }
    })
    )
  })

  app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html", function (err) {
      if (err) {
        next(err);
      } else {
        console.log('exercise:', fileName);
      }
    })
    )
  })


};
