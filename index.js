
let secondes = 0;
function timer() {
    
    
    let maClosure = () => {
      return ++secondes;
    }
    return maClosure;
  }
  
  let monTimer = timer();
  console.log(monTimer());
  console.log(monTimer());
  console.log(monTimer());