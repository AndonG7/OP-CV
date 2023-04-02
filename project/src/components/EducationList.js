function EducationList({edInfo, handleEdItemChange}) {
    return (
        <div className="Education-list">
                {edInfo.map((info, index) => {
                    return (
                        <div className="ed-info-section" key={index}>
                            <div className="ed-name">
                                <p>Name:</p>
                                <input
                                    className="name"
                                    onChange={(e) => handleEdItemChange(e, index)}
                                    value={info.name}
                                ></input>
                            </div>
                            <div className="ed-start">
                                <p>Start Date:</p>
                                <input
                                    className="start-date"
                                    onChange={(e) => handleEdItemChange(e, index)}
                                    value={info.start}
                                ></input>
                            </div>
                            <div className="ed-end">
                                <p>End Date:</p>
                                <input
                                    className="end-date"
                                    onChange={(e) => handleEdItemChange(e, index)}
                                    value={info.end}
                                ></input>
                            </div>
                        </div>
                    );
                })}
        </div>
    );

}  

export default EducationList;
