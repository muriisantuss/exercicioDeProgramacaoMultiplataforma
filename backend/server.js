
const express = require('express')
var cors = require('cors')
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors())
app.use(express.json())


// Endpoint para criar um curso
app.post('/curso', async (req, res) => {
  const { sigla, nomeCompleto } = req.body;
  try {
    const curso = await prisma.curso.create({
      data: {
        sigla,
        nomeCompleto,
      },
    });
    res.json(curso);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o curso.' });
  }
});

// Endpoint para listar cursos
app.get('/curso', async (req, res) => {
  try {
    const cursos = await prisma.curso.findMany({
      include: {
        disciplinas: true, // Inclui disciplinas associadas ao curso
      },
    });
    res.json(cursos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar cursos.' });
  }
});


app.post('/disciplina', async (req, res) => {
  const { sigla, nome, semestre, cursoId, professorId } = req.body
  try {
    const disciplina = await prisma.disciplina.create({
      data: {
        sigla, nome, semestre, cursoId, professorId,
      },
    }); res.json(disciplina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error ao criar disciplina.' })
  }
})

app.get('/disciplina', async (req, res) => {
  try {
    const disciplinas = await prisma.disciplina.findMany({
      include: {
        curso: true,
        professor: true,
      }
    });
    res.json(disciplinas)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar disciplinas.' })
  }
})

app.post('/professor', async (req, res) => {
  const { identificacao, nome, email} = req.body
  try {
    const professor = await prisma.professor.create({
      data: {
        identificacao, nome, email,
      }
    });
    res.json(professor)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar o professor.' })
  }
})

app.get('/professor', async (req, res) => {
  try {
    const professores = await prisma.professor.findMany()
    res.json(professores);
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar professores.' })
  }

})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port} "nodejs running url"+ window.location.href`);
});