<template>
  <section id="home">
    <video autoplay muted loop id="myVideo">
      <source src="@/assets/bg.mp4" type="video/mp4">
    </video>

    <div class="content" id="document">
      <div class="label">
        <h1>Пробный урок</h1>
        <h2>Atmosphere Education</h2>
      </div>

      <div class="document">
        <div class="document__title">
          <h1>Результаты</h1>
        </div>

        <div class="name-data">
          <div>
            <div class="name">
              <h1>{{ name }}</h1>
            </div>
            <div class="name">
              <p>{{ age }} лет</p>
            </div>
          </div>
          <div class="name">
            <h4>{{ result }}</h4>
          </div>
        </div>

        <div class="document__content">

          <div class="document-item">
            <h2 class="desc-label">На пробном уроке</h2>
            <div class="document-material">

              <ol class="maked">
                <li>
                  Изучили материал
                </li>
                <li>
                  Прошли профориентацию
                </li>

                <li v-if="turtle">
                  Создали программу на Python
                </li>
                <li v-if="site">
                  Написали первый сайт
                </li>
                <li v-if="scratch">
                  Сделали игру
                </li>
                <li v-if="scratch_game_1">
                  Написали игру "Шарики"
                </li>
                <li v-if="scratch_game_2">
                  Написали игру "Змейка"
                </li>
                <li v-if="scratch_game_3">
                  Написали игру "Кошки-Мышки"
                </li>
                <li v-if="design3D">
                  Попробовали 3D-графику
                </li>
                <li v-if="tinker_design_1">
                  Выполнили задание "Стройка"
                </li>
                <li v-if="tinker_design_2">
                  Выполнили задание "Ендердракон"
                </li>
                <li v-if="tinker_design_3">
                  Выполнили задание "Арена"
                </li>
                <li v-if="figma">
                  Попробовали векторную графику
                </li>
                <li v-if="figma_design_1">
                  Выполнили задание "Пейзаж"
                </li>
              </ol>
            </div>


          </div>
        </div>

        <div class="document__content">
          <h2 class="desc-label">Время</h2>
          <div class="maked">
            <p v-if="site_timer"><strong>Создавали сайт: </strong>{{ site_timer }} минут</p>
            <p v-if="turtle_timer"><strong>Создавали программу на Python:</strong> {{ turtle_timer }} минут</p>
            <p v-if="scratch_timer"><strong>Создавали игры:</strong> {{ scratch_timer }} минут</p>
            <p v-if="design3D_timer"><strong>Работали с 3D-графикой:</strong> {{ design3D_timer }} минут</p>
            <p v-if="figma_timer"><strong>Рисовали в векторной графике:</strong> {{ figma_timer }} минут</p>
            <p v-if="present_timer"><strong>На изучение материалов:</strong> {{ present_timer }} минут</p>
            <p v-if="test_timer"><strong>На тест:</strong> {{ test_timer }} минут</p>

          </div>
        </div>

        <div class="document__content">
          <h2 class="desc-label">Тип мышления</h2>
          <div class="document-item">
            <div v-if="site && turtle && design3D && Number(site_timer) > 10">
              <p>Всесторонне-развитое мышление</p>
              <p class="description">(Ученик отлично развит, одинаково хорош и в логике, и в аналитике и в творчестве, ему
                подходят курсы <i class="course">IT-Start</i>, <i class="course">IT-Adult</i> и <i
                  class="course">GameDev</i>)</p>
              <p class="chance">Обычно 8 учеников из 100 имеют Всесторонне-развитое мышление</p>
            </div>
            <div v-else-if="site && turtle && Number(site_timer) > 10">
              <p>Аналитическое мышление</p>
              <p class="description">(У ученика явно выделяются аналитические навыки - такие ученики проявляют успехи в
                написании сложного кода, ему подходят курсы <i class="course">IT-Adult</i> и <i
                  class="course">IT-Start</i> )</p>
              <p class="chance">Обычно 12 учеников из 100 имеют Аналитическое мышление</p>
            </div>
            <div v-else-if="design3D && Number(design3D_timer) > 15">
              <p>Пространственное мышление</p>
              <p class="description">(У ученика явно выделяются творческие навыки - такие ученики проявляют успехи в
                геометрии и пространственном мышлении, ему подходят курсы <i class="course">IT-Junior</i>, <i
                  class="course">IT-Start</i> и <i class="course">GameDev</i> )</p>
              <p class="chance">Обычно 9 учеников из 100 имеют Пространственное мышление</p>
            </div>
            <div v-else-if="figma_design_1 && Number(figma_timer) > 15">
              <p>Творческое мышление</p>
              <p class="description">(У ученика явно выделяются логические навыки - но не хватает навыков управления
                компьютером, ему подходят курс <i class="course">IT-Junior</i> )</p>
              <p class="chance">Обычно 14 учеников из 100 имеют Творческое мышление</p>
            </div>
            <div v-else-if="scratch_game_1 || scratch_game_2 || scratch_game_3">
              <p>Игровое мышление</p>
              <p class="description">(К ученику нужен игровой подход, и строгий и понимамающий преподаватель, ему идеально
                подходит курс <i class="course">IT-Junior</i> )</p>
              <p class="chance">Обычно 34 ученика из 100 имеют Игровое мышление</p>
            </div>
            <div v-else-if="tinker_design_1 || tinker_design_2 || tinker_design_3">
              <p>Созидательное мышление</p>
              <p class="description">(У ученика явно прослеживается потребность создавать, ему идеально
                подходит курс <i class="course">GameDev</i> )</p>
              <p class="chance">Обычно 16 учеников из 100 имеют Созидательное мышление</p>
            </div>
            <div v-else>
              <p>Нестандартное мышление</p>
              <p class="description">(Мышление ученика нельзя определить алгоритмом, ученик отличается сильной
                нестандартностью, ему подходит <i class="course">IT-Junior</i> и <i class="course">IT-Start</i>)</p>
              <p class="chance">Обычно 1 ученик из 100 имеют Нестандартное мышление</p>
            </div>
          </div>
        </div>

      </div>



      <div class="download">
        <button @click="downloadDocument">Скачать результаты</button>
      </div>

    </div>

  </section>
