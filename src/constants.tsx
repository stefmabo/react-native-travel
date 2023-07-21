import { Dimensions } from 'react-native';
import { HomeTabsType, Images, PlaceImages } from './types';

export const PRIMARY_COLOR = 'rgb(248 113 113)';
export const APP_BACKGROUND_COLOR = '#F2F3F4';
export const FILLED_HEART_COLOR = '#E3796E';
export const LOADING_IMAGE_COLOR = '#E1E4E8';

export const CATEGORY_IMAGES: Images = {
  forest: {
    image: require('#assets/forest.jpg'),
    label: 'Forest',
  },
  ocean: {
    image: require('#assets/ocean.png'),
    label: 'Ocean',
  },
  mountain: {
    image: require('#assets/mountain.jpg'),
    label: 'Mountain',
  },
  camp: {
    image: require('#assets/camp.jpg'),
    label: 'Camp',
  },
  luxury: {
    image: require('#assets/luxury.png'),
    label: 'Luxury',
  },
  futuristic: {
    image: require('#assets/futuristic.png'),
    label: 'Futuristic',
  },
};

export const CATEGORY_IMAGES_ARRAY = Object.values(CATEGORY_IMAGES);

export const PLACE_IMAGES: PlaceImages = {
  island_shrine_of_itsukushima: {
    label: 'The Island Shrine of Itsukushima',
    image: require('#assets/island_shrine_of_itsukushima.jpg'),
    isFavorite: false,
    description: `Looking for a divine vacation? Look no further! Itsukushima Island Shrine is your one-stop-shop for spirituality and natural beauty. Marvel at the wonder of a 'floating' shrine – yes, it looks like it's walking on water at high tide! But don't be fooled, it's not performing miracles, just providing the perfect backdrop for your new profile picture.
This UNESCO World Heritage site, gleaming with vermilion lacquer, has been winning hearts and camera rolls for centuries. Here's the fun part: it's not just humans that enjoy this idyllic island. It's also home to adorable, wild deer who are more than happy to share their habitat with us, and occasionally, sneak into our selfies!`,
  },
  osaka_castle: {
    label: 'Osaka Castle',
    image: require('#assets/osaka_castle.jpg'),
    isFavorite: true,
    description: `Step into a time machine and buckle up for a journey to the past, courtesy of the Osaka Castle! Nestled amidst the ultramodern skyline of Osaka city, this grand architectural marvel stands as a testament to Japan's rich history and tradition, radiating a captivating blend of old and new. 

Drenched in a golden hue with ornamented carvings, the castle is an Instagrammer's dream come true. Standing guard are the golden 'shachihoko' carp statues – if they could talk, imagine the stories they'd tell! A climb to the top rewards you with breathtaking panoramic views of the cityscape that juxtaposes glassy skyscrapers with serene cherry blossom trees.`,
  },
};

export const HOME_TABS: HomeTabsType[] = [
  'All',
  'Popular',
  'Recommended',
  'More',
];

export const MENU_ICONS = ['home', 'location', 'heart', 'person'];

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
