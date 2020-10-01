import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

function createEntry(entry){
  return(
    <Entry key={entry.id} emoji={entry.emoji} name={entry.name} meaning={entry.meaning} />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <d1 className="dictionary">
      {emojipedia.map(createEntry)}
      </d1>
      
        
        
    </div>
  );
}

export default App;
