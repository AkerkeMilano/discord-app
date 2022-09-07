import british_flag from "./img/Flag_of_Great_Britain.png";
import anime_img from "./img/akihabara_lights_tokyo.jpg";
import music_img from "./img/pop-music.jpg";

export const mock = [
        {
            id: 1,
            name: "English",
            img: british_flag,
            categories: [
                {
                    id: 11,
                    title: "General",
                    channels: ["welcome", "introduce-yourself", "media", "discussions"]
                },
                {
                    id: 12,
                    title: "English Learning",
                    channels: ["about-english", "grammar", "proof-reading", "resources"]
                }, 
                {
                    id: 13,
                    title: "English practice",
                    channels: ["beginner-practice", "intermediate-practice", "advanced-practice"]
                }
            ]
        },
        {
            id: 2,
            name: "Anime",
            img: anime_img
        },
        {
            id: 3,
            name: "Music",
            img: music_img
        }
    ];


