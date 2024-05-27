let userName: string[] = ["akram", "admin", "khalid", "ali", "zeeshan"];

userName.forEach((user1) => {
  if (user1 === "admin") {
    console.log(`\n hello ${user1} , would you like to see a status report?
        `);
  }else{console.log(`\n "hello",${user1}"thank you for logging in again."`);
  }
});
