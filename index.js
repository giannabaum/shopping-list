$(function() {
  //listens for when a the form is submitted
  //prevents the form from resubmitting
    $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
      
      //create a new variable from the value entered into the form
      //create a new variable of the HTML list information with the newItem information
        var newItem= $('#shopping-list-entry').val();
        var listHtml=<li> 
        <span class="shopping-item">${newItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>


        //add add the new item to the list 
        //return the form value to empty so new entries can be made
        $('.shopping-list').append(listHtml); 
       $('#shopping-list-entry').val('');
    });
//create an event for when the button for "checked" is clicked
//have this list item be checked when button is clicked by toggling the class that 
//strikes through the text
$('.shopping-list').on('click', 'button.shopping-item-toggle', function(event){
$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

//create an event for when the delete button is clicked
//remove the item list item that was clicked
$('.shopping-list').on('click','button.shopping-item-delete',function(event){
$(this).closest('li').remove();
});

});
