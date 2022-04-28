---
title: "French -er Verb Conjugation"
permalink: /
---

Practice with French -er verb conjugation

***Note**: When entering input include just the verb (no "je", "tu", "il", etc.)*

<h2 id="nosupport">Sorry, JavaScript must be enabled to run this application.</h2>
<script>
  document.getElementById("nosupport").style.display = "none";
</script>

<b>Conjugate <span id="prompt">`loading...`</span>:</b>

<input type="text" id="input"></input>

<button onclick="submit()" id="submit">Check</button>

<span id="score"><b>0/0</b> (100%)</span>

<script src="conjugate.js"></script>
<script src="verbs.js"></script>

<script>
  const prompt = document.getElementById("prompt");
  const input = document.getElementById("input");
  const submitButton = document.getElementById("submit");
  const score = document.getElementById("score");

  var correct = 0;
  var total = 0;

  var verb, pronoun;
  
  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function next() {
    verb = randomElement(verbs);
    pronoun = randomElement(pronouns);
    prompt.innerHTML = `${pronoun} / ${verb}`;
    input.value = "";
    input.focus();
  }

  function submit() {
    userInput = input.value;

    const conjugated = erConjugate(verb, pronoun);

    total++;
    if (userInput.toLowerCase() === conjugated) {
      correct++;
      input.style.color = "green";
    } else {
      input.style.color = "red";
      input.value = conjugated;
    }
    score.innerHTML = `<b>${correct}/${total}</b> (${Math.round(correct / total * 100)}%)`;
    
    input.readOnly = true;
    submitButton.disabled = true;
    setTimeout(() => {
      input.style.color = "black";
      input.readOnly = false;
      submitButton.disabled = false;
      next();
    }, 1500);
  }

  next();
</script>
