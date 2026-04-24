import GreetingContent from '../models/greetinggameModel'

export default {
  GreetingGame: [
    new GreetingContent(
      "Someone says '안녕하세요' to you.",
      "Respond correctly",
      "Say the proper greeting back",
      "hello.mp3",
      "안녕하세요"
    ),

    new GreetingContent(
      "Your close friend says '안녕' to you.",
      "Respond correctly",
      "Use casual response",
      "hii.mp3",
      "안녕"
    ),

    new GreetingContent(
      "You are staying, and someone is leaving.",
      "Respond correctly",
      "Say goodbye properly",
      "goodbyesomeoneleaving.mp3",
      "안녕히 가세요"
    ),

    new GreetingContent(
      "You are leaving, and someone is staying.",
      "Respond correctly",
      "Say goodbye properly",
      "tosomeonestaying.mp3",
      "안녕히 계세요"
    ),

    new GreetingContent(
      "Someone helps you in a formal situation.",
      "Respond correctly",
      "Show respect",
      "tyformal.mp3",
      "감사합니다"
    ),

    new GreetingContent(
      "Someone helps you in a polite conversation.",
      "Respond correctly",
      "Normal polite thanks",
      "typolite.mp3",
      "고마워요"
    ),

    new GreetingContent(
      "Your close friend helps you.",
      "Respond correctly",
      "Casual thanks",
      "gomawo.mp3",
      "고마워"
    )
  ]
}