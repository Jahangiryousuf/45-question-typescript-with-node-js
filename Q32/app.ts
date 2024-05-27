let currentUser: string[] = ["ali", "hamza", "akram", "kashif", "atif"];

let newUser: string[] = ["asif", "javed", "Ali", "hamza"];

// loop through newuser to check username available

newUser.forEach(new1user => {
    let ourcondition =currentUser.some(current1user => current1user.toLowerCase() === new1user.toLowerCase())
    
    //print to each user that username is available or not
    if (ourcondition){
        console.log(`"sorry" ${new1user}" is already taken"`);
        }
        else{console.log(`"this user name" ${new1user}" is available"`);
        }
})








