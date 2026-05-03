import QuestionModel from "../models/numbersAndCountersModel.js";

export default [
    new QuestionModel(
        "Which number system is used for counting people in Korean?",
        ["Native Korean", "Sino-Korean", "Roman Numbers", "English Numbers"],
        "Native Korean",
        "Counting people usually uses Native Korean numbers with counters like 명."
    ),

    new QuestionModel(
        "Fill in the blank: 한 ___ = one person",
        ["명", "개", "권", "마리"],
        "명",
        "명 is the common counter for people."
    ),

    new QuestionModel(
        "Fill in the blank: 두 ___ = two items",
        ["개", "명", "권", "시"],
        "개",
        "개 is the common counter for general objects."
    ),

    new QuestionModel(
        "Which counter is used for animals?",
        ["마리", "명", "권", "개"],
        "마리",
        "마리 is used when counting animals."
    ),

    new QuestionModel(
        "Which counter is used for books?",
        ["권", "명", "마리", "분"],
        "권",
        "권 is used for books."
    ),

    new QuestionModel(
        "Fill in the blank: 세 ___ = three animals",
        ["마리", "개", "명", "권"],
        "마리",
        "세 마리 means three animals."
    ),

    new QuestionModel(
        "Fill in the blank: 두 ___ = two books",
        ["권", "개", "명", "시"],
        "권",
        "두 권 means two books."
    ),

    new QuestionModel(
        "Which number system is used for money?",
        ["Sino-Korean", "Native Korean", "Roman Numbers", "English Numbers"],
        "Sino-Korean",
        "Money uses Sino-Korean numbers such as 천 원, 오천 원."
    ),

    new QuestionModel(
        "Which number system is used for months?",
        ["Sino-Korean", "Native Korean", "Roman Numbers", "English Numbers"],
        "Sino-Korean",
        "Months use Sino-Korean numbers like 삼 월."
    ),

    new QuestionModel(
        "Fill in the blank: 오 ___ = five minutes",
        ["분", "시", "개", "명"],
        "분",
        "분 means minutes and uses Sino-Korean numbers."
    ),

    new QuestionModel(
        "Fill in the blank: 삼 ___ = March",
        ["월", "일", "시", "분"],
        "월",
        "월 means month. 삼 월 means March."
    ),

    new QuestionModel(
        "Fill in the blank: 십오 ___ = 15th day",
        ["일", "월", "분", "시"],
        "일",
        "일 is used for calendar dates."
    ),

    new QuestionModel(
        "Which number system is used for phone numbers?",
        ["Sino-Korean", "Native Korean", "Roman Numbers", "English Numbers"],
        "Sino-Korean",
        "Phone numbers are read digit by digit using Sino-Korean numbers."
    ),

    new QuestionModel(
        "Fill in the blank: 한 ___ = one o’clock",
        ["시", "분", "월", "일"],
        "시",
        "Hours use Native Korean numbers with 시."
    ),

    new QuestionModel(
        "Which sentence is correct for three people?",
        ["세 명", "세 개", "세 권", "세 마리"],
        "세 명",
        "세 명 means three people."
    ),

    new QuestionModel(
        "Which sentence is correct for two objects?",
        ["두 개", "두 명", "두 권", "두 시"],
        "두 개",
        "두 개 means two items."
    ),

    new QuestionModel(
        "Which sentence is correct for one book?",
        ["한 권", "한 명", "한 개", "한 마리"],
        "한 권",
        "한 권 means one book."
    ),

    new QuestionModel(
        "Which sentence is correct for 5,000 won?",
        ["오천 원", "오천 명", "오천 개", "오천 시"],
        "오천 원",
        "오천 원 means 5,000 won."
    ),

    new QuestionModel(
        "Which number system is used for hours?",
        ["Native Korean", "Sino-Korean", "Roman Numbers", "English Numbers"],
        "Native Korean",
        "Hours use Native Korean numbers like 한 시, 두 시."
    ),

    new QuestionModel(
        "Which is correct for ten minutes?",
        ["십 분", "십 시", "십 개", "십 명"],
        "십 분",
        "Minutes use Sino-Korean numbers. 십 분 means ten minutes."
    )
];