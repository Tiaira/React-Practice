import React, { Component } from 'react';


const Policy = ()=> {
  const [radio,setRadio] = useState("Governance");
  return (
    <form>
      <label> POLICY TOPIC</label>
      <br/>
        <div class="row">
            <div class="col">
                <input type="radio"
                checked={radio === "Governance"}
                value="Governance"
                onChange={(e)=> setRadio(e.target.value)}/>
                <label>Governance </label>
            </div>
            <div class="col">
                <input type="radio"
                checked={radio === "Infrastructure"}
                value="Infrastructure"
                onChange={(e)=> setRadio(e.target.value)}/>
                <label>Infrastructure </label>
            </div>
            <div class="col">
                <input type="radio"
                checked={radio === "The Future"}
                value="The Future"
                onChange={(e)=> setRadio(e.target.value)}/>
                <label>The Future </label>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="radio"
                checked={radio === "Social Issues"}
                value="Social Issues"
                onChange={(e)=> setRadio(e.target.value)}/>
                <label>Social Issues </label>
            </div>
            <div class="col">
                <input type="radio"
                checked={radio === "Science, Climate, & Technology"}
                value="Science, Climate, & Technology"
                onChange={(e)=> setRadio(e.target.value)}/>
                <label>Science, Climate, & Technology </label>
            </div>
            <div class="col">
                <label>
                Other (Specify Below): 
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="radio"
                checked={radio === "The Economy"}
                value="The Economy"
                nChange={(e)=> setRadio(e.target.value)}/>
                <label>The Economy </label>
            </div>
            <div class="col">
                <input type="radio"
                checked={radio === "Public Safety"}
                value="Public Safety"
                onChange={(e)=> setRadio(e.target.value)}/>
                <label>Public Safety </label>
            </div>
            <div class="col">
                <label>
                <input
                name="Other"
                type="text"/>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <input type="radio"
                checked={radio === "Foreign Policy & Defense"}
                value="Foreign Policy & Defense"
                onChange={(e)=> setRadio(e.target.value)}/>
                <label>Foreign Policy & Defense </label>
            </div>
            <div class="col">
                <input type="radio"
                checked={radio === "Healthcare"}
                value="Healthcare"
                onChange={(e)=> setRadio(e.target.value)}/>
                <label>Healthcare </label>
            </div>
            <div class="col">
        
            </div>
        </div>
    </form>
  )
  
}

ReactDOM.render(<Policy/>, document.getElementById('policys'));