// import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function Services() {
    return (
        <div className="content">
            <h1>My Services</h1>
            <p>
                As a Full Stack Developer, I help individuals, startups, and
                businesses build modern digital solutions. Whether you need a
                responsive website, a full-stack application, or an attractive
                user interface, I can help bring your ideas to life.
            </p>
            <div className="services-overview">
                <div className="service-box">
                    <h3>Web Development</h3>
                    <p>Responsive websites built using React, HTML, CSS, and JavaScript.</p>
                </div>
                <div className="service-box">
                    <h3>Application Development</h3>
                    <p>
                        Full-stack applications with Java, Spring Boot,
                        APIs, and MySQL databases.
                    </p>
                </div>
                <div className="service-box">
                    <h3>UI/UX Design</h3>
                    <p>
                        Modern and user-friendly interfaces focused on
                        usability and user experience.
                    </p>
                </div>
            </div>
            <div className="sub-header">
                <Link className="sub-link" to="website">Web Development</Link>
                <Link className="sub-link" to="application">Application Development</Link>
                <Link className="sub-link" to="uiux">UI/UX Design</Link>
            </div>
            <Outlet />
        </div>
    )
}
