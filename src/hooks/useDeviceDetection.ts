import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  hasLimitedPerformance: boolean;
  supportsWebGL: boolean;
  hasTouch: boolean;
  screenWidth: number;
  deviceMemory: number | null;
  connectionType: string | null;
}

export const useDeviceDetection = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    // Initial detection on client side
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        hasLimitedPerformance: false,
        supportsWebGL: false,
        hasTouch: false,
        screenWidth: 1920,
        deviceMemory: null,
        connectionType: null
      };
    }

    const userAgent = navigator.userAgent;
    const screenWidth = window.innerWidth;
    
    // More accurate mobile detection
    const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || 
                     screenWidth <= 768;
    
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent) || 
                     (screenWidth > 768 && screenWidth <= 1024);
    
    const isDesktop = !isMobile && !isTablet;
    
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Performance detection
    const deviceMemory = (navigator as any).deviceMemory || null;
    const connection = (navigator as any).connection;
    const connectionType = connection ? connection.effectiveType : null;
    
    const hasLimitedPerformance = isMobile || 
                                  (deviceMemory && deviceMemory < 4) ||
                                  (connectionType && ['slow-2g', '2g', '3g'].includes(connectionType));
    
    // WebGL support detection
    const supportsWebGL = (() => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        return !!gl;
      } catch (e) {
        return false;
      }
    })();

    return {
      isMobile,
      isTablet,
      isDesktop,
      hasLimitedPerformance,
      supportsWebGL: supportsWebGL && !hasLimitedPerformance, // Disable WebGL on limited devices
      hasTouch,
      screenWidth,
      deviceMemory,
      connectionType
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                       screenWidth <= 768;
      const isTablet = /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent) || 
                       (screenWidth > 768 && screenWidth <= 1024);
      const isDesktop = !isMobile && !isTablet;

      setDeviceInfo(prev => ({
        ...prev,
        isMobile,
        isTablet,
        isDesktop,
        screenWidth
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceInfo;
};

// Export utility functions
export const getAnimationConfig = (deviceInfo: DeviceInfo) => {
  if (deviceInfo.hasLimitedPerformance) {
    return {
      duration: 200,
      easing: 'ease-out',
      stagger: 0.02,
      enableComplexAnimations: false,
      enableWebGL: false,
      enableParallax: false,
      enableHoverEffects: false
    };
  }

  if (deviceInfo.isMobile || deviceInfo.isTablet) {
    return {
      duration: 300,
      easing: 'ease-out-cubic',
      stagger: 0.03,
      enableComplexAnimations: false,
      enableWebGL: false,
      enableParallax: false,
      enableHoverEffects: deviceInfo.hasTouch ? false : true
    };
  }

  return {
    duration: 400,
    easing: 'ease-out-cubic',
    stagger: 0.05,
    enableComplexAnimations: true,
    enableWebGL: deviceInfo.supportsWebGL,
    enableParallax: true,
    enableHoverEffects: true
  };
};
