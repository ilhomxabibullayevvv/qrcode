"use client";

import { useQRCode } from "next-qrcode";

export default function QRCodeGenerator({ data }) {
    const { Canvas } = useQRCode();

    return (
        <div className="qr-container">
            <h2 className="qr-title">QR Code Generator</h2>
            <div className="qr-box">
                <Canvas
                    text={data}
                    options={{
                        margin: 2,
                        width: 200,
                        color: {
                            dark: "#000000",
                            light: "#ffffff",
                        },
                    }}
                />
            </div>
            <p className="qr-text">📲 Ushbu QR-kodni skaner qilib ko‘ring!</p>
        </div>
    );
}
