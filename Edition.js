class Edition {
  constructor(name, author, year, group) {
    this.name = name
    this.author = author
    this.year = year
    this.group = group
  }

  get nameInfo() {
    return this.name
  }

  get authorInfo() {
    return this.author
  }

  get yearInfo() {
    return this.year
  }

  set nameInfo(newName) {
    this.name = newName
  }

  set authorInfo(newAuthor) {
    this.author = newAuthor
  }

  set yearInfo(newYear) {
    this.year = newYear
  }

  generateDescription(description) {
    this.description = description
  }

}