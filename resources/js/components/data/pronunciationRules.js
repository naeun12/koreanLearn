import PronunciationRules from './../models/PronunciationRuleModel'

export default {
  pronunciationRules: [
    new PronunciationRules(
      1,
      "Tenseness",
      "warning",
      "Double consonants are pronounced with a tight, strong sound from the throat.",
      "학교",
      "학꾜 (hak-kyo)",
      "학교"
    ),
    new PronunciationRules(
      2,
      "No Puff (Aspiration Control)",
      "info",
      "Basic consonants like ㅂ, ㄷ, ㄱ, ㅈ, ㅅ are pronounced without strong air release.",
      "바다",
      "ba-da",
      "바다"
    ),
    new PronunciationRules(
      3,
      "Liaison (Linking)",
      "success",
      "When final consonant meets ㅇ, it links forward.",
      "먹어요",
      "머거요 (meo-geo-yo)",
      "먹어요"
    ),
    new PronunciationRules(
      4,
      "Nasalization",
      "warning",
      "Sounds become nasal when certain consonants meet.",
      "합니다",
      "함니다 (ham-ni-da)",
      "합니다"
    ),
    new PronunciationRules(
      5,
      "Tensification",
      "warning",
      "Two consonants together create a tense sound.",
      "국밥",
      "국빱 (guk-bbap)",
      "국밥"
    ),
    new PronunciationRules(
      6,
      "Batchim Rules",
      "info",
      "Final consonants are simplified in pronunciation.",
      "읽다",
      "익따 (ik-tta)",
      "읽다"
    ),
    new PronunciationRules(
      7,
      "Assimilation",
      "info",
      "Sounds change for smoother pronunciation.",
      "국물",
      "궁물 (gung-mul)",
      "국물"
    ),
    new PronunciationRules(
      8,
      "Liquidization",
      "info",
      "ㄴ and ㄹ interaction becomes double ㄹ sound.",
      "신라",
      "실라 (sil-la)",
      "신라"
    ),
    new PronunciationRules(
      9,
      "Aspiration Rule",
      "warning",
      "ㅎ affects nearby consonants.",
      "좋다",
      "조타 (jo-ta)",
      "좋다"
    ),
    new PronunciationRules(
      10,
      "Final Sound Neutralization",
      "info",
      "Only certain sounds are pronounced at syllable end.",
      "닭",
      "닥 (dak)",
      "닭"
    )
  ]
}