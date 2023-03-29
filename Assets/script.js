$(function () {
  // These are variables for the current day and time, a call of each seperate div with an id of hour-, and a call to each saveBtn class.
  var today = dayjs();
  var hours = $('div[id^="hour-"]');
  var saveButton = $( ".saveBtn" );

  // this calls for the current day of the week and date specifically and adds it to the currentDay p tag.
  $('#currentDay').text(today.format('[Today is ] dddd, MMM D, YYYY'));
  $('#currentTime').text(today.format('h:mm A'))
  // This function runs a for loop through each hour id
  hours.each(function(){
    // this variable takes the integer from the hour id and parses it so that it is no longer a string while removing "hour-"
  var hourBlock = parseInt(this.id.replace("hour-", ""));
  // this if statement compares the integer taken from the hour id with the current hour and sets our past, present, or future class
  if (hourBlock < today.hour()) {
    this.classList.add('past');
  } else if (hourBlock == today.hour()) {
    this.classList.add('present');
  } else {
    this.classList.add('future');
  }
// this calls for our what we save in our local storage and sets the appropriate text are value
  $(`#${this.id} > textarea`).val(localStorage.getItem(this.id))
})
// this is a click event for the save button that takes this (the button) and takes the id of the parent attribute as the key and then takes the sibling text area value and saves it as the value
saveButton.on('click', function () {
  localStorage.setItem($(this).parent().attr('id'), $(this).siblings("textarea").val())
});

});
