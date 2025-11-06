function App() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">

      <Card
        img={girl1}
        name="Anastasia Ivanova"
        role="Software Engineer"
        location="📍 Saint Petersburg, Russia"
        designation="💻 React & Frontend Specialist"
      />

      <Card
        img={girl2}
        name="Natalia Petrova"
        role="Full Stack Developer"
        location="📍 Moscow, Russia"
        designation="💻 MERN Stack Enthusiast"
      />

      <Card
        img={images}
        name="Svetlana Morozova"
        role="UI/UX Designer"
        location="📍 Novosibirsk, Russia"
        designation="🎨 Figma & Frontend Developer"
      />

    </div>
  );
}

export default App;
