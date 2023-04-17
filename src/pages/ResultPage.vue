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
            <h2>На пробном уроке</h2>
            <div class="document-material">
              <div class="document-number">
                <div v-for="item in count + 2" :key="item" class="number">
                  <p>{{ item }}.</p>
                </div>
              </div>
              <div class="maked">
                <p>Изучили материал</p>
                <p v-if="test">Прошли профориентацию</p>
                <p v-if="design3D">Попробовали 3D-графику</p>
                <p v-if="turtle">Создали программу на Python</p>
                <p v-if="scratch">Сделали игру</p>
                <p v-if="site">Написали первый сайт</p>
                <p v-if="figma">Попробовали векторную графику</p>
              </div>
            </div>


          </div>
        </div>

        <div class="document__content">
          <h2>Тип мышления</h2>
          <div class="document-item">
            <div v-if="site && turtle && design3D">
              <p>Всесторонне-развитое мышление</p>
              <p class="description">(Ученик отлично развит, одинаково хорош и в логике, и в аналитике и в творчестве, ему
                подходят курсы IT-Start, IT-Adult и GameDev)</p>
            </div>
            <div v-else-if="site && turtle">
              <p>Аналитическое мышление</p>
              <p class="description">(У ученика явно выделяются аналитические навыки - такие ученики проявляют успехи в
                написании сложного кода, ему подходят курсы IT-Adult и IT-Start )</p>
            </div>
            <div v-else-if="design3D || figma">
              <p>Творческое мышление</p>
              <p class="description">(У ученика явно выделяются творческие навыки - такие ученики проявляют успехи в
                геометрии и пространственном мышлении, ему подходят курсы IT-Junior, IT-Start и GameDev )</p>
            </div>
            <div v-else-if="scratch">
              <p>Логическое мышление</p>
              <p class="description">(У ученика явно выделяются логические навыки - но не хватает навыков управления
                компьютером, ему подходят курс IT-Junior )</p>
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
      count: ['turtle', 'scratch', 'site', 'design3D', 'figma'].length,
    }
  },
  methods: {
    downloadDocument() {
      const el = document.querySelector("#document");

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

        pdf.textWithLink('Instagram', (pdf.internal.pageSize.getWidth() / 2), (pdf.internal.pageSize.getHeight() - 20), { align: 'center', url: 'https://www.instagram.com/atmosphere_it/' });

        pdf.setFontSize(23);
        pdf.setTextColor(220, 83, 0);

        pdf.textWithLink('Site', (pdf.internal.pageSize.getWidth() / 2), (pdf.internal.pageSize.getHeight() - 5), { align: 'center', url: 'http://atmosphereit.kz/' });

        pdf.save(`${this.name}-${this.age}-atmosphere-education-Отчет по пробному уроку.pdf`);
      });
    }
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #000000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  position: relative;
  background-image: url("@/assets/bg.mp4");
  overflow: hidden;
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
  color: #f00f0f;
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
}

.number p {
  margin-right: 10px;
}

.description {
  font-size: 18px;
  color: gray;
  max-width: 400px;
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
</style>
