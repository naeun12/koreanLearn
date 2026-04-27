import GreetingContent from '../models/greetinggameModel'

export default {
  GreetingGame: [
    new GreetingContent(
      "Someone says '안녕하세요' to you.",
      "Respond correctly",
      "Say the proper greeting back",
      "hello.mp3",
      "안녕하세요",
      "‘안녕하세요’ means ‘Hello’ in Korean. It is a polite and common greeting used when meeting someone. The correct response is also ‘안녕하세요’ to show respect and friendliness."

    ),
new GreetingContent(
  "Your close friend says '안녕' to you.",
  "Respond correctly",
  "Use casual response",
  "hii.mp3",
  "안녕",
  "‘안녕’ means ‘Hi/Hello’ in a casual way. It is used with close friends or people the same age. The correct response is also ‘안녕’."
),

new GreetingContent(
  "You are staying, and someone is leaving.",
  "Respond correctly",
  "Say goodbye properly",
  "goodbyesomeoneleaving.mp3",
  "안녕히 가세요",
  "‘안녕히 가세요’ means ‘Goodbye (go safely)’. You say this when the other person is leaving and you are staying."
),

new GreetingContent(
  "You are leaving, and someone is staying.",
  "Respond correctly",
  "Say goodbye properly",
  "tosomeonestaying.mp3",
  "안녕히 계세요",
  "‘안녕히 계세요’ means ‘Goodbye (stay well)’. You say this when you are the one leaving and the other person stays."
),

new GreetingContent(
  "Someone helps you in a formal situation.",
  "Respond correctly",
  "Show respect",
  "tyformal.mp3",
  "감사합니다",
  "‘감사합니다’ means ‘Thank you’ in a formal and respectful way. It is used with elders, strangers, or in professional situations."
),

new GreetingContent(
  "Someone helps you in a polite conversation.",
  "Respond correctly",
  "Normal polite thanks",
  "typolite.mp3",
  "고마워요",
  "‘고마워요’ means ‘Thank you’ in a polite but less formal way. It is commonly used in everyday conversations."
),

new GreetingContent(
  "Your close friend helps you.",
  "Respond correctly",
  "Casual thanks",
  "gomawo.mp3",
  "고마워",
  "‘고마워’ means ‘Thanks’ in a casual way. It is used with close friends or people you are comfortable with."
)
  ]
}