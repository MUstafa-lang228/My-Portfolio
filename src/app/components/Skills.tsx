const skills = [
    { title: "Front-End", experience: "60+ Hours Experience" },
    { title: "Python", experience: "4 Years Experience" },
    { title: "Back-End", experience: "120+ Hours Experience" },
  ];
  
  export default function Skills() {
    return (
      <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {skills.map((skill) => (
          <div key={skill.title} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="font-bold text-lg">{skill.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{skill.experience}</p>
          </div>
        ))}
      </div>
    );
  }
  