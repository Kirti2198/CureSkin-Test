
 var data =[2,3,4,5,6,7,8];
function withOneParamter(data) {
  var total = 0;
  // write the code to sum even number
  for(let i=0;i<data.length;i++){
    if(data[i]%2==0){
      total+=data[i]
    }
    
  }
  return total;
  }
  console.log(withOneParamter([2,3,4,5,6,7,8]));
  console.log(withOneParamter([3,8,-5, -8, 12, -3, 6, 9, 11, 10, 20, -6]));
  
  function withoutParameter() {
    var total = 0;
    // write the code to sum even number
    var data2=[-2,-12,4,15,6,16,-8];
    for(let i=0;i<data2.length;i++){
      if(data2[i]%2==0){
        total+=data2[i]
      }    
    }
    return total;
    }

    console.log(withoutParameter());