</template>

<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
  name: 'result-page',
  beforeMount() {
    if (this.site || this.turtle) {
      localStorage.setItem('course', 'IT-Start')
    }
  },
  data() {
    return {
      name: localStorage.getItem('name') ? localStorage.getItem('name') : '',
      age: localStorage.getItem('age') ? localStorage.getItem('age') : '',
      result: localStorage.getItem('course') ? localStorage.getItem('course') : '',
      design3D: localStorage.getItem('design3D') ? localStorage.getItem('design3D') : false,
      test: localStorage.getItem('test') ? localStorage.getItem('test') : false,
      turtle: localStorage.getItem('turtle') ? localStorage.getItem('turtle') : false,
      present: localStorage.getItem('present') ? localStorage.getItem('present') : false,
      site: localStorage.getItem('site') ? localStorage.getItem('site') : false,
      scratch: localStorage.getItem('scratch') ? localStorage.getItem('scratch') : false,
      figma: localStorage.getItem('figma') ? localStorage.getItem('figma') : false,

      site_timer: localStorage.getItem('site_timer') ? String(Number(localStorage.getItem('site_timer')) / 1000 / 60).slice(0, 4) : false,
      turtle_timer: localStorage.getItem('turtle_timer') ? String(Number(localStorage.getItem('turtle_timer')) / 1000 / 60).slice(0, 4) : false,
      scratch_timer: localStorage.getItem('scratch_timer') ? String(Number(localStorage.getItem('scratch_timer')) / 1000 / 60).slice(0, 4) : false,
      figma_timer: localStorage.getItem('figma_timer') ? String(Number(localStorage.getItem('figma_timer')) / 1000 / 60).slice(0, 4) : false,
      test_timer: localStorage.getItem('test_timer') ? String(Number(localStorage.getItem('test_timer')) / 1000 / 60).slice(0, 4) : false,
      design3D_timer: localStorage.getItem('design3D_timer') ? String(Number(localStorage.getItem('design3D_timer')) / 1000 / 60).slice(0, 4) : false,
      present_timer: localStorage.getItem('present_timer') ? String(Number(localStorage.getItem('present_timer')) / 1000 / 60).slice(0, 4) : false,


      figma_design_1: localStorage.getItem('figma_design_1') ? localStorage.getItem('figma_design_1') : false,
      tinker_design_1: localStorage.getItem('tinker_design_1') ? localStorage.getItem('tinker_design_1') : false,
      tinker_design_2: localStorage.getItem('tinker_design_2') ? localStorage.getItem('tinker_design_2') : false,
      tinker_design_3: localStorage.getItem('tinker_design_3') ? localStorage.getItem('tinker_design_3') : false,
      scratch_game_1: localStorage.getItem('scratch_game_1') ? localStorage.getItem('scratch_game_1') : false,
      scratch_game_2: localStorage.getItem('scratch_game_2') ? localStorage.getItem('scratch_game_2') : false,
      scratch_game_3: localStorage.getItem('scratch_game_3') ? localStorage.getItem('scratch_game_3') : false,

      count: ['turtle', 'scratch', 'site', 'design3D', 'figma',
        'figma_design_1', 'tinker_design_1', 'tinker_design_2', 'tinker_design_3', 'scratch_game_1', 'scratch_game_2', 'scratch_game_3'].map(item => localStorage.getItem(item)).filter(item => item).length,
    }
  },
  methods: {


    downloadDocument() {
      // document.querySelector('#document').style.width = '633px';
      // document.querySelector('#document').style.height = '1300px';

      const el = document.querySelector("#document") // Устанавливаем ширину страницы 100%
      // Отключаем мобильную адаптацию

      const pdf = new jsPDF();

      // Размер страницы
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Убрать кнопку скачать
      document.querySelector('.download').style.visibility = 'hidden';

      html2canvas(el).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Вычисляем размеры изображения, чтобы оно растянулось на всю страницу по высоте
        const imgHeight = pdfHeight;
        const imgWidth = canvas.width * imgHeight / canvas.height;

        const x = (pdf.internal.pageSize.getWidth() - imgWidth) / 2; // Рассчитываем координату x для центрирования
        const y = 0; // Устанавливаем координату y в 0


        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

        pdf.setFontSize(23);
        pdf.setTextColor(238, 130, 238);
        pdf.textWithLink('Instagram', (pdf.internal.pageSize.getWidth() - 400 * 1 / 3), (pdf.internal.pageSize.getHeight() - 5), { align: 'center', url: 'https://www.instagram.com/atmosphere_it/' });
        pdf.setFontSize(23);
        pdf.setTextColor(220, 83, 0);
        pdf.textWithLink('Site', (pdf.internal.pageSize.getWidth() * 2 / 3), (pdf.internal.pageSize.getHeight() - 5), { align: 'center', url: 'http://atmosphereit.kz/' });


        pdf.save(`${this.name}-${this.age}-atmosphere-education-Отчет по пробному уроку.pdf`);
      });
    }
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  height: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #000000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  background-color: #000000;
  padding: 20px;
  border: 4px solid #000000;
  z-index: 100;
}

