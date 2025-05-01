let button = document.getElementById('btn');
let answer = document.getElementById('p');

button.addEventListener("click", async ()=>{
    button.disabled = true;
    for(let i = 3; i > 0; i--){
        answer.innerHTML = i + "...";
        console.log(i)
        await new Promise(res => setTimeout(res,1000));
}

    const result = Math.random() <= 0.5 ? "Tails" : "Heads";
    answer.innerHTML = result;
    button.disabled = false;
})