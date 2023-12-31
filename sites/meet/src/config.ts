import type { AvailabilitySlotsMap } from "./lib/types"

// 選択可能なスロットの分数
export const ALLOWED_DURATIONS = [60, 70, 30, 45]
export const MENU_ITEMS = [
  { name: "整体コース(初回)", duration: 60 },
  { name: "はり整体コース(初回)", duration: 90 },
  { name: "整体コース", duration: 30 },
  { name: "はり整体コース", duration: 45 },
]

export const OWNER_EMAIL = "hiroto.h.makise+seikotsu@gmail.com"
export const OWNER_NAME = "まきせ鍼灸整骨院"
export const OWNER_PHONE = "029 224 0076"
export const OWNER_ADDRESS =
  "〒310-0012 茨城県水戸市城東３丁目５−８ 城東ロイヤルハイツ １０３"
export const USER_ACCOUNT = "kikuo@alizza-ideal.com"
export const EMAIL_REPLYTO = OWNER_EMAIL
export const EMAIL_BCC = ["meet-makise@alizza-ideal.com"]

export const DURATION_TO_NAME = (duration: number) =>
  MENU_ITEMS.find((item) => item.duration === duration)?.name

// スロットの分数の初期値（何も指定していないばあの分数）
export const DEFAULT_DURATION = 30
export const DEFAULT_DURATION_NAME = DURATION_TO_NAME(DEFAULT_DURATION)

const OWNER_CALENDAR = "hiroto.h.makise@gmail.com"
const MEET_MAKISE_CALENDAR =
  "c_dcf39dca8a6217a946bec81663e9d460407d8480b46922a1850b4bc1be4b3f34@group.calendar.google.com"

// export const EVENT_CALENDAR = RESERVE_CALENDAR
export const EVENT_CALENDAR = MEET_MAKISE_CALENDAR
// export const EVENT_CALENDAR = OWNER_CALENDAR

// 空き状況を確認するカレンダーのID（primary はメインのカレンダー）
export const CALENDARS_TO_CHECK = [EVENT_CALENDAR, OWNER_CALENDAR]

export const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"]

// 使用可能なスロットとスロットの間の猶予時間
// この猶予時間がない場合、予約済みと表示される
export const SLOT_PADDING = 15

// タイムゾーン（TODO:国際的なリモートミーティングで使用）
export const OWNER_TIMEZONE = "Asia/Tokyo"

export const LEAD_TIME = 120

export const OFFER_OFFSET = 0
export const OFFER_DAYS = 21

// １日の営業時間
const DEFAULT_WORKDAY = [
  {
    start: {
      hour: 8,
    },
    end: {
      hour: 13,
      minute: 0,
    },
  },
  {
    start: {
      hour: 15,
    },
    end: {
      hour: 20,
      minute: 30,
    },
  },
]
const WED_WORKTIME = [
  {
    start: {
      hour: 8,
    },
    end: {
      hour: 13,
      minute: 0,
    },
  },
]

// 一週間のそれぞれの曜日の営業時間（0 = 月、1 = 火、6 = 日）
// 指定しなければ休業日
export const OWNER_AVAILABILITY: AvailabilitySlotsMap = {
  1: DEFAULT_WORKDAY,
  2: DEFAULT_WORKDAY,
  3: WED_WORKTIME,
  4: DEFAULT_WORKDAY,
  5: DEFAULT_WORKDAY,
  6: DEFAULT_WORKDAY,
}

export const OWNER_LOCALE = "ja-JP"

export const LOCAL_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "short",
}

export const LOCAL_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
}

export const REMINDERS = [
  { method: "email", minutes: 24 * 60 }, // Emailで１日前
  { method: "email", minutes: 60 }, // Emailで１時間前
  { method: "popup", minutes: 30 }, // ポップアップで３０分前
]
