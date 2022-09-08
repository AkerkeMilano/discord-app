import british_flag from "./img/Flag_of_Great_Britain.png";
import anime_img from "./img/akihabara_lights_tokyo.jpg";
import music_img from "./img/pop-music.jpg";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const users = [
    {
        id: 1,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(2),
        avatar: "https://art.pixilart.com/44df38dcf8ec8ac.png"
    },
    {
        id: 2,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(2),
        avatar: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123065442/original/76aa155c9e8edd9d401c3aea4bea877aa34ecb0d/draw-avatar-for-your-discord-or-twitter-etc-profile-pic.png"
    },
    {
        id: 3,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(3),
        avatar: "https://uploads.laborx.com/avatars/thumb_resized_360x360_BN4OCVI9T88gX-GRDTAlRWa3fBH3jHvM.png"
    },
    {
        id: 4,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(3),
        avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7959eaa6-5390-47f6-8d5f-86afc4577958/dcfie4l-6318f442-944d-45d8-9302-8b18ea40670e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5NTllYWE2LTUzOTAtNDdmNi04ZDVmLTg2YWZjNDU3Nzk1OFwvZGNmaWU0bC02MzE4ZjQ0Mi05NDRkLTQ1ZDgtOTMwMi04YjE4ZWE0MDY3MGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iXdbi55XWDlA_CdIRMWrEz-m7oTqJFvok1HxFpasmT0"
    },
    {
        id: 5,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(2),
        avatar: "https://i.etsystatic.com/26938806/r/il/799a36/3957047450/il_570xN.3957047450_n78i.jpg"
    },
    {
        id: 6,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(3),
        avatar: "https://i.pinimg.com/originals/42/2b/55/422b5542450bb18908f3ec6cc6004622.png"
    },
    {
        id: 7,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(2),
        avatar: "https://mpng.subpng.com/20180817/hho/kisspng-giant-panda-clip-art-discord-emoji-red-panda-amp-quot-pandafite-amp-quot-discord-emoji-in-the-5b77886bc8bec7.5775859315345603638223.jpg"
    },
    {
        id: 8,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(3),
        avatar: "https://emoji.discord.st/emojis/159c10d8-35a7-4d98-bfd3-9b55e5fff7f8.jpg"
    },
    {
        id: 9,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(2),
        avatar: "https://rias.gg/static/media/rias_avatar.a7594eaf.jpg"
    },
    {
        id: 10,
        name: lorem.generateWords(2).replace( /\s/g, ''),
        status: lorem.generateWords(3),
        avatar: "https://avatarfiles.alphacoders.com/229/229325.png"
    }
];

const convertTime2Date = (time) => {
    const currDate = new Date(time);
    const result = currDate
      .toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .split(',');
    return { date: result[0], time: result[1] };
  };


const generateMessageWithAuthor = (messages_num) => {
    let messageList = [];
    let n = 0;
    while(n < messages_num){
        const message = lorem.generateSentences(1);
        messageList.push({user: users[Math.floor(Math.random() * 10)], message: message, datetime: convertTime2Date(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))});
        n++;
    }
    return messageList;
}
export const mock = [
  {
    id: 1,
    name: "English",
    img: british_flag,
    categories: [
      {
        id: 11,
        title: "General",
        channels: [
          {
            id: 111,
            title: "welcome",
            messages: generateMessageWithAuthor(10)
          },
          {
            id: 112,
            title: "introduce-yourself",
            messages: generateMessageWithAuthor(10)
          },
          {
            id: 113,
            title: "media",
            messages: generateMessageWithAuthor(10)
          },
          {
            id: 114,
            title: "discussions",
            messages: generateMessageWithAuthor(10)
          }
        ],
      },
      {
        id: 12,
        title: "English Learning",
        channels: [
            {
              id: 121,
              title: "about-english",
              messages: generateMessageWithAuthor(8)
            },
            {
              id: 122,
              title: "grammar",
              messages: generateMessageWithAuthor(5)
            },
            {
              id: 123,
              title: "proof-reading",
              messages: generateMessageWithAuthor(5)
            },
            {
              id: 124,
              title: "resources",
              messages: generateMessageWithAuthor(5)
            }
          ],
      },
      {
        id: 13,
        title: "English practice",
        channels: [
            {
              id: 131,
              title: "beginner-practice",
              messages: generateMessageWithAuthor(5)
            },
            {
              id: 132,
              title: "intermediate-practice",
              messages: generateMessageWithAuthor(5)
            },
            {
              id: 133,
              title: "advanced-practice",
              messages: generateMessageWithAuthor(5)
            },
          ],
      },
    ],
  },
  {
    id: 2,
    name: "Anime",
    img: anime_img,
  },
  {
    id: 3,
    name: "Music",
    img: music_img,
  },
];
