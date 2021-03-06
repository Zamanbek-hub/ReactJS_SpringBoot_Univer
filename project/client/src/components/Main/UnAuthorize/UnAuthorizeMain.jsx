import React from 'react';
import './UnAuthorizeMain.css';
import {Link} from 'react-router-dom';

function UnAuthorizeMain() {
    const img_style = {
        width: '100%',
        height: '600px'
    }

    return (
        <div className='container'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/unregister_main_1.jpeg" style={img_style} alt=""/>
                        <Link to='login'>
                            <button className='program_get'>Подать заявку</button>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/unregister_main_2.jpeg" style={img_style} alt=""/>
                        <Link to='login'>
                            <button className='program_get'>Подать заявку</button>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/unregister_main_3.jpeg" style={img_style} alt=""/>
                        <Link to='login'>
                            <button className='program_get'>Подать заявку</button>
                        </Link>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default UnAuthorizeMain
