// Add all required elements
let start_game = document.querySelector(".start_game button");
let game_info_list = document.querySelector(".game_info_list");
let exit_btn = game_info_list.querySelector(".buttons .exit");
let continue_btn = game_info_list.querySelector(".buttons .continue");
let quiz_box = document.querySelector(".quiz_box");

// Activate start game button
start_game.onclick = ()=>{
    game_info_list.classList.add("activeInfo");
};

exit_btn.onclick = ()=>{
    game_info_list.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    game_info_list.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions();
}

let que_count = 0;

function showQuestions(index){
    let que_text = document.querySelector(".que_test")
    let que_tag = "<h3>"+ questions[3].question +"</h3>";
    que_text.innerHTML = que_tag;
}
