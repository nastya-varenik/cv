import personalInfo from '../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-16 bg-pink-100">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 w-full">
          {/* Картинка */}
          <div className="md:w-1/4 flex justify-center">
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-60 h-60 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Текстовая информация */}
          <div className="md:w-3/4 prose prose-pink text-left">
            <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
            <p className="text-lg mb-4">{personalInfo.description}</p>
            <p className="mb-2">
              <span className="font-semibold">Образование:</span> {personalInfo.education}
            </p>
            <p>
              <span className="font-semibold">Уровень английского:</span> {personalInfo.englishLevel}
            </p>
          </div>
        </div>

        {/* Дополнительная информация */}
      
        <div className="mt-8 w-full flex justify-center">
  <div className="max-w-4xl w-full prose prose-pink text-left px-4 sm:px-6 lg:px-8">
    <p className="text-base leading-relaxed">
    Добрый день! Меня зовут Настя, и я заинтересована в вакансии фронтенд-разработчика. Хоть у меня нет официального опыта работы, я разработала несколько проектов, которые представлены в моём портфолио. В них я применяла технологии для создания адаптивных интерфейсов, управления маршрутизацией и интеграции с библиотеками, чтобы улучшить функциональность и пользовательский опыт.
    <p className="text-base leading-relaxed mt-4">
    Я активно использую современные подходы, такие как компоненты и управление состоянием, и постоянно расширяю свои знания в области фронтенд-разработки. Буду рада обсудить, как могу внести свой вклад в вашу команду и реализовать интересные идеи.  </p>
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;