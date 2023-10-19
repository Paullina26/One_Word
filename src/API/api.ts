export const API_BASE_URL = 'https://one-word-server.vercel.app/api/';

export const headers = {
  Accept: 'application.json',
  'Content-Type': 'application/json',
};

export const API = {
  login: `${API_BASE_URL}auth/login`,
  isLoginUser: `${API_BASE_URL}auth/user`,
  getUserSettings: `${API_BASE_URL}/user-settingsr`,
  putUserSettings: `${API_BASE_URL}/user-settings`,
  getAllWords: `${API_BASE_URL}/all`,
  postOneWords: `${API_BASE_URL}/add-one`,

  // postAdvertisement: `${API_BASE_URL}advertisement/add`,
  // getAdvertisement: `${API_BASE_URL}advertisement/all`,
  // getAdvertisementUser: `${API_BASE_URL}advertisement/all-user`,
  // postFavoriteAdvertisement: `${API_BASE_URL}favorites/update`,
  // getFavoriteAdvertisementUser: `${API_BASE_URL}favorites/user-favorites`,
};

//  ogłoszenia danego usera przekazać token do zapytania /all-user
// PUT favorite/favorite - dodanie/usunięcie
// GET favorite/user-favorites - pobranie wszystkich ulubionych usera

// const SettingsSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   },
//   breakDay: { type: String, default: '7' },
//   isBreak: { type: Boolean, default: true },
//   isSummary: { type: Boolean, default: true },
//   notifications: {
//     type: [NotificationSchema],
//     default: [
//       { time: '12:42', type: '1' },
//       { time: '14:42', type: '2' },
//       { time: '12:42', type: '3' },
//     ],
//   },
//   selectLanguage: { type: String, default: 'en' },
//   summaryDay: { type: String, default: '1' },
// })

// basicWord: { type: String, required: [true, 'to pole jest wymagane'] },
//   transWord: { type: String, required: [true, 'to pole jest wymagane'] },

// addLang: { type: String, default: 'en' },
// to ostatnie nie jest wymagane. jeśli nie podasz języka będie en
// put('/update-one/:id'

// to jak później zrobisz form do updatowania

// router.get('/today-word'

// To jest do pobrania dzisiejszego słowa, ale to nie wiem czy będziesz używać u siebie
