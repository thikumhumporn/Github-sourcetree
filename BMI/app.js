let weight = prompt ("กรุณากรอกน้ำหนักของคุณ")
let height = prompt ("กรุณากรอกส่วนสูงของคุณเป็นเมตร")
BMI = weight/(height*height)
let sum = ""
if(BMI<=18.5){
    sum = "ผอมเกินไป"
}else if(BMI <=24){
    sum = "น้ำหนักปกติ"
}else if(BMI <=29.9){
    sum = "อ้วน"
}else{
    sum = "อ้วนมาก"
} document.getElementById("weight").innerHTML = "น้ำหนักของคุณคือ : " + weight + "<br>"
  document.getElementById("height").innerHTML = "น้ำหนักของคุณคือ : " + height + "<br>"
  document.getElementById("bmi").innerHTML = " BMI ของคุณคือ : " + BMI + "<br>"+sum 