function array2Paginate(collection, page = 1, perPage = 10) {
    console.log('Page: ', page);
    console.log('PerPage: ', perPage);
    console.log('Collection: ', collection);
}

module.exports.array2Paginate = array2Paginate;

/*
module.exports.build = (collection, page = 1, numItems = 10) => {
    if( !Array.isArray(collection) ) {
        throw `Expect array and got ${typeof collection}`;
    }
    const currentPage = parseInt(page);
    const perPage = parseInt(numItems);
    const offset = (page - 1) * perPage;
    const paginatedItems = collection.slice(offset, offset + perPage);

    let next = null;
    let previous = null;
    return {
        currentPage,
        perPage,
        next: next,
        previous: previous,
        total: collection.length,
        totalPages: Math.ceil(collection.length / perPage),
        data: paginatedItems
    };
};*/
