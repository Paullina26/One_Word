//FontWeight: 100, 200, 300, 400, 500, 600, 700, 800, 900
//FontStyle:italic, normal, oblique
//1rem=10px

export const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const font = (sizeRem: number, style: string, weight: number) => `
    font-size: ${sizeRem}rem;
    font-style: ${style};
    font-weight: ${weight};
`;

export const BorderRadiusBubble = `
border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%;
`;

export const BoxShadowButton = `
border: 1px solid rgba(175, 175, 220, 0.2);
box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5) ,
3px 3px 5px rgba(94, 104, 121, 0.7), inset 5px 10px 10px rgba(255, 255, 255, 0.25),
inset -10px -10px 10px rgba(0, 0, 0, 0.25);
&:hover {
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
      3px 3px 5px rgba(94, 104, 121, 0.7), inset 3px 3px 5px rgba(0, 0, 0, 0.35),
      inset -3px -3px 5px rgba(255, 255, 255, 0.15);
  }
`;

export const GradientCirclePink = `
background: radial-gradient(
    circle,
    rgba(140, 60, 105, 1) 0%,
    rgba(145, 65, 110, 1) 25%,
    rgba(150, 70, 115, 1) 50%,
    rgba(155, 75, 120, 1) 75%,
    rgba(160, 80, 125, 1) 100%
  );
`;

export const GradientLinerRainbow = `
background:  linear-gradient(
    90deg,
    rgba(171,255,147,1) 0%,
    rgba(137,238,190,1) 25%,
    rgba(87,212,255,1) 50%,
    rgba(173,171,255,1) 75%,
    rgba(241,138,255,1) 100%
  );
`;

export const GradientCirclePurpleDark = `
background: radial-gradient(
    circle,
    rgba(46, 39, 86, 1) 0%,
    rgba(48, 41, 86, 0.95) 25%,
    rgba(50, 43, 86, 0.92) 50%,
    rgba(52, 45, 86, 0.90) 75%,
    rgba(50, 47, 86, 0.88) 100%
  );
`;

export const GradientLinerPurpleDark = `
background:  linear-gradient(
    90deg,
    rgba(46, 40, 85, 1) 0%,
    rgba(46, 40, 85, 0.95) 25%,
    rgba(46, 40, 85, 0.90) 50%,
    rgba(46, 40, 85, 0.85) 75%,
    rgba(46, 40, 85, 0.80) 100%
  );
`;

export const GradientGlassEffectLight = `
background: linear-gradient(
    160deg,
    rgba(190, 190, 210, 0.7) 0%,
    rgba(200, 200, 220, 0.7) 25%,
    rgba(220, 220, 240, 0.7) 50%,
    rgba(200, 200, 220, 0.7) 75%,
    rgba(190, 190, 210, 0.7) 100%
  );
`;

export const GradientGlassEffectDark = `
background: linear-gradient(
    160deg,
    rgba(80, 70, 130, 0.85) 0%,
    rgba(60, 50, 100, 0.85) 25%,
    rgba(40, 30, 80, 0.85) 50%,
    rgba(60, 50, 100, 0.85) 75%,
    rgba(80, 70, 130, 0.85) 100%
  );
`;

// rgba(40, 30, 70, 0.7) 0%,
// rgba(70, 50, 110, 0.7) 25%,
// rgba(80, 70, 130, 0.7) 50%,
// rgba(70, 50, 110, 0.7) 75%,
// rgba(40, 30, 70, 0.7) 100%
