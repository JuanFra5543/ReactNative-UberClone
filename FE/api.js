const api = "http://192.168.3.6:5500/api/favourite"

export const getFavourites = async () => {
    const res = await fetch(api)
    return await res.json()
}