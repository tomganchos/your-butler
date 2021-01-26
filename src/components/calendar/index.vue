<template>
  <div v-if="true" class="calendar">
    <div class="calendar-header">
      <button><<</button>
      <button><</button>
      <span>{{ date.format('MMMM, YYYY') }}</span>
      <button>></button>
      <button>>></button>
    </div>
    <div class="calendar-body">
      <div class="calendar-body__header">
        <div class="week-header"></div>
        <div class="week-day">ПН</div>
        <div class="week-day">ВТ</div>
        <div class="week-day">СР</div>
        <div class="week-day">ЧТ</div>
        <div class="week-day">ПТ</div>
        <div class="week-day">СБ</div>
        <div class="week-day">ВС</div>
      </div>
      <div class="row calendar-row" v-for="week in createdCalendar">
        <button class="week" >
          <span class="week-number">
            {{ week.weekNum }}
          </span>
          <span class="week-info">
            <span class="week-task__number">{{ getTodoWeek(week).length }}</span>
            <font-awesome-icon icon="check-square" />
          </span>
        </button>
        <button :class="{ 'current-month': day.isCurrentMonth }" class="day" v-for="day in week.week">
          <span class="day-number">
            {{ day.dayNum }}
          </span>
          <span class="day-info">
            <span class="day-task">
              <span class="day-task__number">{{ day.tasks.length > 0 ? day.tasks.length : '' }}</span>
              <font-awesome-icon v-if="day.tasks.length > 0" icon="check-square" />
            </span>
            <span class="day-people">
              <font-awesome-icon icon="user" />
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    Тут будет календарь
  </div>
</template>

<script>
  import moment from 'moment'
  import {getTodoDay, getTodoWeek } from "../../services/todo";
  export default {
    name: "calendar",
    data () {
      return {
        date: moment().locale('ru'),
        weekNames: {
          0: 'mon',
          1: 'tue',
          2: 'wed',
          3: 'thu',
          4: 'fri',
          5: 'sat',
          6: 'sun'
        }
        // firstDayOfMonth: moment(this.date.format('YYYY-MM-') + '01', 'YYYY-MM-DD')
      }
    },
    mounted () {
      // this.createCalendar()
    },
    computed: {
      createdCalendar () {
        let firstDayOfMonth = moment(this.date.format('YYYY-MM-') + '01', 'YYYY-MM-DD')
        let firstDayOfWeek = moment().week(firstDayOfMonth.isoWeek())
        let lastDayOfMonth = moment(this.date.format('YYYY-MM-') + this.date.daysInMonth(), 'YYYY-MM-DD')
        const lastDayFromPrevMonth = parseInt(firstDayOfMonth.subtract(1, 'days').format('D'))

        let calendar = []
        let day = parseInt(firstDayOfMonth.startOf('week').format('D'))
        let isCurrentMonth = day === 1
        for (let weekNum = firstDayOfMonth.isoWeek(); weekNum < lastDayOfMonth.isoWeek(); weekNum++) {
          let week = []
          for (let i = 0; i < 7; i++) {

            if (!isCurrentMonth && day === lastDayFromPrevMonth) {
              day = 0
              isCurrentMonth = true
            }
            if (isCurrentMonth && day === parseInt(lastDayOfMonth.format('D'))) {
              day = 0
              isCurrentMonth = false
            }
            day++

            let obj = {
              day: this.weekNames[i],
              dayNum: day,
              isCurrentMonth: isCurrentMonth,
              tasks: isCurrentMonth ? this.getTasks(this.date.format('YYYYMM') + (day > 9 ? day : '0' + day)) : [],
              persons: []
            }
            week.push(obj)
          }
          calendar.push({weekNum, week})
        }

        console.log(calendar)
        // calendar = [
        //   {
        //     weekNum: 31,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 27,
        //         isCurrentMonth: false,
        //         tasks: [
        //           {
        //             id: 123,
        //             text: 'text',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'tue',
        //         dayNum: 28,
        //         isCurrentMonth: false,
        //         tasks: [
        //           {
        //             id: 124,
        //             text: 'textTue',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'wed',
        //         dayNum: 29,
        //         isCurrentMonth: false,
        //         tasks: [
        //           {
        //             id: 125,
        //             text: 'textWed',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'thu',
        //         dayNum: 30,
        //         isCurrentMonth: false,
        //         tasks: [
        //           {
        //             id: 126,
        //             text: 'textThu',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'fri',
        //         dayNum: 31,
        //         isCurrentMonth: false,
        //         tasks: [
        //           {
        //             id: 127,
        //             text: 'textFri',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'sat',
        //         dayNum: 1,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 128,
        //             text: 'textSat',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'sun',
        //         dayNum: 2,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 129,
        //             text: 'textSun',
        //             description: 'description'
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     weekNum: 32,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 3,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 223,
        //             text: 'text',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'tue',
        //         dayNum: 4,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 224,
        //             text: 'textTue',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'wed',
        //         dayNum: 5,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 225,
        //             text: 'textWed',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'thu',
        //         dayNum: 6,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 226,
        //             text: 'textThu',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'fri',
        //         dayNum: 7,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 227,
        //             text: 'textFri',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'sat',
        //         dayNum: 8,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 228,
        //             text: 'textSat',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'sun',
        //         dayNum: 9,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 229,
        //             text: 'textSun',
        //             description: 'description'
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     weekNum: 33,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 10,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'tue',
        //         dayNum: 11,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'wed',
        //         dayNum: 12,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'thu',
        //         dayNum: 13,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'fri',
        //         dayNum: 14,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'sat',
        //         dayNum: 15,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'sun',
        //         dayNum: 16,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     weekNum: 34,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 17,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'tue',
        //         dayNum: 18,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'wed',
        //         dayNum: 19,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'thu',
        //         dayNum: 20,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'fri',
        //         dayNum: 21,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'sat',
        //         dayNum: 22,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'sun',
        //         dayNum: 23,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     weekNum: 35,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 24,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'tue',
        //         dayNum: 25,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'wed',
        //         dayNum: 26,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'thu',
        //         dayNum: 27,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'fri',
        //         dayNum: 28,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'sat',
        //         dayNum: 29,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'sun',
        //         dayNum: 30,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     weekNum: 36,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 31,
        //         isCurrentMonth: true,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'tue',
        //         dayNum: 1,
        //         isCurrentMonth: false,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'wed',
        //         dayNum: 2,
        //         isCurrentMonth: false,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'thu',
        //         dayNum: 3,
        //         isCurrentMonth: false,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'fri',
        //         dayNum: 4,
        //         isCurrentMonth: false,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'sat',
        //         dayNum: 5,
        //         isCurrentMonth: false,
        //         tasks: [
        //         ]
        //       },
        //       {
        //         day: 'sun',
        //         dayNum: 6,
        //         isCurrentMonth: false,
        //         tasks: [
        //         ]
        //       }
        //     ]
        //   }
        // ]
        return calendar
      }
    },
    methods: {
      getTasks (YYYYMMDD) {
        const date = moment(YYYYMMDD, 'YYYYMMDD').format('YYYY-MM-DD')
        return getTodoDay(date)
      },
      getTodoWeek (week) {
        return getTodoWeek(this.date.format('YYYY-') + 'W' + week.weekNum)
      }
    }
  }
