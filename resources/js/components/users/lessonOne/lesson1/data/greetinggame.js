import GreetingContent from '../models/greetinggameModel'

export default {
GreetingGame: [
  new GreetingContent(
    "Someone says '안녕하세요' to you.",
    "Respond correctly",
    "Say the proper greeting back",
    "hello.mp3",
    "안녕하세요",
    "‘안녕하세요’ means ‘Hello’ in Korean. It is a polite greeting."
  ),

  new GreetingContent(
    "Your close friend says '안녕' to you.",
    "Respond correctly",
    "Use casual response",
    "hii.mp3",
    "안녕",
    "Casual greeting used with friends."
  ),

  new GreetingContent(
    "You are staying, and someone is leaving.",
    "Respond correctly",
    "Say goodbye properly",
    "goodbyesomeoneleaving.mp3",
    "안녕히 가세요",
    "Used when the other person is leaving."
  ),

  new GreetingContent(
    "You are leaving, and someone is staying.",
    "Respond correctly",
    "Say goodbye properly",
    "tosomeonestaying.mp3",
    "안녕히 계세요",
    "Used when you are leaving."
  ),

  new GreetingContent(
    "Someone helps you in a formal situation.",
    "Respond correctly",
    "Show respect",
    "tyformal.mp3",
    "감사합니다",
    "Formal way of saying thank you."
  ),

  new GreetingContent(
    "Your teacher gives you homework.",
    "Respond correctly",
    "Show understanding",
    "understand.mp3",
    "알겠습니다",
    "Means ‘I understand’ in formal situations."
  ),

  new GreetingContent(
    "You didn’t hear what the teacher said.",
    "Respond correctly",
    "Ask politely",
    "repeatplease.mp3",
    "다시 말씀해 주세요",
    "Means ‘Please say it again.’"
  ),

  new GreetingContent(
    "You want to go to the restroom during class.",
    "Respond correctly",
    "Ask permission",
    "restroom.mp3",
    "화장실 가도 돼요?",
    "Means ‘May I go to the restroom?’"
  ),

  new GreetingContent(
    "You have a question in class.",
    "Respond correctly",
    "Raise your hand response",
    "question.mp3",
    "질문 있어요",
    "Means ‘I have a question.’"
  ),

  new GreetingContent(
    "Teacher is speaking too fast.",
    "Respond correctly",
    "Ask to slow down",
    "slowly.mp3",
    "천천히 말씀해 주세요",
    "Means ‘Please speak slowly.’"
  ),

  // 🔥 NEW GAME ITEMS ADDED
  new GreetingContent(
    "Teacher asks if you understand the lesson.",
    "Respond correctly",
    "Answer politely",
    "yes.mp3",
    "네",
    "Means ‘Yes.’ Used to respond politely in class."
  ),

  new GreetingContent(
    "Teacher asks a question but you don't know the answer.",
    "Respond correctly",
    "Be honest",
    "idontknow.mp3",
    "모르겠어요",
    "Means ‘I don’t know.’"
  ),

  new GreetingContent(
    "Teacher calls your name.",
    "Respond correctly",
    "Answer politely",
    "yes.mp3",
    "네",
    "Used when responding when called."
  ),

  new GreetingContent(
    "You want to apologize for a mistake in class.",
    "Respond correctly",
    "Say sorry",
    "sorry.mp3",
    "죄송합니다",
    "Formal way to say sorry."
  ),

  new GreetingContent(
    "You agree with the teacher's instruction.",
    "Respond correctly",
    "Confirm understanding",
    "understand.mp3",
    "알겠습니다",
    "Means ‘I understand / I got it.’"
  )
]
}