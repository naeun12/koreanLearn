export default class hangul {
  constructor(char, sound, description, example, image = null, instruction = null) {
    this.char = char
    this.sound = sound
    this.description = description
    this.example = example
    this.image = image
    this.instruction = instruction
  }
}