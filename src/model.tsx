import { Database } from "bun:sqlite";

const db = new Database("mydb.sqlite");

const getReviews = () => {
    try {
        const query = db.query("SELECT * FROM reviews;");
        return query.all()
    } catch (error) {
        console.log('error', error);
        return {}
    }
}

const getReview = (id: number) => {
    try {
        const query = db.query("SELECT * FROM reviews WHERE id=$id;");
        return query.get({
            $id: id
        })
    } catch (error) {
        console.log('error', error);
        return {}
    }
}

const createReview = (review: any) => {
    try {
        const query = db.query(
            `INSERT INTO reviews 
            ("course","review","writer")
            VALUES ($course,$review,$writer);`);
        return query.run({
            $course: review.course,
            $review: review.review,
            $writer: review.writer
        })
    } catch (error) {
        console.log('error', error);
    }
}

const deleteReview = (id: number) => {
    try {
        const query = db.query(
            `DELETE FROM reviews WHERE id=$id;`);
        return query.run({
            $id: id
        })
    } catch (error) {
        console.log('error', error);
    }
}

const getQuestions = () => {
    try {
        const query = db.query("SELECT * FROM questions;")
        return query.all()
    } catch (error) {
        console.log('error', error);
    }
}

const getQuestion = (id: number) => {
    try {
        const query = db.query("SELECT * FROM questions WHERE id=$id;");
        return query.get({
            $id: id
        })
    } catch (error) {
        console.log('error', error);
        return {}
    }
}

const createQuestion = (question: any) => {
    try {
        const query = db.query(
            `INSERT INTO questions 
            ("course","question","writer")
            VALUES ($course,$question,$writer);`);
        return query.run({
            $course: question.course,
            $question: question.question,
            $writer: question.writer
        })
    } catch (error) {
        console.log('error', error);
    }
}

const getUsers = () => {
    try {
        const query = db.query("SELECT * FROM users;");
        return query.all()
    } catch (error) {
        console.log('error', error);
        return {}
    }
}

const getUser = (id: number) => {
    try {
        const query = db.query("SELECT * FROM users WHERE id=$id;");
        return query.get({
            $id: id
        })
    } catch (error) {
        console.log('error', error);
        return {}
    }
}

const createUsers = (review: any) => {
    try {
        const query = db.query(
            `INSERT INTO users 
            ("course","review","writer")
            VALUES ($course,$review,$writer);`);
        return query.run({
            $course: review.course,
            $review: review.review,
            $writer: review.writer
        })
    } catch (error) {
        console.log('error', error);
    }
}

const deleteUsers = (id: number) => {
    try {
        const query = db.query(
            `DELETE FROM users WHERE id=$id;`);
        return query.run({
            $id: id
        })
    } catch (error) {
        console.log('error', error);
    }
}

console.log(getQuestions());

