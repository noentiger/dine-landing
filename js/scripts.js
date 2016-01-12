var clickEvent = ((document.ontouchstart !== null) ? 'click' : 'touchstart');

document.getElementById('signup')
    .addEventListener('submit', signUp);

document.getElementById('resetForm')
    .addEventListener(clickEvent, resetForm);

function resetForm() {
    hide('signupDone');	
    show('signup');
    document.getElementById('send').disabled = false;
    document.getElementById('email').value = '';
}

function signUp(e) {

    e.preventDefault();

    // Perform optimistic action
    hide('signup');
    show('signupDone');

    document.getElementById('send').disabled = true;
    var userEmail = document.getElementById('email').value;

    Parse.initialize(
        'Fh0rneGUGVuUjxCckhx1vGs2mHpFMuEGWNUzvxlO', 
        'xLZnitYsGrTc7sD2gp1nwJj47bLxrPeeOhAof771'
    );
    
    var Users = Parse.Object.extend('Users');
    var Users = new Users();
      Users.save({email: userEmail}, {
      success: function(object) {
        // Saved
      },
      error: function(model, error) {
        console.log('model', model);
        console.log('error', error);
      }
    });
}

function show(target) {
    document.getElementById(target).style.display = 'block';
}

function hide(target) {
    document.getElementById(target).style.display = 'none';
}
