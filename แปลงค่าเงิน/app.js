const exchangeRates = {
    USD: 0.030,
    THB: 1.000,
    LAK: 580.22,
    JPY: 3.207, 
    CNY: 0.20,
    VND: 685.78,
  }
  function convertCurrency() {
    const form = document.getElementById("form").value
    const input = parseFloat(document.getElementById("input").value)
    const to = document.getElementById("to").value
    const outputElement = document.getElementById("output")
  
    // ตรวจสอบว่าสกุลเงินที่ใส่เข้ามาในฟังก์ชันมีอยู่ในอ็อบเจ็กต์ exchangeRates หรือไม่
    if (!(form in exchangeRates) || !(to in exchangeRates)) {
        outputElement.value = "ไม่รู้ค่าของมึงโว้ย"
      return;
    }
  
    // แปลงจำนวนเงินจากสกุลเงินที่เริ่มต้นเป็นสกุลเงินปลายทาง
    const result = (input / exchangeRates[form]) * exchangeRates[to]
    outputElement.value = result.toFixed(2);
  }
  