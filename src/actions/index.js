// Segmanted Button押下時のAction Creator
export const setSelect = select => ({  
  type: 'CHANGE_LOCATION',
  select: select,
});

// APIから天気情報取得時のAction Creator
export const getWeather = weather => ({
  type: 'GET_WEATHER',
  weather: weather,
});