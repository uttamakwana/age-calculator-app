function findYear() {
  const day = document.querySelector("#day");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");
  const dayLabel = document.querySelector(".day-label");
  const monthLabel = document.querySelector(".month-label");
  const yearLabel = document.querySelector(".year-label");
  const dayError = document.querySelector(".error-day");
  const monthError = document.querySelector(".error-month");
  const yearError = document.querySelector(".error-year");

  if (!day.value) {
    dayLabel.classList.add("active");
    day.classList.add("active");
    dayError.classList.add("active");
  }

  if (!month.value) {
    monthLabel.classList.add("active");
    month.classList.add("active");
    monthError.classList.add("active");
  }

  if (!year.value) {
    year.classList.add("active");
    yearError.classList.add("active");
    yearLabel.classList.add("active");
  }

  if (day.value && month.value && year.value) {
    day.classList.remove("active");
    dayError.classList.remove("active");
    dayLabel.classList.remove("active");
    month.classList.remove("active");
    monthError.classList.remove("active");
    monthLabel.classList.remove("active");
    year.classList.remove("active");
    yearError.classList.remove("active");
    yearLabel.classList.remove("active");

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const birthDate = new Date(
      parseInt(year.value),
      parseInt(month.value) - 1,
      parseInt(day.value)
    );

    let finalYear = currentYear - birthDate.getFullYear();
    let finalMonth = currentMonth - (birthDate.getMonth() + 1);
    let finalDay = currentDay - birthDate.getDate();

    if (finalDay < 0) {
      finalMonth--;
      const daysInLastMonth = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      finalDay += daysInLastMonth;
    }

    if (finalMonth < 0) {
      finalYear--;
      finalMonth += 12;
    }

    const yearSpan = document.querySelector(".answer-year");
    const monthSpan = document.querySelector(".answer-month");
    const daySpan = document.querySelector(".answer-days");

    yearSpan.innerText = finalYear;
    monthSpan.innerText = finalMonth;
    daySpan.innerText = finalDay;
  }
}
