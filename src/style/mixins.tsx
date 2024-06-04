//FontWeight: 100, 200, 300, 400, 500, 600, 700, 800, 900
//FontStyle:italic, normal, oblique
//1rem=10px

export const flex_center = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const glass_effect = `
background: rgba(0, 0, 0, 0.5);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(0, 0, 0, 0.5)
`;

export const font_settings = (sizeRem: number, style: string, weight: number) => `
  font-size: ${sizeRem}rem;
  font-style: ${style};
  font-weight: ${weight};
`;

export const border_radius_effect_bubble = `
  border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%;
`;

export const outline_focus = `
  &:focus {
    outline: 3px solid rgb(0, 145, 255);
  }
`;

export const boxShadow_button = `
  border: none;
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5) ,
  3px 3px 5px rgba(94, 104, 121, 0.7), inset 2px 2px 2px rgba(255, 255, 255, 0.25),
  inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  &:hover {
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
    3px 3px 5px rgba(94, 104, 121, 0.7), inset 3px 3px 5px rgba(0, 0, 0, 0.35),
    inset -3px -3px 5px rgba(255, 255, 255, 0.15);
  }
`;

export const boxShadow_lightTheme_button = `
  border: none;
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5) ,
  3px 3px 5px rgba(94, 104, 121, 0.5), inset 2px 2px 2px rgba(255, 255, 255, 0.25),
  inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  &:hover {
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
    3px 3px 5px rgba(94, 104, 121, 0.5), inset 3px 3px 5px rgba(0, 0, 0, 0.35),
    inset -3px -3px 5px rgba(255, 255, 255, 0.15);
  }
`;

export const boxShadow_darkTheme_button = `
  border: none;
  box-shadow: -3px -3px 5px rgba(134, 134, 171, 0.3) ,
  3px 3px 5px rgba(25, 20, 65, 0.5), inset 2px 2px 2px rgba(255, 255, 255, 0.25),
  inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  &:hover {
    box-shadow: -3px -3px 5px rgba(134, 134, 171, 0.3),
    3px 3px 5px rgba(25, 20, 65, 0.5), inset 3px 3px 5px rgba(0, 0, 0, 0.35),
    inset -3px -3px 5px rgba(255, 255, 255, 0.15);
  }
`;

export const boxShadow_lightTheme_input = `
  border: none;
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5) ,
  3px 3px 5px rgba(94, 104, 121, 0.5), inset 1px 1px 1px rgba(255, 255, 255, 0.25),
  inset -1px -1px 1px rgba(0, 0, 0, 0.25);
`;

export const boxShadow_darkTheme_input = `
  border: none;
  box-shadow: -3px -3px 5px rgba(134, 134, 171, 0.3) ,
  3px 3px 5px rgba(25, 20, 65, 0.5), inset 1px 1px 1px rgba(255, 255, 255, 0.25),
  inset -1px -1px 1px rgba(0, 0, 0, 0.25);
`;

export const default_style_button = `
  margin: 10px auto;
  padding: 8px 20px;
  border-radius: 20px;
`;

export const color_gradient_button = `
background: radial-gradient(circle at 50% 50%, rgba(103, 29, 145, 0.95), rgba(30, 26, 69, 0.95));
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
border: 2px inset rgba(0, 0, 0, 0.35)
`;

export const color_gradient_button_menu = `
  background: radial-gradient(circle at 100px 100px, rgba(80, 0, 45, 1), rgba(200, 120, 165, 1));
`;

export const color_gradient_menu_bar = `
  background: radial-gradient(circle at 100px 100px, rgb(255, 255, 255), rgb(233, 233, 233));
`;
export const color_gradient_menu_burger = `
background: radial-gradient(circle at 50% 50%, rgba(103, 29, 145, 0.95), rgba(30, 26, 69, 0.95));
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
border: 2px inset rgba(0, 0, 0, 0.35)
`;

export const color_gradient_animation = `
  background:  linear-gradient(
    90deg,
    rgba(151, 32, 117, 1) 0%,
    rgba(103, 29, 145, 1) 50%,
    rgba(30, 26, 69, 1) 100%
  );
`;

export const color_gradient_backGround_card = `
  background: radial-gradient(
    circle,
    rgba(46, 39, 86, 1) 0%,
    rgba(48, 41, 86, 0.95) 25%,
    rgba(50, 43, 86, 0.92) 50%,
    rgba(52, 45, 86, 0.90) 75%,
    rgba(50, 47, 86, 0.88) 100%
  );
`;

