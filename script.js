   (function() {
     // === تنظیم رمز عبور ===
     const PASS = "Pflege123";  // می‌توانید اینجا رمز خودتان را بنویسید

     // درخواست رمز از کاربر
     const userPass = prompt("Bitte Passwort eingeben:");

     // بررسی رمز
     if (userPass === PASS) {
       // اگر درست باشد، بخش اصلی را نمایش بده
       document.getElementById("content").style.display = "block";
       loadQuestions();  // بارگذاری سوالات
     } else {
       // اگر غلط باشد، هشدار
       alert("Falsches Passwort! Zugriff verweigert.");
       // صفحه دیگر باز نمی‌شود
     }

     // تابع بارگذاری سوالات (فعلاً خالی؛ مرحله ۶ پر می‌شود)
     function loadQuestions() {
       // در مرحله بعد اینجا آرایه 40 سوال درج می‌شود
     }
   })();
