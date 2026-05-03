export default class HangulStructureModel {
    constructor(consonant, roman, combinations,type) {
        this.consonant = consonant;
        this.roman = roman;
        this.combinations = combinations;
        this.type = type; // 👈 "basic" | "double" | "aspirated"
    }
}