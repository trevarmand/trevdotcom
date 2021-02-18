import React from 'react';
import berxi from '../../images/logos/berxi.png'
import wayfair from '../../images/logos/wayfair2.png'
import hhp from '../../images/logos/northeastern.png'
import neu from '../../images/logos/neu.png'
import fbc from '../../images/logos/fbc.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experienceContainer.css'
import '../../common.css'
/*
    A section which contains a set of experience items.
*/
class ExperienceContainer extends React.Component {

    render() {
        var contentStyle = { background: '#fff', color: '#092340', textAlign:'left', fontFamily: 'Lato' }
        return (
            <div className="experience-container" id="experience-container">
                <h className="section-header">Work Experience</h>
                <VerticalTimeline layout="1-column-left">
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={contentStyle}
                        contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                        date="July 2020 - December 2020"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img src={berxi} />}>
                        <h3 className="vertical-timeline-element-title">Software Engineering Co-Op @ Berxi</h3>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                        <p>
                            Designed, built, and deployed a highly generic event driven email platform<br />
                            Created new deployment standards leveraging Github Actions in place of CircleCI<br />
                            Drove exploratory research into new technologies and libraries for use on an upcoming project
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={contentStyle}
                        contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                        date="July 2019 - December 2019"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img src={wayfair} />}>
                        <h3 className="vertical-timeline-element-title">Software Engineering Co-Op @ Wayfair</h3>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                        <p>
                            Built a REST API for Google Adwords, as well as an API gateway for ad vendors including Facebook, AppNexus, and Pinterest<br />
                            Identified and resolved silent message droppage issues in a massive scale data streaming pipeline <br />
                            Implemented filters resulting in an 80% reduction in redundant messages during Cyber 5 <br />
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={contentStyle}
                        contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                        date="July 2019 - December 2019"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img src={hhp} />}>
                        <h3 className="vertical-timeline-element-title">Video Production Assistant @ Howlin' Huskies Productions</h3>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                        <p>
                            Operated camera equipment for athletics broadcasts on NESN<br />
                            Built creative graphics assets during games to present meaningful information to viewers<br />
                            Learned to perform in a high-stakes, fast-moving, team-oriented environment
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={contentStyle}
                        contentArrowStyle={{ borderRight: '12px solid  #035d8d' }}
                        date="July 2019 - December 2019"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img src={fbc} />}>
                        <h3 className="vertical-timeline-element-title">Dockmaster @ Freedom Boat Club</h3>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                        <p>
                            Managed a fleet of 20 vessels and 10 employees<br />
                            Performed overseeing duties including inventory management, scheduling, conflict resolution, and emergency response<br />
                            Provided an exceptional experience to private club members
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}


export default ExperienceContainer;