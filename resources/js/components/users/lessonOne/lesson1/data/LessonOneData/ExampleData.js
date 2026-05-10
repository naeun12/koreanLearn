import ExampleModel from "../../models/LessonOneModel/ExampleModel";
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
};
