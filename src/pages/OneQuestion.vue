<template>
  <div class="question">
    <div class="content">
      <div class="question-number">
        <h1 id="number">{{ this.number_of_question }} / 14</h1>
        <h1>{{ this.question }}</h1>
        <div class="container">
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="80%">{{ this.result }}</text>
            </symbol>

            <g class="g-ants">
              <use xlink:href="#s-text" class="text-copy"></use>
              <use xlink:href="#s-text" class="text-copy"></use>
              <use xlink:href="#s-text" class="text-copy"></use>
              <use xlink:href="#s-text" class="text-copy"></use>
              <use xlink:href="#s-text" class="text-copy"></use>
            </g>
          </svg>
        </div>
      </div>
      <div class="buttons">
        <button @click="clickNo" class="button button-no">Нет</button>
        <button @click="clickEmpthy" class="button button-empthy">Не знаю</button>
        <button @click="clickYes" class="button button-yes">Да</button>
      </div>
    </div>
  </div>
</template>

<script>
import database from './data.js'




export default {
  name: 'one-question',
  data() {
    return {
      python_start: 0,
      python_junior: 0,
      scratch: 0,
      gamedev: 0,
      comp_science: 0,

      question: database[0].question,
      number_of_question: 0,
      result: ''
    }
  },
  methods: {
    clickYes() {
      if (this.number_of_question < database.length - 1) {
        console.log('clickYes');

        this.python_start += database[this.number_of_question].Python_Start_count
        this.python_junior += database[this.number_of_question].Python_Junior_count
        this.scratch += database[this.number_of_question].Scratch_count
        // this.gamedev += database[this.number_of_question].Game_Dev_count
        // this.comp_science += database[this.number_of_question].Comp_count

        console.log("Python-Start: " + String(this.python_start))
        console.log("Python-Junior: " + String(this.python_junior))
        console.log("Scratch: " + String(this.scratch))
        console.log("GameDev: " + String(this.gamedev))
        console.log("Comp_Science: " + String(this.comp_science))


        this.number_of_question += 1
        this.question = database[this.number_of_question].question
      }
      else {
        const all_courses = [this.python_start, this.python_junior, this.scratch, this.gamedev, this.comp_science]
        const all_courses_names = ["Python-Start", "Python-Junior", "Scratch", "GameDev", "Компьютерная грамотность"]
        this.question = "Вам больше всего подходит курс:"
        this.number_of_question = "∞"
        this.result = all_courses_names[all_courses.indexOf(Math.max(...all_courses))]
        console.log(this.question)
      }
    },
    clickNo() {
      if (this.number_of_question < database.length) {
        console.log('clickNo');

        this.python_start -= database[this.number_of_question].Python_Start_count
        this.python_junior -= database[this.number_of_question].Python_Junior_count
        this.scratch -= database[this.number_of_question].Scratch_count
        // this.gamedev -= database[this.number_of_question].Game_Dev_count
        // this.comp_science -= database[this.number_of_question].Comp_count

        console.log("Python-Start: " + String(this.python_start))
        console.log("Python-Junior: " + String(this.python_junior))
        console.log("Scratch: " + String(this.scratch))
        console.log("GameDev: " + String(this.gamedev))
        console.log("Comp_Science: " + String(this.comp_science))

        this.number_of_question += 1
        this.question = database[this.number_of_question].question
      }
      else {
        const all_courses = [this.python_start, this.python_junior, this.scratch, this.gamedev, this.comp_science]
        const all_courses_names = ["Python-Start", "Python-Junior", "Scratch", "GameDev", "Компьютерная грамотность"]
        this.question = "Вам больше всего подходит курс:"
        this.number_of_question = "∞"
        this.result = all_courses_names[all_courses.indexOf(Math.max(...all_courses))]
        console.log(this.question)
      }

    },
    clickEmpthy() {
      if (this.number_of_question < database.length) {
        console.log('clickEmpthy');
        this.number_of_question += 1
        this.question = database[this.number_of_question].question
      }
      else {
        const all_courses = [this.python_start, this.python_junior, this.scratch, this.gamedev, this.comp_science]
        const all_courses_names = ["Python-Start", "Python-Junior", "Scratch", "GameDev", "Компьютерная грамотность"]
        this.question = "Вам больше всего подходит курс:"
        this.number_of_question = "∞"
        this.result = all_courses_names[all_courses.indexOf(Math.max(...all_courses))]
        console.log(this.question)
      }

    },

  }
}
</script>

