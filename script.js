var score=0; //กำหนดตัวแปลคะแนน
var CheckScore1= false;//Checkความถูกต้อง
var CheckScore2= false;
var CheckScore3= false;
function checkAnswer(answer) {
    const result = document.getElementById('result');
    const result3 = document.getElementById('result3');
    if (answer === 'a') {
        result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        if(!CheckScore1){
            score++;
            CheckScore1= true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        if(CheckScore1){
            score--;
            CheckScore1= false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }

}
function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'd') {
  
        result2.textContent = "ถูกต้อง 5,7,11 คือ วัฒนธรรมองค์กร";
        result2.style.color = 'green';
        if(!CheckScore2){
            score++;
            CheckScore2= true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
        if(CheckScore2){
            score--;
            CheckScore2= false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }
}
function checkAnswer3(answer) {
    const result4 = document.getElementById('result4');
    
    if (answer === 'c') {
        result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        result4.textContent = "ถูกต้อง จำนวนพนักงานทั้งหมด 1,271 คน";
        result4.style.color = 'green';
        if(!CheckScore3){
            score++;
            CheckScore3= true;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    } else {
        result4.textContent = "Incorrect! Try again.";
        result4.style.color = 'red';
        if(CheckScore3){
            score--;
            CheckScore3= false;
            result3.textContent = "คุณตอบคำถามถูกต้องทั้งหมด "+score+" ข้อ";
        }
    }

}