const readDayFileList = require('../../scripts/day.js');
const readWeekFileList = require('../../scripts/week.js');
const readMonthFileList = require('../../scripts/month.js');
const readQuarterFileList = require('../../scripts/quarter.js');

module.exports = {
  title: "shunblog",
  description: "Personal Blog",
  base: '/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    docsDir: '/',
    sidebar: [
      ["/", "Life Mission"],
      {
        title: "2019 Quarter",
        collapsable: true,
        children: readQuarterFileList('2019')
      },
      {
        title: "2019 Month",
        collapsable: true,
        children: readMonthFileList('2019')
      },
      {
        title: "2019 Week",
        collapsable: true,
        children: readWeekFileList('2019'),
      },
      {
        title: "2019/06",
        collapsable: true,
        children: readDayFileList('2019', '6')
      },
    ],
  }
};
