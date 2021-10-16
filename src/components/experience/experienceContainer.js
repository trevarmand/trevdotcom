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
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="July 2021 - Present"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={appfolio} />}>
                            <h4 className="vertical-timeline-element-title">Full-Stack Software Engineering Co-Op @ Appfolio</h4>
                            <h5 className="vertical-timeline-element-subtitle">San Diego, CA</h5>
                            <ul>
                                <li><p>Contributing to Appfolio Property Management SAAS</p></li>
                                <li><p>Gaining hands-on experience with Ruby on Rails and React</p></li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="July 2020 - December 2020"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={berxi} />}>
                            <h4 className="vertical-timeline-element-title">Software Engineering Co-Op @ Berxi</h4>
                            <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
                            <ul>
                                <li><p>Designed, built, and deployed a highly generic event driven email platform</p></li>
                                <li><p> Created new deployment standards leveraging Github Actions in place of CircleCI</p></li>
                                <li><p> Drove exploratory research into new technologies and libraries for use on an upcoming project</p></li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="July 2019 - December 2019"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={wayfair} />}>
                            <h4 className="vertical-timeline-element-title">Software Engineering Co-Op @ Wayfair</h4>
                            <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
                            <ul>
                                <li><p>Built a REST API for Google Adwords, as well as an API gateway for ad vendors including Facebook, AppNexus, and Pinterest</p></li>
                                <li><p>Identified and resolved silent message droppage issues in a massive scale data streaming pipeline</p></li>
                                <li><p>Implemented filters resulting in an 80% reduction in redundant messages during Cyber 5</p></li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="September 2018 - Present"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={hhp} />}>
                            <h4 className="vertical-timeline-element-title">Video Production Assistant @ Howlin' Huskies Productions</h4>
                            <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
                            <ul>
                                <li><p>Operated camera equipment for athletics broadcasts on NESN</p></li>
                                <li><p>Built creative graphics assets during games to present meaningful information to viewers</p></li>
                                <li><p>Learned to perform in a high-stakes, fast-moving, team-oriented environment</p></li>
                            </ul>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={contentStyle}
                            contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                            date="June 2016 - Present"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img src={fbc} />}>
                            <h4 className="vertical-timeline-element-title">Dockmaster @ Freedom Boat Club</h4>
                            <h5 className="vertical-timeline-element-subtitle">Boston, MA</h5>
                            <ul>
                                <li><p>Managed a fleet of 20 vessels and 10 employees</p></li>
                                <li><p>Performed overseeing duties including inventory management, scheduling, conflict resolution, and emergency response</p></li>
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