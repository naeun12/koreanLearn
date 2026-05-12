import GreetingContent from "../models/greetingcontentModel";

export default {
    GreetingContent: [
        new GreetingContent(
            "안녕하세요",
            "Hello (polite, most common)",
            "Use when greeting anyone in most situations",
            "hello.mp3",
            "/images/hello.jpg",
        ),

        new GreetingContent(
            "안녕",
            "Hi (casual, for friends)",
            "Use only with close friends or people younger than you",
            "hii.mp3",
            "/images/hii.jpg",
        ),

        new GreetingContent(
            "안녕히 가세요",
            "Goodbye (to someone leaving)",
            "Use when you are staying and the other person is leaving",
            "goodbyesomeoneleaving.mp3",
            "/images/someoneleaving.png",
        ),

        new GreetingContent(
            "안녕히 계세요",
            "Goodbye (to someone staying)",
            "Use when you are leaving and the other person is staying",
            "tosomeonestaying.mp3",
            "/images/youleaving.png",
        ),

        new GreetingContent(
            "감사합니다",
            "Thank you (formal)",
            "Use in formal situations or showing respect",
            "tyformal.mp3",
            "/images/thankyou.png",
        ),

        new GreetingContent(
            "고마워요",
            "Thanks (polite)",
            "Use in normal polite conversations",
            "typolite.mp3",
            "/images/thankspolite.png",
        ),

        new GreetingContent(
            "고마워",
            "Thanks (casual)",
            "Use with close friends or people your age",
            "gomawo.mp3",
            "/images/thankscasual.png",
        ),
    ],
    ClassroomGreetings: [
        new GreetingContent(
            "선생님",
            "Teacher",
            "Use when calling or referring to your teacher",
            "teacher.mp3",
            "https://static.vecteezy.com/system/resources/previews/002/896/807/non_2x/teacher-teaching-students-in-classroom-vector.jpg",
        ),

        new GreetingContent(
            "네",
            "Yes",
            "Use to agree or answer positively",
            "yes.mp3",
            "https://static.vecteezy.com/system/resources/previews/005/074/999/non_2x/yes-symbol-illustration-vector.jpg",
        ),

        new GreetingContent(
            "아니요",
            "No",
            "Use to disagree or answer negatively",
            "no.mp3",
            "https://static.vecteezy.com/system/resources/previews/005/075/017/non_2x/no-symbol-illustration-vector.jpg",
        ),

        new GreetingContent(
            "알겠습니다",
            "I understand",
            "Use when teacher gives instructions",
            "understand.mp3",
            "https://static.vecteezy.com/system/resources/previews/007/934/301/non_2x/student-understanding-lesson-vector.jpg",
        ),

        new GreetingContent(
            "모르겠어요",
            "I don't know",
            "Use when you do not know the answer",
            "idontknow.mp3",
            "https://static.vecteezy.com/system/resources/previews/005/081/442/non_2x/confused-student-vector.jpg",
        ),

        new GreetingContent(
            "다시 말씀해 주세요",
            "Please say it again",
            "Use when you did not hear clearly",
            "repeatplease.mp3",
            "https://static.vecteezy.com/system/resources/previews/002/206/213/non_2x/confused-student-asking-question-vector.jpg",
        ),

        new GreetingContent(
            "화장실 가도 돼요?",
            "May I go to the restroom?",
            "Use when asking permission in class",
            "restroom.mp3",
            "https://static.vecteezy.com/system/resources/previews/005/213/456/non_2x/student-asking-question-vector.jpg",
        ),

        new GreetingContent(
            "질문 있어요",
            "I have a question",
            "Use when you want to ask something",
            "question.mp3",
            "https://static.vecteezy.com/system/resources/previews/002/205/889/non_2x/student-raising-hand-vector.jpg",
        ),

        new GreetingContent(
            "천천히 말씀해 주세요",
            "Please speak slowly",
            "Use when teacher speaks too fast",
            "slowly.mp3",
            "https://static.vecteezy.com/system/resources/previews/005/081/441/non_2x/student-listening-vector.jpg",
        ),
    ],
};
