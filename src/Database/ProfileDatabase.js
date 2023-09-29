let Profiles = [
    {
        id: "Kuni",
        firstName: "Kuni",
        lastName: "Mitsu",
        picture: "https://cdn.discordapp.com/attachments/926512780775931945/1155150095579357274/image3.png",
        age: 21,
        description: "I am a lover of cats, neon lights and Luna",
        color: "#120458", 
        posts: [
            {
                id: "Kuni",
                color: "blue",
                content: "LUNA SUCKS",
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                likes: ["Kuni", "Luna"],
                comments: [
                    {
                        id: "Luna",
                        color: "Pink",
                        content: "NO U SUCK",
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(),
                        likes: ["Kuni", "Luna", "Charlie"],
                        comments: []
                    }
                ]
            }
        ],
        gallery: [
            {
                id: "Kuni-image1",
                caption: "feeling cute",
                picture: "https://cdn.discordapp.com/attachments/926512780775931945/1157247285063852062/image3.png?ex=6517ea05&is=65169885&hm=73b1bf556cb98eb8d25f08633e3c6e5c5c8f2041a62e3a06109ec44b7ff8ab98&",
                date:  new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                likes: [],
                comments: []
            },
            {
                id: "Kuni-image2",
                caption: "feeling cute x2",
                picture: "https://cdn.discordapp.com/attachments/926512780775931945/1157247285428760596/image2.png?ex=6517ea05&is=65169885&hm=fbd8271cd958549b74a2aa4feedac96b5665259659a3075a74bcff331743f75f&",
                date:  new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                likes: [],
                comments: []
            },
            {
                id: "Kuni-image3",
                caption: "feeling cute x3",
                picture: "https://cdn.discordapp.com/attachments/926512780775931945/1157247344144822332/image.png?ex=6517ea13&is=65169893&hm=5a8a22f392b273152f3cc959a06a67c43b52bde4e46aeab54943d6c4520f48e1&",
                date:  new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                likes: [],
                comments: []
            }
        ]
    },
    {
        id: "Luna",
        firstName: "Luna",
        lastName: "Bellemore",
        picture: "https://cdn.discordapp.com/attachments/926512780775931945/1156284661941674164/img2img-0645-1296927971.png?ex=65146982&is=65131802&hm=d324450cbfb78350950fe4e9db30993e988433b2a4e83291659977139daa9e2d&",
        age: 25,
        description: "I LOVE DOGGIES AND DRESSES",
        color: "pink", 
        posts: [
            {
                id: "Luna",
                color: "pink",
                content: "This is a dummy post - Luna",
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                likes: [],
                comments: [
                    {
                        id: "Luna",
                        color: "Pink",
                        content: "This is a dummy comment",
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString(),
                        likes: [],
                        comments: []
                    }
                ]
            }
        ],
        gallery: []
    },
    {
        id: "Charlie",
        firstName: "Charlie",
        lastName: "Brown",
        picture: "",
        age: 30,
        description: "Life is like a box of chocolates",
        color: "yellow", 
        posts: [

        ],
        gallery:  []
    }
    /*{
        id: "",
        firstName: "",
        lastName: "",
        picture: "",
        age: 21,
        description: "",
        color: "", 
        posts: [
            {
                id: 1, 
                content: "",
                date: "",
                time: "",
                likes: 5
            }
        ]
    }*/

]

export default Profiles;