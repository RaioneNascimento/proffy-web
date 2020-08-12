const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  // Inserir dados
  proffyValue = {
    name: "Raione Nascimento",
    avatar: "https://avatars1.githubusercontent.com/u/56979345?s=460&u=e692b2170901e183a92de244a2456a5856d776ef&v=4",
    whatsapp: "11959533388",
    bio: "Depois começou a ensinar Física. A prática dos laboratórios o afastou desta área do conhecimento. Decidiu então ensinar matemática, alegando que a matemática era uma disciplina imutável, isenta de valores e organizada por números."
  }

  classValue = {
    subject: 1,
    cost: "20",
    // o proffy id virá pelo banco de dados
  }

  classScheduleValues = [
    // o proffy id virá pelo banco de dados, após cadastramos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, {proffyValue, classValue, classScheduleValues})

  // Consultar os dados inseridos

  // Todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  // Consultar as classes de um determinado professor
  // e trazer junto os dados professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  // console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

  console.log(selectClassesSchedules)
})