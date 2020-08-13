$(function() {
    $('#js-shopping-list-form').on('submit', function(event){
      event.preventDefault();
      
        var newItem= $('#shopping-list-entry').val();
        $('shopping-list').append('<li>' + newItem + '</li>');
        var newItem=$('#shopping-list-entry').val('');
    });

$('shopping-list').on('click', 'button.shopping-item-toggle', function(event){
$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('shopping-list').on('click','button.shopping-item-delete',function(event){
$(this).closest('li').remove();
});

});