import React from 'react';
import resume from './resume.json'

const List = ({ of }) => <ul>
    {of.map(item => (
        <li key={item}>{item}</li>
    ))}
</ul>

const Date = ({ date }) => <span>
    {date}
</span>

const Work = ({ work }) => <div>

    <style jsx>{`
    `}</style>

    <h3>{work.position}</h3>
    {
        work.website ?
            <a href={work.website}>{work.company}</a> :
            <div>{work.company}</div>
    }

    {
        work.startDate &&
        <div>
            <Date date={work.startDate} />{work.endDate && <span> to <Date date={work.endDate} /></span>}
        </div>
    }

    {
        work.summary &&
        <p>{work.summary}</p>
    }

    <h4>Accomplishments</h4>
    <List of={work.highlights} />
</div>

const Education = ({ education }) => <div>
    <h3>{education.institution}</h3>
    <div>{education.area} - {education.studyType}</div>

    {
        education.startDate &&
        <div>
            <Date date={education.startDate} />{education.endDate && <span> to <Date date={education.endDate} /></span>}
        </div>
    }

    <h4>Accomplishments</h4>
    <List of={education.accomplishments} />

    <h4>Affilations</h4>
    <List of={education.affilations} />
</div>

class Resume extends React.Component {
    render() {
        return (
            <div>
                <h1>Resume</h1>

                <h2>Summary</h2>
                <p>{resume.basics.summary}</p>

                <h2>Skills</h2>
                <List of={resume.skills} />

                <h2>Experience</h2>
                {resume.work.map((work, i) => <Work key={i} work={work} />)}

                <h2>Education</h2>
                {resume.education.map((education, i) => <Education key={i} education={education} />)}

            </div>
        );
    }
}

export default Resume;