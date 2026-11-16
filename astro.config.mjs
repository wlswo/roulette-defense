import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// wlswo.me 는 wlswo.github.io 의 사용자 도메인이라, 이 저장소(roulette-defense)는 wlswo.me/roulette-defense 로 서비스된다.
export default defineConfig({
  site: 'https://wlswo.me',
  base: '/roulette-defense',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
