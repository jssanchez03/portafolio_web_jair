import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { gsap } from 'gsap';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Animate modal in
      gsap.fromTo('.modal-backdrop', 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      
      gsap.fromTo('.modal-content',
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    // Animate modal out
    gsap.to('.modal-content', {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 0.3,
      ease: 'power2.in'
    });
    
    gsap.to('.modal-backdrop', {
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
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="modal-backdrop fixed inset-0 z-[9999] flex items-center justify-center p-0"
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
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
      {/* Close Button - Floating */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--primary)';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
          e.currentTarget.style.color = 'white';
        }}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Gallery Content - Full Screen */}
      <div className="w-full h-full flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
