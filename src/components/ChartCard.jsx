import { useEffect, useState } from "react";

function ChartCard({ title, src, ariaLabel, height }) {
  const baseHeight = Number(height) || 520;
  const [iframeHeight, setIframeHeight] = useState(baseHeight);

  useEffect(() => {
    const calc = () => {
      const isMobile = window.innerWidth < 768;
      // на мобилке графики Datawrapper почти всегда требуют больше высоты
      setIframeHeight(isMobile ? Math.round(baseHeight * 1.35) : baseHeight);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [baseHeight]);

  return (
    <div className="chart-card">
      <iframe
        loading="lazy"
        title={title}
        src={src}
        aria-label={ariaLabel}
        height={iframeHeight}
        frameBorder="0"
        scrolling="no"
        style={{ width: "100%", border: "none", display: "block" }}
        data-external="1"
      />
    </div>
  );
}

export default ChartCard;
