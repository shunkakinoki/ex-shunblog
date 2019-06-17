const readDayFileList = require('../../scripts/day.js');
const readWeekFileList = require('../../scripts/week.js');
const readMonthFileList = require('../../scripts/month.js');
const readQuarterFileList = require('../../scripts/quarter.js');

module.exports = {
  title: "shunblog",
  description: "Personal Blog",
  base: '/',
  head: [
    ['link', {
      rel: 'icon',
      href: 'logo.png'
    }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: 'logo.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Life Mission',
        link: '/life-mission/'
      }, {
        text: 'Timeline',
        link: '/timeline/'
      },
      {
        text: 'Github',
        link: 'https://github.com/shunkakinoki/shunblog'
      },
    ],
    sidebar: [
      ["/life-mission/", "Life Mission"],
      ["/timeline/", "Timeline"],
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