.label {
  font-size: 30px;
}

.label h2 {
  color: transparent;
  background-image: linear-gradient(90deg, rgb(255, 0, 0), rgb(248, 145, 0), rgb(255, 255, 0), rgb(43, 243, 43), rgb(20, 243, 243), rgb(83, 31, 236), rgb(243, 55, 202));
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 300px 300px;
  background-position: 0 0;
  animation: bp 2s infinite linear;
  font-size: 35px;
}

.label h2 {
  font-size: 35px;
  color: black;
}

@keyframes bp {
  from {
    background-position-x: 0px;
  }

  to {
    background-position-x: 300px;
  }
}

::-webkit-input-placeholder {
  color: rgb(0, 0, 0);
  font-size: 20px;
}

.stage {
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #4b0342;
  border-radius: 10px;
  padding: 10px 40px;
  font-size: 30px;
  margin-top: 20px;
}

.document {
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #4b0342;
  border-radius: 10px;
  padding: 10px 40px;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}


.document__content__item p {
  font-size: 20px;
  color: #4b0342;
  font-weight: bold;
}

@media (max-width: 1024px) {
  .number p {
    font-size: 20px;
  }

  .maked p {
    font-size: 20px;
  }

  .document-material {
    justify-content: flex-start;
  }

  .document {
    padding: 10px;
  }

  .content {
    padding: 10px;
    width: 90vw;
  }
}

.name-data {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}


.name h1 {
  font-size: 30px;
  color: #4b0342;
  font-weight: bold;
}

.name p {
  font-size: 20px;
  color: #919191;
  font-style: italic;
}

.name h4 {
  font-size: 40px;
  color: #470ff0;
  font-weight: bold;
}

.name h3 {
  font-size: 20px;
  color: #4b0342;
  font-weight: bold;
}

.document-material {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
}

.document-number {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
}

.maked {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  list-style-type: decimal;
  /* Устанавливаем тип нумерации - десятичную */
  list-style-position: inside;
  padding: 0 20px;
}

.maked li {
  margin-right: 10px;
  text-align: left;
}


.maked li::marker {
  color: #eb4d13;
  font-size: 35px;
}

.number p {
  margin-right: 10px;
  font-size: 25px;
}

.description {
  font-size: 18px;
  color: gray;
  max-width: 80%;
  text-align: center;
  margin: 0 auto;
}

.download button {
  width: 250px;
  height: 7vh;
  font-size: 20px;
  background-color: orange;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  margin-top: 20px;
}

.desc-label {
  margin-top: 15px;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.maked p {
  text-align: start;
  font-size: 25px;
}

.chance {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  font-size: 18px;
}

.course {
  font-size: 24px;
  color: blue;
}

@media screen and (max-width: 768px) {
  #home {
    height: 2100px;
  }

  .label {
    font-size: 20px;
  }

  .document__title h1 {
    font-size: 35px;
    margin-bottom: 20px;
  }

  video {
    display: none
  }

  .desc-label {
    font-size: 35px;
  }

  .maked li {
    font-size: 20px;
    text-align: start;
  }

  .document-number {
    height: 100%;
  }

  .maked {
    padding: 10px;
  }

  .description {
    max-width: 100%;
    margin-top: 15px;
  }

  .maked li::marker {
    color: #eb4d13;
    font-size: 22px;
  }


}
</style>
