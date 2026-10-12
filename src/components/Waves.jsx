// Decorative flowing lines used on the blue banners.
const Waves = ({ className = '' }) => (
  <svg className={`waves ${className}`} viewBox="0 0 1440 720" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 430 C 240 300, 420 640, 720 520 S 1150 180, 1440 360" />
    <path d="M0 500 C 300 380, 480 700, 820 560 S 1200 260, 1440 470" />
    <path d="M-40 560 C 260 470, 520 760, 900 620 S 1260 300, 1480 560" />
    <path d="M560 720 C 720 520, 820 300, 1000 240 S 1320 420, 1440 520" />
  </svg>
);

export default Waves;
