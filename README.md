# 룰렛 디펜스 웹사이트

게임 소개, 개인정보 처리방침, 이용약관, 문의 페이지. Astro 정적 사이트이고 `main` 에 push 하면 GitHub Pages 로 배포된다.

- 주소: https://wlswo.me/roulette-defense/
- 개인정보 처리방침: https://wlswo.me/roulette-defense/privacy/ (스토어 등록과 게임 설정 화면에 사용)
- 이용약관: https://wlswo.me/roulette-defense/terms/
- 문의: https://wlswo.me/roulette-defense/support/

```bash
npm install
npm run dev      # http://localhost:4321/roulette-defense/
npm run build
```

문구 규칙은 게임과 같다: 이모지, 중앙점 금지. 운영자 이름, 문의 메일, 시행일은 `src/site.ts` 한 곳에서 바꾼다.
게임에서 쓰는 개인정보·결제·광고 방식이 바뀌면 `src/pages/privacy.astro` 도 같이 고친다.
