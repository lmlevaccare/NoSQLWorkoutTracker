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


    // LINE 19-50 BORROWED FOR PUT FUNCTION : https://github.com/SirPotatoIV/fitness-tracker/blob/master/routes/apiRoutes.js
    // FIND SAVED WORKOUT BY ID AND AND UPDATE SAVED WORKOUT
    
    app.put("/api/workouts/:id", ({ body, params }, res) => {
  
        const workoutId = params.id;
        let savedExercises = [];


        db.Workout.find({ _id: workoutId })
            .then(dbWorkout => {
    
                savedExercises = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercises = [...savedExercises, body]
                console.log(allExercises)
                updateWorkout(allExercises)
                totalDuration(allExercises)
            })
            .catch(err => {
                res.json(err);
            });

        function updateWorkout(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (err, doc) {
                if (err) {
                    console.log(err)
                }

            })
        }
          // LINE 50: END OF BORROWED FUNCTON  : https://github.com/SirPotatoIV/fitness-tracker/blob/master/routes/apiRoutes.js
        
        
        function totalDuration(res) {
            let totalTime = []
            let findDuration = db.Workout.aggregate(
                [{ $match: { workoutId: "$type" } },
                { $group: { duration: { $sum: "$duration" } } }
                ])
            let userTime=findDuration.push(totalTime);
                return res.json(userTime)
            
        };
    });
    //  POST NEW WORKOUT
    
    app.post("/api/workouts", (req, res) => {
        console.log(req.body);
      
        db.Workout.create(req.body, (error, data) => {
            console.log("post", data)
            if (error) {
                res.send(error);
            } else {
                res.json(data);
           
           
      
            }
        });
        
    })

    
};
