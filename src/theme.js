const rootSpacing = 1;

const theme = {
    borderRadius: {
        tiny: "10px",
        small: "20px",
        mid: "40px"
    },
    colors: {
        background: '#000E00',
        lightBackground: 'rgba(204, 204, 204, 0.2)',
        backgroundInverted: '#fff',
        headerText: '#FFF348',
        subHeaderText: '#FFF',
        offWhite: '#aaa',
        translucentText: 'rgba(255, 255, 255, 0.5)',
        bodyText: '#000',
        accent1: '#0C51DD',
        accent2: '#FA3415',
    },
    fonts: {
        heading: 'Geologica, sans-serif',
        body: 'Playfair Display, serif',
    },
    fontSize: {
        tiny: "1.2rem",
        small: "1.4rem",
        mid: "1.9rem",
        large: "7.5rem",
    },
    fontWeight: {
        light: "300",
        mid: "500",
        bold: "700",
    },
    heights: {
        header: "94px",
    },
    layers: {
        bottom: 1,
        mid: 150,
        top: 300,
    },
    shadows: {
        button: "8px 8px 0px rgba(255, 255, 255, 0.25)"
    },
    spacing: {
        resetAll: 'padding: 0; margin: 0;',
        small: `${rootSpacing / 2}rem`,
        mid: `${rootSpacing}rem`,
        large: `${rootSpacing * 2}rem`,
        xl: `${rootSpacing * 4}rem`,
        huge: `${rootSpacing * 10}rem`,
    }
};

export default theme;
