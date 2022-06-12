const hardVowels = ["a", "o", "u"];
function softenEnding(verb, ending) {
  if (hardVowels.includes(ending.charAt(0))) {
    switch (verb.charAt(verb.length - 1)) {
      // cedille
      case "c":
        verb = verb.slice(0, -1) + "ç";
        break;
      // soft g
      case "g":
        verb += "e";
        break;
    }
  }

  return verb + ending;
}

const verbClasses = [
  {
    name: "-er verbs",
    verbs: [
      "acheter",
      "adorer",
      "aider",
      "aimer",
      "apporter",
      "arriver",
      "assister",
      "chanter",
      "chercher",
      "commencer",
      "cuisiner",
      "danser",
      "dessiner",
      "deviner",
      "donner",
      "écouter",
      "étudier",
      "examiner",
      "fermer",
      "gagner",
      "habiter",
      "jouer",
      "manger",
      "marcher",
      "montrer",
      "nager",
      "oublier",
      "parler",
      "partager",
      "patiner",
      "penser",
      "pleurer",
      "porter",
      "practiquer",
      "quitter",
      "recontrer",
      "regarder",
      "rentrer",
      "rester",
      "réver",
      "skier",
      "téléphoner",
      "travailler",
      "trouver",
      "utiliser",
      "visiter",
      "voyager",
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      verb = verb.slice(0, -2);
      
      /** @type string */
      var ending = this.endings[pronoun];
      
      return softenEnding(verb, ending)
    },
    
    endings: {
      "je": "e",
      "tu": "es",
      "il": "e",
      "elle": "e",
      "qui": "e",
      "on": "e",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent",
      "elles": "ent",
    },
  },
  {
    name: "-re verbs",
    verbs: [
      "répondre",
      "attendre",
      "vendre",
      "descendre",
      "perdre",
      "entendre",
      "rendre",
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      verb = verb.slice(0, -2);
      
      /** @type string */
      var ending = this.endings[pronoun];
      
      return softenEnding(verb, ending)
    },
    
    endings: {
      "je": "s",
      "tu": "s",
      "il": "",
      "elle": "",
      "qui": "",
      "on": "",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent",
      "elles": "ent",
    },
  },
  {
    name: "être",
    verbs: [
      "être"
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      return this.endings[pronoun]
    },
    
    endings: {
      "je": "suis",
      "tu": "es",
      "il": "est",
      "elle": "est",
      "qui": "est",
      "on": "est",
      "nous": "sommes",
      "vous": "êtes",
      "ils": "sont",
      "elles": "sont",
    },
  },
  {
    name: "avoir",
    verbs: [
      "avoir"
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      return this.endings[pronoun]
    },
    
    endings: {
      "je": "ai",
      "tu": "as",
      "il": "a",
      "elle": "a",
      "qui": "a",
      "on": "a",
      "nous": "avons",
      "vous": "avez",
      "ils": "ont",
      "elles": "ont",
    },
  },
  {
    name: "faire",
    verbs: [
      "faire"
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      return this.endings[pronoun]
    },
    
    endings: {
      "je": "fais",
      "tu": "fais",
      "il": "fait",
      "elle": "fait",
      "qui": "fait",
      "on": "fait",
      "nous": "faitons",
      "vous": "faisez",
      "ils": "font",
      "elles": "font",
    },
  },
  {
    name: "aller",
    verbs: [
      "aller"
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      return this.endings[pronoun]
    },
    
    endings: {
      "je": "vais",
      "tu": "vas",
      "il": "va",
      "elle": "va",
      "qui": "va",
      "on": "va",
      "nous": "allons",
      "vous": "allez",
      "ils": "vont",
      "elles": "vont",
    },
  },
  {
    name: "devoir",
    verbs: [
      "devoir"
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      return this.endings[pronoun]
    },
    
    endings: {
      "je": "dois",
      "tu": "dois",
      "il": "doit",
      "elle": "doit",
      "qui": "doit",
      "on": "doit",
      "nous": "devons",
      "vous": "devez",
      "ils": "doivent",
      "elles": "doivent",
    },
  },
  {
    name: "pouvoir",
    verbs: [
      "pouvoir"
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      return this.endings[pronoun]
    },
    
    endings: {
      "je": "peux",
      "tu": "peux",
      "il": "peut",
      "elle": "peut",
      "qui": "peut",
      "on": "peut",
      "nous": "pouvons",
      "vous": "pouvez",
      "ils": "peuvent",
      "elles": "peuvent",
    },
  },
]