const math = require('mathjs')

const CalFalsePosition = (equation, xl, xr) => {
    let iteration = 0;
    let DataTable = [];
    let fxl = math.evaluate(equation, { x: xl });
    let fxr = math.evaluate(equation, { x: xr });
    let x1 = ((xl * fxr) - (xr * fxl)) / (fxr - fxl);
    let fx1 = math.evaluate(equation, { x: x1 });

    while (math.abs(fx1) > 0.0000001) {
      DataTable.push({
        iteration: iteration,
        x1: x1,
        xl: xl,
        xr: xr
      });

      iteration++;
      if (fx1 * fxr < 0) {
        xl = x1;
        fxl = math.evaluate(equation, { x: xl });
      } else {
        xr = x1;
        fxr = math.evaluate(equation, { x: xr });
      }
      x1 = ((xl * fxr) - (xr * fxl)) / (fxr - fxl);
      fx1 = math.evaluate(equation, { x: x1 });
    }
    DataTable.push({
      iteration: iteration,
      x1: x1,
      xl: xl,
      xr: xr
    });
    return DataTable;
  };

module.exports=CalFalsePosition;