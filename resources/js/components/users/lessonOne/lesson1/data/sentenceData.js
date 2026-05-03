import SentencePuzzleModel from '../models/sentencePuzzleModel'

export default {
    sentencePuzzleQuestions: [

    new SentencePuzzleModel(
        "I eat rice",
        ["저는", "밥을", "먹어요"]
    ),

    new SentencePuzzleModel(
        "I drink coffee",
        ["저는", "커피를", "마셔요"]
    ),

    new SentencePuzzleModel(
        "I read a book",
        ["저는", "책을", "읽어요"]
    ),

    new SentencePuzzleModel(
        "I study Korean",
        ["저는", "한국어를", "공부해요"]
    ),

    // 🔥 CONJUNCTION: 그리고 (and)
    new SentencePuzzleModel(
        "I eat rice and I drink coffee",
        ["저는", "밥을", "먹어요", "그리고", "커피를", "마셔요"]
    ),

    // 🔥 CONJUNCTION: 하지만 (but)
    new SentencePuzzleModel(
        "I eat rice but I don't drink coffee",
        ["저는", "밥을", "먹어요", "하지만", "커피는", "안", "마셔요"]
    ),

    // 🔥 CONJUNCTION: 그래서 (so)
    new SentencePuzzleModel(
        "I am hungry so I eat rice",
        ["배가", "고파요", "그래서", "저는", "밥을", "먹어요"]
    ),

    new SentencePuzzleModel(
        "I watch TV",
        ["저는", "TV를", "봐요"]
    ),

    new SentencePuzzleModel(
        "I listen to music",
        ["저는", "음악을", "들어요"]
    ),

    new SentencePuzzleModel(
        "I write a letter",
        ["저는", "편지를", "써요"]
    )

    ]
}