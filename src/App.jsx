import { useState } from 'react'
import './App.css'

// A) Componente funcional simple que recibe props
function Header({ titulo }) {
  return (
    <header>
      <h1>{titulo}</h1>
    </header>
  )
}

// B) Componente con props y renderizado dinámico de lista
function TaskList({ tareas, eliminarTarea }) {
  if (tareas.length === 0) {
    return <p>No hay tareas pendientes. ¡Buen trabajo!</p>
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tareas.map((tarea) => (
        <li key={tarea.id} style={{ margin: '10px 0' }}>
          <span>{tarea.texto}</span>
          <button 
            onClick={() => eliminarTarea(tarea.id)} 
            style={{ marginLeft: '10px', color: 'red' }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  )
}

// Componente principal de la aplicación
function App() {
  // C) Uso de estado (useState)
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React' },
    { id: 2, texto: 'Hacer la Tarea 4 de Web' }
  ])
  const [nuevaTarea, setNuevaTarea] = useState('')

  // Evento para agregar una nueva tarea
  const agregarTarea = (e) => {
    e.preventDefault()
    if (!nuevaTarea.trim()) return

    const tareaObjeto = {
      id: Date.now(),
      texto: nuevaTarea
    }

    setTareas([...tareas, tareaObjeto])
    setNuevaTarea('')
  }

  // Evento para eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', textAlign: 'center' }}>
      <Header titulo="Mi Lista de Tareas" />

      <form onSubmit={agregarTarea} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button type="submit" style={{ padding: '8px' }}>Agregar</button>
      </form>

      <TaskList tareas={tareas} eliminarTarea={eliminarTarea} />
    </div>
  )
}

export default App