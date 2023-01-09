const getStudentsQueries = 'SELECT * FROM students';
//const addStudentsQueries = "INSERT INTO students VALUES ('Ibrahim', 'ibro227@yahoo.com', 23, dob)";
const checkEmailExistsQueries = 'SELECT s from students s where s.email=$1;';
const getStudentsQueriesById = 'SELECT * FROM students where id =$1';
 
module.exports ={
    getStudentsQueries,
    getStudentsQueriesById,
    //addStudentsQueries,
    checkEmailExistsQueries
};

