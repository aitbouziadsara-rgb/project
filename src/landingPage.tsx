import React from 'react';
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate();
    const handleHomeClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleCoursesClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleCareersClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleBlogClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleAboutClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleLoginClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleSignClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleJoinClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleWatchClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleDownCodeClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleCodeClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handlevideoClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleFeaturesClick = async () => {
        const res = await fetch("");

        const data = await res.json();

        if (res.ok) {
            navigate("/");
            console.log(data);
        } else {
            console.log("Login failed");
        }
    };
    const handleSubscribeClick = () => {

    };
    return (
        <div id='landing'>
            <div id='firstSection'>
                <header>
                    <button className='headerButton' onClick={handleHomeClick}>Home</button>
                    <button className='headerButton' onClick={handleCoursesClick}>Courses</button>
                    <button className='headerButton' onClick={handleCareersClick}>Careers</button>
                    <button className='headerButton' onClick={handleBlogClick} >Blog</button>
                    <button className='headerButton' onClick={handleAboutClick}>About us</button>
                    <button id='loginButton' onClick={handleLoginClick}>login</button>
                    <button id='signButton' onClick={handleSignClick}>sign up</button>
                </header>
                <div id='headerSection'>
                    <h2><span style={{ color: '#F48C06' }}>Studying</span> online is now easier</h2>
                    <h3>TOTC is an interesting platform that will teach you in more an interactive way</h3>
                    <button id='joinButton' onClick={handleJoinClick}>join for free</button>
                    <button id='watchbutton'><span id="circle" onClick={handleWatchClick}><span id="triangle"></span></span>watch how it works</button>
                </div>
                <div id='firstImage'>
                    <img id='firstGirl'></img>
                    <img id='notif'></img>
                </div>

            </div>
            <div id='secondSection'>
                <h3>What is "<span style={{ color: '#65DAFF' }}>name of the platform</span>"?</h3>
                <p> is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <div className='grid'>
                    <div className='code' id='code1'>
                        <img>
                            <p>FORNTHE FOWN SYNDROME</p>
                            <button onClick={handleDownCodeClick}>Enter access code</button>
                        </img>
                    </div>
                    <div className='code' id='code2'>
                        <img>
                            <p>FOR THE STUDENTS</p>
                            <button onClick={handleCodeClick}>Enter access code</button>
                        </img>
                    </div>
                    <div id='PNText'>
                        <div></div>
                        <h4>Everything you can do in a physical classroom, <span style={{ color: '#5933EF' }}>you can do with PN</span></h4>
                        <p>PNs school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                        <a>Learn more</a>
                        <div id="blueCircle"></div>
                        <div id="smallPurpleCircle"></div>
                    </div>
                    <div id='video'>
                        <div id="rectangleVideo1"></div>
                        <div id="rectangleVideo2"></div>
                        <div id="whiteCircle"></div>
                        <div id="blueTriangle"></div>
                        <video onClick={handlevideoClick}></video>
                    </div>
                </div>
            </div>
            <div id='thirdSection'>
                <h4>Our Features</h4>
                <p>this very extreodinary feature , can make learning activities more efficient</p>
                <div className='grid'>
                    <div className='text'>
                        <h4><span style={{ color: '#5933EF' }}>tools</span> for teachers and learners</h4>
                        <p>class has a dynamic set of teaching tools built to be devloped and used during class teachers canhandout asignments in real time for students to complete and submit </p>
                    </div>
                    <img id='secondGirl'></img>
                    <img id='gradeBook'></img>
                    <div className='text'>
                        <h4>assesments, <span style={{ color: '#5933EF' }}>Quizzes</span>, tests</h4>
                        <p>easily launch live assignments , quizzes and tests . students results are automatically entered in the online gradebook</p>
                    </div>
                    <div className='text'>
                        <h4><span style={{ color: '#5933EF' }}>Class Management</span> tools for educators</h4>
                        <p>class provides tools to help run and manage the class such as class roster , atttendant and more with the gradebook , teachers can review and grade tests and and quizzes in real time </p>
                    </div>
                    <div className='text'>
                        <h4><span style={{ color: '#5933EF' }}>One-on-One</span> discussions</h4>
                        <p>teachers and teacher assistants can talk with students privatly without leaving the zoom environment</p>
                    </div>
                    <div></div>
                    <div>
                        <img id='thirdGirl'></img>
                        <div id="purpleCircle"></div>
                    </div>
                </div>
            </div>
            <button id='featureButton' onClick={handleFeaturesClick}>see more features</button>
            <footer id='fourthSection'>
                <div id='line'></div>
                <p id='virtuelText'>virtual class for zoom</p>
                <p id='susbcribeText'>subscribe to get out newsketter</p>
                <div>
                    <input type='email' placeholder='Your Email'></input>
                    <button id='subscribeButton' onClick={handleSubscribeClick}>subscribe</button>
                </div>
                <p id='footerLinks' >Careers | Privacy policy | terms & conditions </p>
                <p id="last">© 2021 Class Technologies Inc. </p>
            </footer>
        </div>
    );

}
export default LandingPage;