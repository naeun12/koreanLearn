import QuizQuestionModel from '../../models/grammar/questionQuizModel.js'

export default {
  questions: [

    new QuizQuestionModel(
      "저는 학생___입니다.",
      ["은", "는", "이", "가"],
      "는",
      "I am a student.",
      "‘는’ is a topic marker. Used when introducing yourself or talking generally."
    ),

    new QuizQuestionModel(
      "고양이___ 귀여워요.",
      ["은", "는", "이", "가"],
      "가",
      "The cat is cute.",
      "‘가’ is a subject marker used when describing a subject (cat = subject)."
    ),

    new QuizQuestionModel(
      "사과___ 먹어요.",
      ["을", "를", "이", "가"],
      "를",
      "I eat an apple.",
      "‘를’ is an object marker. Apple is the object being eaten."
    ),

    new QuizQuestionModel(
      "학교___ 가요.",
      ["에", "에서", "으로", "도"],
      "에",
      "I go to school.",
      "‘에’ indicates destination (where you go)."
    ),

    new QuizQuestionModel(
      "집___ 공부해요.",
      ["에", "에서", "으로", "도"],
      "에서",
      "I study at home.",
      "‘에서’ means action happens inside a place."
    ),

    new QuizQuestionModel(
      "버스___ 가요.",
      ["으로", "에", "에서", "도"],
      "으로",
      "I go by bus.",
      "‘으로’ indicates means of transportation."
    ),

    new QuizQuestionModel(
      "9시부터 5시___ 일해요.",
      ["까지", "부터", "도", "의"],
      "까지",
      "I work from 9 to 5.",
      "‘까지’ means ‘until’ (end time)."
    ),

    new QuizQuestionModel(
      "친구___ 영화 봐요.",
      ["하고", "에", "에서", "도"],
      "하고",
      "I watch a movie with a friend.",
      "‘하고’ means ‘with’ someone."
    ),

    new QuizQuestionModel(
      "저___ 학생입니다.",
      ["도", "의", "에", "를"],
      "도",
      "I am also a student.",
      "‘도’ means ‘also / too’."
    ),

    new QuizQuestionModel(
      "친구___ 책이에요.",
      ["의", "에", "가", "를"],
      "의",
      "It is a friend’s book.",
      "‘의’ shows possession (like ‘s in English)."
    ),

    new QuizQuestionModel(
      "‘Topic marker’ is:",
      ["이/가", "은/는", "을/를", "에"],
      "은/는",
      "Topic marker",
      "‘은/는’ is used to introduce or contrast topics."
    ),

    new QuizQuestionModel(
      "‘Subject marker’ is:",
      ["이/가", "은/는", "을/를", "도"],
      "이/가",
      "Subject marker",
      "‘이/가’ marks the subject of the sentence."
    ),

    new QuizQuestionModel(
      "‘Object marker’ is:",
      ["을/를", "에", "도", "의"],
      "을/를",
      "Object marker",
      "‘을/를’ marks the object being acted on."
    ),

    new QuizQuestionModel(
      "‘I go to school’ uses:",
      ["에", "에서", "도", "의"],
      "에",
      "학교에 가요",
      "‘에’ shows destination (to school)."
    ),

    new QuizQuestionModel(
      "‘I study at home’ uses:",
      ["에서", "에", "으로", "도"],
      "에서",
      "집에서 공부해요",
      "‘에서’ means action location (at home)."
    ),

    new QuizQuestionModel(
      "‘By bus’ uses:",
      ["으로", "에", "에서", "도"],
      "으로",
      "버스로 가요",
      "‘으로’ means method/transport."
    ),

    new QuizQuestionModel(
      "‘From 9 to 5’ uses:",
      ["까지", "도", "에", "의"],
      "까지",
      "9시부터 5시까지",
      "‘까지’ means ‘until’ (end point)."
    ),

    new QuizQuestionModel(
      "‘I also am a student’ uses:",
      ["도", "의", "에", "을/를"],
      "도",
      "저도 학생입니다",
      "‘도’ means also/too."
    ),

    new QuizQuestionModel(
      "‘With a friend’ uses:",
      ["하고", "에", "에서", "의"],
      "하고",
      "친구하고 같이",
      "‘하고’ means ‘with’ someone."
    ),

    new QuizQuestionModel(
      "‘Friend’s book’ uses:",
      ["의", "에", "도", "가"],
      "의",
      "친구의 책",
      "‘의’ shows possession (friend’s)."
    )

  ]
}