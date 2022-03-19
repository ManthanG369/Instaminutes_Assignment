const schedule = require("node-schedule");

// const someDate = new Date("2022-18-03T18:14:00.000+5:30")
// console.log(someDate);

const EventsData = [
  {
    text: "textOne",
    datetime: "2022-03-19T18:10:30.000",
  },
  {
    text: "textTwo",
    datetime: "2022-03-19T18:10:30.000",
  },
  {
    text: "textThree",
    datetime: "2022-03-19T18:15:30.000",
  },
  {
    text: "textFour",
    datetime: "2022-03-20T18:18:30.000",
  },
  {
    text: "textFive",
    datetime: "2022-03-20T18:10:30.000",
  },
  {
    text: "textSix",
    datetime: "2022-03-21T18:10:30.000",
  },
  {
    text: "textSeven",
    datetime: "2022-03-19T18:11:30.000",
  },
  {
    text: "textEight",
    datetime: "2022-03-19T18:14:30.000",
  },
  {
    text: "textNine",
    datetime: "2022-03-19T18:13:30.000",
  },
  {
    text: "textTen",
    datetime: "2022-03-19T18:16:30.000",
  },
];

for (let i = 0; i < EventsData.length; i++) {
  let someDate = new Date(EventsData[i].datetime);
  schedule.scheduleJob(someDate, () => {
    //   console.log();
    Trigger(EventsData[i].text);
  });
}

function Trigger(str) {
  let lengthOfString = str.length;
  let time = lengthOfString * 1000;

  //
  setTimeout(() => {
    console.log(reverse(str));
  }, time);
}

// this function take argument string reverse it return it
function reverse(str) {
  return str.split("").reverse().join("").toLowerCase();
}
