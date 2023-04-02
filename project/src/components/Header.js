function Header({genInfo, handleChange}) {
    return (
      <div className="Header">
        <div className="info">
            <div className="name-section">
                <h5 className="name-label">Name:</h5>
                <input className="name" value={genInfo.name} onChange={handleChange}></input>
            </div>
            <div className="contact-section">
                <div className="email-section">
                    <h5>E-mail:</h5>
                    <input className="email" value={genInfo.email} onChange={handleChange}></input>
                </div>
                <div className="number-section">
                    <h5>Phone Number:</h5>
                    <span>+</span><input className="number" value={genInfo.number} onChange={handleChange}></input>
                </div>
            </div>
        </div>
        <div className="profile-image">
            <img alt={genInfo.name} src={genInfo.url}></img>
        </div>
      </div>
    );
  }
  
  export default Header;
  