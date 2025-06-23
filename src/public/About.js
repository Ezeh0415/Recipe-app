const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-green-900">
      {/* Who am I */}
      <div>
        <h1 className="text-3xl font-bold mb-6 border-b-4 border-green-500 inline-block">
          So Who Am I
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-green-800">
          <ul className="space-y-2">
            <li>
              <strong>Name:</strong> <i>Ezeanwe Chigozie Godwin</i>
            </li>
            <li>
              <strong>Age:</strong> <i>20 years</i>
            </li>
            <li>
              <strong>Current Mentor:</strong> <i>Gee Editor</i>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <strong>Site Creator:</strong> <i>Shadow</i>
            </li>
            <li>
              <strong>Site Name:</strong> <i>Dark Cloud</i>
            </li>
            <li>
              <strong>Site Promotion:</strong> <i>Recipe Site</i>
            </li>
          </ul>
        </div>
      </div>

      {/* About Creator */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-green-400 inline-block">
          Who is the Creator
        </h2>
        
      <p className="mb-6 leading-relaxed text-lg italic border-l-4 border-green-300 pl-6">
        Hello! I’m <strong>Ezeanwe C. Godwin</strong>, also known as Shadow — a passionate and ambitious front-end web developer. I specialize in creating clean, responsive, and user-friendly websites using technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Tailwind CSS</strong>, and <strong>React</strong>. I’m also well-versed in Object-Oriented Programming (OOP), which helps me write organized and maintainable code.
      </p>

      <p className="mb-6 leading-relaxed text-lg italic border-l-4 border-green-300 pl-6">
        My journey as a developer is fueled by curiosity and the desire to build amazing digital experiences. Along the way, I’ve been fortunate to receive guidance and support from mentors like <em>Emmanuel Adiele</em> and <em>Gee Editor</em>, who have helped me overcome challenges and sharpen my skills. I’m grateful for their time and encouragement.
      </p>

      <p className="mb-6 leading-relaxed text-lg italic border-l-4 border-green-300 pl-6">
        Outside of coding, I’m part of supportive communities like <a href="https://chat.whatsapp.com/K2mYhvrytiD1RLtEiF4rDX" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Better Dev</a>, where I continue to learn and grow. I also want to express my deep gratitude to my family for their unwavering support and love throughout my journey.
      </p>

      <p className="leading-relaxed text-lg italic border-l-4 border-green-300 pl-6">
        Above all, I give thanks to God Almighty for the strength, wisdom, and opportunities that have brought me this far. I look forward to continuing this exciting path as a developer, creating impactful projects, and making a positive difference through technology.
      </p>
      </div>

      {/* About Site */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-green-400 inline-block">
          About the Site
        </h2>

        
      <p className="mb-6 leading-relaxed text-lg italic border-l-4 border-green-300 pl-6">
        Dark Cloud Recipe is your go-to website for discovering a wide variety of delicious and authentic Nigerian recipes. Whether you’re a beginner or a seasoned cook, our site offers easy-to-follow recipes crafted by expert chefs to help you create mouth-watering dishes that bring family and friends together.
      </p>

      <p className="mb-6 leading-relaxed text-lg italic border-l-4 border-green-300 pl-6">
        We believe that cooking is an art and a way to celebrate culture. That’s why we carefully curate recipes that showcase the rich flavors and traditions of Nigerian cuisine, alongside helpful tips and cooking steps to guide you on every culinary adventure.
      </p>

    <p className="leading-relaxed text-lg italic border-l-4 border-green-300 pl-6">
        Stay tuned for weekly updates, new recipes, and special features that will inspire your kitchen creativity. Join our community and start cooking your way to deliciousness today!
      </p>

      </div>
    </section>
  );
};

export default About;
