export const DUMMY_CLASS_LIST = [
  {
    id: 1,
    title: "스마트 팩토리 개발자 입문 과정 7기",
    period: "2024-12 ~ 2025-05",
    inProgress: true,
    code: "SF7TH",
  },
  {
    id: 2,
    title: "신재생 에너지 3기",
    period: "2025-05 ~ 2025-09",
    inProgress: false,
    code: "RE3TH",
  },
];

export const DUMMY_SECTION_LIST = [
  {
    id: 1,
    title: "Python",
    classList: ["SF7기", "신재생에너지3기"],
  },
  {
    id: 2,
    title: "C++",
    classList: ["SF7기", "신재생에너지3기"],
  },
  {
    id: 3,
    title: "데이터베이스(MySQL)",
    classList: ["SF7기", "신재생에너지3기"],
  },
  {
    id: 4,
    title: "AI",
    classList: ["SF7기", "신재생에너지3기"],
  },
  {
    id: 5,
    title: "PLC & HMI",
    classList: ["SF7기"],
  },
];

export const DUMMY_CHAPTER_LIST = [
  {
    id: 1,
    title: "1. 파이썬 개요",
  },
  {
    id: 2,
    title: "2. 변수와 자료형",
  },
  {
    id: 3,
    title: "3. 산술 연산자",
  },
  {
    id: 4,
    title: "4. 조건문",
  },
  {
    id: 5,
    title: "5. 반복문",
  },
];

export const DUMMY_CREW_LIST = [
  {
    id: 1,
    name: "고찬국",
    class: "SF7TH",
  },
  {
    id: 2,
    name: "김다운",
    class: "SF7TH",
  },
  {
    id: 3,
    name: "김민창",
    class: "SF7TH",
  },
  {
    id: 4,
    name: "김사무엘",
    class: "SF7TH",
  },
  {
    id: 5,
    name: "김성규",
    class: "SF7TH",
  },
];

export const DUMMY_QUIZ_LIST = [
  {
    id: 1,
    title: "기본 개념 퀴즈",
    section: "Python",
    chapter: "1. 파이썬 개요",
  },
  {
    id: 2,
    title: "변수 개념 확인 퀴즈",
    section: "Python",
    chapter: "2. 변수와 자료형",
  },
  {
    id: 3,
    title: "산술 여산자 문제",
    section: "Python",
    chapter: "3. 산술 연산자",
  },
  {
    id: 4,
    title: "조건문 기초 문제",
    section: "Python",
    chapter: "4. 조건문",
  },
  {
    id: 5,
    title: "반복문 기초 문제",
    section: "Python",
    chapter: "5. 반복문",
  },
];

export const DUMMY_QUESTION_LIST = [
  {
    id: 1,
    type: "OBJECTIVE",
    questionText: "1. 다음 중 정답을 고르세요",
    explanation: "",
    options: ["1. 파이썬", "2. C++", "3. DB", "4. PLC"],
    answer: ["1. 파이썬"],
  },
  {
    id: 2,
    type: "SUBJECTIVE",
    questionText: "2. 점심 메뉴를 적어주세요",
    explanation: "",
    subjective: "돈가스",
  },
  {
    id: 3,
    type: "OBJECTIVE",
    questionText: "1. 다음 중 정답을 고르세요",
    explanation: "",
    options: ["1. 파이썬", "2. C++", "3. DB", "4. PLC"],
    answer: ["1. 파이썬"],
  },
  {
    id: 4,
    type: "SUBJECTIVE",
    questionText: "2. 점심 메뉴를 적어주세요",
    explanation: "",
    subjective: "돈가스",
  },
];
