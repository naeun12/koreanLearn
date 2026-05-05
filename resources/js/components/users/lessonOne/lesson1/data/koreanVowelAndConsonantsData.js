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
        "Can sound like G or K depending on position."
      ),

      new KoreanVowelAndConsonantsModel(
        2,
        "Which vowel sounds closest to 'uh' sound?",
        "multiple_choice",
        ["eo", "a", "o", "u"],
        "eo",
        "Mid-back vowel sound."
      ),

      new KoreanVowelAndConsonantsModel(
        3,
        "Which syllable is NOT valid in basic formation?",
        "multiple_choice",
        ["na", "ga", "la", "da"],
        "la",
        "L sound does not follow basic structure rules."
      ),

      new KoreanVowelAndConsonantsModel(
        4,
        "Which vowel makes a rounded mouth shape?",
        "multiple_choice",
        ["o", "a", "i", "eo"],
        "o",
        "Requires lip rounding."
      ),

      new KoreanVowelAndConsonantsModel(
        5,
        "Which consonant is silent at syllable start sometimes?",
        "multiple_choice",
        ["ng", "m", "g", "s"],
        "ng",
        "Used as silent placeholder sound."
      ),

      new KoreanVowelAndConsonantsModel(
        6,
        "s + u = ?",
        "multiple_choice",
        ["su", "so", "sa", "si"],
        "su",
        "Straight combination rule."
      ),

      new KoreanVowelAndConsonantsModel(
        7,
        "g + i = ?",
        "multiple_choice",
        ["gi", "ge", "go", "gu"],
        "gi",
        "i = ee sound"
      ),

      new KoreanVowelAndConsonantsModel(
        8,
        "Which consonant can sound like d or t?",
        "multiple_choice",
        ["d", "m", "s", "ng"],
        "d",
        "Sound changes based on position."
      ),

      new KoreanVowelAndConsonantsModel(
        9,
        "Which is correct formation rule?",
        "multiple_choice",
        ["g + a = ga", "a + g = ag", "ga = a + g", "none"],
        "g + a = ga",
        "Always consonant + vowel order."
      ),

      new KoreanVowelAndConsonantsModel(
        10,
        "What is the main role of vowels?",
        "multiple_choice",
        ["main sound", "final sound", "silent role", "double consonant"],
        "main sound",
        "Vowels carry pronunciation."
      ),

      // =========================
      // IDENTIFICATION (ROMANJI ONLY)
      // =========================

      new KoreanVowelAndConsonantsModel(
        11,
        "n + a = ?",
        "identification",
        null,
        "na",
        "Basic combination"
      ),

      new KoreanVowelAndConsonantsModel(
        12,
        "g + i = ?",
        "identification",
        null,
        "gi",
        "Uses i vowel sound"
      ),

      new KoreanVowelAndConsonantsModel(
        13,
        "m + o = ?",
        "identification",
        null,
        "mo",
        "Rounded vowel sound"
      ),

      new KoreanVowelAndConsonantsModel(
        14,
        "d + a = ?",
        "identification",
        null,
        "da",
        "Basic syllable formation"
      ),

      new KoreanVowelAndConsonantsModel(
        15,
        "s + u = ?",
        "identification",
        null,
        "su",
        "Common syllable"

      ),

      // =========================
      // SHORT ANSWER (ROMANJI ONLY)
      // =========================

      new KoreanVowelAndConsonantsModel(
        16,
        "Which consonant can be silent?",
        "short_answer",
        null,
        "ng",
        "Silent placeholder sound"
      ),

      new KoreanVowelAndConsonantsModel(
        17,
        "Which vowel is like 'a' in father?",
        "short_answer",
        null,
        "a",
        "Open vowel sound"
      ),

      new KoreanVowelAndConsonantsModel(
        18,
        "Which vowel is 'oo' sound?",
        "short_answer",
        null,
        "u",
        "Rounded vowel sound"
      ),

      new KoreanVowelAndConsonantsModel(
        19,
        "Which vowel is 'o' in go?",
        "short_answer",
        null,
        "o",
        "Mid-back vowel"
      ),

      new KoreanVowelAndConsonantsModel(
        20,
        "Syllables are built in what shape?",
        "short_answer",
        null,
        "block",
        "Square block structure"
      ),
    ]
  }
};