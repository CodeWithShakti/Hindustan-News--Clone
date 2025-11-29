// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "shiawaves.com" },
      { protocol: "https", hostname: "th-i.thgim.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "static.toiimg.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "www.varindia.com" },
      { protocol: "https", hostname: "media.assettype.com" },
      { protocol: "https", hostname: "images.moneycontrol.com" },
      { protocol: "https", hostname: "bsmedia.business-standard.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "lookaside.fbsbx.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      {
        protocol: 'https',
        hostname: '**',                 
      },
    ],
  },
};

module.exports = nextConfig;