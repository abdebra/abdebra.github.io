function askPassword(ok, fail){
    let password =prompt("password?", '');
    // let password = "password";
    if(password ===  "password") ok();
    else fail();
}

let user = {
    name:'john',
    loginOk(){
       alert(this.name + ": " + " logged in");
    },
    loginfail(){
       alert(this.name+  ": " + ' failed to login')
    },
    };

    askPassword(()=>user.loginOk(),()=>user.loginfail());


    //  Question 2)

// Using wrapper

    let group = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
    
        showList: function() {
            this.students.forEach((student)=> {
                console.log("rapper", this.title + ": " + student);
            });
        }
    };
    group.showList();
    
    // Using selfEstatement
    let group1 = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
    
        showList: function() {
            const myself =this;
            this.students.forEach(function(student) {
                console.log("self", myself.title + ": " + student);
            });
        }
    };
    group1.showList();

    //Using Bind

    let group2 = {
        title: "Our Group",
        students: ["John", "Pete", "Alice"],
    
        showList: function() {
           this.students.forEach(function(student) {
                
                console.log("withbinding", this.title + ": " + student);
            }.bind(group2));
        }
    
    
    };
    group2.showList();
  


 