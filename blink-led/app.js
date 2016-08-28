window.addEventListener("load", function() {
  let { spawn } = task;
  spawn(function() {
    const gpio = yield navigator.requestGPIOAccess();
    // https://chirimen.org/docs/en/board_connectors.html
    const led = gpio.ports.get(198);     // LED Anode Pin: CN1 9
    yield led.export("out");
    var on = 0;
    setInterval(() => {
      on = on ? 0 : 1;
      console.log(on);
      led.write(on);
    }, 1000);
  });
});
