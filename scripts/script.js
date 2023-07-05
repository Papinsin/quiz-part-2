let question = document.querySelector("#question")
let option = document.querySelector(".quiz-options") 
let cheakBtn = document.querySelector("#cheak-answer")
let correctAnswer = ""
let fetching = async (url)=>{   
        const res =  (await (await fetch(url)).json())[0] 
        console.log(res)
        correctAnswer = res.correctAnswer //.replace("%20", "")split(" ").join()
        let  incorrect_answers = res.incorrectAnswers
        
        incorrect_answers.push(correctAnswer)
        console.log(correctAnswer)

        let optionsArr = incorrect_answers.sort(()=> Math.random() - 0.5) // the array was shufeld
        console.log(optionsArr)
        question.innerHTML = `${res.question.text}<br> <span class="category">${res.category}</span></h2> `       
        option.innerHTML =  `${
               optionsArr.map((el ,id , array) => 
                `<li>${el}</li>`
               ).join("")}`;              
} 


// fetching("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple&encode=url3986")
fetching("https://the-trivia-api.com/v2/questions")