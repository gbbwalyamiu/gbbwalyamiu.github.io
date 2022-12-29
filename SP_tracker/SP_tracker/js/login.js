
document.getElementById("btnLogin").onclick=async ()=>{
    //ourAlert("You clicked the login button");
    let password = document.getElementById("password").value;
    let username = document.getElementById("useremail").value;
    loginAttempt(username,password);
   // let url = "http://localhost:5101/api/Validation/"+ username +"/"+ password;
    //let data = await getData(url);
    //ourAlert(data);

}
window.onload=()=>{
     if (sessionStorage.getItem('sptsessionfirstname') !=undefined)
     {
        window.location.replace("/manage.html");
     }
     
}

async function loginAttempt(userid, password){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = async function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = await this.responseText; 
            if (data.split(",").length> 3)
            {
              
                let details = data.split(",");
                let manno = details[2];
                let token = details[1];
                let firstname = details[3];
                let lastname = details[4];
                let othernames = details[5];
                let sptemail = details[0];
                let dept = details[7];
                let position = details[6];
                let fullname = firstname + " "+ othernames + " "+ lastname;

                sessionStorage.setItem('sptsessionfullname',fullname);
                sessionStorage.setItem('sptsessionfirstname',firstname);
                sessionStorage.setItem('sptsessionuseremail', sptemail);
                sessionStorage.setItem('sptsessionusermanno', manno);
                sessionStorage.setItem('sptsessionuserdept', dept);
                sessionStorage.setItem('sptsessionposition', position);
                sessionStorage.setItem('sptsessiomusertoken', token);
                //window.location.replace("/manage.html");
               // window.location.replace("/index2.html");
                ourAlert("login successful for " + fullname, 1);
                //ourAlert("we pause here to see");

            }
            else{
                ourAlert("login attemp failed for "+ userid, 2);
            }
         }
    };
    xhttp.open("GET", "https://ehcapps.evelynhone.ac.zm:4450/api/Validation/"+ userid +"/"+ password, false);   
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');        
   // xhttp.setRequestHeader('Access-Control-Allow-Credentials', 'true');
   // xhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/redtape.html');
    xhttp.send();

    
    
}