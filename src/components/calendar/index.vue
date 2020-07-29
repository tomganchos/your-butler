<template>
  <div class="calendar">
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
      <div class="row" v-for="week in createdCalendar">
        <button class="week" >
          {{ week.weekNum }}
        </button>
        <button class="day" v-for="day in week.week">
          {{ day.dayNum }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
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
        console.log(firstDayOfMonth)
        console.log(firstDayOfMonth.isoWeek())
        let firstDayOfWeek = moment().week(firstDayOfMonth.isoWeek())
        console.log(firstDayOfWeek.date())
        let lastDayOfMonth = moment(this.date.format('YYYY-MM-') + this.date.daysInMonth(), 'YYYY-MM-DD')
        console.log(lastDayOfMonth)
        console.log(lastDayOfMonth.isoWeek())

        let calendar = []
        for (let weekNum = firstDayOfMonth.isoWeek(); weekNum <= lastDayOfMonth.isoWeek(); weekNum++) {
          let day = firstDayOfWeek.date()
          let week = []
          for (let i = 0; i < 7; i++) {
            if (day === firstDayOfWeek.daysInMonth()) {
              day = 1
            }

            let obj = {
              day: this.weekNames[i],
              dayNum: day,
              isCurrentMonth: true
            }
            week.push(obj)
            day++
          }
          calendar.push(week)
        }

        console.log(calendar)
        // calendar = [
        //   {
        //     weekNum: 27,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 29,
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
        //         dayNum: 30,
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
        //         dayNum: 1,
        //         isCurrentMonth: true,
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
        //         dayNum: 2,
        //         isCurrentMonth: true,
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
        //         dayNum: 3,
        //         isCurrentMonth: true,
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
        //         dayNum: 4,
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
        //         dayNum: 5,
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
        //     weekNum: 28,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 6,
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
        //         dayNum: 7,
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
        //         dayNum: 8,
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
        //         dayNum: 9,
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
        //         dayNum: 10,
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
        //         dayNum: 11,
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
        //         dayNum: 12,
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
        //     weekNum: 29,
        //     week: [
        //       {
        //         day: 'mon',
        //         dayNum: 13,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 323,
        //             text: 'text',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'tue',
        //         dayNum: 14,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 324,
        //             text: 'textTue',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'wed',
        //         dayNum: 15,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 325,
        //             text: 'textWed',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'thu',
        //         dayNum: 16,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 326,
        //             text: 'textThu',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'fri',
        //         dayNum: 17,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 327,
        //             text: 'textFri',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'sat',
        //         dayNum: 18,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 328,
        //             text: 'textSat',
        //             description: 'description'
        //           }
        //         ]
        //       },
        //       {
        //         day: 'sun',
        //         dayNum: 19,
        //         isCurrentMonth: true,
        //         tasks: [
        //           {
        //             id: 329,
        //             text: 'textSun',
        //             description: 'description'
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // ]
        return calendar
      }
    }
  }
</script>

<style scoped>
  .calendar-body__header {
    display: flex;
    justify-content: center;
  }
  .week-day {
    display: flex;
    flex-grow: 1;
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
  }
  button.week {
    display: flex;
    flex-grow: 1;
    min-width: 24px;
    max-width: 48px;
    height: 32px;
  }
</style>
