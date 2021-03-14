import "./App.css"
import Quote from "./Quote"
import Todos from "./Todos"

const App = () => {
  return (
    <div className="app">
      <div className="app__body">

        <div className="app__quote">
          {/* Quote */}
          <Quote />
        </div>

        <div className="app__todos">
          {/* Todo */}
          <Todos />
        </div>
      </div>
    </div>
  )
}

export default App
