   (function() {
     const PASS = "Pflege123";
     const userPass = prompt("Bitte Passwort eingeben:");
     if (userPass === PASS) {
       document.getElementById("content").style.display = "block";
       loadQuestions();
     } else {
       alert("Falsches Passwort! Zugriff verweigert.");
     }

     function loadQuestions() {
       const quiz = document.getElementById("quizForm");
       const questions = [ /* آرایه سوالات در اینجا */ ];
       // … کد اضافه‌کردن سوالات به صورت داینامیک …
     }
   })();
