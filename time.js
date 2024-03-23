function updateTime() {

    var now = new Date();
    var utcTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

    var gmt4 = new Date(utcTime.getTime() + (240 * 60000))

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var timeString = hours + ':' + minutes + ' ' + meridiem;
    document.getElementById('clock').textContent = timeString;
}

updateTime();


setInterval(updateTime, 5000);