import KoreanVowelAndConsonantsModel from "../models/KoreanVowelAndConsonantsModel";

export default {
  koreanVowelAndConsonantsData: {
    questions: [

      // =========================
      // MULTIPLE CHOICE (ROMANJI ONLY)
      // =========================

      new KoreanVowelAndConsonantsModel(
        1,
        "What sound does g usually represent?",
        "multiple_choice",
        ["g/k", "h", "ng", "b"],
        "g/k",
        "Correct! The letter 'g' can sound like G at the beginning and K at the end depending on position in the syllable."
      ),

      new KoreanVowelAndConsonantsModel(
        2,
        "Which vowel sounds closest to 'uh' sound?",
        "multiple_choice",
        ["eo", "a", "o", "u"],
        "eo",
        "Correct! 'eo' sounds similar to the English 'uh' but spoken more clearly."
      ),

      new KoreanVowelAndConsonantsModel(
        3,
        "Which syllable is NOT valid in basic formation?",
        "multiple_choice",
        ["na", "ga", "la", "da"],
        "la",
        "Correct! 'la' is uncommon in basic Korean sound formation because ㄹ changes between R/L sounds."
      ),

      new KoreanVowelAndConsonantsModel(
        4,
        "Which vowel makes a rounded mouth shape?",
        "multiple_choice",
        ["o", "a", "i", "eo"],
        "o",
        "Correct! The vowel 'o' requires rounding your lips while pronouncing."
      ),

      new KoreanVowelAndConsonantsModel(
        5,
        "Which consonant is silent at syllable start sometimes?",
        "multiple_choice",
        ["ng", "m", "g", "s"],
        "ng",
        "Correct! This sound can act as a silent placeholder when placed at the start."
      ),

      new KoreanVowelAndConsonantsModel(
        6,
        "s + u = ?",
        "multiple_choice",
        ["su", "so", "sa", "si"],
        "su",
        "Correct! Combining consonant + vowel forms 'su'."
      ),

      new KoreanVowelAndConsonantsModel(
        7,
        "g + i = ?",
        "multiple_choice",
        ["gi", "ge", "go", "gu"],
        "gi",
        "Correct! 'i' gives the EE sound, so g + i becomes gi."
      ),

      new KoreanVowelAndConsonantsModel(
        8,
        "Which consonant can sound like d or t?",
        "multiple_choice",
        ["d", "m", "s", "ng"],
        "d",
        "Correct! This consonant may sound softer like D or stronger like T depending on position."
      ),

      new KoreanVowelAndConsonantsModel(
        9,
        "Which is correct formation rule?",
        "multiple_choice",
        ["g + a = ga", "a + g = ag", "ga = a + g", "none"],
        "g + a = ga",
        "Correct! Korean syllables usually follow consonant + vowel order."
      ),

      new KoreanVowelAndConsonantsModel(
        10,
        "What is the main role of vowels?",
        "multiple_choice",
        ["main sound", "final sound", "silent role", "double consonant"],
        "main sound",
        "Correct! Vowels carry the main voice sound of each syllable."
      ),

      // =========================
      // IDENTIFICATION
      // =========================

      new KoreanVowelAndConsonantsModel(
        11,
        "n + a = ?",
        "identification",
        null,
        "na",
        "Correct! n + a creates the syllable na."
      ),

      new KoreanVowelAndConsonantsModel(
        12,
        "g + i = ?",
        "identification",
        null,
        "gi",
        "Correct! g with i becomes gi."
      ),

      new KoreanVowelAndConsonantsModel(
        13,
        "m + o = ?",
        "identification",
        null,
        "mo",
        "Correct! m + o forms mo with rounded lips."
      ),

      new KoreanVowelAndConsonantsModel(
        14,
        "d + a = ?",
        "identification",
        null,
        "da",
        "Correct! d + a gives da."
      ),

      new KoreanVowelAndConsonantsModel(
        15,
        "s + u = ?",
        "identification",
        null,
        "su",
        "Correct! s combined with u makes su."
      ),

      // =========================
      // SHORT ANSWER
      // =========================

      new KoreanVowelAndConsonantsModel(
        16,
        "Which consonant can be silent?",
        "short_answer",
        null,
        "ng",
        "Correct! This consonant may stay silent when used as a placeholder before vowels."
      ),

      new KoreanVowelAndConsonantsModel(
        17,
        "Which vowel is like 'a' in father?",
        "short_answer",
        null,
        "a",
        "Correct! 'a' sounds like the a in father."
      ),

      new KoreanVowelAndConsonantsModel(
        18,
        "Which vowel is 'oo' sound?",
        "short_answer",
        null,
        "u",
        "Correct! 'u' sounds like oo in food."
      ),

      new KoreanVowelAndConsonantsModel(
        19,
        "Which vowel is 'o' in go?",
        "short_answer",
        null,
        "o",
        "Correct! 'o' sounds similar to the o in go."
      ),

      new KoreanVowelAndConsonantsModel(
        20,
        "Syllables are built in what shape?",
        "short_answer",
        null,
        "block",
        "Correct! Korean letters combine into square-like syllable blocks."
      ),
    ]
  }
};