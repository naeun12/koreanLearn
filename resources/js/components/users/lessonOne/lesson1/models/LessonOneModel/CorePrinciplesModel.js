export default class CorePrinciplesModel {
    constructor(
        number,
        title,
        description,

        example = "",
    ) {
        this.number = number;
        this.title = title;
        this.description = description;

        this.example = example;
    }
}
