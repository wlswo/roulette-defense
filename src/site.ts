// 사이트 전체에서 쓰는 값. 화면 문구 규칙은 게임과 같다: 이모지와 중앙점은 쓰지 않는다.
export const site = {
  name: '그저 돌릴 뿐',              // 2026-11-26 "룰렛 디펜스"에서 바꿈. 스토어 이름은 "그저 돌릴 뿐 - 슬롯 디펜스"
  nameEn: 'Just Spin',
  operator: 'Jstudio',
  email: 'roulette@wlswo.me',
  updated: '2026년 11월 26일',          // 이용약관 시행일 (게임 이름 변경, 판매하지 않는 상품 문구 정리)
  privacyUpdated: '2026년 11월 22일',   // 개인정보 처리방침 시행일 (닉네임과 랭킹 추가)
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** '/roulette-defense/', '/roulette-defense/privacy/' (GitHub Pages 가 끝에 / 를 붙이므로 맞춘다) */
export const href = (page: '' | 'privacy' | 'terms' | 'support') => `${base}/${page ? page + '/' : ''}`;
export const asset = (path: string) => `${base}/${path}`;
