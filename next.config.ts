// next.config.ts
import withSvgr from 'next-svgr';

const nextConfig = {
  // other Next.js config options
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default withSvgr(nextConfig);