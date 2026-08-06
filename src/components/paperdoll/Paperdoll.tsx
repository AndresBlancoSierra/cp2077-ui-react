import { BODY_AREAS } from '../../data/areas';
import { InkLayout } from '../common/InkLayout';
import { qualityColor } from '../../data/quality';
import { itemsForArea, type CyberwareItem } from '../../data/items';
import { PAPERDOLL, VIDEO_PATH, type PaperdollVideo } from '../../data/paperdoll';

function VideoLayer({
  v,
  active,
}: {
  v: PaperdollVideo;
  active: boolean;
}) {
  return (
    <div
      className={`paperdoll-video ${active ? 'active' : ''}`}
      style={{
        left: v.cx - v.w / 2,
        top: v.cy - v.h / 2,
        width: v.w,
        height: v.h,
      }}
    >
      <video
        src={`${VIDEO_PATH}${v.name}.webm`}
        loop
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={e => e.currentTarget.play().catch(() => {})}
      />
    </div>
  );
}

export function Paperdoll({
  gender,
  selectedArea,
  hoverArea,
  onHover,
  equipped,
  onSlotClick,
}: {
  gender: 'man' | 'woman';
  selectedArea: string | null;
  hoverArea: string | null;
  onHover: (area: string | null) => void;
  equipped: Set<string>;
  onSlotClick: (area: string) => void;
}) {
  const pd = PAPERDOLL[gender];
  const activeArea = hoverArea ?? selectedArea;
  const activeBodyArea = activeArea ? BODY_AREAS.find(a => a.equipArea === activeArea) : null;
  const activeVideo = activeBodyArea ? pd.areas[activeBodyArea.video] : null;

  return (
    <InkLayout
      layout={{ anchor: 'Centered', anchorPoint: { X: 0.5, Y: 0.5 }, margin: { top: 60, left: 0, right: 0, bottom: 0 } }}
      className="paperdoll"
    >
      <div className="silhouette">
        <VideoLayer v={pd.body} active />
        {activeVideo && <VideoLayer v={activeVideo} active />}

        {BODY_AREAS.map(area => {
          const items = itemsForArea(area.equipArea);
          const equippedItems: CyberwareItem[] = items.filter(i => equipped.has(i.record));
          const active = selectedArea === area.equipArea || hoverArea === area.equipArea;
          return (
            <InkLayout
              key={area.id}
              layout={{ anchor: 'TopLeft', margin: { top: area.cy - 16, left: area.cx - 16, right: 0, bottom: 0 } }}
              className={`paperdoll-slot ${active ? 'active' : ''}`}
            >
              <div
                className="slot-hotzone"
                onMouseEnter={() => onHover(area.equipArea)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onSlotClick(area.equipArea)}
              >
                <span className="slot-marker" />
                {equippedItems.length > 0 && (
                  <span className="slot-equipped" style={{ color: qualityColor(equippedItems[0].quality) }}>
                    {equippedItems[0].name}
                  </span>
                )}
              </div>
            </InkLayout>
          );
        })}
      </div>
    </InkLayout>
  );
}
