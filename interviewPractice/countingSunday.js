// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

const sunday = () => {
  let res = 0;

  for (let yr = 1900; yr <= 2000; yr++) {
    for (let mnth = 0; mnth < 12; mnth++) {
      const day = new Date(yr, mnth, 1).getDay();
      //console.log(day);
      if (day == 0) {
        res++;
      }
    }
  }
  console.log(res);
};
sunday();
