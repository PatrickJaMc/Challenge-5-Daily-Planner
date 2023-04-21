// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hours = {
  '9': '',
  '10': '',
  '11': '',
  '12': '',
  '13': '',
  '14': '',
  '15': '',
  '16': '',
  '17': ''
}
$(function () {

  var hasStorage = localStorage.getItem('schedule');
  if (!hasStorage) {
    localStorage.setItem('schedule', JSON.stringify(hours));
  }





  $('button').on('click', function () {
    var timeBlockId = $(this).parent().attr('id');
    var hourValue = timeBlockId.split('-')[1];
    //console.log(hourValue);
    var storedValue = JSON.parse(localStorage.getItem('schedule'));
    console.log(storedValue);
    var userInput = $(this).siblings('textarea').val().trim();
    storedValue[hourValue] = userInput;
    localStorage.setItem('schedule', JSON.stringify(storedValue));
  })



  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YYYY h:mma'));
});

