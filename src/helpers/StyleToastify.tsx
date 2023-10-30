//INFO: https://fkhadra.github.io/react-toastify/introduction/
export const toastColored = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const toastLight = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const toastDark = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

//POSITION: top-left, top-right, bottom-left, bottom-right, bottom-center, top-center
//TYPE: info, success, warning, error, default
//Theme: light, dark, colored
//TYPE PROMISE: async function
// const loginUserToBase = async (mail: string, password: string) => {
//   const response = await toast.promise(
//     fetch(API.login, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify({ username: mail, password }),
//     }),
//     {
//       pending: 'Waiting',
//       success: 'Login is success. 👌',
//       error: 'An error occurred while login. 🤯',
//     }
//   );
// };
