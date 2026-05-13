import ExampleModel from "../../models/LessonOneModel/ExampleModel";
import Batchim from "../../pronounce/batchim.vue";
export default {
    KoreanVowelAndConsonantsExamples: [
        new ExampleModel(
            1,
            "가",
            "ㄱ + ㅏ = ga",
            `This syllable uses ㄱ, which sounds like a soft g or k, and ㅏ, which sounds like a in “father.
            ” It is one of the most common beginner syllables in Korean reading practice.`,
            "",
            "",
        ),
        new ExampleModel(
            2,
            "나",
            `ㄴ + ㅏ = na
            `,
            `
            ㄴ gives an n sound, while ㅏ keeps the open a vowel. Together they form na, a smooth and easy sound often used in beginner vocabulary.
            `,
            "",
            "",
        ),
        new ExampleModel(
            3,
            "다",
            `ㄷ + ㅏ = da
            `,
            `
            This block combines ㄷ, which sounds like a light d or t, with ㅏ. It creates da, a syllable commonly found in verbs and sentence endings.
            `,
            "",
            "",
        ),
        new ExampleModel(
            4,
            "모",
            `ㅁ + ㅗ = mo
            `,
            `
            ㅁ sounds like m, and ㅗ sounds like o in “go.” Together they form mo, a rounded vowel sound useful for practicing mouth shape in pronunciation.
            `,
            "",
            "",
        ),
        new ExampleModel(
            5,
            "수",
            `ㅅ + ㅜ = su
            `,
            `
            This syllable uses ㅅ, which sounds like s, and ㅜ, which sounds like oo in “food.” It creates su, a common sound in many Korean names and words.
            `,
            "",
            "",
        ),
        new ExampleModel(
            6,
            "기",
            `ㄱ + ㅣ = gi
            `,
            `
            ㄱ combined with ㅣ forms gi or a soft ki sound. The vowel ㅣ sounds like ee in “see,” making this syllable bright and sharp in tone.
            `,
            "",
            "",
        ),
    ],
    PronunciationRuleExamples: [
        new ExampleModel(
            1,
            "Linking",
            "",
            " The final consonant slides over to the next empty 'ㅇ' syllable.",
            `<strong> Written: </strong> (음악)`,
            `<strong>Pronounced: </strong>으막(Eu-mak)`,
        ),
        new ExampleModel(
            2,
            "Linking",
            "",
            "The 'ㄱ' sound moves forward to create a smooth flowbetween words",
            `<strong> Written: </strong> (한국어)`,
            `<strong>Pronounced: </strong>한구거 (Han-gu-geo)`,
        ),
        new ExampleModel(
            3,
            "Linking",
            "",
            "Double consonants like 'ㅆ' carry their sound into the next vowel.",
            `<strong> Written: </strong> (있어요)`,
            `<strong>Pronounced: </strong>이써요 (I-sseo-yo)`,
        ),
        new ExampleModel(
            4,
            "Nasalization",
            "",
            "The 'p/b' sound (ㅂ) becomes an 'm' sound when followed by ㄴ.",
            `<strong> Written: </strong> (합니다)`,
            `<strong>Pronounced: </strong>함니다 (Ham-ni-da)`,
        ),
        new ExampleModel(
            5,
            "Nasalization",
            "",
            " The 'k/g' sound (ㄱ) turns into an 'ng' sound when followed by ㅁ.",
            `<strong> Written: </strong> (국물)`,
            `<strong>Pronounced: </strong>궁물 (Gung-mul)`,
        ),
        new ExampleModel(
            6,
            "Nasalization",
            "",
            "The ㄱ changes to an 'ng' sound for a softer transition into ㄴ.",
            `<strong> Written: </strong> (작년)`,
            `<strong>Pronounced: </strong>장년 (Jang-nyeon)`,
        ),
        new ExampleModel(
            7,
            "Nasalization",
            "",
            "The final ㅌ changes to an 'n' sound when it meets the nasal ㅁ",
            `<strong> Written: </strong> (낱말)`,
            `<strong>Pronounced: </strong>난말 (Nan-mal)`,
        ),
        new ExampleModel(
            8,
            "Lateralization",
            "",
            "When ㄴ and ㄹ meet, they both transform into a strong 'L' sound.",
            `<strong> Written: </strong> (연락)`,
            `<strong>Pronounced: </strong>열락 (Yeol-lak)`,
        ),
        new ExampleModel(
            9,
            "Lateralization",
            "",
            " The bottom ㄴ is pulled into an 'L' sound by the following ㄹ",
            `<strong> Written: </strong> (관리)`,
            `<strong>Pronounced: </strong>괄리 (Gwal-li)`,
        ),
        new ExampleModel(
            10,
            "Lateralization",
            "",
            ` A "Double L" is used because it's easier to say than switching from N to R.`,
            `<strong> Written: </strong> (신라)`,
            `<strong>Pronounced: </strong>실라 (Sil-la)`,
        ),
        new ExampleModel(
            11,
            "Tensification",
            "",
            `The second consonant becomes "double" or sharp after a stop sound like ㄱ.`,
            `<strong> Written: </strong> (학교)`,
            `strong>Pronounced: </strong>학꾜 (Hak-kkyo)`,
        ),
        new ExampleModel(
            12,
            "Tensification",
            "",
            "The ㄷ becomes a sharp 'TT' sound due to the pressure of the ㄱ.",
            `<strong> Written: </strong> (식당)`,
            `<strong>Pronounced: </strong>식땅(Sik-ttang)`,
        ),
        new ExampleModel(
            13,
            "Aspiration",
            "",
            "ㄱ + ㅎ merge to create the strong, breathy ㅋ sound",
            `<strong> Written: </strong> (축하해)`,
            `<strong>Pronounced: </strong>추카해 (Chu-ka-hae)`,
        ),
        new ExampleModel(
            14,
            "Aspiration",
            "",
            " ㅂ + ㅎ merge to create the aspirated, breathy ㅍ sound.",
            `<strong> Written: </strong> (입학)`,
            `<strong>Pronounced: </strong>이팍 (I-pak)`,
        ),
        new ExampleModel(
            15,
            "Neutralization",
            "",
            "When ㅌ is followed by the vowel 이, it is pronounced closer to a 'ch' sound due to palatalization.",
            `<strong>Written:</strong> 같이`,
            `<strong>Pronounced:</strong> 가치 (gachi)`,
        ),
        new ExampleModel(
            16,
            "Palatalization",
            "",
            " ㅂ + ㅎ merge to create the aspirated, breathy ㅍ sound.",
            `<strong> Written: </strong> (같이)`,
            `<strong>Pronounced: </strong>가치 (Ga-chi)`,
        ),
        new ExampleModel(
            17,
            "S-Palatalization",
            "",
            " he ㅅ sound shifts to 'SH' when followed by the vowel ㅣ or 'y' sounds.",
            `<strong> Written: </strong> (시)`,
            `<strong>Pronounced: </strong>시 (Shi )`,
        ),
    ],
    BatchimExamples: [
        new ExampleModel(
            1,
            "No Batchim (Open Syllables)",
            "Basic Structure: Consonant + Vowel",
            "This type of syllable has no final consonant (Batchim), so it ends with a clear and smooth vowel sound.",
            ` <span class="p-2 rounded-3 small"><strong>가 (ga)</strong></span>
            <span class="p-2 rounded-3 small"><strong>나 (na)</strong></span>
            <span class="p-2 rounded-3 small"><strong>다 (da)</strong></span
            >`,
        ),
        new ExampleModel(
            2,
            "Standard Batchim (Final Consonants)",
            "Common final consonants and their resulting sounds:",
            "",
            `<span class="p-2 small"><strong>ㄱ (k) → 각 (gak)</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㄴ (n) → 난 (nan)</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㄷ (t) → 닫 (dat)</strong></span>
            <br>
            <span class="p-2 rounded-3 small"><strong>ㄹ (l) → 달 (dal)</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅁ (m) → 맘 (mam)</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅂ (p) → 밥 (bap)</strong></span>
            <br>
            <span class="p-2 rounded-3 small"><strong>ㅅ (t) → 옷 (ot)</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅇ (ng) → 항 (hang)</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅈ (t) → 낮 (nat)</strong></span>
            <br>
            <span class="p-2 rounded-3 small"><strong>ㅊ (t) → 꽃 (kkot)</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅋ (k) → 부엌 (bueok)</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅌ (t) → 끝 (kkeut)</strong></span>  
            `,
        ),
        new ExampleModel(
            3,
            "Double Batchim (Complex Final Consonants)",
            "Two consonants in final position (but only one is pronounced or changes sound):",
            "",
            ` <span class="p-2 rounded-3 small"><strong>읽 (ilg) → sounds like “il”</strong></span>
               <br>
            <span class="p-2 rounded-3 small"><strong>앉 (anj) → sounds like “an”</strong></span>
                        <br>

            <span class="p-2 rounded-3 small"><strong>삶 (salm) → sounds like “sam”</strong></span>
               <br>
            <span class="p-2 rounded-3 small"><strong>값 (gaps) → sounds like “gap”</strong></span>              
             <br>
            <span class="p-2 rounded-3 small"><strong>닭 (dak) → sound shifts to “dak”</strong></span>
               <br>
            <span class="p-2 rounded-3 small"><strong>흙 (heuk) → ending sound “heuk”</strong></span>
               <br>
            <span class="p-2 rounded-3 small"><strong>없 (eop) → ending sound “eop”</strong></span>
            `,
        ),
        new ExampleModel(
            4,
            "Pronunciation Rule Summary",
            "Batchim is usually pronounced in a simplified way. Only 7 main sounds are commonly heard:",
            "",
            ` <span class="p-2 rounded-3 small"><strong>ㄱ </strong></span>
            <span class="p-2 rounded-3 small"><strong>ㄴ </strong></span>
            <span class="p-2 rounded-3 small"><strong>ㄷ </strong></spanclass>
            <span class="p-2 rounded-3 small"><strong>ㄹ </strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅁ </strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅂ</strong></span>
            <span class="p-2 rounded-3 small"><strong>ㅇ</strong></span>
               <br>
            <span class="p-2"><strong>→ Other final consonants change to one ofthese sounds.</strong></span>
            `,
        ),
    ],
    BasicSoundsChangeExamples: [
        new ExampleModel(
            1,
            "",
            "책이 → 채기 (chae-gi)",
            "Final consonant links to the next vowel sound.",
            "",
            "",
            "chagi.mp3",
        ),
        new ExampleModel(
            2,
            "",
            "한국어 → 한구거 (han-gu-geo)",
            "Batchim moves smoothly to the next syllable.",
            "",
            "",
            "hangugeo.mp3",
        ),
        new ExampleModel(
            3,
            "",
            "꽃을 → 꼬츨 (kko-cheul)",
            "Final sound connects to the following vowel.",
            "",
            "",
            "kkocheul.mp3",
        ),
        new ExampleModel(
            4,
            "",
            "합니다 → 함니다 (ham-ni-da)",
            "ㅂ changes to ㅁ before ㄴ for easier speech.",
            "",
            "",
            "hamnida.mp3",
        ),
        new ExampleModel(
            5,
            "",
            "국물 → 궁물 (gung-mul)",
            "ㄱ changes to ng sound before ㅁ.",
            "",
            "",
            "gungmul.mp3",
        ),
        new ExampleModel(
            6,
            "",
            "앞문 → 암문 (am-mun)",
            "ㅍ changes to ㅁ before ㅁ.",
            "",
            "",
            "ammun.mp3",
        ),
        new ExampleModel(
            7,
            "",
            "학교 → 학꾜 (hak-kyo)",
            "ㄱ becomes stronger after batchim.",
            "",
            "",
            "hakkyo.mp3",
        ),
        new ExampleModel(
            8,
            "",
            "입구 → 입꾸 (ip-kku)",
            "ㄱ becomes tense after final consonant.",
            "",
            "",
            "ipkku.mp3",
        ),
        new ExampleModel(
            9,
            "",
            "국밥 → 국빱 (guk-ppap)",
            "ㅂ becomes tense after batchim.",
            "",
            "",
            "gukppap.mp3",
        ),
        new ExampleModel(
            10,
            "",
            "설날 → 설랄 (seol-lal)",
            "ㄴ changes to ㄹ after ㄹ.",
            "",
            "",
            "seollal.mp3",
        ),
        new ExampleModel(
            11,
            "",
            "신라 → 실라 (sil-la)",
            "ㄴ + ㄹ becomes ㄹㄹ sound.",
            "",
            "",
            "silla.mp3",
        ),
        new ExampleModel(
            12,
            "",
            "좋아요 → 조아요 (jo-a-yo)",
            "ㅎ becomes silent in smooth speech.",
            "",
            "",
            "joayo.mp3",
        ),
        new ExampleModel(
            13,
            "",
            "놓다 → 노타 (no-ta)",
            "ㅎ affects the next consonant sound.",
            "",
            "",
            "nota.mp3",
        ),
        new ExampleModel(
            14,
            "",
            "많다 → 만타 (man-ta)",
            "ㅎ changes the following sound to stronger ㅌ.",
            "",
            "",
            "manta.mp3",
        ),
    ],
    ToBeExamples: [
        new ExampleModel(
            1,
            "",
            "Change of State (되다)",
            "",
            `<ul class="text-secondary-color m-3">
                <li><strong>학생이 되다 </strong>→ to become a student</li>
                 <li><strong>의사가 되다 </strong>→ to become a doctor</li>
                <li><strong>좋은 사람이 되다</strong> → to become a good person</li>
                <li><strong>친구가 되다 </strong>→ to become friendsn</li>
                <li><strong>선생님이 되다</strong> → to become a teacher</li>
            </ul>
            <p class="text-primary-color">
            <strong>Example Sentences:</strong>
            </p>
            <ul class="text-secondary-color m-3">
            <li><strong>나는 의사가 되었다 </strong>→ I became a doctor</li>
            <li><strong>그녀는 좋은사람이 되었다 </strong> → She became a good person</li>
            </ul>
            `,
            "",
            "",
            "",
        ),
        new ExampleModel(
            2,
            "",
            "Identity vs Change (이다 vs 되다)",
            "",
            `<ul class="text-secondary-color m-3">
                <li><strong>나는 학생이다</strong> → I am a student</li>
                 <li><strong>나는 학생이 되었다 </strong>→ I became a student</li>
                <li><strong>좋은 사람이 되다 </strong>→ to become a good person</li>
                <li><strong>그는 선생님이다 </strong>→ He is a teacher</li>
                <li><strong>그는 선생님이 될 것이다</strong> → He will become a teacher</li>
            </ul>
            `,
            "",
            "",
            "",
        ),
        new ExampleModel(
            3,
            "",
            "Time Reference (Present / Past / Future)",
            "",
            `<ul class="text-secondary-color m-3">
                <li><strong>학생이 되다</strong> → becomes a student</li>
                 <li><strong>학생이 되었다 </strong>→ became a student</li>
                <li><strong>학생이 될 것이다 </strong>→ will become a student</li>
            </ul>
            `,
            "",
            "",
            "",
        ),
        new ExampleModel(
            4,
            "",
            "Future Intention (-(으)ㄹ 것이다)",
            "",
            `<ul class="text-secondary-color m-3">
                <li><strong>나는 의사가 될 것이다</strong> → I will become a doctor</li>
                 <li><strong>우리는 친구가 될 것이다 </strong>→ We will become friends</li>
                <li><strong>그는 성공한 사람이 될 것이다 </strong>→ He will become a successful person</li>
                <li><strong>그는 선생님이다 </strong>→ He is a teacher</li>
                <li><strong>내일은 비가 올 것이다</strong> → It will rain tomorrow</li>
            </ul>
            `,
            "",
            "",
            "",
        ),
        new ExampleModel(
            5,
            "",
            "Sentence Structure Practice",
            "",
            `
            <p class="text-primary-color"><strong>Pattern:</strong></p>
            <p class="text-secondary-color">Subject + (이/가) + 되다 / 될 것이다</p>
            <p class="text-primary-color">Examples:</p>
            <ul class="text-secondary-color m-3">
                <li><strong>나는 의사가 될 것이다</strong></li>
                 <li><strong>우리는 좋은 팀이 될 것이다 </strong></li>
                <li><strong>그녀는 리더가 될 것이다 </strong></li>
            </ul>
            `,
            "",
            "",
            "",
        ),
        new ExampleModel(
            6,
            "",
            "Hangul Bonus Example (Pronunciation Tip Integration)",
            "Once learners understand syllable blocks, reading Korean becomes much easier because each block = one sound unit.",
            `
            <ul class="text-secondary-color m-3">
                <li><strong>가 + 나 = 가나 (</strong>(Ga + Na = syllable block)</li>
                 <li><strong>한 + 국 = 한국 </strong> (Han + Guk = Korea)</li>
                <li><strong>학 + 생 = 학생</strong> (Hak + Saeng = student)</li>
            </ul>
            `,
            "",
            "",
            "",
        ),
    ],
};
