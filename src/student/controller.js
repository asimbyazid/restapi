const pool = require('../../db')
const queries = require('./queries')

const getStudentsController = (req,res)=>{
    pool.query(queries.getStudentsQueries,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const getStudentsControllerById = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentsQueriesById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

const addStudentsController = ((req,res)=>{
    const {name,email,age,dob} = req.body;
    //check if email exist in DB
    pool.query(queries.checkEmailExistsQueries,[email],(error,results)=>{
        if(results.rows.length){
            res.send("Email already exist.");
        }
    })
})
module.exports = {
    getStudentsController,
    getStudentsControllerById,
    addStudentsController
}