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
      var ending = this.conj[pronoun];
      
      return softenEnding(verb, ending)
    },
    
    conj: {
      "je": "e",
      "tu": "es",
      "il": "e",
      "elle": "e",
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
      var ending = this.conj[pronoun];
      
      return softenEnding(verb, ending)
    },
    
    conj: {
      "je": "s",
      "tu": "s",
      "il": "",
      "elle": "",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent",
      "elles": "ent",
    },
  },
  {
    name: "-ir verbs",
    verbs: [
      "applaudir",
      "grandir",
      "maigrir",
      "obéir",
      "réfléchir",
      "remplir",
      "réussir",
      "rougir",
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      verb = verb.slice(0, -2);
      
      /** @type string */
      var ending = this.conj[pronoun];
      
      return softenEnding(verb, ending)
    },
    
    conj: {
      "je": "is",
      "tu": "is",
      "il": "it",
      "elle": "it",
      "nous": "issons",
      "vous": "issez",
      "ils": "issent",
      "elles": "issent",
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
      return this.conj[pronoun]
    },
    
    conj: {
      "je": "suis",
      "tu": "es",
      "il": "est",
      "elle": "est",
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
      return this.conj[pronoun]
    },
    
    conj: {
      "je": "ai",
      "tu": "as",
      "il": "a",
      "elle": "a",
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
      return this.conj[pronoun]
    },
    
    conj: {
      "je": "fais",
      "tu": "fais",
      "il": "fait",
      "elle": "fait",
      "nous": "faisons",
      "vous": "faites",
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
      return this.conj[pronoun]
    },
    
    conj: {
      "je": "vais",
      "tu": "vas",
      "il": "va",
      "elle": "va",
      "nous": "allons",
      "vous": "allez",
      "ils": "vont",
      "elles": "vont",
    },
  },
  {
    name: "vouloir",
    verbs: [
      "vouloir"
    ],
    /**
     * @param {string} verb
     * @param {string} pronoun
     * @returns {string}
     */
    conjugate: function (verb, pronoun) {
      return this.conj[pronoun]
    },
    
    conj: {
      "je": "veux",
      "tu": "veux",
      "il": "veut",
      "elle": "veut",
      "nous": "voulons",
      "vous": "voulez",
      "ils": "veulent",
      "elles": "veulent",
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
      return this.conj[pronoun]
    },
    
    conj: {
      "je": "peux",
      "tu": "peux",
      "il": "peut",
      "elle": "peut",
      "nous": "pouvons",
      "vous": "pouvez",
      "ils": "peuvent",
      "elles": "peuvent",
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
      return this.conj[pronoun]
    },
    
    conj: {
      "je": "dois",
      "tu": "dois",
      "il": "doit",
      "elle": "doit",
      "nous": "devons",
      "vous": "devez",
      "ils": "doivent",
      "elles": "doivent",
    },
  },
]