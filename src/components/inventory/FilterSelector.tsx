import { BODY_AREAS } from '../../data/areas';
import { InkLayout } from '../common/InkLayout';

export function FilterSelector({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (id: string) => void;
}) {
  const idx = Math.max(0, BODY_AREAS.findIndex(a => a.equipArea === selected));
  const area = BODY_AREAS[idx];
  const prev = () => onChange(BODY_AREAS[(idx - 1 + BODY_AREAS.length) % BODY_AREAS.length].equipArea);
  const next = () => onChange(BODY_AREAS[(idx + 1) % BODY_AREAS.length].equipArea);

  return (
    <InkLayout
      layout={{ anchor: 'TopLeft', margin: { top: 300, left: 800, right: 0, bottom: 350 } }}
      className="filter-selector"
    >
      <div className="filter-container">
        <button className="arrow left" onClick={prev} aria-label="Previous area">◄</button>
        <span className="filter-caption">{area.label}</span>
        <button className="arrow right" onClick={next} aria-label="Next area">►</button>
      </div>
      <div className="dots">
        {BODY_AREAS.map(a => (
          <span key={a.id} className={`dot ${a.equipArea === selected ? 'active' : ''}`} />
        ))}
      </div>
    </InkLayout>
  );
}
