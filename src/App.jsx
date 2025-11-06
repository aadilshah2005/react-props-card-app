import React from 'react'
import Card from './components/Card'
import images from './assets/images.jpeg'
import girl1 from './assets/girl.webp'
import girl2 from './assets/girl2.jpeg'

function App() {
  return (
    <div className='flex gap-10 justify-center'>
      <Card img={girl1} name="Anastasia Ivanova" role="Software Engineer" location="📍 Saint Petersburg, Russia" designation="💻 React & Frontend Specialist" />
      <Card img={girl2} name="Natalia Petrova" role="Full Stack Developer" location="📍 Moscow, Russia" designation="💻 MERN Stack Enthusiast"/>
      <Card img={images} name="Svetlana Morozova" role="UI/UX Designer" location="📍 Novosibirsk, Russia" designation=" 🎨 Figma & Frontend Developer"/>
    </div>
  )
}

export default App