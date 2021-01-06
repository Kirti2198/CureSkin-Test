const name='kirti';

const reverseName= (name)=> name
.split('')
.reverse()
.join('');
const newName= 
setInterval(
  reverseName('kirti')
,10000);
  

console.log(newName);