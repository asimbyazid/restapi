const getStudentsQueries = 'SELECT * FROM students';
const addStudentsQueries = "INSERT INTO students(name,email,age,dob) VALUES ($1, $2, $3, $4)";
const checkEmailExistsQueries = 'SELECT s from students s where s.email=$1;';
const getStudentsQueriesById = 'SELECT * FROM students where id =$1';
const deleteStudentsQueriesById = 'DELETE FROM students where id =$1';
const updateStudentsQueries = 'UPDATE students s SET name=$1, email=$2, age=$3, dob =$4 where s.id = $5';
module.exports ={
    getStudentsQueries,
    getStudentsQueriesById,
    deleteStudentsQueriesById,
    addStudentsQueries,
    updateStudentsQueries,
    checkEmailExistsQueries,
};

