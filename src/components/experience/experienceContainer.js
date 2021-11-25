import React from 'react';
import berxi from '../../images/logos/berxi.png'
import wayfair from '../../images/logos/wayfair2.png'
import hhp from '../../images/logos/northeastern.png'
import fbc from '../../images/logos/fbc.png'
import appfolio from '../../images/logos/appfolio.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experienceContainer.css'
import '../../common.css'
/*
    A section which contains a set of experience items.
*/
class ExperienceContainer extends React.Component {

    render() {
        var contentStyle = { background: '#fff', color: '#092340', textAlign: 'left', fontFamily: 'Lato' }
        return (
            <div className="experience-container mt-3 mb-3" id="experience-container">
                <h className="section-header">Work Experience</h>
                <div className="mt-5">
                    <VerticalTimeline layout="1-column-left">
                        <VerticalTimelineElement className="ml-n5"
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="July 2021 - Present"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={appfolio} />}>
                            <h4 className="experience-header-font">Full-Stack Software Engineering Co-Op @ Appfolio</h4>
                            <h5 className="experience-subtitle-font">San Diego, CA</h5>
                            <ul className="ml-n3">
                                <li className="mb-3">Contributing to Appfolio Property Management SAAS</li>
                                <li>Gaining hands-on experience with Ruby on Rails and React</li>
                            </ul >
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="July 2020 - December 2020"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={berxi} />}>
                            <h4 className="experience-header-font">Software Engineering Co-Op @ Berxi</h4>
                            <h5 className="experience-subtitle-font">Boston, MA</h5>
                            <ul className="ml-n3">
                                <li className="mb-3">Designed, built, and deployed a highly generic event driven email platform</li>
                                <li className="mb-3">Created new deployment standards leveraging Github Actions in place of CircleCI</li>
                                <li>Drove exploratory research into new technologies and libraries for use on an upcoming project</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="July 2019 - December 2019"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={wayfair} />}>
                            <h4 className="experience-header-font">Software Engineering Co-Op @ Wayfair</h4>
                            <h5 className="experience-subtitle-font">Boston, MA</h5>
                            <ul className="ml-n3">
                                <li className="mb-3">Built a REST API for Google Adwords, as well as an API gateway for ad vendors including Facebook, AppNexus, and Pinterest</li>
                                <li className="mb-3">Identified and resolved silent message droppage issues in a massive scale data streaming pipeline</li>
                                <li>Implemented filters resulting in an 80% reduction in redundant messages during Cyber 5</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="September 2018 - March 2021"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={hhp} />}>
                            <h4 className="experience-header-font">Video Production Assistant @ Howlin' Huskies Productions</h4>
                            <h5 className="experience-subtitle-font">Boston, MA</h5>
                            <ul className="ml-n3">
                                <li className="mb-3">Operated camera equipment for athletics broadcasts on NESN</li>
                                <li className="mb-3">Built creative graphics assets during games to present meaningful information to viewers</li>
                                <li>Learned to perform in a high-stakes, fast-moving, team-oriented environment</li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="June 2016 - June 2021"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={fbc} />}>
                            <h4 className="experience-header-font">Dockmaster @ Freedom Boat Club</h4>
                            <h5 className="experience-subtitle-font">Boston, MA</h5>
                            <ul className="ml-n3">
                                <li className="mb-3">Managed a fleet of 20 vessels and 10 employees</li>
                                <li className="mb-3">Performed overseeing duties including inventory management, scheduling, conflict resolution, and emergency response</li>
                                <li><p>Provided an exceptional experience to private club members</p></li>
                            </ul>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        )
    }
}


export default ExperienceContainer;