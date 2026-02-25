(function() {
  const PASS = "Pflege123";  // رمز عبور

  // درخواست رمز
  const userPass = prompt("Bitte Passwort eingeben:");
  if (userPass === PASS) {
    document.getElementById("content").style.display = "block";
    loadQuestions();
  } else {
    alert("Falsches Passwort! Zugriff verweigert.");
  }

  // ---------- تابع بارگذاری سؤال‌ها ----------
  function loadQuestions() {
    const questions = [
      {
        q: "1. Was ist die normale Körpertemperatur eines Erwachsenen in Ruhe?",
        options: ["35,5 °C", "36,5–37,5 °C", "38,5 °C", "39,5 °C"]
      },
      {
        q: "2. Welcher Puls gilt als normal bei Erwachsenen?",
        options: ["40–60/min", "60–100/min", "100–120/min", "120–140/min"]
      },
      {
        q: "3. Wie lautet der systolische Blutdruck unter normalen Bedingungen?",
        options: ["80 mmHg", "120 mmHg", "140 mmHg", "160 mmHg"]
      },
      {
        q: "4. Welches Desinfektionsmittel eignet sich für die Händedesinfektion?",
        options: ["Seife", "70 % Ethanol", "Wasserstoffperoxid", "Jodlösung"]
      },
      {
        q: "5. Was bedeutet Katheterisierung?",
        options: ["Einführen eines Katheters", "Punktion", "Infusion", "Drainage"]
      },
      {
        q: "6. Was versteht man unter Dekubitus?",
        options: ["Wundinfektion", "Druckgeschwür", "Hautrötung", "Allergie"]
      },
      {
        q: "7. Bei welcher Lagerung werden Beine und Kopf nach unten gelagert?",
        options: ["Steinschnitt", "Trendelenburg", "Rückenlage", "Seitenlage"]
      },
      {
        q: "8. Welcher Wert bezeichnet den Blutzuckerspiegel?",
        options: ["Hb", "Glukose", "Kreatinin", "Cholesterin"]
      },
      {
        q: "9. Welches Schmerzmittel zählt zu den Opioiden?",
        options: ["Ibuprofen", "Paracetamol", "Morphin", "Diclofenac"]
      },
      {
        q: "10. Was ist Aspiration?",
        options: ["Einatmen von Fremdkörpern", "Ausscheidung", "Blutdruckmessung", "Infusion"]
      },
      {
        q: "11. Wie oft sollte eine Frühmobilisierung erfolgen?",
        options: ["1× täglich", "3–5× täglich", "10× täglich", "Nur bei Bedarf"]
      },
      {
        q: "12. Welche Flüssigkeit darf nicht per Infusion gegeben werden?",
        options: ["NaCl 0,9 %", "Glukose 5 %", "Milch", "Ringerlösung"]
      },
      {
        q: "13. Wann wird eine PEG-Anlage eingesetzt?",
        options: ["Bei oraler Nahrungsaufnahme", "Bei Nahrungsaufnahme über Mund", "Bei enteraler Ernährung", "Bei parenteraler Ernährung"]
      },
      {
        q: "14. Was misst eine Pulsoxymetrie?",
        options: ["Blutdruck", "Herzrhythmus", "Sauerstoff­sättigung", "Körpertemperatur"]
      },
      {
        q: "15. Welcher Verband eignet sich für eine offene Wunde?",
        options: ["Tupfer", "Kompresse", "Mullbinde", "Drain"]
      },
      {
        q: "16. Wie wird eine subkutane Injektion abgegeben?",
        options: ["In die Vene", "In den Muskel", "In die Hautunterhaut", "In die Arterie"]
      },
      {
        q: "17. Was ist PPE in der Pflege?",
        options: ["Persönliche Schutzausrüstung", "Patientenpflegeeinheit", "Pflegeplan", "Medikamentenplan"]
      },
      {
        q: "18. Welches Assessment erfasst die Mobilität?",
        options: ["Braden-Skala", "Barthel-Index", "APGAR", "Glasgow-Coma-Scale"]
      },
      {
        q: "19. Welcher Test prüft das Schlaganfallrisiko?",
        options: ["FAST-Test", "Oxford-Test", "Barthel-Index", "APGAR-Test"]
      },
      {
        q: "20. Bei welchem Symptom sollte sofort der Notarzt gerufen werden?",
        options: ["Kopfschmerz", "Brustschmerz", "Harndrang", "Juckreiz"]
      },
      {
        q: "21. Was ist die Hauptfunktion der Nieren?",
        options: ["Hormonproduktion", "Blutzuckerregulation", "Entgiftung und Filtration", "Vitamin-D-Speicherung"]
      },
      {
        q: "22. Wie oft sollten Katheterzonen gereinigt werden?",
        options: ["Täglich", "Wöchentlich", "Monatlich", "Nie"]
      },
      {
        q: "23. Welche Lagerung reduziert Aspiration?",
        options: ["Kopf tief", "Oberkörper hoch", "Rückenlage flach", "Bauchlage"]
      },
      {
        q: "24. Welches Vitamin fördert die Wundheilung?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"]
      },
      {
        q: "25. Was ist eine kontaminierte Wunde?",
        options: ["Steril", "Keimfrei", "Mit Bakterien belastet", "Mit Blut gefüllt"]
      },
      {
        q: "26. Was misst eine Epiduralanästhesie?",
        options: ["Schmerzfreiheit im Epiduralraum", "Muskeltonus", "Hirndruck", "Herzfrequenz"]
      },
      {
        q: "27. Welches Merkmal gehört zur normalen Atmung?",
        options: ["5/min", "12–20/min", "25–30/min", "35–40/min"]
      },
      {
        q: "28. Wozu dient die Pflegedokumentation?",
        options: ["Unterhaltung", "Rechtssicherheit und Informationsweitergabe", "Werbung", "Dekoration"]
      },
      {
        q: "29. Wann wird Fieber eindeutig diagnostiziert?",
        options: ["> 37 °C", "> 38 °C", "> 39 °C", "> 40 °C"]
      },
      {
        q: "30. Was versteht man unter Thromboseprophylaxe?",
        options: ["Infusion", "Impfung", "Maßnahmen zur Verhütung von Blutgerinnseln", "Antibiotikagabe"]
      },
      {
        q: "31. Welche Mundpflege ist für beatmete Patienten wichtig?",
        options: ["Zahnseide", "Chlorhexidin-Lösung", "Mundspülung", "Kaugummi"]
      },
      {
        q: "32. Was ist Symptomkontrolle?",
        options: ["Medikamentengabe", "Schmerz- und Übelkeitseinstellung", "Vitalzeichenerfassung", "Blutabnahme"]
      },
      {
        q: "33. Welches Element sollte in einer Pflegevisite besprochen werden?",
        options: ["Esspläne", "Aufenthaltsort der Pflegenden", "Patientenzustand", "Staff-Meeting"]
      },
      {
        q: "34. Wie nennt man ein Pflegeziel, das erreichbar ist?",
        options: ["Ambitioniert", "SMART", "Unrealistisch", "Allgemein"]
      },
      {
        q: "35. Welches Gerät misst den Blutzuckerspiegel zu Hause?",
        options: ["Pulsoximeter", "Glukometer", "EKG", "Stethoskop"]
      },
      {
        q: "36. Wann muss ein Inhalationskatheter gewechselt werden?",
        options: ["Nie", "Täglich je nach Sekret", "Monatlich", "Jährlich"]
      },
      {
        q: "37. Was ist der erste Schritt bei einer Wundversorgung?",
        options: ["Sterilisieren", "Wundreinigung", "Naht", "Verbandswechsel"]
      },
      {
        q: "38. Welche Position ist für die Entleerung der Harnblase günstig?",
        options: ["Hocken", "Flugposition", "Kopfstand", "Rückenlage flach"]
      },
      {
        q: "39. Was ist eine Anaphylaxie?",
        options: ["Chronische Krankheit", "Schwere allergische Reaktion", "Herzinfarkt", "Lebererkrankung"]
      },
      {
        q: "40. Welcher Parameter wird bei enteraler Ernährung kontrolliert?",
        options: ["Atemfrequenz", "Nährstoffzufuhr", "Schmerzlevel", "Hautfarbe"]
      }
    ];

    // رندر سؤال‌ها
    const container = document.getElementById("content");
    let html = "";
    questions.forEach((item, idx) => {
      html += `<div class="question">
                 <p>${item.q}</p>`;
      item.options.forEach((opt, j) => {
        html += `<label>
                   <input type="radio" name="q${idx}" value="${j}">
                   ${String.fromCharCode(97 + j)}) ${opt}
                 </label><br>`;
      });
      html += `</div><hr>`;
    });
    container.innerHTML = html;
  }
})();
