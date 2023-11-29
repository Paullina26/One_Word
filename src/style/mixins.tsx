//FontWeight: 100, 200, 300, 400, 500, 600, 700, 800, 900
//FontStyle:italic, normal, oblique
//1rem=10px

export const flex_center = `
    display: flex;
    align-items: center;
    justify-content: center;
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
border: 1px solid rgba(175, 175, 220, 0.2);
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
border: 1px inset rgba(175, 175, 220, 0.2);
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
border: 1px inset rgba(255, 255, 255, 0.1);
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
border: 1px inset rgba(255, 255, 255, 0.1);
box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5) ,
3px 3px 5px rgba(94, 104, 121, 0.5), inset 1px 1px 1px rgba(255, 255, 255, 0.25),
inset -1px -1px 1px rgba(0, 0, 0, 0.25);

`;

export const boxShadow_darkTheme_input = `
border: 1px inset rgba(175, 175, 220, 0.2);
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
background: radial-gradient(
    circle,
    rgba(140, 60, 105, 1) 0%,
    rgba(145, 65, 110, 1) 25%,
    rgba(150, 70, 115, 1) 50%,
    rgba(155, 75, 120, 1) 75%,
    rgba(160, 80, 125, 1) 100%
  );
`;

export const color_gradient_animation = `
background:  linear-gradient(
    90deg,
    rgba(171,255,147,1) 0%,
    rgba(137,238,190,1) 25%,
    rgba(87,212,255,1) 50%,
    rgba(173,171,255,1) 75%,
    rgba(241,138,255,1) 100%
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
background:  linear-gradient(
    90deg,
    rgba(46, 40, 85, 1) 0%,
    rgba(46, 40, 85, 0.95) 25%,
    rgba(46, 40, 85, 0.90) 50%,
    rgba(46, 40, 85, 0.85) 75%,
    rgba(46, 40, 85, 0.80) 100%
  );
`;

export const color_gradient_glassEffect_light = `
background: linear-gradient(
    160deg,
    rgba(190, 190, 210, 0.7) 0%,
    rgba(200, 200, 220, 0.7) 25%,
    rgba(220, 220, 240, 0.7) 50%,
    rgba(200, 200, 220, 0.7) 75%,
    rgba(190, 190, 210, 0.7) 100%
  );
`;

export const color_gradient_glassEffect_dark = `
background: linear-gradient(
    160deg,
    rgba(80, 70, 130, 0.85) 0%,
    rgba(60, 50, 100, 0.85) 25%,
    rgba(40, 30, 80, 0.85) 50%,
    rgba(60, 50, 100, 0.85) 75%,
    rgba(80, 70, 130, 0.85) 100%
  );
`;
