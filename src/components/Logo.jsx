// Wordmark modeled on an architect-style logo: thin mark, spaced name, small subtitle.
// Colors follow currentColor so it works on light and dark backgrounds.
const Logo = ({ size = 'sm' }) => {
  const big = size === 'lg';
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: big ? '0.6rem' : '0.3rem', lineHeight: 1 }}>
      <svg width={big ? 34 : 20} height={big ? 34 : 20} viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <rect x="1" y="1" width="32" height="32" />
        <path d="M11 25V9h6a4 4 0 0 1 0 8h-6" />
        <path d="M26 13a5 5 0 1 0 0 8v-4h-3" />
      </svg>
      <span style={{ fontWeight: 300, fontSize: big ? '1.6rem' : '0.95rem', letterSpacing: '0.18em', textTransform: 'uppercase', whiteSpace: 'nowrap', paddingLeft: '0.18em' }}>
        Patrick Gattini
      </span>
      <span style={{ fontWeight: 500, fontSize: big ? '0.55rem' : '0.42rem', letterSpacing: '0.3em', textTransform: 'uppercase', whiteSpace: 'nowrap', opacity: 0.8, paddingLeft: '0.3em' }}>
        Desenvolvimento | Sistemas | Web
      </span>
    </span>
  );
};

export default Logo;
