export const getPages = (totalUsersCount: number, pageSize: number, currentPage: number )=>{
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    let leftPortionPageNumber = Math.max(1, currentPage - 4);
    let rightPortionPageNumber = Math.min(pagesCount, currentPage + 5);

    if (currentPage > 5) {
        pages.push(1);
        if (currentPage > 6) {
            pages.push('...');
        }
    }

    for (let i = leftPortionPageNumber; i <= rightPortionPageNumber; i++) {
        pages.push(i);
    }

    if (currentPage < pagesCount - 5) {
        if (currentPage < pagesCount - 6) {
            pages.push('...');
        }
        pages.push(pagesCount);
    }
    return pages
}
