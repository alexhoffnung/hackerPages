Template.hackerProfile.events( {
	"click .btn": function () {
      let hacker = {};
      hacker.peopleName = $("input#people-name").val() || "";
      hacker.userEmail = $("input#user-email").val() || "";
      hacker.userName = $("input#user-name").val() || "";
      hacker.userHack = $("input#user-hack").val() || "";
    
      if( hacker.userEmail.length === 0 ) return;
      
      Hackers.insert(
      	hacker
      );
    }
});