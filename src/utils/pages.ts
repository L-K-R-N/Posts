export const getTotalPages = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
}
