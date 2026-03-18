const ZoomImg = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-40 backdrop-blur-md">
      {/* Botón de cierre */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 bg-white bg-opacity-30 backdrop-blur-sm border border-white border-opacity-40 rounded-full shadow-lg hover:bg-opacity-50 transition"
        aria-label="Cerrar"
      >
        {/* SVG X icon */}
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>
      {/* Imagen centrada y proporcionada */}
      <div className="rounded-xl shadow-lg max-w-[90vw] max-h-[80vh] bg-white bg-opacity-20 backdrop-blur-lg p-4 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="rounded-xl max-w-full max-h-[70vh] object-contain"
        />
      </div>
    </div>
  );
};

export { ZoomImg };