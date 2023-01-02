<template>
  <div class="question">
    <h1>{{ this.question }}</h1>
    <div class="buttons">
      <button @click="clickNo" class="button button-no">Нет</button>
      <button @click="clickEmpthy" class="button button-empthy">Не знаю</button>
      <button @click="clickYes" class="button button-yes">Да</button>
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
      number_of_question: 0
    }
  },
  components: {
  },
  methods: {
    clickYes() {
      if (this.number_of_question < database.length) {
        console.log('clickYes');

        this.python_start += database[this.number_of_question].Python_Start_count
        this.python_junior += database[this.number_of_question].Python_Junior_count
        this.scratch += database[this.number_of_question].Scratch_count
        this.gamedev += database[this.number_of_question].Game_Dev_count
        this.comp_science += database[this.number_of_question].Comp_count

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
        const all_courses_names = ["Python-Start", "Python-Junior", "Scratch", "GameDev", "Comp_Science"]
        this.question = "Ваш результат: " + all_courses_names[all_courses.indexOf(Math.max(...all_courses))]
        console.log(this.question)
      }
    },
    clickNo() {
      if (this.number_of_question < database.length) {
        console.log('clickNo');

        this.python_start -= database[this.number_of_question].Python_Start_count
        this.python_junior -= database[this.number_of_question].Python_Junior_count
        this.scratch -= database[this.number_of_question].Scratch_count
        this.gamedev -= database[this.number_of_question].Game_Dev_count
        this.comp_science -= database[this.number_of_question].Comp_count

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
        const all_courses_names = ["Python-Start", "Python-Junior", "Scratch", "GameDev", "Comp_Science"]
        this.question = "Ваш результат: " + all_courses_names[all_courses.indexOf(Math.max(...all_courses))]
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
        const all_courses_names = ["Python-Start", "Python-Junior", "Scratch", "GameDev", "Comp_Science"]
        this.question = "Ваш результат: " + all_courses_names[all_courses.indexOf(Math.max(...all_courses))]
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
  background-color: #f5f5f5;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.button {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  margin: 0 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}

.button-no {
  background-color: #ff0000;
}

.button-empthy {
  background-color: #3c18cf;
}

.button-yes {
  background-color: #00ff00;
}
</style>
