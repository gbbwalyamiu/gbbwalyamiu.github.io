var depth = "";
window.onload = ()=>{
  //console.log(sessionStorage);
  /* 
         sessionStorage.setItem('sptsessionfullname',fullname);
                sessionStorage.setItem('sptsessionfirstname',firstname);
                sessionStorage.setItem('sptsessionuseremail', sptemail);
                sessionStorage.setItem('sptsessionusermanno', manno);
                sessionStorage.setItem('sptsessionuserdept', dept);
                sessionStorage.setItem('sptsessionposition', position);
                sessionStorage.setItem('sptsessiomusertoken', token);

  */
  if (sessionStorage.getItem('sptsessionuseremail') != undefined 
  && sessionStorage.getItem('sptsessionusermanno')!=undefined 
  && sessionStorage.getItem('sptsessionposition') != undefined 
  && sessionStorage.getItem('sptsessionfirstname') != undefined
  && sessionStorage.getItem('sptsessiomusertoken') != undefined)
  {
      // console.log(sessionStorage.getItem('sptsessionuseremail'));
      // console.log(sessionStorage.getItem('sptsessionusermanno'));
      // console.log(sessionStorage.getItem('sptsessionfirstname'));
      // console.log(sessionStorage.getItem('sptsessionposition'));
      // console.log(sessionStorage.getItem('sptsessiomusertoken'));
      // console.log(sessionStorage.getItem('sptsessionuserdept'));
  }
  else{
    sessionStorage.clear();
    window.location.replace("/login.html");
  }
}
