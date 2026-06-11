import "./SelfIntroduction.css";

export default function SelfIntroduction() {
    return (
        <div className="self-introduction">

            <h2>Goriparthi Gangadhar Gowtham</h2>
            <div className="section">
                <h3>Education</h3>
                <p>
                    Bachelor of Technology in Computer Science and Engineering from
                    Jawaharlal Nehru Technological University, Vijayawada.
                </p>
            </div>

            <div className="section">
                <h3>Skills</h3>
                <ul>
                    <li>Programming Languages: Java, Python, C++</li>
                    <li>Web Development: HTML, CSS, JavaScript, React</li>
                    <li>Database Management: MySQL, MongoDB</li>
                    <li>Version Control: Git, GitHub</li>
                    <li>Problem Solving and Algorithmic Thinking</li>
                </ul>
            </div>

            <div className="section">
                <h3>Location</h3>
                <p>Vijayawada, Andhra Pradesh, India - 520003</p>
            </div>

            <div className="section">
                <h3>Hobbies</h3>
                <ol>
                    <li>Reading Books</li>
                    <li>Playing Games</li>
                    <li>Watching Movies</li>
                    <li>Traveling</li>
                </ol>
            </div>

            <div className="section">
                <h3>Career Goal</h3>
                <p>
                    To become a successful software developer and contribute
                    to the field of technology.
                </p>
            </div>

        </div>
    );
}