</script>

<style scoped>
  .calendar-body__header {
    display: flex;
  }
  .week-day {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    min-width: 24px;
    max-width: 48px;
    height: 32px;
  }
  .week-header {
    display: flex;
    flex-grow: 1;
    min-width: 24px;
    max-width: 48px;
    height: 32px;
  }
  button.day {
    display: flex;
    flex-grow: 1;
    min-width: 24px;
    max-width: 48px;
    height: 32px;
    color: #ccc;
    padding: 2px 3px;
    justify-content: space-between;
    border: solid #ccc 1px;
    background-color: #eee;
    cursor: pointer;
  }
  button.day.current-month {
    color: #888;
  }
  button.day.current-month .day-task {
    color: #6184d8;
  }
  button.day.current-month .day-people {
    color: #966B9D;
  }
  button.week {
    display: flex;
    flex-grow: 1;
    min-width: 24px;
    max-width: 48px;
    height: 32px;
    padding: 2px 3px;
    justify-content: space-between;
    border: solid #ccc 1px;
    background-color: #ddd;
    cursor: pointer;
  }
  .week-number {
    height: 100%;
    display: flex;
    align-items: center;
    color: #999;
  }
  .week-info {
    display: flex;
    font-size: x-small;
    color: #6184D8;
  }
  .week-info svg {
    height: 10px !important;
    width: 10px !important;
  }
  .week-task__number {
    margin-right: 2px;
  }
  .calendar-row {
    display: flex;
  }
  .day-number {
    font-size: larger;
  }
  .day-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
  .day-task {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    font-size: x-small;
    color: #6184D850;
  }
  .day-task__number {
    margin-right: 2px;
  }
  .day-task svg {
    height: 10px !important;
    width: 10px !important;
  }
  .day-people {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #966B9D50;
  }
  .day-people svg {
    height: 10px !important;
    width: 10px !important;
  }
</style>
