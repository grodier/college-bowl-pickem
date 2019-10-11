import { useState } from 'react';

function TeamCard({ team, selected, handleSelection, gameId }) {
  const { school, nickname, primaryColor, secondaryColor, fontColor } = team;
  const selectedOpacity = selected ? 'opacity-100' : 'opacity-50';
  return (
    <div className="relative">
      <input
        className="absolute opacity-0"
        sytle={{ clip: 'rect(0, 0, 0, 0)' }}
        id={team.id}
        name={gameId}
        type="radio"
        value={team.id}
        checked={selected}
        onChange={handleSelection}
      />
      <label for={team.id}>
        <div
          className={`rounded shadow-lg py-2 px-6 ${selectedOpacity} hover:opacity-100 cursor-pointer mx-w-sm`}
          style={{
            background: primaryColor,
            border: `4px solid ${secondaryColor}`,
            color: fontColor,
            minWidth: '200px'
          }}
        >
          <div className="text-center font-medium">{school}</div>
          <div className="text-center font-bold text-xl">{nickname}</div>
        </div>
      </label>
    </div>
  );
}

function NewGameSelection({
  gameId,
  bowlName,
  favorite,
  underdog,
  spread,
  date,
  location
}) {
  const [selection, setSelection] = useState(null);
  function radioSelectionChanged({ target }) {
    setSelection(parseInt(target.value));
  }
  const selectionComplete =
    selection != null ? 'shadow-md' : 'shadow-2xl border-2 border-blue-500';
  return (
    <div
      className={`bg-gray-100 p-6 ${selectionComplete} rounded-lg max-w-xl mx-auto mt-6`}
    >
      <div className="text-gray-600 text-center">
        {date} &bull; {location}
      </div>
      <h4 className="font-semibold text-4xl text-center">{bowlName}</h4>
      <div className="md:flex justify-center">
        <div>
          <div>Favorite</div>
          <TeamCard
            team={favorite}
            gameId={gameId}
            selected={selection === favorite.id}
            handleSelection={radioSelectionChanged}
          />
        </div>
        <div className="mx-3">
          <div>Spread</div>
          <div className="text-3xl font-thin">-{spread}</div>
        </div>
        <div>
          <div>Underdog</div>
          <TeamCard
            team={underdog}
            gameId={gameId}
            selected={selection === underdog.id}
            handleSelection={radioSelectionChanged}
          />
        </div>
      </div>
    </div>
  );
}

export default NewGameSelection;
