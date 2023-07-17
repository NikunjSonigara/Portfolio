import React from 'react'

function Projects() {

    const header = {
        mainHeader: "My Expertise",
        subHeading: "Provide Wide Range of Digital Services",
    };

    const state = [
        {
            id: 1,
            icon: "gfg.png",
            heading: "Flutter Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aperiam vitae quidem at nesciunt voluptatem, molestias ad dolorum ipsum totam aliquam asperiores sunt!",
        },
        {
            id: 2,
            icon: "gfg.png",
            heading: "Flutter Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aperiam vitae quidem at nesciunt voluptatem, molestias ad dolorum ipsum totam aliquam asperiores sunt!",
        },
        {
            id: 3,
            icon: "gfg.png",
            heading: "Flutter Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aperiam vitae quidem at nesciunt voluptatem, molestias ad dolorum ipsum totam aliquam asperiores sunt!",
        },
        {
            id: 4,
            icon: "gfg.png",
            heading: "Flutter Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aperiam vitae quidem at nesciunt voluptatem, molestias ad dolorum ipsum totam aliquam asperiores sunt!",
        },
        {
            id: 5,
            icon: "gfg.png",
            heading: "Flutter Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aperiam vitae quidem at nesciunt voluptatem, molestias ad dolorum ipsum totam aliquam asperiores sunt!",
        },
        {
            id: 6,
            icon: "gfg.png",
            heading: "Flutter Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, aperiam vitae quidem at nesciunt voluptatem, molestias ad dolorum ipsum totam aliquam asperiores sunt!",
        },
    ]

  return (
    <div className="projects">
        <div className="container">
            <div className="projects_header">
                <div className="common">
                    <h6 className="heading">
                        {header.mainHeader}
                    </h6>
                    <h2 className="subheading">
                        {header.subHeading}
                    </h2>
                    <div className="commonBorder"></div>
                </div>
                <div className="row bgMain">
                    {state.map((info) => (
                        <div className="col-4 bgMain">
                            <div className="service_box">
                                <img src={info.icon} alt="" className="commonIcons" />
                                <h4 className="services_box-header">{info.heading}</h4>
                                <p className="services_box-p">{info.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects