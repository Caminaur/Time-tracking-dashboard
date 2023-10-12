
  btnday = document.getElementById('day');
  btnweek = document.getElementById('week');
  btnmonth = document.getElementById('month');

  

btnday.addEventListener('click', changeTimeFrame);
btnweek.addEventListener('click', changeTimeFrame);
btnmonth.addEventListener('click', changeTimeFrame);  


function changeTimeFrame(){
  data = document.querySelectorAll(`[data-time-frame=${this.id}]`);
  alldata = document.querySelectorAll(`[data-time-frame]`);
  for (const timeinfo of alldata) {
    timeinfo.style.display = 'none';
  }
  for (const timeinfo of data) {
    timeinfo.style.display = 'block';
  }

  btnday.setAttribute('data-selected',"false");
  btnmonth.setAttribute('data-selected',"false");
  btnweek.setAttribute('data-selected',"false");
  this.setAttribute('data-selected', "true");
}