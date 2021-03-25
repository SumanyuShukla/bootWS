var username=null;
var stompClient=null;

function connect(event){
    username=document.getElementById("name").value;
    if(username){
        document.getElementById("register").style.display="none";
        document.getElementById("mainDiv").style.display="block";
        var socket=new SockJS("/wsConnect");
        stompClient=Stomp.over(socket);

        stompClient.connect({},onConnected,onError);
    }
    event.preventDefault();
}

function onConnected(){
    stompClient.subscribe("/messages/public",onMessageReceived);

    stompClient.send("/app/chat.register",{},JSON.stringify({name:username,type:"join"}));
}

function send(event){
    var message=document.getElementById("message").value;
    if(message && stompClient){
    stompClient.send("/app/chat.send",{},JSON.stringify({name:username,content:message,type:"chat"}));
    document.getElementById("message").value="";
    }
    event.preventDefault();
}

function onError(){

}

function onMessageReceived(payload){
    var message=JSON.parse(payload.body);

    var list=document.createElement("p");

    if(message.type=="join"){
        list.textContent+=message.name+" Joined!";
    }else{
        list.textContent+=message.content;
    }
    document.getElementById("chat").appendChild(list);
}