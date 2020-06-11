function valid(form) {
    var fail = false,
        name = form.name.value.trim(),
        password = form.password.value.trim();
    console.log();
    
    if (!name)
        fail = 'You have not entered the name';
    else if (!password)
        fail = 'You have not entered the password';
    if (fail)
        alert(fail);
    else
        alert('Good job');
}