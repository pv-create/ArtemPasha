import React, {FC} from 'react';

const OurTeam:FC = () => {
    return (
        <div className='container'>
            <h2 style={{textAlign:"center"}}>Наша команда</h2>

            <div className="card-group">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to
                            additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This card has even longer content than the first to
                            show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurTeam;
