const db = require("../models");
const Quiz = db.quizzes;

exports.create = async (req, res) =>{
    try{
        const data = await Quiz.create(req.body)
        res.json({
            message: "kuis berhasil ditambahkan",
            data: data,
        })
    }catch (error){
        res.status(500).json({
            message:error.message,
            data: null
        });
    }
}

exports.getAll = async (req, res) =>{
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message: "kuis berhasil didapatkan",
            data: quizzes,
        });
    }catch (error){
        res.status(500).json({
            message:error.message,
            data: null
        });
    }
}

exports.update = async (req, res) =>{
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:ture})
        quiz.update(req.body,{
            where: {id}
        })
        res.json({
            message: "kuis berhasil diupdate",
            data: quiz,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

exports.delete = async (req, res) =>{
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:ture})
        quiz.destroy()
        res.json({
            message: "kuis berhasil dihapus",
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

exports.findOne = async (req, res) =>{
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty:ture})
        res.json({
            message: `kuis berhasil ditampilkan dengan id ${id}`,
            data: quiz,
        });
    }catch (error){
        res.status(500).json({
            message:error.message || "pesan eror",
            data: null
        });
    }
}

exports.getByCategoryId = async (req, res) =>{
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
        res.json({
            message: `kuis berhasil ditampilkan dengan id ${id}`,
            data: quizzes,
        });

}

exports.getByLevelId = async (req, res) =>{
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            categoryId: id
        }
    })
        res.json({
            message: `kuis berhasil ditampilkan dengan id ${id}`,
            data: quizzes,
        });

}