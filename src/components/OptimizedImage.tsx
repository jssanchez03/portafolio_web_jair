import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLImageElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style,
  width,
  height,
  priority = false,
  onLoad,
  onError,
  onMouseEnter,
  onMouseLeave
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Optimize Cloudinary URLs
  const optimizeCloudinaryUrl = (url: string): string => {
    if (!url.includes('cloudinary.com')) return url;
    
    // Extract the base URL and image path
    const parts = url.split('/upload/');
    if (parts.length !== 2) return url;
    
    const [baseUrl, imagePath] = parts;
    
    // Add optimization parameters
    const optimizations = [
      'f_auto', // Auto format (WebP, AVIF when supported)
      'q_auto:best', // Better quality to avoid blurriness
      'c_scale', // Scale to fit
      width ? `w_${Math.round(width * 2)}` : 'w_1200', // Higher resolution for crisp images
      'dpr_auto' // Auto device pixel ratio
    ];
    
    return `${baseUrl}/upload/${optimizations.join(',')}/${imagePath}`;
  };

  const optimizedSrc = optimizeCloudinaryUrl(src);

  useEffect(() => {
    if (priority) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      
      {/* Error placeholder */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded"
          style={{ width, height }}
        >
          <span className="text-gray-400 text-sm">Failed to load</span>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          style={style}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
