function ExperienceList({exInfo, handleExItemChange}) {
    return (
        <div className="Experience-list">
                {exInfo.map((info, index) => {
                    return (
                        <div className="ex-info-section" key={index}>
                            <div className="ex-name">
                                <p>Name:</p>
                                <input
                                    className="ex-name"
                                    onChange={(e) => handleExItemChange(e, index)}
                                    value={info.name}
                                ></input>
                            </div>
                            <div className="ex-position">
                                <p>Position:</p>
                                <input
                                    className="ex-position"
                                    onChange={(e) => handleExItemChange(e, index)}
                                    value={info.position}
                                ></input>
                            </div>
                            <div className="ex-start">
                                <p>Start Date:</p>
                                <input
                                    className="start-date"
                                    onChange={(e) => handleExItemChange(e, index)}
                                    value={info.start}
                                ></input>
                            </div>
                            <div className="ex-end">
                                <p>End Date:</p>
                                <input
                                    className="end-date"
                                    onChange={(e) => handleExItemChange(e, index)}
                                    value={info.end}
                                ></input>
                            </div>
                        </div>
                    );
                })}
        </div>
    );

}  

export default ExperienceList;
