
function newItem() {
    //adding a new item to the list of items
    let li = $('<li></li>');

    let inputValue = $('#input').val()
    li.append(inputValue);

    //checking if input empty, if not append to li

    if (inputValue === ''){
        alert('You must write a to do list item!')
    }else {
        $('#list').append(li);
    }

    //crossing out an item from list of items
    li.on('dblclick', function crossOut(){
        li.toggleClass('strike');
    });

    //adding the delete button 'X'

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem(){
        li.addClass('delete');
    }

    


    //reordering items
    $('#list').sortable();

}