import React from "react";

const ProficienciesStatBlock = ({ char }) => {
    return (
        <div className="stat-block list proficiencies">
            <>{
                Object.keys(char.proficiencies.other).map((proficiency, index) => {
                    return (
                        <React.Fragment key={index}>
                            <p>{proficiency}</p>
                            <ul>{
                                char.proficiencies.other[proficiency].map((item, index) => <li key={index}>{item}</li>)
                            }</ul>
                        </React.Fragment>
                    )
                })
            }</>
            <p>Proficiencies</p>
        </div>
    );
};

export default ProficienciesStatBlock;