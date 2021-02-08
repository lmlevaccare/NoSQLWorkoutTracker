var db = require("../models");
const mongojs = require("mongojs");


module.exports = function (app) {
    // get last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });
    // update current workout
    app.put("/api/workouts/:id", (req, res) => {
            db.Workout.update(
            { _id: mongojs.ObjectId(req.params.id)},
            { $set: {
                    modified: Date.now(),
                        id: req.params.id,
                        type: req.body.type,
                        name: req.body.name,
                        duration: req.body.duration,
                        weight: req.body.weight,
                        reps: req.body.reps,
                        sets: req.body.sets
                }
            },
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
            }
        })
    })
    
    // post new workout
    app.post("/api/workouts", ({ body }, res) => {
const newWorkout = new Workout(body);
  user.setFullName();
  user.lastUpdatedDate();
            db.Workout.create(body)
                .then(data => {
                    console.log(data);
            res.json(data);
                    })
            .catch(err => {
             res.status(400).json(err);
    });
});
    
};



