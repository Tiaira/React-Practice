const Topics = ()=> {
  const [radio,setRadio] = useState("news article");
  return (
    <form>
      <label> Article Category</label>
      <br/>
      <div class="row">
       <div class="col">
      <input type="radio"
        checked={radio === "News Article"}
        value="News Article"
        onChange={(e)=> setRadio(e.target.value)}/>
      <label>News Article </label>
      </div>
      <div class="col">
      <input type="radio"
        checked={radio === "Policy Proposal"}
        value="Policy Proposal"
        onChange={(e)=> setRadio(e.target.value)}/>
        <label>Policy Proposal </label>
        </div>
      <div class="col">
      
        </div>
      </div>
    </form>
  )
}

ReactDOM.render(<Topics/>, document.getElementById('Topics'));

const Category = ()=> {
  const [radio,setRadio] = useState("US");
  return (
    <form>
      <label> NEWS TOPIC</label>
      <br/>
      <div class="row">
       <div class="col">
      <input type="radio"
        checked={radio === "US"}
        value="US"
        onChange={(e)=> setRadio(e.target.value)}/>
      <label>US </label>
      </div>
      <div class="col">
      <input type="radio"
        checked={radio === "Tech"}
        value="Tech"
        onChange={(e)=> setRadio(e.target.value)}/>
        <label>Tech </label>
        </div>
      <div class="col">
      <input type="radio"
        checked={radio === "Polls"}
        value="Polls"
        onChange={(e)=> setRadio(e.target.value)}/>
        <label>Polls </label>
        </div>
      </div>
      <div class="row">
       <div class="col">
      <input type="radio"
        checked={radio === "World"}
        value="World"
        onChange={(e)=> setRadio(e.target.value)}/>
      <label>World </label>
      </div>
      <div class="col">
      <input type="radio"
        checked={radio === "Health"}
        value="Health"
        onChange={(e)=> setRadio(e.target.value)}/>
        <label>Health </label>
        </div>
      <div class="col">
      <input type="radio"
        checked={radio === "Faith/ Spirituality"}
        value="Faith/ Spirituality"
        onChange={(e)=> setRadio(e.target.value)}/>
        <label>Faith/ Spirituality </label>
        </div>
      </div>
      <div class="row">
       <div class="col">
      <input type="radio"
        checked={radio === "Politics"}
        value="Politics"
        onChange={(e)=> setRadio(e.target.value)}/>
      <label>Politics </label>
      </div>
      <div class="col">
      <input type="radio"
        checked={radio === "Science & Environment"}
        value="Science & Environment"
        onChange={(e)=> setRadio(e.target.value)}/>
        <label>Science & Environment </label>
        </div>
      <div class="col">
      <input type="radio"
        checked={radio === "Fact Check"}
        value="Fact Check"
        onChange={(e)=> setRadio(e.target.value)}/>
        <label>Fact Check </label>
        </div>
      </div>
      <div class="row">
       <div class="col">
      <input type="radio"
        checked={radio === "Business"}
        value="Business"
        onChange={(e)=> setRadio(e.target.value)}/>
      <label>Business </label>
      </div>
      <div class="col">
      <input type="radio"
        checked={radio === "Media"}
        value="Media"
        onChange={(e)=> setRadio(e.target.value)}/>
        <label>Media </label>
        </div>
      <div class="col">
        <label>
          Other (Specify Below): 
          <br>
          </br>
          <input
            name="Other"
            type="text"/>
        </label>
        </div>
      </div>
    </form>
  )
}

ReactDOM.render(<Category/>, document.getElementById('radios'));