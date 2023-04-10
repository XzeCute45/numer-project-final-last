const math = require('mathjs');

const Bisection = (equation, xl, xr)=>{
    let iteration = 0;
    let dataset = [];
    let xm = (xl+xr)/2;
    let fxr = math.evaluate(equation,{x:xr});
    let fxm = math.evaluate(equation,{x:xm});

    while(Math.abs(fxm)>0.000001){
        
        dataset.push({
            iteration:iteration,
            xm:xm,
            xl:xl,
            xr:xr,
            error:Math.abs(fxm)
        })

        iteration++;
        xm = (xl+xr)/2;
        fxm = math.evaluate(equation,{x:xm});

        if(fxm*fxr<0){
            xl = xm;
        }
        else{
            xr = xm;
        }
    }
    return dataset;

}


module.exports=Bisection;