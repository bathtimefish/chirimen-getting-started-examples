window.addEventListener("load", function() {
  let { spawn } = task;
  spawn(function() {
    const gpio = yield navigator.requestGPIOAccess();
    console.info(gpio);
    // https://chirimen.org/docs/en/board_connectors.html
    const sensor = gpio.ports.get(196);  // Motion Sensor Data Pin: CN1 7
    const led = gpio.ports.get(198);     // LED Anode Pin: CN1 9
    yield sensor.export("in");
    yield led.export("out");
    setInterval(() => {
      sensor.onchange = v => {
        console.info(v);
        led.write(v);
      };
    }, 1000);
  });
});
