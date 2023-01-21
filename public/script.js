const socket = io();

let name;

do{
    name = prompt("please enter you name: ").trim();
    if(name) socket.emit('join', name);
}while(!name)


let form = document.getElementById("form");

form.addEventListener('submit', ()=>{
    const msg = document.getElementById("inp").value.trim();
    if(!msg) return;
    let container = document.getElementById("msg-container");
    let msgDiv = document.createElement('div');
    msgDiv.classList.add('msg');
    msgDiv.classList.add('right');
    msgDiv.innerHTML = msg;
    container.appendChild(msgDiv);
    document.getElementById("inp").value = "";
    socket.emit('send', {name:name, msg: msg});
    container.scrollTop = container.scrollHeight;
})

socket.on('recive', (data)=>{
    let container = document.getElementById("msg-container");
    let msgDiv = document.createElement('div');
    msgDiv.classList.add('msg');
    msgDiv.classList.add('left');
    msgDiv.innerHTML = `${data.name}: ${data.msg}`;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
});

socket.on('joined', name=>{
    let container = document.getElementById("msg-container");
    let msgDiv = document.createElement('div');
    msgDiv.classList.add('msg');
    msgDiv.classList.add('mid');
    msgDiv.innerHTML = `${name} has joined chat`;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
})