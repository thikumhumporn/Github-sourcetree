var round = prompt("คุณจะเล่นกี่รอบ ?")
var win = 0
var lost = 0
    for(var i = 0; i < round; i++){
        var answer = prompt("หัวหรือก้อย ?")
        var random_answer = ""
        if(Math.floor(Math.random()*10) <= 4 ){
            random_answer = "หัว"
        }else{
            random_answer = "ก้อย"
        }

        if(answer==random_answer){
            alert("ยินดีด้วย")
            win = win+1
        }else{
            alert("เสียใจด้วย")
            lost = lost+1
        }
        document.getElementById("game-list").innerHTML +="หัวหรือก้อย ?"+ " : " + answer + "<br>" +"ผลที่ออก"+   " : " +random_answer +"<br>" 
     }    
    document.getElementById("gameround").innerHTML ="จำนวนเกมที่เล่น"+ " : " + round + "<br>" 
    document.getElementById("winscore").innerHTML ="จำนวนเกมที่ชนะ"+ " : " + win + "<br>" 
    document.getElementById("lostscore").innerHTML ="จำนวนเกมที่แพ้"+ " : " + lost + "<br>" 