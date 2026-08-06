import { useMenu } from '../router/MenuRouter';
import { InkLayout } from '../components/common/InkLayout';
import { ButtonHints } from '../components/common/ButtonHints';

export function StatsScreen() {
  const { back } = useMenu();
  return (
    <InkLayout layout={{ anchor: 'TopLeft' }} className="stats-screen" style={{ width: 1920, height: 1080 }}>
      <div className="background" />
      <div className="screen-title">STATS</div>
      <ButtonHints hints={['Back']} />
      <button className="screen-back" onClick={back}>◀ BACK</button>
    </InkLayout>
  );
}
