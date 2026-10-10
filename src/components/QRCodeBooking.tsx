import React, { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, MessageCircle, ExternalLink, Check, Smartphone, Printer } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/treatments';

interface QRCodeBookingProps {
  className?: string;
  variant?: 'card' | 'compact' | 'reception';
}

export const QRCodeBooking: React.FC<QRCodeBookingProps> = ({
  className = '',
  variant = 'card'
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const prefilledMessage = CLINIC_CONTACT.defaultQrMessage;
  const whatsappUrl = `https://wa.me/918528043685?text=${encodeURIComponent(prefilledMessage)}`;

  const handleDownloadQR = () => {
    try {
      const canvas = qrRef.current?.querySelector('canvas');
      if (!canvas) return;

      // Create a higher resolution print-ready canvas
      const printCanvas = document.createElement('canvas');
      const ctx = printCanvas.getContext('2d');
      if (!ctx) return;

      const size = 600;
      printCanvas.width = size;
      printCanvas.height = size + 160;

      // Background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, printCanvas.width, printCanvas.height);

      // Header Bar in Brand Navy & Blue
      ctx.fillStyle = '#193D70';
      ctx.fillRect(0, 0, printCanvas.width, 100);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 30px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('OMNI DENTAL CARE', size / 2, 45);

      ctx.fillStyle = '#2798CC';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('Borkhera Labour Chauraha, Kota · Dr. Divya Rao', size / 2, 75);

      // Draw QR Canvas in center
      const qrOffset = 120;
      const qrTargetSize = 460;
      ctx.drawImage(canvas, (size - qrTargetSize) / 2, qrOffset, qrTargetSize, qrTargetSize);

      // Footer call to action
      ctx.fillStyle = '#168D3D';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('Scan with Camera to Book via WhatsApp', size / 2, size + 120);

      ctx.fillStyle = '#64748B';
      ctx.font = '16px sans-serif';
      ctx.fillText('+91 85280 43685', size / 2, size + 145);

      const dataUrl = printCanvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = 'Omni-Dental-Care-Appointment-QR.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (e) {
      console.error('Failed to download QR code', e);
    }
  };

  return (
    <div
      className={`rounded-2xl bg-white border border-[#2798CC]/20 shadow-md p-6 text-center flex flex-col items-center justify-between relative overflow-hidden ${className}`}
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#2798CC] via-[#168D3D] to-[#193D70]" />

      {/* Heading & Instructions */}
      <div className="mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F2F9FC] text-[#193D70] rounded-full text-xs font-semibold mb-2 border border-[#2798CC]/20">
          <Smartphone className="w-3.5 h-3.5 text-[#2798CC]" />
          <span>Instant WhatsApp Connect</span>
        </div>
        <h3 className="text-xl font-bold text-[#193D70] font-heading">
          Scan to Book Your Appointment
        </h3>
        <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-sm">
          Scan this QR code with your phone camera to contact our clinic on WhatsApp.
        </p>
      </div>

      {/* QR Code Container with Brand Styling */}
      <div
        ref={qrRef}
        className="p-4 bg-white rounded-2xl shadow-xs border-2 border-dashed border-[#2798CC]/30 hover:border-[#168D3D] transition-colors relative group my-2"
      >
        <QRCodeCanvas
          value={whatsappUrl}
          size={180}
          level="H"
          bgColor="#FFFFFF"
          fgColor="#193D70"
          marginSize={2}
        />
        {/* Center overlay pill */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-[#168D3D] fill-[#168D3D]/20" />
          </div>
        </div>
      </div>

      {/* Direct link for mobile users who cannot scan their own screen */}
      <div className="mt-3 flex flex-col gap-2.5 w-full max-w-xs">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#168D3D] hover:bg-[#127733] text-white text-xs md:text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Open Direct WhatsApp Chat</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>

        {/* Reception Print / Download Button */}
        <button
          onClick={handleDownloadQR}
          type="button"
          className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-[#F2F9FC] hover:bg-slate-100 border border-[#2798CC]/30 text-[#193D70] text-xs font-medium transition-colors"
          title="Download printable high-res QR flyer for clinic reception desk"
        >
          {downloadSuccess ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#168D3D]" />
              <span className="text-[#168D3D]">QR Downloaded!</span>
            </>
          ) : (
            <>
              <Printer className="w-3.5 h-3.5 text-[#2798CC]" />
              <span>Download Printable Reception QR</span>
              <Download className="w-3 h-3 text-slate-400" />
            </>
          )}
        </button>
      </div>

      {/* Verified note */}
      <p className="text-[11px] text-slate-500 mt-3">
        Clinic WhatsApp: <span className="font-semibold text-slate-700">+91 85280 43685</span>
        <br />
        <span className="text-[10px] text-slate-400">Slots confirmed directly by clinic staff</span>
      </p>
    </div>
  );
};
