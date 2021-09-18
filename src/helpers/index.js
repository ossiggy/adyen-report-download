const isLeapYear = year => ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

const getDays = ({month, year}) => {
  const thirty = ["4", "6", "9", "11"];
  const leapYear = isLeapYear(year)
  let daysOfMonth;
  switch(month){
    case month == "2" && leapYear:
      daysOfMonth = 29;
      break;
    case month == "2" && !leapYear:
      daysOfMonth = 28;
      break;
    case thirty.includes(month):
      daysOfMonth = 30;
      break;
    default:
      daysOfMonth = 31;
  }

  return daysOfMonth;
};

const getDateItems = date => {
  const split = date.split("-");
  return {
    month: split[0],
    day: split[1],
    year: split[2]
  };
};

const formatName = name => {
  return name.replace("/ /g", "_").toLowerCase
}

const createDateRange = (name, {start, end}) => {
  const startDate = getDateItems(start);
  const endDate = getDateItems(end);
  const fileName = formatName(name);

  const fileArray = [];

  for(let i=Number(startDate.day); i<Number(endDate.day); i++){
    let day;
    if (i < 10) {
      day = `0${i}`
    } else {
      day = `${i}`
    }
    fileArray.push(`${fileName}_${startDate.year}_${startDate.month}_${day}.csv`)
  }

  return fileArray;
};

const createBatchRange = (name, {start, end}) => {
  const fileArray = [];

  for(let i=Number(start); i<Number(end); i++) {
    let batchNum;
    if (i < 10) {
      batchNum = `0${i}`
    } else {
      batchNum = `${i}`
    }

    fileArray.push(`${name}_${batchNum}.csv`)
  }

  return fileArray;
}

const createRequest = (name, range, type) => {
  return fetch();
  //"https:\/\/ca-test.adyen.com\/reports\/download\/MerchantAccount\/[merchantAccountCode]\/settlement_detail_report_batch_12.csv"
};

const fetchReports = async (name, range, type) => {
  let fileNames;
  if (type === "date-based") {
    fileNames = createDateRange(name, range);
  } else {
    fileNames = createBatchRange(name, range);
  }
};

export {
  formatLabel
};