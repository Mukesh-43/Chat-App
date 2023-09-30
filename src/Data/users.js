import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Naruto Uzumaki",
      image:user.image,
      
      contacts: [
        {
          id: 2,
          name: "Sasuke Uchiha",
          image:
            "https://w7.pngwing.com/pngs/914/47/png-transparent-uchiha-sasuke-sasuke-uchiha-itachi-uchiha-naruto-uzumaki-sakura-haruno-temari-uchiha-sasuke-black-hair-manga-sports-equipment-thumbnail.png",
          chatlog: [
            {
              text: "Hi Bro,How are you!",
              timestamp: "09:21 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am good Sasuke. How are you!",
              timestamp: "09:42 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Naruto.",
              timestamp: "09:45 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "shall we meet?",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Done!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Kakashi Hatake",
          image:"https://w7.pngwing.com/pngs/904/115/png-transparent-kakashi-hatake-art-kakashi-hatake-sasuke-uchiha-naruto-kakashi-s-cartoons-canvas-cartoon-thumbnail.png",
          chatlog: [
            {
              text: "Hi !",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Kakashi sensei , How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where r u ??",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Sakura",
          image:"https://w7.pngwing.com/pngs/600/703/png-transparent-sakura-haruno-anime-naruto-sakura-television-black-hair-manga-thumbnail.png",
          chatlog: [
            {
              text: "Hi, Naruto!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi Sakura. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Naruto.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Jiraya",
          image:"https://w7.pngwing.com/pngs/371/518/png-transparent-jiraiya-neji-hyuga-pain-minato-namikaze-konan-jiraya-hand-fictional-character-pain-thumbnail.png",
          chatlog: [],
        },
        {
          id: 6,
          name: "Itachi Uchiha",
          image:"https://w7.pngwing.com/pngs/961/234/png-transparent-itachi-uchiha-sasuke-uchiha-naruto-uzumaki-sakura-haruno-madara-uchiha-naruto-thumbnail.png",
          chatlog: [
            {
              text: "Hey Naruto, where is ur Big bro?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know anything about that, bro",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure,  Naruto ?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right Itachi...",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Madara",
          image:"https://w7.pngwing.com/pngs/797/947/png-transparent-madara-uchiha-madara-uchiha-sasuke-uchiha-obito-uchiha-pain-hashirama-senju-naruto-black-hair-chibi-boy-thumbnail.png",
          chatlog: [
            {
              text: "Where are you bro ? ",
              timestamp: "10:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "10:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "10:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "10:09 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Hmmmmm!",
              timestamp: "10:09 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Shikamaru",
          image:"https://w7.pngwing.com/pngs/959/313/png-transparent-shikamaru-nara-naruto-uzumaki-sasuke-uchiha-naruto-shippuden-the-movie-sakura-haruno-naruto-microphone-boy-sasuke-uchiha-thumbnail.png",
          chatlog: [],
        },
        {
          id: 9,
          name: "Gara",
          image:"https://w7.pngwing.com/pngs/420/933/png-transparent-gaara-naruto-uzumaki-itachi-uchiha-drawing-naruto-face-cg-artwork-black-hair-thumbnail.png",
          chatlog: [],
        },
      ],
    },
  };