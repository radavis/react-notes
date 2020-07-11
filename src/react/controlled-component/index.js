const NameForm = () => {
  const [name, setName] = React.useState("")

  // when the <input /> form field changes, update local state stored in `name`
  const handleChange = event => {
    setName(event.target.value)
  }

  // when the <form /> is submitted, log `name` to the console, and clear the `<input>` field
  const handleSubmit = event => {
    event.preventDefault()
    console.log(`name: ${name}`)
    setName("")
  }

  return (
    // tell the UI to execute `handleSubmit` when the `onSubmit` event is fired
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          value={name} // display the content of variable `name` in this input field
          onChange={handleChange} // execute `handleChange` when `onChange` event is fired
        />
      </label>
    </form>
  )
}

var root = document.querySelector('#root');
ReactDOM.render(<NameForm />, root);
