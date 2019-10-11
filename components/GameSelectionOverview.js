function SelectionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="icon-check w-4"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        className="primary fill-current text-blue-200"
      />
      <path
        className="secondary fill-current text-blue-800"
        d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
      />
    </svg>
  );
}

function GameOverviewBox({ game, selection, onGameSelected, last }) {
  const rightBorder = !last ? 'border-r border-blue-200' : '';
  const { favorite, underdog, date } = game;
  return (
    <div
      className={`px-6 py-1 bg-gray-200 ${rightBorder} cursor-pointer`}
      style={{ minWidth: '200px' }}
      onClick={() => onGameSelected(game.id)}
    >
      <div>{date}</div>
      <div className="flex">
        {selection === favorite.id && <SelectionIcon />}
        <div className="ml-5">{favorite.abbr}</div>
      </div>
      <div className="flex">
        {selection === underdog.id && <SelectionIcon />}
        <div className="ml-1">{underdog.abbr}</div>
      </div>
    </div>
  );
}

function GameSelectionOverview({ games, selectedGame, onGameSelected }) {
  return (
    <div className="inline-flex max-w-full">
      <div className="flex border rounded-lg shadow-md overflow-scroll">
        {games.map((game, index) => (
          <GameOverviewBox
            key={game.gameId}
            game={game}
            selection={game.underdog.id}
            onGameSelected={onGameSelected}
            last={index === games.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default GameSelectionOverview;
