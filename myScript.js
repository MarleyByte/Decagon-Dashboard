
        let allCategoryTitle = document.getElementById('allUsersCategory');
        let maleCategoryTitle = document.getElementById('maleUsersCategory');
        let femaleCategoryTitle = document.getElementById('femaleUsersCategory');
        let maleButton = document.getElementById('maleEventId');
        let femaleButton = document.getElementById('femaleEventId');
        let allUsersButton = document.getElementById('allUsrsEventId');

       
        maleButton.addEventListener("click", function(){
            if(Number(window.getComputedStyle(femaleCategoryTitle).getPropertyValue('opacity'))==1){
                fadeOut(femaleCategoryTitle);
                fadeIn(maleCategoryTitle);
            }
            else if(Number(window.getComputedStyle(allCategoryTitle).getPropertyValue('opacity'))==1){
                fadeOut(allCategoryTitle);
                fadeIn(maleCategoryTitle);
            }else{
               fadeIn(maleCategoryTitle);
            }
        });

       
        femaleButton.addEventListener("click", function(){
            if(Number(window.getComputedStyle(maleCategoryTitle).getPropertyValue('opacity'))==1){
                fadeOut(maleCategoryTitle);
                fadeIn(femaleCategoryTitle);
            }
            else if(Number(window.getComputedStyle(allCategoryTitle).getPropertyValue('opacity'))==1){
                fadeOut(allCategoryTitle);
                fadeIn(femaleCategoryTitle);
            }else{
               fadeIn(femaleCategoryTitle);
            }
        });

       
           allUsersButton.addEventListener("click", function(){
            if(Number(window.getComputedStyle(maleCategoryTitle).getPropertyValue('opacity'))==1){
                fadeOut(maleCategoryTitle);
                fadeIn(allCategoryTitle);
            }
            else if(Number(window.getComputedStyle(femaleCategoryTitle).getPropertyValue('opacity'))==1){
                fadeOut(maleCategoryTitle);
                fadeIn(allCategoryTitle);
            }else{
               fadeIn(allCategoryTitle); 
            }
        });

    //this function will show and unshow country of users
    function showCountry(){
        let countries = document.getElementsByClassName('country-badge');
           if(countries[0].style.display === "inline"){
               for(var i = 0; i<countries.length; i++){
                   countries[i].style.display = "none"
               }
           }else{
               for(var i = 0; i<countries.length; i++){
                   countries[i].style.display = "inline"
               }
           }
    } 
    //this function search for users base on input
    function searchUser(){
        let filter = document.getElementById('rightSearch').value.toUpperCase();
        let userNameClass = document.getElementsByClassName('card-title');
        let userList = document.getElementsByClassName('userList');
        let count_Unmatched_Users = 0;
        let filterMessage = document.getElementById('filter-message');
        for(var i=0; i<userNameClass.length; i++){
            let userName = userNameClass[i];

            if(userName){
                let nameValue = userName.textContent || userName.innerHTML;

                if(nameValue.toUpperCase().indexOf(filter)>-1){
                    userList[i].style.display = "";
                }else{
                    userList[i].style.display = "none";
                }
            }
        }
        for(var j=0; j<userList.length; j++){
            let displayProp = userList[j].style.display;
            if(displayProp !== "none"){
                count_Unmatched_Users++;
            }
        }
        if(count_Unmatched_Users === 0){
            filterMessage.style.display = "inline";
        } else{
            filterMessage.style.display = "none";
        }       
        if(document.getElementById('rightSearch').value ===""){
            filterMessage.style.display = "none";
        }
    }

    function searchUser2(){
        let filter = document.getElementById('leftSearch').value.toUpperCase();
        let userNameClass = document.getElementsByClassName('card-title');
        let userList = document.getElementsByClassName('userList');
        let count_Unmatched_Users = 0;
        let filterMessage = document.getElementById('filter-message');
        for(var i=0; i<userNameClass.length; i++){
            let userName = userNameClass[i];

            if(userName){
                let nameValue = userName.textContent || userName.innerHTML;

                if(nameValue.toUpperCase().indexOf(filter)>-1){
                    userList[i].style.display = "";
                }else{
                    userList[i].style.display = "none";
                }
            }
        }
        for(var j=0; j<userList.length; j++){
            let displayProp = userList[j].style.display;
            if(displayProp !== "none"){
                count_Unmatched_Users++;
            }
        }
        if(count_Unmatched_Users === 0){
            filterMessage.style.display = "inline";
        } else{
            filterMessage.style.display = "none";
        }       
        if(document.getElementById('leftSearch').value ===""){
            filterMessage.style.display = "none";
        }
    }
    //function to display all users
        function displayAllUsers(){
            let maleUsersProf = document.getElementsByClassName('male-user-profile');
            let femaleUsersProf = document.getElementsByClassName('female-user-profile');
            let userCategory = document.getElementById('userCategory');
            for(var i=0; i < maleUsersProf.length; i++ ){
                    maleUsersProf[i].style.display = "";
                }
                for(var i=0; i < femaleUsersProf.length; i++ ){
                    femaleUsersProf[i].style.display = "";
                }
        }
    //function to display male users
    function displayMaleUsers(){
        let maleUsersProf = document.getElementsByClassName('male-user-profile');
            let femaleUsersProf = document.getElementsByClassName('female-user-profile');
            let userCategory = document.getElementById('userCategory');
                for(var i=0; i < maleUsersProf.length; i++ ){
                    maleUsersProf[i].style.display = "";
                }
                for(var i=0; i < femaleUsersProf.length; i++ ){
                    femaleUsersProf[i].style.display = "none";
                }
        }
    //function to display female users
    function displayFemaleUsers(){
        let maleUsersProf = document.getElementsByClassName('male-user-profile');
            let femaleUsersProf = document.getElementsByClassName('female-user-profile');
            let userCategory = document.getElementById('userCategory');

            for(var i=0; i < maleUsersProf.length; i++ ){
                    maleUsersProf[i].style.display = "none";
                }
                for(var i=0; i < femaleUsersProf.length; i++ ){
                    femaleUsersProf[i].style.display = "";
                }
        }

    //function to animate the userCategory display
        function fadeIn(title){
            let opacity = Number(window.getComputedStyle(title).getPropertyValue('opacity'));
            let myVar = setInterval(
                    function(){
                        if(opacity==1){
                            clearInterval(myVar);
                    }else{
                        opacity+=0.1;
                        title.style.opacity = opacity;
                    }
                },20
            );
        }
        //function to animate the userCategory fade out
        function fadeOut(title){
           let opacity = Number(window.getComputedStyle(title).getPropertyValue('opacity'));
            let myVar = setInterval(
                    function(){
                        if(opacity==0){
                            clearInterval(myVar);
                    }else{
                        opacity-=0.1;
                        title.style.opacity = opacity;
                    }
                },20
            );
        }
        
