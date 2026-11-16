// 사이트 전체에서 쓰는 값. 화면 문구 규칙은 게임과 같다: 이모지와 중앙점은 쓰지 않는다.
export const site = {
  name: '룰렛 디펜스',
  nameEn: 'Roulette Defense',
  operator: 'Jstudio',
  email: 'roulette@wlswo.me',
  updated: '2026년 11월 16일',
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** '/roulette-defense/', '/roulette-defense/privacy/' (GitHub Pages 가 끝에 / 를 붙이므로 맞춘다) */
export const href = (page: '' | 'privacy' | 'terms' | 'support') => `${base}/${page ? page + '/' : ''}`;
export const asset = (path: string) => `${base}/${path}`;
