const header = `<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/gen.css">
<link rel="stylesheet" href="icons/fontawesome/css/all.min.css">
<script src="js/functions.js"></script> 
<script src="js/main.js"></script>   
<script src="js/manage.js"></script>   
<script src="js/objectives.js"></script>   
<script src="js/update.js"></script>   
<script src="js/reports.js"></script>   
<!-- the header -->
<header>
    <nav>
        <div class="nav-links">
            <a href="#"><img src="logo/prof.png" alt="profile" class="profile-pic"></img> <span class="username">${sessionStorage.getItem("sptsessionfirstname")}</span></a> 
        </div>
        
        <div class="log">
            <div class="nav-links">
                <a title="messages" href="#"><span class="fa fa-message"></span><span class="message-no" >9+</span></a>
                <a title="notifications"  href="#"><span class="fa fa-bell"></span><span class="notification-no">9+</span></a>
            </div>
           
            <a onclick="logout()" href="#"><span class="fa fa-sign-out btn" title="log out"></span></a>
        </div>
    </nav>
</header>
<!-- aside bar -->
<aside>
<div>
<div class="logo">
    <img src="logo/EVEL.svg" alt="evelyn hone logo">
    <div class="logo-text">
        <span>Evelyn Hone College</span>
        <span>Strategic Plan</span>
        <span>Tracker</span>
    </div>
</div>
</div>
    <div class="top-bar">
        <div id="bar" class="icon">
            <span class="fa fa-bars"></span>
        </div>
    </div>
    <div class="main-bar">
        <!-- bar-link main -->
        <a href = "index.html" class="bar-link active" >
        <div class="link-name">Dashboard</div> 
            <div class="icon">
                <span class="fa fa-dashboard"></span>
            </div> 
            
         </a>
        <!-- bar-link main -->
         <a href = "manage.html" class="bar-link active" > 
         <div class="link-name">
         Manage SP
     </div>
            <div class="icon">
                <span class="fa fa-cogs"></span>
            </div>
           
        </a>
         <!-- bar-link main drop -->
         <div class="none">
            <a href = "#" class="bar-link" > 
            <div class="link-name">
                    <span>Manage SP</span>
                </div>
                <div class="icon">
                    <span class="fa fa-cogs"></span>
                </div>
                
            </a>
             <!-- bar-link drop -->
            <div class="drop none">
                <a href = "#" class="bar-link">
                    <div class="icon">
                        <span class="fa fa-table-list"></span>
                    </div>
                    <div class="link-name">Add SP</div>
                </a>
            </div>
        </div>
        <!-- bar-link main -->
        <a href = "objectives.html" class="bar-link active" >
        <div class="link-name">SP Objectives</div> 
            <div class="icon">
                <span class="fa fa-list"></span>
            </div> 
         </a>

         <!-- bar-link main -->
         <a href = "update.html" class="bar-link active" >
         <div class="link-name">Update progress</div> 
             <div class="icon">
                 <span class="fa fa-pencil"></span>
             </div> 
          </a>
         <!-- bar-link main -->
        <a href = "reports.html" class="bar-link active" >
        <div class="link-name">SP Reports</div> 
            <div class="icon">
                <span class="fa fa-clipboard"></span>
            </div> 
            
         </a>
         <!-- bar-link main -->
        <a href = "#" class="bar-link active" >
        <div class="link-name">Settings</div> 
            <div class="icon">
                <span class="fa fa-cog"></span>
            </div> 
            
         </a>
    </div>
</aside>
<div id="alert"></div>`

$('#header').html(header)

function logout(){sessionStorage.clear();window.location.replace("/login.html");}