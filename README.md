
# 🛡️ FactShield

뉴스 URL을 입력하면 **팩트 점수**를 시각적으로 보여주는 Next.js 기반 웹 애플리케이션입니다.  
사용자가 입력한 URL을 기준으로 무작위 점수를 생성해 **게이지 차트**로 시각화하며, 참고자료 카드도 함께 제공합니다.

---

## 📁 프로젝트 구조

```
.
├── public/              # 정적 리소스 (SVG 아이콘들)
├── src/
│   ├── app/             # App Router 기준 주요 페이지 및 레이아웃 구성
│   │   ├── page.tsx     # 메인 화면
│   │   ├── layout.tsx   # 공통 레이아웃
│   │   └── globals.css  # 전역 스타일
│   ├── components/      # UI 컴포넌트 (예: Gauge)
│   └── lib/             # (향후 유틸/비즈니스 로직 용도)
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## 🚀 시작하기

### 1. 설치

```bash
npm install
```

> 또는 `pnpm install` 또는 `yarn install`도 lock 파일에 따라 가능

### 2. 개발 서버 실행

```bash
npm run dev
```

로컬 개발 서버가 `http://localhost:3000`에서 시작됩니다.

---

## 🛠️ 기술 스택

| 항목            | 내용                                      |
|-----------------|-------------------------------------------|
| 프레임워크       | [Next.js 15](https://nextjs.org/) (App Router) |
| 언어            | TypeScript, JSX                           |
| 스타일          | Tailwind CSS                              |
| 상태 관리       | React useState                            |
| UI 컴포넌트     | Radix UI 기반 구성요소 사용 (Button, Input 등) |
| 시각화          | 커스텀 Gauge 차트                         |
| 아이콘          | Lucide-react + SVG 아이콘 파일             |

---

## 🎯 주요 기능

- 🔍 뉴스 URL 입력 후 팩트 점수 시각화
- 📊 게이지 차트를 통한 점수 표현
- 🗂 참고자료 카드 표시 (클릭 이벤트 포함)
- 🎨 모바일 대응 및 반응형 UI (Tailwind 기반)

---

## 📦 의존성 예시 (`package.json`)

- `next@15.x`
- `react@19.x`
- `tailwindcss@4.x`
- `framer-motion`, `lucide-react`
- `@radix-ui/react-slot`, `clsx`, `tailwind-merge` 등

---

## 📌 향후 개선 아이디어

- 실제 뉴스 분석 알고리즘 연동
- 백엔드 API와의 연결
- 사용자 로그/통계 분석

---

## 🔒 라이선스

> 본 프로젝트는 개인 또는 비영리적 목적의 개발 학습용으로 제공됩니다.

---

## 🖼️ 미리보기 (선택사항)

프로젝트 실행 화면을 PNG나 GIF로 첨부하실 수 있습니다.

---

## 🔗 기타

- 개발자 환경: Node.js 20+, Next.js 15 App Router
- 배포 환경: (ex. Vercel, Netlify 등 직접 기재 가능)
