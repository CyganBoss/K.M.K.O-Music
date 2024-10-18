require('dotenv').config();


module.exports = {
    token: 'MTI5Njk1NDgwOTc2MDYxNjQ2OA.GV_9cL.vadu8bz9w_9Ny8nTG970U4O8lE_wW3RPvXNLNI',
    clientId: '1273230302822797312',
    guildId: '1106591466651922502',
    youtubeApiKey: process.env.AIzaSyA6hSUWChyjZk7zcmZZZ6RgGd8-Pq8TSLw,
    mongoUri: process.env.mongodb+srv://klaudiazbuczyn4:<uxWQnz0EGgNB3OzX>@cluster0.i0obh.mongodb.net/,
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
