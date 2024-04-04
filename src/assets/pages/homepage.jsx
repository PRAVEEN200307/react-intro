import React from "react";

function HomePage() {
  const skills = [
    {
      id: 1,
      title: 'Hyber Text Markup Language(html)',
      desc: "html is a  to tell about the browser which part of the website",
      image: 'https://res.cloudinary.com/thewebmaster/image/upload/c_scale,f_auto,q_auto:best,w_516/images/html/html5.png'
    },
    {
      id: 2,
      title: "Cascoding style sheet (css)",
      desc: " css is a style your website like it is also help dom to dyamic website",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_3XrhqPAmw148w6xtaWDat74vScZo-6sQl1juiygyg&s'
    },
    {
      id: 3,
      title: "Javascript",
      desc: "javascript is a script languages and help to create a dynamic content",
      image: 'https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png'
    }
  ]

  const skillContent = skills.map(skill => {
    return (
      <div className="bg-white flex items-center gap-4 h-min mb-5 mx-auto w-10/12 p-5" key={skill.id}>
        <img src={skill.image} alt="html" width="140px" />
        <div>
          <h1 className=" font-semibold text-2xl uppercase">{skill.title}</h1>
          <p className="pt-3">{skill.desc}</p>
        </div>
      </div>
    )
  })

  return (
    <React.Fragment>
      <div className=" bg-gray-200 min-h-screen">
        <h1 className="text-center font-serif  text-2xl pt-4">Skills</h1>
        {skillContent}
      </div>
    </React.Fragment >
  )
}

export default HomePage;