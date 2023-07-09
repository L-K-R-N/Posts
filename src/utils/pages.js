export const getTotalPages = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}
