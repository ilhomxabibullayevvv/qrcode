import QRCodeGenerator from '../components/QRCodeGenerator.js';

export default function HomePage() {
  const myData = 'https://example.com/my-awesome-link';

  return (
    <div>
      <h1>My QR Code Page</h1>
      <QRCodeGenerator data={myData} />
    </div>
  );
}