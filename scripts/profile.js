let html = document.querySelector('.profile');
const PROFILETEMPLATE = `
<ul style = "list-style-type: none;">
 <li>{{PROFILE-NAME}}</li>
 <li>{{PROFILE-EMAIL}}</li>
 <li>{{PROFILE-PHONE}}</li>
</ul>
`;

const renderProfile = () => {
    var email = prompt('Enter your email');
    var staffdetails = JSON.parse(window.localStorage.getItem("details"));
        let mail = staffdetails.find(x => x.email == email);
       let profile = PROFILETEMPLATE
       .replace('{{PROFILE-NAME}}',mail.userName)
       .replace('{{PROFILE-EMAIL}}',mail.email)
       .replace('{{PROFILE-PHONE}}',mail.phone)
       html.innerHTML = profile;
}
renderProfile();