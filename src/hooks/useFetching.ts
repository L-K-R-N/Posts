import { useState } from "react"
export const useFetching = (callback: (limit: number, page: number) => void) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')

    async function fetching(limit: number, page: number) {
        try {
            setIsLoading(true)
            await callback(limit, page)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    
    return [isLoading, fetching, error]
}