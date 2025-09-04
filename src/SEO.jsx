import { useEffect } from 'react';

const SEO = ({ 
  title = "Philip Daudu - Backend Engineer & Full-Stack Developer",
  description = "Passionate Backend Engineer specializing in scalable systems, robust APIs, and optimized data workflows. Experienced in Python, Node.js, and cloud technologies.",
  keywords = "Philip Daudu, Backend Engineer, Full-Stack Developer, Python, Node.js, API Development, Cloud Computing, Software Engineer, Web Developer",
  image = "https://philipd.vercel.app/image/headshot.jpeg",
  url = "https://philipd.vercel.app/",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Primary meta tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    
    // Twitter Card tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEO;
