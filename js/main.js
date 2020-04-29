function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
function onload() {
    auto_grow(document.getElementById("result"));
}
function generate() {
    subject = document.getElementById("subject").value;
    event = document.getElementById("event").value;
    event2 = document.getElementById("event2").value;
    if (subject.length == 0 || event.length == 0 || event2.length == 0)
        return;
    result =
        `　　${subject}如何${event}呢？${subject}相信大家都很熟悉，但是${subject}${event}到底是怎麼回事呢，下面就讓小编帶大家一起了解吧。\r\n　　${subject}${event}，其實就是${event2}，大家可能會驚訝${subject}怎麼${event2}呢？但事實就是如此，小编也感到非常訝異。\r\n　　這就是關於${subject}${event}的內容了，大家有什麼想法呢，歡迎在留言區跟小编一起討論哦！`;
    document.getElementById("result").value = result;
    auto_grow(document.getElementById("result"));
}

function audios() {
        var text = document.getElementById("result").value;
        if (text.length<1){
            alert('你還沒生成農場文喔！！')
        }else {
            let msg = new SpeechSynthesisUtterance(text);
             //msg.rate = 4 播放速度
             //msg.pitch = 10 音調高低
             //msg.volume = 0.5 播放音量
            speechSynthesis.speak(msg);
        }
    }
