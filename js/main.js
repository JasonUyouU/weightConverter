document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e) {
  document.getElementById('output').style.visibility = 'visible';
  let lbs = e.target.value;
  document.getElementById('kgOutput').innerHTML = lbs/2.2046;
  document.getElementById('stonesOutput').innerHTML = lbs/14;
  document.getElementById('ozOutput').innerHTML = lbs*16;
})
