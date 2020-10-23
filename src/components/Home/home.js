import React, { Fragment, useEffect, useState } from 'react'
import './home.css'

export default function Home() {

    let laDate;
    const [date, setlaDate] = useState(new Date())
    let laDateuh = date;
    let leMois = date.getMonth() + 1;

    // useEffect(() => {
    //     setlaDate(new Date())
    // })

    return (
        <Fragment>
            <div className='is-flex is-justify-content-space-around'>
                <div className='ml-6 mr-6 mt-6'>

                    <div className='has-text-centered'>
                        <article className="message is-primary">
                            <div className="message-header is-size-2 mb-6">
                                {leMois === 1 &&
                                    <p>Janvier</p>
                                }
                                {leMois === 2 &&
                                    <p>Février</p>
                                }
                                {leMois === 3 &&
                                    <p>Mars</p>
                                }
                                {leMois === 4 &&
                                    <p>Avril</p>
                                }
                                {leMois === 5 &&
                                    <p>Mai</p>
                                }
                                {leMois === 6 &&
                                    <p>Juin</p>
                                }
                                {leMois === 7 &&
                                    <p>Juillet</p>
                                }
                                {leMois === 8 &&
                                    <p>Août</p>
                                }
                                {leMois === 9 &&
                                    <p>Septembre</p>
                                }
                                {leMois === 10 &&
                                    <p>Octobre</p>
                                }
                                {leMois === 11 &&
                                    <p>Novembre</p>
                                }
                                {leMois === 12 &&
                                    <p>Décembre</p>
                                }
                            </div>
                            <div className="message-body heightCalendar">
                                <span className='leJour'>
                                    {laDateuh.getDate()}
                                </span>
                            </div>
                        </article>
                    </div>
                    <div className='clock'>
                        <h2 className='heureClock'>{new Date().toLocaleTimeString()}</h2>
                    </div>
                </div>
                <div className='ml-6 mr-6 mt-6 weekCalendar'>
                    <div className='is-size-1 weekCalendarTitle'>
                        Tache du jour
                    </div>
                    <div className='columns divUnderCalenTitle'>
                        
                    </div>
                </div>
            </div>
            <div className="is-flex is-justify-content-center ">
                <div className='columns mt-6 test'>
                    <div className="column is-size-1 mr-6 testII">
                        <h1>Cactus</h1>
                        <div>

                        </div>
                    </div>
                    <div className="column is-size-1 testII">
                        <h1>Fanny</h1>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

