import React from 'react';
import berxi from '../../images/logos/berxi.png'
import wayfair from '../../images/logos/wayfair.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experienceContainer.css'
/*
    A section which contains a set of experience items.
*/
class ExperienceContainer extends React.Component {

    render() {
        var contentStyle = { background: '#fff', color: '#092340', textAlign:'left', fontFamily: 'Lato' }
        return (
            <div className="experience-container">
                <h>This is the experience container</h>
                <VerticalTimeline layout="1-column-left">
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={contentStyle}
                        contentArrowStyle={{ borderRight: '7px solid  #f6ca30' }}
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
                        contentArrowStyle={{ borderRight: '7px solid  #f6ca30' }}
                        date="July 2019 - December 2019"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img src={wayfair} />}>
                        <h3 className="vertical-timeline-element-title">Software Engineering Co-Op @ Berxi</h3>
                        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                        <p>
                            Designed, built, and deployed a highly generic event driven email platform<br />
                            Created new deployment standards leveraging Github Actions in place of CircleCI<br />
                            Drove exploratory research into new technologies and libraries for use on an upcoming project
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}


export default ExperienceContainer;