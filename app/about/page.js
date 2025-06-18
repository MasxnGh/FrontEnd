import Link from "next/link";

export default function Service() {
  return (
    <>
      <header style={{
        padding: '20px 0',
        borderBottom: '2px solid #444',
        backgroundColor: '#121212',
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}>
        <nav style={{
          display: 'inline-flex',
          gap: '25px',
          fontSize: '18px',
          fontWeight: '600',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Link href="/" style={linkStyle}>หน้าหลัก</Link>
          <Link href="/about" style={yellowButtonStyle}>ข้อมูล</Link>
          <Link href="/contact" style={linkStyle}>ติดต่อ</Link>
          <Link href="/service" style={linkStyle}>บริการ</Link>
        </nav>
      </header>

      <main style={{
        marginTop: '60px',
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#121212',
        minHeight: 'calc(100vh - 70px)',
        color: '#eee',
        padding: '40px 20px',
      }}>
        <h1 style={{ fontSize: '3rem', color: '#fff' }}>ข้อมูล</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '10px' }}>
          ยินดีต้อนรับสู่หน้าข้อมูล
        </p>
      </main>
    </>
  );
}

const linkStyle = {
  color: '#bbb',
  textDecoration: 'none',
  padding: '8px 12px',
  borderRadius: '6px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  userSelect: 'none',
};

const yellowButtonStyle = {
  backgroundColor: '#FFD600',
  color: '#121212',
  padding: '8px 18px',
  borderRadius: '8px',
  fontWeight: '700',
  cursor: 'pointer',
  textDecoration: 'none',
  boxShadow: '0 4px 8px rgba(255, 214, 0, 0.6)',
  transition: 'background-color 0.3s ease',
  userSelect: 'none',
};