export const color_gradient_backGround_liner_dark = `
  // background: radial-gradient(circle at 50% 50%, rgba(35, 62, 135, 0.95), rgba(30, 26, 69, 0.95));
  background: radial-gradient(circle at 50% 50%, rgba(103, 29, 145, 0.95), rgba(30, 26, 69, 0.95));

`;

export const color_gradient_glassEffect_light = `
background: linear-gradient(217deg, rgba(255, 255, 255, 0.3), rgba(182, 182, 202, 0.3) 20.71%),
            linear-gradient(127deg, rgba(255, 255, 255, 0.3), rgba(253, 253, 255, 0.3) 20.71%),
            linear-gradient(207deg, rgba(255, 255, 255, 0.3), rgba(197, 197, 217, 0.3) 20.71%),
            linear-gradient(336deg, rgba(98, 95, 126, 0.3), rgba(0, 0, 0, 0.1) 20.71%);
border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
box-shadow: -3px -3px 5px rgba(94, 104, 121, 0.2), 3px 3px 5px rgba(94, 104, 121, 0.2);
backdrop-filter: blur(10px);
border: 3px inset rgba(220, 220, 220, 0.2);

// for ios
-webkit-backdrop-filter: blur(3px);
backdrop-filter: blur(3px);
`;

export const color_gradient_glassEffect_light_menu = `
background: linear-gradient(217deg, rgba(255, 255, 255, 0.3), rgba(182, 182, 202, 0.3) 20.71%),
            linear-gradient(127deg, rgba(255, 255, 255, 0.3), rgba(253, 253, 255, 0.3) 20.71%),
            linear-gradient(207deg, rgba(255, 255, 255, 0.3), rgba(197, 197, 217, 0.3) 20.71%),
            linear-gradient(336deg, rgba(98, 95, 126, 0.3), rgba(0, 0, 0, 0.1) 20.71%);
box-shadow: -3px -3px 5px rgba(94, 104, 121, 0.2), 3px 3px 5px rgba(94, 104, 121, 0.2);
backdrop-filter: blur(10px);
border-left: 3px inset rgba(103, 29, 145, 0.2);
`;

export const color_gradient_glassEffect_dark = `
background: linear-gradient(217deg, rgba(40, 30, 80, 0.5), rgba(80, 70, 130, 0.5) 20.71%),
            linear-gradient(127deg, rgba(180, 170, 230, 0.5), rgba(40, 30, 80, 0.5) 20.71%),
            linear-gradient(207deg, rgba(80, 70, 130, 0.5), rgba(80, 70, 130, 0.5) 20.71%),
            linear-gradient(336deg, rgba(40, 30, 80, 0.5), rgba(0, 0, 0, 0.1) 20.71%);
border-radius: 16px;
box-shadow: -3px -3px 5px rgba(94, 104, 121, 0.2), 3px 3px 5px rgba(94, 104, 121, 0.2);
backdrop-filter: blur(10px);
border: 3px inset rgba(220, 220, 220, 0.2);
`;

export const color_gradient_light_menu = `
  background: radial-gradient(circle at 100px 100px, rgb(240, 240, 250), rgba(200, 200, 230, 1));
`;
export const boxShadow_darkTheme_menu_element = `
  border: none;
  box-shadow: -3px -3px 3px rgba(134, 134, 171, 0.3) ,
  3px 3px 5px rgba(25, 20, 65, 0.5), inset -1px 1px 1px rgba(255, 255, 255, 0.25),
  inset -1px -1px 1px rgba(0, 0, 0, 0.25);
`;

// background: linear-gradient(
//   217deg,
//   rgba(151, 32, 117, 0.4),
//   rgba(103, 29, 145, 0.4) 20.71%
// ),
// linear-gradient(
//   127deg,
//   rgba(144, 33, 136, 0.4),
//   rgba(149, 41, 175, 0.4) 20.71%
// ),
// linear-gradient(207deg, rgba(103, 29, 145, 0.4), rgba(0, 32, 92, 0.4) 20.71%),
// linear-gradient(336deg, rgba(50, 0, 70, 0.4), rgba(103, 0, 159, 0.4) 20.71%);
