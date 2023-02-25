const db = require("../models");
const Quiz = db.quizzes;

//Menjawab Satu Pertanyaan
exports.submitOne = async (req, res) => {
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer,
    };

    try{
        var quiz = await Quiz.findOne({
            where: { 
                id: req.body.quizId
            }
        });
    

        if (req.body.answer == quiz.key){
            res.status(200).json({
            "message" : "Hore Jawabanya Benar"
        })
        } else {
            res .status(200).json({
            "message" : `Jawaban Yang Benar Adalah ${quiz.key}`
        })
        }
    }catch(e){
        res.status(500).json({message: e.message});
    }
};

//Menjawab Banyak Pertanyaan
exports.submitMany = async (req, res) => {
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer,
    };
        try{
            let benar = 0
            let totalSoal = jobsheet.quizId.length
            for (let i = 0; i < totalSoal ; i++){
                const quiz = await Quiz.findOne({
                    limit: 1,
                    where: {
                        id: jobsheet.quizId[i]
                    },
                    order:[['id', 'DESC']],
                });
                if(quiz.key == jobsheet.answer[i]){
                    benar = benar + 1
                }
            }
            res.status(200).json({

                message: `Jawabanya Benar ${benar} Dari ${totalSoal} Soal`
            })
        }catch (e){
            res.status(500).json({message: e.message});
        }
};