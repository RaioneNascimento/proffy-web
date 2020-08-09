// Dados
const proffys = [
  {
    name: "Bruce Banner",
    avatar: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2019/05/legiao_SAIZ_vO4JXQt0epNCnL3ayi1h2GPHdKbqB5cYogzMu.jpg.jpeg", 
    whatsapp: "8991-8546",
    bio: "Apaidonado por ciências, Bruce conseguiu desvendar o maior mistério por tras da BaseGama utilizando a esfera gama que é um Espectrômetro super avançado projetado para detectar raios Gama.",
    subject: "Ciências",
    cost: "65", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
  },
  {
    name: "Thor",
    avatar: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/04/Thor-1.jpg", 
    whatsapp: "8991-8546",
    bio: "Depois de aulas no levantamento Mjölnir, Thor da um tempo na sua carreira como deus e decide dar aulas de educação física. Nada é mais importante pra mim do que a saúde e o bem estar.",
    subject: "Educação fisica",
    cost: "50", 
    weekday: [6], 
    time_from: [720], 
    time_to: [1220]
  },
  {
    name: "Tony Stark",
    avatar: "https://imagens.canaltech.com.br/celebridades/78.400.jpg", 
    whatsapp: "8991-8546",
    bio: "Com a sua aposentadoria anunciada, Tony está ensinando os macetes da algebra e de como ela é importante na nossa carreira. Estou aqui pra lecionar, não por dinheiro.",
    subject: "Matemática",
    cost: "150", 
    weekday: [1], 
    time_from: [720], 
    time_to: [1220]
  }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query

  // Se tiver dados (data)
  const isNotEmpty = Object.keys(data).length > 0
  if (isNotEmpty) {

    data.subject = getSubject(data.subject)
    
    //adicionar data a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
  }
  // se não, mostrar a página
  return res.render("give-classes.html", { subjects, weekdays })
}

// Servidor
const express = require('express')
const server = express()

// Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Inicio e configuração do servidor
server
// configurar arquivos estáticos (css, script, images)
  .use(express.static("public"))
  //rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  // Start do servidor
  .listen(3333)