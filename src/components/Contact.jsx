import personalInfo from '../data/personalInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-pink-50">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Контакты</h2>
        <div className="w-full max-w-lg prose prose-pink text-left">
          <p className="mb-4">
            <span className="font-semibold">Email:</span>{' '}
            <a href={`mailto:${personalInfo.email}`} className="text-pink-600 hover:underline">
              {personalInfo.email}
            </a>
          </p>

          <p>
            <span className="font-semibold">Telegram:</span>{' '}
            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Telegram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;