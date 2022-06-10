const getTheTitles = function(books) {
    titles = books.filter(book => book.title).map(book => book.title)
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
