var users = [
    {name: 'Tom', gender: 'male'},
    {name: 'Alis', gender: 'female'},
    {name: 'Toacs', gender: 'male'},
    {name: 'Golizes', gender: 'male'},
    {name: 'Lisa', gender: 'female'}
]

var userList = document.getElementById('userList');
var genderFilter = $('#genderFilter');


render(userList, users);


genderFilter.on('change', function(){
    var selectedGender = this.value;

    var FilterUsers = users.filter(function(user){
        return user.gender === selectedGender;
    });

    render(userList, FilterUsers);
});


function render(container, items)
{
    var htmlItems = items.map(function(item){
        return '<li class="list-group-item">'+ item.name +'</li>';
    });
    var html = htmlItems.join('');
    container.innerHTML= html; 
}