declare module 'next-svgr' {
  import { NextConfig } from 'next';

  function withSvgr(nextConfig?: NextConfig): NextConfig;

  export default withSvgr;
}
