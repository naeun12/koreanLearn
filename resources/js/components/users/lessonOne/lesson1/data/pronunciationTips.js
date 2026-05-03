import pronunciationTips from '../models/pronunciationTipsModel'

export default {
    pronunciationTipsData: [
        new pronunciationTips(
            "Tenseness (쌍자음)",
            "Double consonants are tense—tighten your throat with no extra air.",
            "ㄲ (kk), ㅃ (pp)"
        ),
        new pronunciationTips(
                
            "No Puff (Unaspirated)",
            "Basic consonants have little to no air release.",
            "가 (ga), 다 (da)"
        ),
        new pronunciationTips(
                
            "Aspirated Sounds",
            "These consonants have a strong burst of air.",
            "카 (ka), 타 (ta)"
        ),
        new pronunciationTips(

            "Batchim (받침)",
            "Final consonants are short and clipped, not fully pronounced.",
            "밥 → bap (stop sound)"
        ),
        new pronunciationTips(

            "Silent ㅇ",
            "ㅇ is silent at the start but sounds like 'ng' at the end.",
            "아 (a), 방 (bang)"
        ),
        new pronunciationTips(

            "Linking (연음)",
            "Final consonant connects to the next vowel sound.",
            "한국어 → han-gu-geo"
        ),
        new pronunciationTips(

            "R/L Sound (ㄹ)",
            "ㄹ sounds like 'R' in the middle and 'L' at the end.",
            "라면 (ramyeon), 발 (bal)"
        ),
        new pronunciationTips(

            "Vowel Clarity",
            "Keep vowels clear and consistent.",
            "ㅏ (a) vs ㅓ (eo)"
        ),
        new pronunciationTips(

            "Double Vowels",
            "Combined vowels glide smoothly together.",
            "ㅘ (wa), ㅝ (wo)"
        ),
        new pronunciationTips(

            "Intonation",
            "Korean uses a flatter tone compared to English.",
            "안녕하세요 (even tone)"
        ),
        new pronunciationTips(

            "Nasal Sounds",
            "Sounds can change to ng/m/n due to nearby consonants.",
            "감사합니다 → gam-sa-ham-ni-da"
        ),
        new pronunciationTips(

            "Palatalization",
            "Certain consonants change sound before specific vowels.",
            "같이 → ga-chi"
        ),
    ]
}
            