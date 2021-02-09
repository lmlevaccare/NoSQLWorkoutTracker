var db = require("../models");
// const mongojs = require("mongojs");


module.exports = function (app) {
// FIND/GET LAST WORKOUT
    
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });


// SOURCE USED FOR PUT FUNCTION : https://github.com/SirPotatoIV/fitness-tracker/blob/master/routes/apiRoutes.js
// FIND SAVED WORKOUT BY ID AND AND UPDATE SAVED WORKOUT
    
    app.put("/api/workouts/:id", ({ body, params }, res) => {
  
        const workoutId = params.id;
        let savedExercises = [];


        db.Workout.find({_id: workoutId})
            .then(dbWorkout => {
    
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises){
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
            if(err){
                console.log(err)
            }

            })
        }
            
    })
    
//  POST NEW WORKOUT
    
        app.post("/api/workouts", ({ body }, res) => {
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
