let num = prompt("กรอกเลขที่ต้องการ")
let random_number = Math.floor(Math.random() * 100)
document.getElementById("your_num").innerHTML = "เลขที่คุณซื้อ" + num
document.getElementById("ran_num").innerHTML = "เลขที่ออก" + random_number

if(num == random_number){
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกหวย"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล"
}