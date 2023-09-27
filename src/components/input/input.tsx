import { useState } from "react";

export function Button() {
  const [url, setUrl] = useState(" ");
  const [qrCodeImage, setQRCodeImage] = useState(" ");
  const [metadataVisible, setMetadataVisible] = useState(true);
  const [metadata, setMetadata] = useState({
    url1: "",
    timestamp: "",
  });
  console.log(metadata);
  const generateQRCode = async () => {
    try {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
          url
        )}`
      );
      setQRCodeImage(response.url);
      setMetadata({
        url1: url,
        timestamp: new Date().toLocaleString(),
      });
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };
  const toggleMetadata = () => {
    setMetadataVisible(!metadataVisible);
    console.log(metadataVisible);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      <button onClick={toggleMetadata}>show deateiles</button>
      {qrCodeImage && (
        <div>
          <h2>Generated QR Code</h2>
          <img src={qrCodeImage} alt="QR Code" />
        </div>
      )}
      {metadataVisible && (
        <div>
          <h2>{metadata.url1}</h2>
          <h2>{metadata.timestamp}</h2>
        </div>
      )}
    </div>
  );
}
