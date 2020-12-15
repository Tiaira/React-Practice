const Keywords = ()=> {
  const [radio,setRadio] = useState("Keyword");
  return (
    <form>
      <label> KEYWORD TAGS</label>
      <p> Enter up to three, in order of priority</p>
       <input
       name="Other"
        type="text"/>
    </form>
  )
}   

ReactDOM.render(<Keywords/>, document.getElementById('keys'));