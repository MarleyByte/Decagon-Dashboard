//testCase for shownCountry function

function testShowCountry(){
    let countries = document.getElementsByClassName('country-badge');
    let visibility = countries[0].style.display;

    showCountry();

    if(visibility !== countries[0].style.display){
        return true;
    }else{
        return false;
    }
    
}

testShowCountry();

//testCase for searchUser

function testSearchUser(){
    let filter = document.getElementById('rightSearch').value.toUpperCase();
    searchUser();
    let userNameClass = document.getElementsByClassName('card-title');
    for(var i=0; i<userNameClass.length; i++){
        let nameValue = userNameClass[i].textContent || userNameClass[i].innerHTML;
        let visibility = userNameClass[i].style.display;
        if (visibility !== 'none' && nameValue.toUpperCase().indexOf(filter)<0) {
            return false;
        } 
    }
    return true;
}
testSearchUser();