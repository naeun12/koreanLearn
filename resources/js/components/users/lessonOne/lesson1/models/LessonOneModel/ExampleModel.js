export default class ExampleModel {
    constructor(
        number,
        title,
        example,
        description = "",
        written = "",
        pronounced = "",
    ) {
        this.number = number;
        this.title = title;
        this.example = example;
        this.description = description;
        this.written = written;
        this.pronounced = pronounced;
    }
}
