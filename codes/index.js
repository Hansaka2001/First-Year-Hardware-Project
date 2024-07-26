// Create a client instance with the broker host name and port
var client  = mqtt.connect('wss://a879e90727254ac4963f2db7a37da752.s1.eu.hivemq.cloud:8884/mqtt', {
    username: 'Client01',
    password: '12ABCMassii@'
});

// Handle the connection event
client.on('connect', function () {
  // Subscribe to a topic
  client.subscribe('BetteryLevel');
  client.subscribe('Weight');
  client.subscribe('Right');
  client.subscribe('Start');
  client.subscribe('Left');
  //client.subscribe('LED');
  client.subscribe('Turbidity');
  client.subscribe('pH');
  client.subscribe('Distance');
  client.subscribe('Connection_Status');
})

// Handle the message event
client.on('message', function (topic, message) {
  //console.log(message.toString());
  try {
    document.getElementById(topic).innerHTML = message.toString();
  } catch (error) {
    console.log("Error" + topic);
  }
  
})

// function EnableLiveServer(checkboxElem){
//     if (checkboxElem.checked) {
//         client.publish('enable', '1');
//     } 
//     else {
//         client.publish('enable', '0');
//     }
// }

function connectF(connect){
    if (connect.checked) {
        client.publish('Connection_Status', 'ON');
    } 
    else {
        client.publish('Connection_Status', 'OFF');
    }
}

function ledF(led){
    if (led.checked) {
        client.publish('LED', 'ON');
    } 
    else {
        client.publish('LED', 'OFF');
    }
}

function rightF(right){
    client.publish('Right', right);
}

function leftF(left){
    client.publish('Left', left);
}