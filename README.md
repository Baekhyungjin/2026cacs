# 2026 CSCA Seminar

제19회 CSCA 세미나 `적대적 환경속의 선교` 정보 페이지입니다.

## Local

```powershell
& 'C:\Program Files\nodejs\npm.cmd' install
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run preview
```

Preview URL:

```text
http://127.0.0.1:4173/2026-csca-seminar/
```

## Content

- `public/pdfs/`: 원본 핸드북과 발제별 분할 PDF
- `public/images/`: 세미나 대표 이미지
- `src/data/seminar.ts`: CSCA 소개, 발제자료, 일정, 활용방법 데이터

## Deploy

GitHub 저장소 `2026-csca-seminar`의 `main` 브랜치에 push하면 GitHub Pages 워크플로가 `dist`를 배포합니다.
