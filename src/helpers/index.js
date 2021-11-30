import request from "request-promise";

const isLeapYear = year => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

const getDays = (month, year) => {
  const thirty = ["04", "06", "09", "11"];
  const leapYear = isLeapYear(year)

  let daysOfMonth;

    if (month === "02" && leapYear) {
      daysOfMonth = 29;
    } else if (month === "02" && !leapYear) {
      daysOfMonth = 28;
    } else if (thirty.includes(month)) {
      daysOfMonth = 30;
    } else {
      daysOfMonth = 31;
    };

  return daysOfMonth;
};

const getDateItems = date => {
  const split = date.split("-");
  return {
    year: split[0],
    month: split[1],
    day: split[2]
  };
};

const createRange = (name, start, end, type) => {
  console.log(name, start, end, type)
  let template, startDate, endDate, fileName, first, last;
  const fileArray = [];

  if (type === 'date') {
    startDate = getDateItems(start);
    endDate = getDateItems(end);
    first = startDate.day;
    last = endDate.day;
    fileName = name.replace("/ /g", "_").toLowerCase;
    template = `${fileName}_${startDate.year}_${startDate.month}`
  } else {
    first = start;
    last = end;
    template = `${name}`
  };

  for(let i=Number(first); i<Number(last); i++) {
    let batchNum;
    if (i < 10) {
      batchNum = `0${i}`
    } else {
      batchNum = `${i}`
    }

    fileArray.push(`${template}_${batchNum}.csv`)
  }

  return fileArray;

};

const createRequest = async (filename, merchantAccount, wsUser, wsPassword) => {
  try {
    const options = {
      url: `https://${wsUser}:${wsPassword}@ca-test.adyen.com/reports/download/MerchantAccount/${merchantAccount}/${filename}`,
      method: "GET",
      json: true
    };

    return await request(options);
  } catch (err) {
    console.error('Error submitting request for', filename);
  }
  //"https:\/\/ca-test.adyen.com\/reports\/download\/MerchantAccount\/[merchantAccountCode]\/settlement_detail_report_batch_12.csv"
};

const fetchReports = async ({name, type}, {merchantAccount, username, password, start, end }) => {
  const fileNames = createRange(name, start, end, type);
  console.log(fileNames);
  return;
  // return Promise.all(fileNames.map(async filename => {
  //   return createRequest(filename, merchantAccount, username, password);
  // }));
};

export {
  getDays,
  fetchReports
};