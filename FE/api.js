const api = "http://url/api/favourite"

export const getFavourites = async () => {
    const res = await fetch(api)
    return await res.json()
}