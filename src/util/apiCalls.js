export const getTodaysPhoto = async () => {
  const url = process.env.VUE_APP_TODAYS_PHOTO_URL;
  console.log(url)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('There was an error in data analysis.');
    }
    let data = await response.json()
    return data
  } catch (error) {
    console.error('WRONG!!')
    throw new Error(error);
  }
}

export const getMonthPhotos = async () => {
  const url = process.env.VUE_APP_MONTH_PHOTOS_URL;
  console.log(url)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('There was an error in data analysis.');
    }
    let data = await response.json()
    return data
  } catch (error) {
    console.error('WRONG!!')
    throw new Error(error);
  }
}