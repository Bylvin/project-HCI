function validate()
{
    var name = document.getElementById('name');
    var email = document.getElementById('e-mail');
    var password = document.getElementById('password');
    var address = document.getElementById('address');
    var numcopies = document.getElementById('numcopies');
    var gametype = document.getElementById('gametype');
    var checkbox = document.getElementById('check');
    var message = document.getElementById('message');
    const form = document.getElementById('register');
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8}?)$/;

    if(name.value == "" || name.value == null)
    {
        alert("Username is required");
    }

    else if (name.value.length <= 7) 
    {
        alert("Username must be more than 7 character(s)");
    }

    else if (email.value == "" || email.value == null)
    {
        alert("E-mail is required");
    }

    else if (!regx.test(email.value)) 
    {
        alert("Write a correct e-mail");    
    }

    else if (password.value == "" || password.value == null) 
    {
        alert("Password is required");    
    }

    else if (password.value.length <= 8) 
    {
        alert("Password must be more than 8 character(s)");
    }

    else if (address.value == "" || address.value == null)
    {
        alert("Address is required")
    }

    else if (address.value.includes('Street') == false)
    {
        alert("Write a correct address");
    }

    else if (numcopies.value == "" || numcopies.value == null)
    {
        alert("Number of copies is required");
    }

    else if (gametype.value == "" || gametype.value == null) 
    {
        alert("Type of the game is required");
    }

    else if (!checkbox.checked) 
    {
        alert("Please check the user agreement");
    }

    else
    {
        message.innerHTML = "Pre-Order Succesful";
        name.value = null;
        email.value = null;
        password.value = null;
        address.value = null
        numcopies.value = null;
        gametype.value = null;
        checkbox.checked = false;
    }
}

