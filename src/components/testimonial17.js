import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text25">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text24">
                  Read what our customers have to say about their experience
                  with our interactive map and peace-focused menu.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text30">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            CEO, Company ABC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text35">
                        Using the interactive map on this website has been a
                        game-changer for our organization. It has helped us
                        visualize data in a whole new way.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text36">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Founder, Organization XYZ
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        The loop video on the homepage is so captivating and
                        really sets the tone for exploring the site further.
                        Kudos to the team!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            David Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Director, Nonprofit DEF
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text26">
                        The peace-themed menu options are not only innovative
                        but also a great conversation starter. It&apos;s
                        refreshing to see such creativity in web design.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">
                            Sarah Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Coordinator, Charity GHI
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        I appreciate the focus on peace throughout the website.
                        It&apos;s a reminder that even in the digital world, we
                        can promote harmony and understanding.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  content1: undefined,
  heading1: undefined,
  review3: undefined,
  author2Alt: 'Image of Jane Smith',
  review2: undefined,
  author1Alt: 'Image of John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1541130292430-a832637ddc0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDQwMjIzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1536456364204-85a9b0676106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDQwMjIzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  author3Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1632377082408-b66c8707bed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDQwMjIzOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author4Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1471895302488-5ce150f3a1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDQwMjIzOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author4Alt: 'Image of Sarah Johnson',
  author2Position: undefined,
  author3Alt: 'Image of David Lee',
  author1Position: undefined,
  review1: undefined,
  author2Name: undefined,
  author3Position: undefined,
}

Testimonial17.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  author2Alt: PropTypes.string,
  review2: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author4Src: PropTypes.string,
  review4: PropTypes.element,
  author3Name: PropTypes.element,
  author1Src: PropTypes.string,
  author1Name: PropTypes.element,
  author4Name: PropTypes.element,
  author3Src: PropTypes.string,
  author4Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Position: PropTypes.element,
  review1: PropTypes.element,
  author2Name: PropTypes.element,
  author3Position: PropTypes.element,
}

export default Testimonial17
