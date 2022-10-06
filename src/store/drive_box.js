let defaultValue = "예약불가";
let [옵션1, 옵션2, 옵션3] = ["좌타", "스윙분석타석", "일반타석"];
const list = [
  {
    id: 1,
    타석: [
      {
        층수: 2,
        리스트: [
          { id: 1, 옵션: 옵션1, 상태: defaultValue, 남은시간: 68 },
          { id: 2, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 3, 옵션: 옵션3, 상태: defaultValue, 남은시간: 90 },
          { id: 4, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 5, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 6, 옵션: 옵션3, 상태: defaultValue, 남은시간: null },
          { id: 7, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
        ],
      },
      {
        층수: 3,
        리스트: [
          { id: 11, 옵션: 옵션3, 상태: defaultValue, 남은시간: null },
          { id: 12, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 13, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 14, 옵션: 옵션3, 상태: defaultValue, 남은시간: null },
          { id: 15, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 16, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 17, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 18, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 19, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 20, 옵션: 옵션3, 상태: defaultValue, 남은시간: null },
          { id: 21, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 22, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 23, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
        ],
      },
      {
        층수: 4,
        리스트: [
          { id: 11, 옵션: 옵션3, 상태: defaultValue, 남은시간: null },
          { id: 12, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 13, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 14, 옵션: 옵션3, 상태: defaultValue, 남은시간: null },
          { id: 15, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 16, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 17, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 18, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 19, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 20, 옵션: 옵션3, 상태: defaultValue, 남은시간: null },
          { id: 21, 옵션: 옵션2, 상태: defaultValue, 남은시간: null },
          { id: 22, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
          { id: 23, 옵션: 옵션1, 상태: defaultValue, 남은시간: null },
        ],
      },
    ],
    이미지:
      "https://image.xgolf.com/file/2022/0628/2022062868337291taeyoonko.png",
  },
];

export default list;
