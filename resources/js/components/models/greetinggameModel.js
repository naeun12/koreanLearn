export default class greetinggameModel {
    constructor(
        korean,
        english,
        description,
        audio,
        image = null,
        explaination = null,
    ) {
        this.korean = korean;
        this.english = english;
        this.description = description;
        this.audio = audio;
        this.image = image;
        this.explaination = explaination;
    }
}