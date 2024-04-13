let students = [
  {
    name: "Rafael",
    prova1: 10,
    prova2: 9,
  },
  {
    name: "Marcos",
    prova1: 10,
    prova2: 10,
  },
  {
    name: "Emanoel",
    prova1: 5,
    prova2: 8,
  },
  {
    name: "Matheus",
    prova1: 5,
    prova2: 5,
  },
  {
    name: "Gilmar",
    prova1: 7,
    prova2: 6,
  },
]

function calcMedia(student) {
  return (student.prova1 + student.prova2) / 2

}

students.forEach(function (student) {
 
  let media = calcMedia(student)
  
  if (media >= 7) {
      alert(`Parabens ${student.name}, voce foi aprovado, sua média foi de: ${media}`)
    } else {
      alert(`${student.name}, infelizmente você não atingiu a meta miníma, estude mais para ser aprovado, sua média foi de: ${media}`)
}

})