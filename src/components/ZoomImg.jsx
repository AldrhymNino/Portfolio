const ZoomImg = ({src, alt, onClose}) => {
  return (
    <div onClick={onClose} className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer'>   
        <img src={src} alt={alt} className='max-w-full max-h-full rounded-lg shadow-lg' />
    </div>
  )
};

export { ZoomImg };