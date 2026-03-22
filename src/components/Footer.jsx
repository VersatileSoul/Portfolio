export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Designed & Built by <strong>Ajaykumar Shendage</strong>
        </p>
        <p className="footer-sub">© {new Date().getFullYear()} — All rights reserved</p>
      </div>
    </footer>
  );
}
