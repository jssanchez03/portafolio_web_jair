import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';

interface ImagePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  images?: string[];
  currentIndex?: number;
  onNavigate?: (direction: 'prev' | 'next') => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  isOpen, 
  onClose, 
  imageUrl, 
  images = [], 
  currentIndex = 0, 
  onNavigate 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      gsap.fromTo('.image-preview-backdrop', 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      
      gsap.fromTo('.image-preview-content',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to('.image-preview-content', {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.in'
    });
    
    gsap.to('.image-preview-backdrop', {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    } else if (e.key === 'ArrowLeft' && onNavigate && currentIndex > 0) {
      onNavigate('prev');
    } else if (e.key === 'ArrowRight' && onNavigate && currentIndex < images.length - 1) {
      onNavigate('next');
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const previewContent = (
    <div
      className="image-preview-backdrop fixed inset-0 z-[10000] flex items-center justify-center p-4"
      style={{
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh'
      }}
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      {onNavigate && images.length > 1 && (
        <>
          {/* Previous Arrow */}
          {currentIndex > 0 && (
            <button
              onClick={() => onNavigate('prev')}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Arrow */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={() => onNavigate('next')}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </>
      )}

      {/* Image Content */}
      <div className="image-preview-content max-w-[70vw] max-h-[70vh] flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Preview"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          style={{
            maxWidth: '70vw',
            maxHeight: '70vh',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-white text-sm font-medium"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );

  return createPortal(previewContent, document.body);
};

export default ImagePreview;
