function User() {
    return(
        <div className="card-container">
            <span className="pro OFFLINE">OFFLINEE</span>
<img src="public\photo\download (2).jpeg" alt="User" />
<h2>Full Name</h2>
<h2>Prakash</h2>
<p>Front-end developer</p>
<div className="buttons">
  <button className="primary">Message</button>
  <button className="Primary-outline">Follow</button>
</div>
<div className="skills">
  <h6>Skills
    
  </h6>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Jquary</li>
    <li>Boostramp</li>
    <li>Json</li>
    <li>React</li>
  </ul>
</div>

        </div>
    );
}


export const UserCard = () => {
  return (
    <div><User /></div>

  )
}
