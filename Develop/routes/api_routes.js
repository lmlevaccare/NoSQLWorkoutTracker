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
    
    app.put("/api/workouts/:id", (req, res) => {

        
        db.Workout.update(
          
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            {
                $set: {
                   
                    modified: Date.now(),
                    // exercises: [{
                        id: req.params.id,
                        type: req.body.type,
                        name: req.body.name,
                        duration: req.body.duration,
                        weight: req.body.weight,
                        reps: req.body.reps,
                        sets: req.body.sets
                
                    // }]
                }
            },
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
                }
            }
       
        )
         
    })
    
};



