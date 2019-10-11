import { genDummyGameData } from '../utils/dummyData';
import NewGameSelection from '../components/NewGameSelection';
import GameSelectionOverview from '../components/GameSelectionOverview';
import Slider from 'react-slick';
import '../slick.css';
import '../slick-theme.css';

const data = genDummyGameData(20);

function GamePicker() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <GameSelectionOverview games={data} />
      <div className="max-w-2xl mx-auto">
        <Slider {...settings}>
          {data.map(game => (
            <NewGameSelection
              key={game.gameId}
              gameId={game.gameId}
              bowlName={game.bowlName}
              location={game.location}
              date={game.date}
              favorite={game.favorite}
              underdog={game.underdog}
              spread={game.spread}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default GamePicker;
