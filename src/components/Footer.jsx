export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border text-center">
      <p className="text-muted text-sm font-mono">
        Built by{' '}
        <a
          href="https://github.com/Thanmay-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Thanmay
        </a>
        {' '}· Deployed on GitHub Pages
      </p>
    </footer>
  )
}
