export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '58e363c245mshcb07b50af4f1c54p1af7e8jsn666542e618ec',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const youtubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': '58e363c245mshcb07b50af4f1c54p1af7e8jsn666542e618ec',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}
