// Add all required elements
let start_game = document.querySelector(".start_game button");
let game_info_list = document.querySelector(".game_info_list");
let exit_btn = game_info_list.querySelector(".buttons .exit");
let continue_btn = game_info_list.querySelector(".buttons .continue");
let quiz_box = game_info_list.querySelector("quiz_box");

// Activate start game button
start_game.onclick = ()=>{
    game_info_list.classList.add("activeInfo");
};

exit_btn.onclick = ()=>{
    game_info_list.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    game_info_list.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
}
