const pool = require('../../db')
const queries = require('./queries')

const getStudentsController = (req,res)=>{
    pool.query(queries.getStudentsQueries,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

//Get student information by ID
const getStudentsControllerById = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentsQueriesById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}
//Delete student by ID
const deleteStudentsControllerById = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentsQueriesById,[id],(error,results)=>{
        if(error) throw error;
        if(results.rows.length){
            pool.query(queries.deleteStudentsQueriesById,[id],(error,results)=>{
                if(error) throw error;
                res.status(200).send("Deleted Succesfully");
        }
        )
        }
        else{ res.send("Student does not exist.");}
        //res.status(200).json(results.rows)
    })
}

//Add a  new student
const addStudentsController = ((req,res)=>{
    const {name,email,age,dob} = req.body;
    //check if email exist in DB
    pool.query(queries.checkEmailExistsQueries,[email],(error,results)=>{
        if(results.rows.length){
            res.send("Email already exist.");
        }
        else{
            //add students
            pool.query(queries.addStudentsQueries,[name,email,age,dob],(error,results)=>{
                res.status(201).send("Student succesfully added");
        }
        )
        }
       
    })
   
})


//Update exisiting student information
const updateStudentsControllerById = ((req,res)=>{
    const {name,email,age,dob} = req.body;
    const id = parseInt(req.params.id)
    //check if student exist in DB
    pool.query(queries.getStudentsQueriesById,[id],(error,results)=>{
        if(results.rows.length<=0){
            res.send("Student information does not exist");
        }
        else{
            //update students
            const n = typeof name === 'undefined'? results.rows[0].name :name
            const e = typeof email === 'undefined'? results.rows[0].email :email
            const a = typeof age === 'undefined'? results.rows[0].age :age
            const d = typeof dob === 'undefined'? results.rows[0].dob :dob
        
            pool.query(queries.updateStudentsQueries,[n,e,a,d,id],(error,results)=>{
                res.status(200).send("Student name updated succesfully");
        }
        )
        }
       
    })
   
})
module.exports = {
    getStudentsController,
    getStudentsControllerById,
    deleteStudentsControllerById,
    addStudentsController,
    updateStudentsControllerById
}