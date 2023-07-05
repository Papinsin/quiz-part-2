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
// [{"category":"sport_and_leisure","id":"622a1c367cc59eab6f95004c","correctAnswer":"Pete Sampras","incorrectAnswers":["Pete Roddick","Pete Hewitt","Pete Federer"],"question":{"text":"Who is known as Pistol Pete?"},"tags":["people","nicknames","sport"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"food_and_drink","id":"624c60c095b12387e142c79b","correctAnswer":"Ramen","incorrectAnswers":["Ceviche","Plov","Chilli Crab"],"question":{"text":"Which of these dishes would you most expect to find in Japan?"},"tags":["food","food_and_drink"],"type":"text_choice","difficulty":"easy","regions":[],"isNiche":false},{"category":"sport_and_leisure","id":"62417cd80f96c4efe8d7738b","correctAnswer":"Calgary Flames","incorrectAnswers":["Calgary Thunder","Calgary Bears","Calgary Royals"],"question":{"text":"Which of these is a hockey team based in Calgary?"},"tags":["sport"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},{"category":"science","id":"622a1c3a7cc59eab6f950fc4","correctAnswer":"James Watt","incorrectAnswers":["Benjamin Franklin","Eli Whitney","Marcus Steam"],"question":{"text":"Who Invented The Steam Engine?"},"tags":["science"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"science","id":"622a1c3a7cc59eab6f950fd3","correctAnswer":"Sol","incorrectAnswers":["Ursa Minor","Proxima Centauri","Epsilon Eridani"],"question":{"text":"Which star is nearest the Earth?"},"tags":["astronomy","the_solar_system","general_knowledge","science"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},{"category":"science","id":"63a03951c7d86251f9b65c3f","correctAnswer":"HTTPS","incorrectAnswers":["FTP","SSH","SMTP"],"question":{"text":"Which networking protocol is used to access websites securely?"},"tags":["the_internet","technology","science","computing","initials"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},{"category":"food_and_drink","id":"645b9ebcf09106226db23571","correctAnswer":"Spinach","incorrectAnswers":["Kale","Broccoli","Cabbage"],"question":{"text":"Which vegetable did Popeye love to eat from a can?"},"tags":["nutrition","vegetables","food_and_drink","food","cartoons"],"type":"text_choice","difficulty":"easy","regions":[],"isNiche":false},{"category":"society_and_culture","id":"63b0587b4799123c67712f3e","correctAnswer":"Unicorn","incorrectAnswers":["Lion","Dragon","Horse"],"question":{"text":"What is the national animal of Scotland?"},"tags":["uk","scotland","animals","society_and_culture"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},{"category":"music","id":"625064e4e12f6dec240bdfd5","correctAnswer":"Whoomp! (There It Is)","incorrectAnswers":["Electric Avenue","Barbie Girl","I Melt With You"],"question":{"text":"What song did Tag Team have a hit with in 1993?"},"tags":["songs","one_hit_wonders","music"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},{"category":"arts_and_literature","id":"622a1c397cc59eab6f950df9","correctAnswer":"D. H. Lawrence","incorrectAnswers":["Oscar Wilde","Charles Dickens","G. K. Chesterton"],"question":{"text":"Which author wrote 'Lady Chatterley's Lover'?"},"tags":["arts_and_literature"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false}]


// fetching("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple&encode=url3986")
fetching("https://the-trivia-api.com/v2/questions")
