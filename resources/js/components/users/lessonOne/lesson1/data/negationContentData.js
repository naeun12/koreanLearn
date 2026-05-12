import NegationContentModel from "../models/NegationContentModel";

export default {
    NegationContentData: [
        // ================= EASY =================
        new NegationContentModel(
            "What does '안 가요' mean?",
            [
                "I am not going (by choice)",
                "I cannot go",
                "I will go",
                "I went",
            ],
            "I am not going (by choice)",
            "‘안’ means simple negation by choice.",
        ),

        new NegationContentModel(
            "What does '못 가요' mean?",
            [
                "I am not going",
                "I cannot go",
                "I will go",
                "I do not want to go",
            ],
            "I cannot go",
            "‘못’ means inability due to situation or skill.",
        ),

        new NegationContentModel(
            "Which replaces '있다'?",
            ["안", "못", "없다", "아니다"],
            "없다",
            "‘없다’ means something does not exist.",
        ),

        new NegationContentModel(
            "What does '학생이 아니에요' mean?",
            [
                "I am a student",
                "I am not a student",
                "I can study",
                "I go to school",
            ],
            "I am not a student",
            "‘아니다’ means non-identity.",
        ),

        new NegationContentModel(
            "What does '가지 마세요' mean?",
            ["Please go", "Do not go", "I go", "I can go"],
            "Do not go",
            "Used for prohibition commands.",
        ),

        // ================= MEDIUM =================

        new NegationContentModel(
            "Which is the long form of '안 먹어요'?",
            ["먹지 않아요", "먹지 못해요", "안 먹어요", "먹어요"],
            "먹지 않아요",
            "‘-지 않다’ is formal equivalent of ‘안’.",
        ),

        new NegationContentModel(
            "Which means 'cannot eat' in formal Korean?",
            ["먹지 않아요", "먹지 못해요", "안 먹어요", "먹어요"],
            "먹지 못해요",
            "‘-지 못하다’ is formal equivalent of ‘못’.",
        ),

        new NegationContentModel(
            "Which sentence shows intention-based negation?",
            ["안 가요", "못 가요", "없어요", "아니에요"],
            "안 가요",
            "‘안’ is used for choice (intention).",
        ),

        new NegationContentModel(
            "Which sentence shows inability?",
            ["안 먹어요", "못 먹어요", "먹어요", "아니에요"],
            "못 먹어요",
            "‘못’ is used when unable to do something.",
        ),

        new NegationContentModel(
            "Which is correct long form negation?",
            ["안 가요", "가지 않아요", "못 가요", "가요"],
            "가지 않아요",
            "Long form uses '-지 않다'.",
        ),

        // ================= HARD =================

        new NegationContentModel(
            "Which is WRONG usage?",
            ["안 먹어요", "못 먹어요", "먹지 아니요", "먹지 않아요"],
            "먹지 아니요",
            "Correct form is '먹지 않아요'.",
        ),

        new NegationContentModel(
            "What is the correct negative command form?",
            ["가지 마세요", "안 가세요", "못 가세요", "가세요"],
            "가지 마세요",
            "‘-지 마세요’ is used for prohibition.",
        ),

        new NegationContentModel(
            "Which shows BOTH formal inability?",
            ["못 가요", "가지 못해요", "안 가요", "가요"],
            "가지 못해요",
            "‘-지 못하다’ is formal inability form.",
        ),

        new NegationContentModel(
            "Which sentence is correct identity negation?",
            [
                "학생이 아니에요",
                "학생이 없어요",
                "학생이 못 해요",
                "학생이 안 해요",
            ],
            "학생이 아니에요",
            "‘아니다’ is used for identity negation.",
        ),

        new NegationContentModel(
            "Which is MOST polite prohibition?",
            ["가지 마", "가지 마세요", "안 가세요", "못 가세요"],
            "가지 마세요",
            "Most polite form uses ‘-세요’.",
        ),
    ],
};
