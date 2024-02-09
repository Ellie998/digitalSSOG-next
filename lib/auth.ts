export function checkEmail(email: string): string | null {
  if (!email.includes('@')) return '이메일 주소 형식이 아닙니다.';
  else return null;
}
export function checkPassword(password: string): string | null {
  if (password.includes(' ')) return '비밀번호에 공백이 포함되었습니다.';
  if (password.replaceAll(' ', '').length < 8) return '비밀번호는 8자 이상이어야 합니다.';
  if (password.includes('')) return '비밀번호는 영문자를 하나 이상 포함해야 합니다.';
  if (password.includes('')) return '비밀번호는 특수문자를 하나 이상 포함해야 합니다.';
  else return null;
}
