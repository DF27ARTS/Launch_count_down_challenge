/* __________ Tags __________ */
const countDownButtons = document.querySelectorAll(".count-down");
const pageTitle = document.querySelector(".page-title");

const countDownUpNumber = document.querySelectorAll(".up-number");
const countDownDownNumber = document.querySelectorAll(".down-number");
const countDownMitleNumber = document.querySelectorAll(".mittle-number");

/* __________ Variables __________ */
const ONE_SECOND = 1_000;
const ONE_MINUTE = 1_000 * 60;
const ONE_HOUR = 1_000 * 60 * 60;
const ONE_DAY = 1_000 * 60 * 60 * 24;

const ANIMATION_DUTATION = 700;

/* __________ Constantes __________ */
const formatNumber = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

const FORMATER = formatNumber.format;

const setMinuteCountDown = (TOTAL_TIME, TIME, TIME_DELAY, max_time, index) => {
  if (TOTAL_TIME <= 0) return;
  const NEW_TIME = TIME < 0 ? max_time : TIME;

  const down_count = NEW_TIME;
  const up_count = down_count <= 0 ? max_time : down_count - 1;

  countDownButtons[index].classList.add("current-count-active");

  setTimeout(() => {
    countDownUpNumber[index].setAttribute("area-count-up", FORMATER(up_count));
    countDownDownNumber[index].setAttribute(
      "area-count-down",
      FORMATER(down_count)
    );
    countDownMitleNumber[index].setAttribute(
      "area-count-up",
      FORMATER(up_count)
    );
    countDownMitleNumber[index].setAttribute(
      "area-count-down",
      FORMATER(down_count)
    );
    countDownButtons[index].classList.remove("current-count-active");
  }, ANIMATION_DUTATION);

  setTimeout(() => {
    setMinuteCountDown(
      TOTAL_TIME - 1,
      NEW_TIME - 1,
      TIME_DELAY,
      max_time,
      index
    );
  }, TIME_DELAY);
};

const setInitialTime = (index, TIME) => {
  countDownUpNumber[index].setAttribute("area-count-up", FORMATER(TIME));
  countDownDownNumber[index].setAttribute("area-count-down", FORMATER(0));
  countDownMitleNumber[index].setAttribute("area-count-up", FORMATER(TIME));
  countDownMitleNumber[index].setAttribute("area-count-down", FORMATER(0));
};

const startCountDown = () => {
  countDownButtons.forEach((_, index) => {
    if (index === 3) {
      let SECOND_AMOUNT = (ONE_DAY * 14) / ONE_SECOND;
      const SECONDS = (ONE_SECOND * SECOND_AMOUNT) / ONE_SECOND;
      const initialValue = -1;
      const loopCounter = 59;

      setInitialTime(index, initialValue + 1);
      setMinuteCountDown(SECONDS, initialValue, ONE_SECOND, loopCounter, index);
    }
    if (index === 2) {
      let MINUTE_AMOUNT = (ONE_DAY * 14) / ONE_MINUTE;
      const MINUTES = (ONE_MINUTE * MINUTE_AMOUNT) / ONE_MINUTE;
      const initialValue = -1;
      const loopCounter = 59;

      setInitialTime(index, initialValue + 1);
      setMinuteCountDown(MINUTES, initialValue, ONE_MINUTE, loopCounter, index);
    }
    if (index === 1) {
      let HOUR_AMOUNT = (ONE_DAY * 14) / ONE_HOUR;
      const HOURS = (ONE_HOUR * HOUR_AMOUNT) / ONE_HOUR;
      const initialValue = -1;
      const loopCounter = 24;

      setInitialTime(index, initialValue + 1);
      setMinuteCountDown(HOURS, initialValue, ONE_HOUR, loopCounter, index);
    }
    if (index === 0) {
      let DAY_AMOUNT = (ONE_DAY * 14) / ONE_DAY;
      const DAYS = (ONE_DAY * DAY_AMOUNT) / ONE_DAY;
      const initialValue = 13;
      const loopCounter = 30;

      setInitialTime(index, initialValue + 1);
      setMinuteCountDown(DAYS, initialValue, ONE_DAY, loopCounter, index);
    }
  });
};

/* __________ Listeners __________ */
pageTitle.addEventListener("click", () => {
  startCountDown();
});
