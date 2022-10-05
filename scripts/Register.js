let customerData = [
    {
        userName: 'Ade',
        email : 'ade@gmail.com',
        password: 12345,
        phone: 09011914380,
    }
]

const Register = () =>
{    
    var obj = JSON.parse(window.localStorage.getItem("details"));
    var namee = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;
    var phone = document.querySelector('.phone').value;
    const sub = document.querySelector('.submit-btn');

        let details = {
            userName: namee,
            email: email,
            password: password,
            phone: phone
        }
        customerData = obj;
        customerData.push(details);
        localStorage.setItem("details", JSON.stringify(customerData));
        location.href="index.html";
}



function Login()
{
    const userName = document.querySelector('.user-name');
    const userPassword = document.querySelector('.user-password');
    const submitbutton = document.querySelector('#submit-form')
    submitbutton.addEventListener('submit', (e) => {
        e.preventDefault();
        var obj = JSON.parse(window.localStorage.getItem("details"));
        for(let i = 0; i < obj.length; i++)
        {
            if(userName.value == obj[i].userName && userPassword.value == obj[i].password)
            {
                location.href = 'index.html'
                alert(`successfully logged in as ${userName.value}`);
                return true;
            }
            continue;
        }
        alert('Invalid log-in details'); 
        return false;
    } );
}

