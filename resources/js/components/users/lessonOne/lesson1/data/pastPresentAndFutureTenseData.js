import QuizQuestionModel from '../models/pastPresentAndFutureTenseModel.js'

export default {
  questions: [

    new QuizQuestionModel(
      "나는 밥을 먹었다.",
      ["past", "present", "future"],
      "past",
      "I ate rice.",
      "‘먹었다’ shows past tense (-았다/었다 form)."
    ),

    new QuizQuestionModel(
      "나는 학교에 간다.",
      ["past", "present", "future"],
      "present",
      "I go to school.",
      "‘간다’ is present tense (regular action)."
    ),

    new QuizQuestionModel(
      "나는 영화를 볼 것이다.",
      ["past", "present", "future"],
      "future",
      "I will watch a movie.",
      "‘-을 것이다’ shows future tense."
    ),

    new QuizQuestionModel(
      "그는 어제 공부했다.",
      ["past", "present", "future"],
      "past",
      "He studied yesterday.",
      "‘했다’ shows completed action in the past."
    ),

    new QuizQuestionModel(
      "그녀는 매일 운동한다.",
      ["past", "present", "future"],
      "present",
      "She exercises every day.",
      "Habitual action uses present tense."
    ),

    new QuizQuestionModel(
      "나는 내일 친구를 만날 것이다.",
      ["past", "present", "future"],
      "future",
      "I will meet my friend tomorrow.",
      "‘만날 것이다’ indicates future plan."
    ),

    new QuizQuestionModel(
      "우리는 영화를 봤다.",
      ["past", "present", "future"],
      "past",
      "We watched a movie.",
      "‘봤다’ is past form of 보다."
    ),

    new QuizQuestionModel(
      "그들은 지금 공부한다.",
      ["past", "present", "future"],
      "present",
      "They are studying now.",
      "‘지금’ (now) indicates present tense."
    ),

    new QuizQuestionModel(
      "나는 밥을 먹는다.",
      ["past", "present", "future"],
      "present",
      "I eat rice.",
      "General present action uses -는다 form."
    ),

    new QuizQuestionModel(
      "그는 집에 갔다.",
      ["past", "present", "future"],
      "past",
      "He went home.",
      "‘갔다’ is past tense of 가다."
    )

  ]
}