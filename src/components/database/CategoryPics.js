const CategoryPics = [
    {
        id : 1,
        type : "site",
        img : "https://edsential.com/wp-content/uploads/2018/02/580b57fcd9996e24bc43c537.png",
        name : "SoundCloud"
    },
    {
        id : 2,
        type : "site",
        img : "https://spotlightstudio.org/wp-content/uploads/2019/12/image-gallery-spotify-logo-21.png",
        name : "Spotify"
    },
    {
        id : 3,
        type : "site",
        img : "https://res.cloudinary.com/talenthouse/image/upload/v1/invites/nlolqeyqdhixhwu7m5xo",
        name : "Gaana"
    },
    {
        id : 4,
        type : "artist",
        img : "data:image/jpeg;base64,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",
        name : "Justin Bieber"
    },
    {
        id : 5,
        type : "artist",
        img : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/592cb4d1-add2-4ddf-87d8-a1d20d33add0/d7xcc6n-db714487-4b09-4bbb-b6ac-44ed5916918b.jpg/v1/fill/w_400,h_556,q_75,strp/martin_garrix_by_arturo610_d7xcc6n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU2IiwicGF0aCI6IlwvZlwvNTkyY2I0ZDEtYWRkMi00ZGRmLTg3ZDgtYTFkMjBkMzNhZGQwXC9kN3hjYzZuLWRiNzE0NDg3LTRiMDktNGJiYi1iNmFjLTQ0ZWQ1OTE2OTE4Yi5qcGciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zA_4fDfsxFELrhvYvUMK2AXIGJahJbUbAmo__LlXQ7Q",
        name : "Martin Garrix"
    },
    {
        id : 6,
        type : "artist",
        img : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd4b8d14-8fa7-4cf8-b24c-0f78030193a8/davdks6-cf75d7e6-1a8c-4839-998a-89fb17edec7e.png/v1/fill/w_1024,h_1821,q_80,strp/mobile_wallpaper___eminem_by_enihal_davdks6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyMSIsInBhdGgiOiJcL2ZcL2RkNGI4ZDE0LThmYTctNGNmOC1iMjRjLTBmNzgwMzAxOTNhOFwvZGF2ZGtzNi1jZjc1ZDdlNi0xYThjLTQ4MzktOTk4YS04OWZiMTdlZGVjN2UucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.QpMOb78-ExrKeGU8_oC4rfVfUxwagQTyt1ZoHKtblTU",
        name : "Eminem"
    },
    {
        id : 7,
        type : "artist",
        img : "https://wallpaperaccess.com/full/469115.jpg",
        name : "Rihanna"
    }
    ,
    {
        id : 8,
        type : "artist",
        img : "https://api.time.com/wp-content/uploads/2020/09/time-100-Selena-Gomez.jpg",
        name : "Selena Gomez"
    }
]

export default CategoryPics;