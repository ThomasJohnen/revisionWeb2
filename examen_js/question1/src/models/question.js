const QUESTIONS = [
    {
      question: "Bonjour",
      reponse: "Bonjour a toi",
    }
];

const readAllQuestions = () => QUESTIONS;

const addOneQuestion = (question) => QUESTIONS.push(question);

const findQuestion = (question) => QUESTIONS.find((q) => q.question === question);

export { readAllQuestions, addOneQuestion, findQuestion };