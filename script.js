// 현재 시각 업데이트 함수
function updateTime() {
    var now = new Date();
    var timeElement = document.getElementById("time");
    timeElement.textContent = now.toLocaleString("ko-KR");
}

// 자습 기록 추가 함수
function recordStudy() {
    var name = document.getElementById("name").value;
    var now = new Date();
    var time = now.toLocaleString("ko-KR");
    var record = name + ", " + time;
    var recordContainer = document.getElementById("record-container");
    var recordElement = document.createElement("p");
    recordElement.textContent = record;
    recordContainer.appendChild(recordElement);
}

// 초기화
updateTime();
setInterval(updateTime, 1000); // 1초마다 시간 업데이트

// CSV 추출 함수
function exportToCSV() {
    var records = document.querySelectorAll("#record-container p");
    var csvContent = "data:text/csv;charset=utf-8,";
    records.forEach(function(record) {
        csvContent += record.textContent + "\n";
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "study_records.csv");
    document.body.appendChild(link);
    link.click();
}
