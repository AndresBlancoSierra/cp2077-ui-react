import { InkLayout } from '../common/InkLayout';

export function ButtonHints({ hints }: { hints: string[] }) {
  return (
    <InkLayout
      layout={{ anchor: 'BottomRight', margin: { bottom: 50, left: 0, right: 100, top: 0 } }}
      className="button-hints"
    >
      {hints.map(h => (
        <span key={h} className="hint">
          <span className="hint-key">[{h}]</span>
        </span>
      ))}
    </InkLayout>
  );
}
