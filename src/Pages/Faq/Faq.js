import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div>
            <h2 className='mt-4 text-center'>Frequently Asked Question !!!</h2>
            <Container className='mt-4'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. What is online learning like?</Accordion.Header>
                        <Accordion.Body>
                            For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they’ll have to decide which is best for them. Then, explain the types of courses you offer and how your online programs work to give them all the information they need. This not only gives them information, but it increases their trust because you’re being transparent and giving them straightforward answers.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. Can I learn at my own pace?</Accordion.Header>
                        <Accordion.Body>
                            This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today’s world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. Does online learning really work?</Accordion.Header>
                        <Accordion.Body>
                            There’s always a skeptic, and when it comes to online learning, there are often several of them. Everyone wants to know if online courses “really work”—and that’s a hard question to answer because there are several factors to consider. On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. You should be able to explain these things to people so that they know what they’re getting into. Then, you can invite them to contact you to discuss whether it would be right for them.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. What types of assignments do you give?</Accordion.Header>
                        <Accordion.Body>
                            Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses. Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can also link to course or program pages. As long as you explain to people how the courses are taught and what they can expect in terms of coursework, you’ll be helping them make a better decision about their educational needs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5. What are the requirements to take the courses or sign up with your website??</Accordion.Header>
                        <Accordion.Body>
                            People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here. If you have certain enrollment windows, for example, list those. If payment or deposits are required, explain that, as well. Make sure that people know exactly what they need to do to take online courses from you, no matter what those courses might be.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>6. What are the technology requirements?</Accordion.Header>
                        <Accordion.Body>
                            In the same vein, people need to know whether their computers are up to snuff. You’ll want to explain all the software that you use and what kind of technology people need to take your online courses. If there are certain programs or applications used, put those here. If you have the option to provide technology or direct people to the appropriate purchase, you should do that here, as well. Reassure people that you can help them with the requirements and that they can contact you to discuss whether their system meets the demands of your online courses.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>7. How long does each course take?</Accordion.Header>
                        <Accordion.Body>
                            Some online courses are just a few hours long, while others last a few months. Depending on the type of online learning that you offer, your courses may have their own variable lengths. Explain to people the types of courses that you have available and what the time frame is for each one. If you offer self-paced learning, this is another place to reiterate that and reassure people that you can help them learn on their own time.

                            It could also be helpful to link to your course catalog or course pages here so that people can see the exact specifications of the course(s) they are considering taking from your website.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Faq;