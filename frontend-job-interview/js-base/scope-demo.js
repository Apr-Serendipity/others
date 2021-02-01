for(let i = 1; i <= 10; i ++) {  // 3: if change "let" to "var"
  const a = document.createElement('a');
  a.innerHTML = i + '</br>';  // 1: add '</br>' to make the output more clear
  document.body.append(a);
  a.addEventListener('click', event=>{
    event.preventDefault;
    console.log(i);  // 2: need to click to show the effect and clg "i" not "event.target.innerText"
  })
}