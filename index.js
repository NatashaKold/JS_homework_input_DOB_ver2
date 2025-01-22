const inputDate = document.getElementById('addDate');

const message = document.getElementById('message');

function countDaysLeft(){
    const DOBStr = inputDate.value ;
    const DOBTimestamp = Date.parse(DOBStr);

    const currentDateTimestamp = Date.now();

    const timeDifference = DOBTimestamp - currentDateTimestamp;

    const daysLeft = Math.floor(timeDifference/ (1000*60*60*24));

    let daysWord;
    let daysAsString = String(daysLeft);
    if (daysAsString[daysAsString.length - 1] =='0' || daysAsString[daysAsString.length-1] =='5' ||  daysAsString[daysAsString.length-1] =='6' || daysAsString[daysAsString.length-1] =='7' || daysAsString[daysAsString.length-1]=='8' || daysAsString[daysAsString.length-1]=='9'){
        daysWord='дней'
    }
    else if(daysAsString[daysAsString.length-1]=='1'){
        daysWord='день'
    }
    else{
        daysWord='дня'
    }
    


        if (inputDate === undefined){ 
        document.getElementById("message").innerHTML= "Введите дату Вашего рождения";
        } 
        else{
        document.getElementById("message").innerHTML= `До Дня Рождения осталось ${daysLeft} ${daysWord}!`;
        document.getElementById("message").style.color="black";
        }

}