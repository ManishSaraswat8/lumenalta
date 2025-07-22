'use client'

import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'contact';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lumenalta",
          "url": "https://lumenalta.com",
          "logo": "https://lumenalta.com/logo.png",
          "description": "Your trusted partner for innovative digital solutions",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@lumenalta.com"
          },
          "sameAs": [
            "https://linkedin.com/company/lumenalta",
            "https://twitter.com/lumenalta"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            }
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Lumenalta",
          "url": "https://lumenalta.com",
          "description": "Innovative digital solutions for modern businesses",
          "publisher": {
            "@type": "Organization",
            "name": "Lumenalta"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://lumenalta.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Solutions",
          "provider": {
            "@type": "Organization",
            "name": "Lumenalta"
          },
          "description": "Comprehensive digital solutions including custom development, cloud solutions, data analytics, and mobile applications",
          "serviceType": "Digital Technology Services",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Data Analytics"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile Development"
                }
              }
            ]
          }
        };

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Lumenalta",
          "description": "Get in touch with our team for inquiries about digital solutions",
          "mainEntity": {
            "@type": "Organization",
            "name": "Lumenalta",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@lumenalta.com",
              "availableLanguage": "English"
            }
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData; 