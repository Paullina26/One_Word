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
//FontWeight: 100, 200, 300, 400, 500, 600, 700, 800, 900
//FontStyle:italic, normal, oblique
//1rem=10px