<style>
.question {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  padding: 10px 20px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='600' height='900' preserveAspectRatio='none' viewBox='0 0 600 900'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1093%26quot%3b)' fill='none'%3e%3crect width='600' height='900' x='0' y='0' fill='rgba(230%2c 224%2c 238%2c 1)'%3e%3c/rect%3e%3cpath d='M109.70200471620326 64.45776703663206L256.2281466374077 33.45859622654622 170.3356068065478-65.34946801084716z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M322.84641153030185 413.76615573861176L222.44549996205143 510.72218902046893 419.802444812159 514.1670673068622z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M138.20602621921813 485.3751036296589L53.72997606946845 319.19017866124074-37.39791700320262 454.2928360735855z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M326.32280012436485 692.5697486845419L387.46915457110094 735.3848870021893 421.11868482420397 622.2577861732615z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M192.10646702074908 641.5087123774605L93.6050917894917 754.821582511321 305.41933715460965 740.0100876087179z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M626.3924130124753 363.77382265866066L456.2241644707217 384.66785633547624 647.2864466892909 533.9420712004144z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M484.36270314624215 333.0145356007632L398.70495235315434 300.13360574927043 392.2124329724591 445.06069686464855z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M420.6578778439677 539.8430770459531L368.4613821691537 606.6515449147336 494.7723318097314 651.5420544925644z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M465.159382867158 949.3896213209183L591.4194348763934 967.1343144198636 482.90407596610333 823.1295693116829z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-38.25658264488289 88.97735132918243L36.94695506243664 266.61628521259183 140.76388381457613 133.73667597630595z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M681.5826903711954 399.66602757893384L699.0326261596555 289.49146906356145 525.0458204923669 318.4038446385575z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M279.2199730713378-69.20373694998389L226.84598873946567 17.96121058249844 383.7804022041252 52.93971331406547z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M241.81903833339658 721.3192982358229L173.3832190000125 787.4070007607968 307.90674085837054 789.755117569207z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M75.34179712460804 491.86400810688235L99.84818752585846 598.0128468956872 246.81825050844057 508.1788418994091z' fill='rgba(78%2c 51%2c 238%2c 0.36)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1093'%3e%3crect width='600' height='900' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
}

.question-number {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 4px solid #000;
}

#number {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
  border: 4px solid black;
  margin: 0 25%;
}

#result {
  color: transparent;
  background-image: linear-gradient(90deg, rgb(0, 0, 0), rgb(255, 255, 255));
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 300px 300px;
  background-position: 0 0;
  animation: bp 2s infinite linear;
  font-size: 60px;
}

@keyframes bp {
  from {
    background-position-x: 0px;
  }

  to {
    background-position-x: 100px;
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
}

.button {
  width: 100px;
  height: 100px;
  border-radius: 30%;
  border: none;
  margin: 0 10px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  border: 3px solid #000;
}

.button-no {
  background-color: #c90202;
  font-size: 40px;
}

.button-empthy {
  background-color: #000000;
  font-size: 30px;
}

.button-yes {
  background-color: #05ae05;
  font-size: 40px;
}

.container {
  display: flex;
  align-items: center;
}

svg {
  display: block;
  font: 10.5em 'Montserrat';
  width: 360px;
  height: 100px;
  margin: 0 auto;
}

.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: 6% 29%;
  stroke-width: 5px;
  stroke-dashoffset: 0%;
  animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1) {
  stroke: #4D163D;
  animation-delay: -1;
}

.text-copy:nth-child(2) {
  stroke: #840037;
  animation-delay: -2s;
}

.text-copy:nth-child(3) {
  stroke: #BD0034;
  animation-delay: -3s;
}

.text-copy:nth-child(4) {
  stroke: #BD0034;
  animation-delay: -4s;
}

.text-copy:nth-child(5) {
  stroke: #FDB731;
  animation-delay: -5s;
}

@keyframes stroke-offset {
  100% {
    stroke-dashoffset: -35%;
  }
}
</style>
