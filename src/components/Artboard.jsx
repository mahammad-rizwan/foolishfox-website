import { useEffect, useRef, useState } from 'react';

/**
 * A 1366x768 design canvas (the size the site was designed at in Canva),
 * scaled to the viewport width. Children are positioned in canvas pixels.
 */
export default function Artboard({ id, background, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`artboard${visible ? ' is-visible' : ''}`}
      style={{ background }}
    >
      <div className="artboard__canvas">{children}</div>
    </section>
  );
}
