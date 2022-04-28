const endings = {
  je: "e",
  tu: "es",
  il: "e",
  elle: "e",
  nous: "ons",
  vous: "ez",
  ils: "ent",
  elles: "ent",
};

const hardVowels = ["a", "o", "u"];

/**
 * Conjugates a regular -er verb with a given pronoun
 * @param {string} verb The regular -er verb to conjugate
 * @param {string} pronoun The pronoun to conjugate the verb with
 */
function erConjugate(verb, pronoun) {
  /** @type string */
  var ending = endings[pronoun];

  if (hardVowels.includes(ending.charAt(0))) {
    switch (verb.charAt(verb.length - 1)) {
      // cedille
      case "c":
        verb = verb.slice(0, verb.length - 1) + "ç";
        break;
      // soft g
      case "g":
        verb += "e";
        break;
    }
  }

  return verb + ending;
}
