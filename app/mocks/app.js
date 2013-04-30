/**********************************\
 |   MOCK DATA AND HTTP RESPONSES   |
 \**********************************/
window.pinotNoir = {
  name       : 'Pinot Noir',
  year       : '2008',
  producer   : 'Kendall Jackson',
  price      : 18,
  description: 'this is a description',
  properties : [
    'savory',
    'spicy',
    'wood/oak'
  ],
  image      : {
    url: 'http://winepony.s3.amazonaws.com/uploads/wine_image/image/1487/big_PA103589.png'
  },
  fruitType  : {
    name       : 'light red fruit',
    description: 'cranberry/rasberry'
  },
  body       : 'medium',
  dry_sweet  : 'sweet',
  acidity    : 'not acidic',
  tannins    : 'gripping',
  style      : 'light/gentle',
  grape      : 'cabernet savignon',
  region     : 'california'
};

window.cabernet = {
  name     : 'Cabernet',
  year     : '2003',
  producer   : 'Kendall Jackson',
  price    : 12,
  description: 'this is a description',
  properties : [
    'bold',
    'wood/oak'
  ],
  image    : {
    url: 'http://winepony.s3.amazonaws.com/uploads/wine_image/image/1166/big_PA103592.png'
  },
  fruitType: {
    name       : 'dark red',
    description: 'black cherry'
  },
  body       : 'heavy',
  dry_sweet  : 'moderate',
  acidity    : 'not acidic',
  tannins    : 'not tannic',
  style      : 'light/gentle',
  grape      : 'cabernet savignon',
  region     : 'france'
};