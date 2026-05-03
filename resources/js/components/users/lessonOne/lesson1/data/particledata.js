import ParticleCategoryModel from '../models/particleCategoryModel.js'
import ParticleContentModel from '../models/ParticleContentModel.js'
export default {
  categories: [

    new ParticleCategoryModel(
      "Sentence Core",
      "text-primary",
      [
        new ParticleContentModel(
          "은 / 는",
          "Topic",
          "Introduces the main subject or sets a contrast.",
          "저는 학생입니다. (I am a student.)"
        ),
        new ParticleContentModel(
          "이 / 가",
          "Subject",
          "Identifies the subject or doer of the action.",
          "고양이가 귀여워요. (The cat is cute.)"
        ),
        new ParticleContentModel(
          "을 / 를",
          "Object",
          "Marks the object receiving the action.",
          "사과를 먹어요. (I eat an apple.)"
        )
      ]
    ),

    new ParticleCategoryModel(
      "Time & Space",
      "text-info",
      [
        new ParticleContentModel(
          "에",
          "Static Location",
          "Points to a destination or time.",
          "학교에 가요. (I go to school.)"
        ),
        new ParticleContentModel(
          "에서",
          "Action Location",
          "Where an action happens.",
          "집에서 공부해요. (I study at home.)"
        )
      ]
    ),

    new ParticleCategoryModel(
      "Method & Direction",
      "text-dark",
      [
        new ParticleContentModel(
          "(으)로",
          "Direction/Tool",
          "Method or direction used.",
          "버스로 가요. (I go by bus.)"
        ),
        new ParticleContentModel(
          "까지 / 부터",
          "Time Range",
          "Start and end point.",
          "9시부터 5시까지 일해요. (I work 9 to 5.)"
        )
      ]
    ),

    new ParticleCategoryModel(
      "Connection",
      "text-primary",
      [
        new ParticleContentModel(
          "하고 / 와 / 과",
          "And / With",
          "Connects nouns together.",
          "친구하고 영화 봐요. (I watch a movie with a friend.)"
        ),
        new ParticleContentModel(
          "도",
          "Also / Too",
          "Adds meaning of 'also'.",
          "저도 학생입니다. (I am also a student.)"
        )
      ]
    ),

    new ParticleCategoryModel(
      "Possession",
      "text-info",
      [
        new ParticleContentModel(
          "의",
          "Possessive",
          "Shows ownership.",
          "친구의 책이에요. (It is my friend’s book.)"
        ),
        new ParticleContentModel(
          "에게 / 한테",
          "Recipient",
          "Person receiving action.",
          "친구에게 선물을 줘요. (I give a gift to a friend.)"
        )
      ]
    )

  ]
};