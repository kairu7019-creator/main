const form = document.getElementById('form');
const username = document.getElementById('username');
const honbun = document.getElementById('honbun');
const soshin = document.getElementById('soshin');
const suretai = document.getElementById('suretai');



form.addEventListener('submit',function(event){
    event.preventDefault();
    iti();

});

function iti(text = honbun.value || soshin.disabled, name = username.value || "主" ,surename  = suretai.value){
    const time = new Date().toLocaleString();
    const number = 1;
    const id = Math.random().toString(36).substring(2,8);
    const list = {text, name, surename, number,time, id};

    localStorage.setItem("keiji", JSON.stringify(list));

      if(text.trim() && surename.trim() === "") {
        alert('入力！');
        location.reload();
    soshin.disabled = true; // 空なら無効
  } else {
    location.href = 'https://kairu7019-creator.github.io/keijiban/';
  }

}
