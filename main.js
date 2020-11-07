// Вариант 4

const book = new Book('Артур и минипуты', 'Люк Бессон', 2002, 'Это отличная книга')
const journal = new Journal('Nature', 'Nature Publishing Group', 1869)

const pushkinLibrary = new Library('Библиотека имени Пушнкина')
const goodGroup = pushkinLibrary.addGroup('Отдел хорошей литературы')
const bookArthur = goodGroup.addBook('Артур и минипуты', 'Люк Бессон', 2002, 'Это отличная книга')
const bookHarry = goodGroup.addBook('Гарри Поттер и философский камень', 'Джоан Роулинг', 1997, 'Это крутая книга')
const journalNature = goodGroup.addJournal('Nature', 'Nature Publishing Group', 1869)
journalNature.addArticles('Статья о собаках', 'Статья о кошках')

function addDecription() {
  goodGroup.edition.forEach(function (item) {
    let string = ''
    switch (item.type) {
      case 'book':
        string = 'Введите описание для книги'
        break;
      case 'journal':
        string = 'Введите описание для журнала'
    }
    const description = prompt(`${string} "${item.name}"`)
    item.generateDescription(description)
    console.log(item.description)
  })
}