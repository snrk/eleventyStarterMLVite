const isProduction = process.env.ELEVENTY_ENV === 'production';

module.exports = {
    type: "website",
    buildTime: new Date(),
    url: isProduction ? 'https://www.e2i-expertises.ch' : 'http://localhost:8080',
    name: "e2i-expertises",
    twitter: "",
    en: {
        metaTitle: "e2i-expertises",
        metaDescription: "Independent property valuations",
        metaImage: "./src/assets/images/TopBuildingCloseUp.jpg",
        metaImageDescription: "Close-up of a modern building",

    },
    fr: {
        metaTitle: "e2i-expertises",
        metaDescription: "Expertises immobilières indépendantes",
        metaImage: "./src/assets/images/TopBuildingCloseUp.jpg",
        metaImageDescription: "Close-up of a modern building",
    },
    languages: [
        { code: "en", label: "EN" },
        { code: "fr", label: "FR" },
    ],
};