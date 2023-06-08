const getStoredQuiz = () => {
    let newQuiz = {};

    const storedQuiz = localStorage.getItem('quiz-answer')
    if(storedQuiz){
        newQuiz = storedQuiz
    }

    return newQuiz
}

const addToDb = (str) => {
    localStorage.setItem('quiz-answer', str)
};

export { addToDb, getStoredQuiz };
