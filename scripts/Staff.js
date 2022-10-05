var row = document.querySelector('.table-row');
var staffData = [
    {
        id: 1,
        userName: 'Zafrullah',
        email : 'zaf@gmail.com',
        password: 24434,
        phone: 09011914380,
        Role: 'Admin',
    },
    {
        id: 2,
        userName: 'Bolade',
        email : 'bola@gmail.com',
        password: 12345,
        phone: 09031719450,
        Role: 'Regular',
    }
]

const RegisterStaff = () =>
{    
    var staffs = JSON.parse(window.localStorage.getItem("staffdetails"));
    const stnamee = document.querySelector('#username').value;
    const stemail = document.querySelector('#email').value;
    const stpassword = document.querySelector('#password').value;
    const stphone = document.querySelector('#phone').value;
    const strole = document.querySelector('#role').value;
    const sub = document.querySelector('.submit-btn');

        let staffObj = {
            id: staffs.length + 1,
            userName: stnamee,
            email: stemail,
            password: stpassword,
            phone: stphone,
            Role: strole,
        }
        staffData = staffs;
        staffData.push(staffObj);
        localStorage.setItem("staffdetails", JSON.stringify(staffData));
        alert('Staff Successfully Added');
        location.href="index.html";
}

const STAFFTEMPLATE = `
<tr>
    <td>{{STAFF-ID}}</td>
    <td colspan="45px">{{STAFF-USERNAME}}</td>
    <td colspan="35px">{{STAFF-EMAIL}}</td>
    <td>{{STAFF-PHONE}}</td>
    <td>{{STAFF-ROLE}}</td>
</tr>
`;

const renderStaff = () => {
     var staffdetails = JSON.parse(window.localStorage.getItem("staffdetails"));
    row.innerHTML = "";
    staffdetails.forEach( x => {
        let staf = STAFFTEMPLATE
        .replace('{{STAFF-ID}}',x.id)
        .replace('{{STAFF-USERNAME}}',x.userName)
        .replace('{{STAFF-EMAIL}}',x.email)
        .replace('{{STAFF-PHONE}}',x.phone)
        .replace('{{STAFF-ROLE}}',x.Role)
        row.innerHTML += staf;
    })
}

function adminLogin()
{
    var staffdetails = JSON.parse(window.localStorage.getItem("staffdetails"));
    const admUserName = document.querySelector('#userName')
    const admPassword = document.querySelector('#password')
    const form = document.querySelector('.admLoginForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        for (let i = 0; i < staffdetails.length; i++) {
            
            if(admUserName.value == staffdetails[i].userName && admPassword.value == staffdetails[i].password  && staffData[i].Role == 'Admin')
            {
                alert(`Welcomback ${admUserName.value}`);
                location.href = "addmindDashboard.html";
                return true;
            }
            continue;
        }
        alert('Only Admin can log-in here'); 
        return false;
    })
}

renderStaff();