import demonslayer from '../../images/anime/demonslayer.png';
import naruto from '../../images/anime/naruto.png';
import jujustu from '../../images/anime/jujustu.jpg';

const animeExploreData = [
  {
    title: 'Shangri-La Frontier: Kusoge Hunter, Kamige ni Idoman to su',
    category: 'Movie',
    releaseDate: '7 Oct 2023',
    description:
      "A man with a passion for vending machines awakens to realize that he has not only died but has also been reborn as one of his beloved machines! Although he is a modern appliance in a fantasy world, he requires money to keep functioning. He is stuck in one location until a young girl named Lammis stumbles upon him. Amazed by the drinks and food he sells, Lammis uses her 'Blessing of Might' to lift him with ease and take him back to the village of Clearflow Lake.",
    bgImage: `url(${jujustu})`,
    buttons: [
      {
        label: 'Watch now',
        icon: 'play',
        action: 'watchNow',
      },
      {
        label: 'Details',
        icon: 'info',
        action: 'showDetails',
      },
    ],
  },
  // {
  //   title: 'Mystic Adventures: Realm of Enchantment',
  //   category: 'Movie',
  //   releaseDate: '15 Nov 2023',
  //   description:
  //     'Embark on a magical journey in the mystical realm filled with enchanting creatures and ancient wonders. Follow the protagonist, a young sorcerer named Elara, as she unravels the secrets of a forgotten prophecy that holds the fate of the entire realm. Mystic Adventures is a visually stunning fantasy movie that promises to captivate audiences with its spellbinding narrative.',
  //   bgImage: `url(${naruto})`,
  //   buttons: [
  //     {
  //       label: 'Watch now',
  //       icon: 'play',
  //       action: 'watchNow',
  //     },
  //     {
  //       label: 'Details',
  //       icon: 'info',
  //       action: 'showDetails',
  //     },
  //   ],
  // },
  // {
  //   title: 'Galactic Odyssey: Beyond the Stars',
  //   category: 'Movie',
  //   releaseDate: '3 Jan 2024',
  //   description:
  //     'Join Captain Nova and her intergalactic crew as they embark on an epic journey beyond the stars. In this thrilling space adventure, encounter alien civilizations, face cosmic challenges, and unveil the mysteries of the universe. Galactic Odyssey promises a visual spectacle and an exhilarating ride through the vastness of space.',
  //   bgImage: `url(${demonslayer})`,
  //   buttons: [
  //     {
  //       label: 'Watch now',
  //       icon: 'play',
  //       action: 'watchNow',
  //     },
  //     {
  //       label: 'Details',
  //       icon: 'info',
  //       action: 'showDetails',
  //     },
  //   ],
  // },
];

export default animeExploreData;
