import { useState } from 'react';

function GameSelection({
  gameId,
  bowlName,
  favorite,
  underdog,
  spread,
  date,
  location
}) {
  const [selection, setSelection] = useState('');
  function radioSelectionChanged({ target }) {
    setSelection(parseInt(target.value));
  }

  return (
    <div className="flex border-black border-2 justify-evenly items-center">
      <div className="w-1/6 text-center">
        <div>{date}</div>
      </div>
      <div className="w-1/3 text-center">
        <div>{bowlName}</div>
        <div>{location}</div>
      </div>
      <div className="w-1/6">
        <input
          id={favorite.id}
          name={gameId}
          type="radio"
          value={favorite.id}
          checked={selection === favorite.id}
          onChange={radioSelectionChanged}
        />
        <label for={favorite.id}>{favorite.name}</label>
      </div>
      <div className="w-1/6 text-center">
        <div>-{spread}</div>
      </div>
      <div className="w-1/6">
        <input
          id={underdog.id}
          name={gameId}
          type="radio"
          value={underdog.id}
          checked={selection === underdog.id}
          onChange={radioSelectionChanged}
        />
        <label for={underdog.id}>{underdog.name}</label>
      </div>
    </div>
  );
}

export default GameSelection;
