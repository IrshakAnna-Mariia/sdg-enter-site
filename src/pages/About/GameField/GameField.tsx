import { useRef, useState } from 'react';
import { GameInstance, IonPhaser } from '@ion-phaser/react';

import { config } from 'PhaserGame';
import Button from 'components/Button';

const GameField = () => {
  const gameRef = useRef(null);
  const [initialize, setInitialize] = useState(false);
  const destroy = () => {
    if (gameRef.current) {
      (gameRef.current as { destroy: () => void }).destroy();
    }
    setInitialize(false);
  };

  const handleOpenDemo = () => {
    initialize ? destroy() : setInitialize(true);
  };

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <Button label={initialize ? 'Hide game' : 'Play now'} onClick={handleOpenDemo} styleForm={'pill'} size="lg" />
      <IonPhaser ref={gameRef} game={config as GameInstance} initialize={initialize} />
    </div>
  );
};

export default GameField;
