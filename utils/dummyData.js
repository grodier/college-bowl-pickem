const collegeTeams = [
  {
    school: 'Cincinnati',
    nickname: 'Bearcats',
    abbr: 'Cinn',
    primaryColor: '#E00122',
    secondaryColor: 'black',
    fontColor: 'white'
  },
  {
    school: 'East Carolina',
    nickname: 'Pirates',
    abbr: 'ECU',
    primaryColor: '#592A8A',
    secondaryColor: '#FDC82F',
    fontColor: 'white'
  },
  {
    school: 'Notre Dame',
    abbr: 'ND',
    nickname: 'Fighting Irish',
    primaryColor: '#0C2340',
    secondaryColor: '#C99700',
    fontColor: 'white'
  },
  {
    school: 'Clemson',
    abbr: 'Clem',
    nickname: 'Tigers',
    primaryColor: '#F56600',
    secondaryColor: '#522D80',
    fontColor: 'white'
  },
  {
    school: 'Florida',
    nickname: 'Gators',
    abbr: 'UF',
    primaryColor: '#0021A5',
    secondaryColor: '#FA4616',
    fontColor: 'white'
  },
  {
    school: 'Alabama',
    nickname: 'Crimson Tide',
    abbr: 'Ala',
    primaryColor: '#9E1B32',
    secondaryColor: '#828A8F',
    fontColor: 'white'
  },
  {
    school: 'Penn State',
    nickname: 'Nittany Lions',
    abbr: 'PSU',
    primaryColor: '#041E42',
    secondaryColor: 'white',
    fontColor: 'white'
  },
  {
    school: 'Michigan',
    nickname: 'Wolverines',
    abbr: 'Mich',
    primaryColor: '#00274C',
    secondaryColor: '#FFCB05',
    fontColor: '#FFCB05'
  },
  {
    school: 'Iowa',
    nickname: 'Hawkeyes',
    abbr: 'Iowa',
    primaryColor: '#FFCD00',
    secondaryColor: 'black',
    fontColor: 'black'
  },
  {
    school: 'Kansas',
    nickname: 'Jayhawks',
    abbr: 'Kans',
    primaryColor: '#0051BA',
    secondaryColor: '#E8000D',
    fontColor: '#FFC82D'
  }
];

const bowlNames = [
  'Rose Bowl Game',
  'Orange Bowl',
  'Sugar Bowl',
  'Fiesta Bowl',
  'Cotton Bowl Classic',
  'Peach Bowl'
];

const locations = [
  'San Fransisco, CA',
  'Philadelphia, PA',
  'New York, NY',
  'Miami, FL',
  'Dallas, TX',
  'Detroit, MI',
  'Seattle, WA'
];

function getRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toDateString();
}

function getRandomListItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 20);
}

export function genDummyGameData(numGames) {
  const gameData = [];
  for (var i = 0; i < numGames; i += 2) {
    const fav = getRandomListItem(collegeTeams);
    const und = getRandomListItem(collegeTeams);
    gameData.push({
      gameId: i,
      bowlName: getRandomListItem(bowlNames),
      location: getRandomListItem(locations),
      date: getRandomDate(new Date(2019, 12, 1), new Date(2020, 1, 10)),
      underdog: {
        id: i,
        school: und.school,
        nickname: und.nickname,
        abbr: und.abbr,
        primaryColor: und.primaryColor,
        secondaryColor: und.secondaryColor,
        fontColor: und.fontColor
      },
      favorite: {
        id: i + 1,
        school: fav.school,
        nickname: fav.nickname,
        abbr: fav.abbr,
        primaryColor: fav.primaryColor,
        secondaryColor: fav.secondaryColor,
        fontColor: fav.fontColor
      },
      spread: getRandomNumber() + 0.5
    });
  }
  return gameData;
}
