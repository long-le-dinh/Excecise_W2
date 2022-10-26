const data = [
  {
    name: "TV",
    mac: "00:1B:44:11:3A:B7",
    ip: "127.0.0.2",
    date: "2021-05-31",
    pc: 50,
  },
  {
    name: "TV2",
    mac: "00:1B:44:11:3A:B7",
    ip: "127.0.0.3",
    date: "2021-05-31",
    pc: 60,
  },
  {
    name: "TV3",
    mac: "00:1B:44:11:3A:B7",
    ip: "127.0.0.4",
    date: "2021-05-31",
    pc: 80,
  },
  {
    name: "TV4",
    mac: "00:1B:44:11:3A:B7",
    ip: "127.0.0.5",
    date: "2021-05-31",
    pc: 100,
  },
];



//Table
let col = [];
for (let i = 0; i < data.length; i++) {
  for (let key in data[i]) {
    if (col.indexOf(key) === -1) {
      col.push(key);
    }
  }
}

const table = document.createElement("table");

let tr = table.insertRow(-1);

for (let i = 0; i < col.length; i++) {
  let th = document.createElement("th");
  th.innerHTML = col[i];
  tr.appendChild(th);
}

for (let i = 0; i < data.length; i++) {
  tr = table.insertRow(-1);

  for (let j = 0; j < col.length; j++) {
    let tabCell = tr.insertCell(-1);
    tabCell.innerHTML = data[i][col[j]];
  }
}

var d = 0;
for (let i = 0; i < data.length; i++) {
  d += data[i].pc;
}

let row1 = table.insertRow(-1);
let cell1 = row1.insertCell();
let cell2 = row1.insertCell();
let cell3 = row1.insertCell();
let cell4 = row1.insertCell();
let cell5 = row1.insertCell();
cell1.innerHTML = "<b>Total</b>";
cell5.innerHTML = d.toString().bold();

const divShowData = document.getElementById("showData");
divShowData.innerHTML = "";
divShowData.appendChild(table);

//Chart
var valueChart = data?.map((item) => item.pc);
var devices = data?.map((item) => item.name);
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: devices,
    datasets: [
      {
        backgroundColor: barColors,
        data: valueChart,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018",
    },
  },
});

//Add
function addDevice(name, ip) {
  var item = {
    name: name,
    ip: ip,
  };
  data.push(item);
}

function addOnClick() {
  const name = document.getElementById("name").value;
  const ip = document.getElementById("ip").value;
  if (name == "") {
    window.alert("Name is empty!");
  } else if (ip == "") {
    window.alert("Ip is empty!");
  } else {
    addDevice(name, ip);
  }
}
