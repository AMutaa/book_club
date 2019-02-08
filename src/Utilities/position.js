

// mixins

export const absolute = ({ y = 'top', x = 'left' }) => `
position:absolute;
${y}:0;
${x}:0;
`;

export const display = `
display: flex;
justify-content: center;

`