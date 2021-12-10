import React from 'react';
import WidgetYT from './components/widgetYT';
import Spotify from './Spotify';
import Twitter from './Twitter';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import WidgetCal3 from './components/widgetCal3';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameArtist: 'Adele',
            populariteArtist: 0,
            followersSpotify: 0,
            followersTwitter: 27032009,
            followersYouTube: 0
        }
    }

    onChange = (popularite, followers) => {
        this.setState({ populariteArtist: popularite });
        this.setState({ followersSpotify: followers });
    }
    onChangeYT = (subs) => {
        console.log(subs);
        this.setState({ followersYouTube: subs });
    }

    render() {

        return (

            <div className="container-scroller">


                <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="images/Aware1.png" className="mr-2" alt="logo" /><img src="images/Aware2.png" className="mr-2" alt="logo" /></a>
                        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/Aware1.png" alt="logo" /></a>
                    </div>
                    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="icon-menu"></span>
                        </button>
                        <ul className="navbar-nav mr-lg-2">
                            <li className="nav-item nav-search d-none d-lg-block">

                            </li>
                        </ul>
                        <FormControl
                            value={this.state.nameArtist}
                            onChange={(event) => {
                                this.setState({ nameArtist: event.target.value });
                            }}
                        />

                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item dropdown">

                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                    <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-success">
                                                <i className="ti-info-alt mx-0"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">Application Error</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                Just now
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-warning">
                                                <i className="ti-settings mx-0"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">Settings</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                Private message
                                            </p>
                                        </div>
                                    </a>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-info">
                                                <i className="ti-user mx-0"></i>
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                            <p className="font-weight-light small-text mb-0 text-muted">
                                                2 days ago
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item nav-profile dropdown">
                                {/*  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                        <img src="images/faces/face28.jpg" alt="profile"/>
                        
                        </a> */}
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                    <a className="dropdown-item">
                                        <i className="ti-settings text-primary"></i>
                                        Settings
                                    </a>
                                    <a className="dropdown-item">
                                        <i className="ti-power-off text-primary"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item nav-settings d-none d-lg-flex">
                                <a className="nav-link" href="#">
                                    <i className="icon-ellipsis"></i>
                                </a>
                            </li>
                        </ul>
                        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                            <span className="icon-menu"></span>
                        </button>
                    </div>
                </nav>

                <div className="container-fluid page-body-wrapper">

                    <div className="theme-setting-wrapper">
                        <div id="settings-trigger"><i className="ti-settings"></i></div>
                        <div id="theme-settings" className="settings-panel">
                            <i className="settings-close ti-close"></i>
                            <p className="settings-heading">SIDEBAR SKINS</p>
                            <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
                            <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
                            <p className="settings-heading mt-2">HEADER SKINS</p>
                            <div className="color-tiles mx-0 px-4">
                                <div className="tiles success"></div>
                                <div className="tiles warning"></div>
                                <div className="tiles danger"></div>
                                <div className="tiles info"></div>
                                <div className="tiles dark"></div>
                                <div className="tiles default"></div>
                            </div>
                        </div>
                    </div>
                    <div id="right-sidebar" className="settings-panel">
                        <i className="settings-close ti-close"></i>
                        <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="setting-content">
                            <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
                                <div className="add-items d-flex px-3 mb-0">
                                    <form className="form w-100">
                                        <div className="form-group d-flex">
                                            <input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
                                            <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="list-wrapper px-3">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Team review meeting at 3.00 PM
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Prepare for presentation
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" />
                                                    Resolve all the low priority tickets due today
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                        <li className="completed">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" checked />
                                                    Schedule meeting for next week
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                        <li className="completed">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input className="checkbox" type="checkbox" checked />
                                                    Project review
                                                </label>
                                            </div>
                                            <i className="remove ti-close"></i>
                                        </li>
                                    </ul>
                                </div>
                                <h4 className="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
                                <div className="events pt-4 px-3">
                                    <div className="wrapper d-flex mb-2">
                                        <i className="ti-control-record text-primary mr-2"></i>
                                        <span>Feb 11 2018</span>
                                    </div>
                                    <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
                                    <p className="text-gray mb-0">The total number of sessions</p>
                                </div>
                                <div className="events pt-4 px-3">
                                    <div className="wrapper d-flex mb-2">
                                        <i className="ti-control-record text-primary mr-2"></i>
                                        <span>Feb 7 2018</span>
                                    </div>
                                    <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
                                    <p className="text-gray mb-0 ">Call Sarah Graves</p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
                                <div className="d-flex align-items-center justify-content-between border-bottom">
                                    <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
                                    <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
                                </div>
                                <ul className="chat-list">
                                    <li className="list active">
                                        <div className="profile"><img src="images/faces/face1.jpg" alt="" /><span className="online"></span></div>
                                        <div className="info">
                                            <p>Thomas Douglas</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">19 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face2.jpg" alt="" /><span className="offline"></span></div>
                                        <div className="info">
                                            <div className="wrapper d-flex">
                                                <p>Catherine</p>
                                            </div>
                                            <p>Away</p>
                                        </div>
                                        <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                                        <small className="text-muted my-auto">23 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face3.jpg" alt="" /><span className="online"></span></div>
                                        <div className="info">
                                            <p>Daniel Russell</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">14 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face4.jpg" alt="" /><span className="offline"></span></div>
                                        <div className="info">
                                            <p>James Richardson</p>
                                            <p>Away</p>
                                        </div>
                                        <small className="text-muted my-auto">2 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face5.jpg" alt="" /><span className="online"></span></div>
                                        <div className="info">
                                            <p>Madeline Kennedy</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">5 min</small>
                                    </li>
                                    <li className="list">
                                        <div className="profile"><img src="images/faces/face6.jpg" alt="" /><span className="online"></span></div>
                                        <div className="info">
                                            <p>Sarah Graves</p>
                                            <p>Available</p>
                                        </div>
                                        <small className="text-muted my-auto">47 min</small>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <nav className="sidebar sidebar-offcanvas" id="sidebar">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">
                                    <i className="icon-grid menu-icon"></i>
                                    <span className="menu-title">Tableau de bord</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                                    <i className="icon-columns menu-icon"></i>
                                    <span className="menu-title">Database</span>
                                    <i className="menu-arrow"></i>
                                </a>
                                <div className="collapse" id="form-elements">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Chansons</a></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </nav>


                    {/* Recherche artiste */}
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-md-12 grid-margin">
                                    <div className="row">
                                        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                                            <h3 className="font-weight-bold">Bonjour {this.state.nameArtist},</h3>
                                            <h4>toujours au top ?</h4>
                                        </div>
                                        <div className="col-12 col-xl-4">
                                            <div className="justify-content-end d-flex">
                                                <button className="btn btn-sm btn-light bg-white" type="button" aria-haspopup="true" aria-expanded="true">
                                                    <i className="mdi mdi-calendar"></i> Date : {new Date().toLocaleString() + ''}
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-6 grid-margin stretch-card">
                                        <div className="card-people mt-auto">
                                            <img src="images/dashboard/singer.jpg" alt="people" />

                                        </div>
                                </div>

                                <div className="col-md-6 grid-margin transparent">
                                    <br></br><br></br><br></br>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 stretch-card transparent">
                                            <div className="card" style={{ backgroundColor: '#DFCBFD' }} >
                                                {/* <div className="card-body">
                                                     <p className="mb-4">Popularité Spotify de l'artiste</p>
                                                         <p className="fs-30 mb-2">{this.state.populariteArtist} / 100</p>
                                                        <br></br>
                                                            </div> */}

                                                <div className="card-body">
                                                    <p className="">Popularité</p>
                                                    <div className="charts-data">
                                                        <div className="mt-3">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress progress-md flex-grow-1 mr-4">
                                                                    <div className="progress-bar bg-inf0" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div className="progress progress-md flex-grow-1 mr-4">
                                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: `${this.state.populariteArtist}%` }} aria-valuenow={`${this.state.populariteArtist}`} aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <p className="mb-0">{this.state.populariteArtist} / 100</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4 stretch-card transparent">
                                            <div className="card" style={{ backgroundColor: '#1DB954' }} >
                                                <div className="card-body">
                                                    <p className="mb-4">Abonnés Spotify</p>
                                                    <p className="fs-30 mb-2">{this.state.followersSpotify}</p>
                                                    <br></br>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                                            <div className="card" style={{ backgroundColor: '#1DA1F2' }} >
                                                <div className="card-body">
                                                    <p className="mb-4">Abonnés Twitter</p>
                                                    <p className="fs-30 mb-2">{this.state.followersTwitter}</p>
                                                    <br></br>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 stretch-card transparent">
                                            <div className="card" style={{ backgroundColor: '#FF0000' }} >
                                                <div className="card-body">
                                                    <p className="mb-4">Abonnés YouTube</p>
                                                    <p className="fs-30 mb-2">{this.state.followersYouTube}</p>
                                                    <br></br>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 grid-margin stretch-card">

                                    <WidgetCal3 />

                                </div>
                                <div className="col-md-6 grid-margin stretch-card">

                                    <WidgetYT onChangeYT={this.onChangeYT} />

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 grid-margin stretch-card">

                                    <Spotify query={this.state.nameArtist} populariteArtist={this.state.populariteArtist} followersSpotify={this.state.followersSpotify} onChange={this.onChange} />
                                </div>
                            </div>

                            {/*  <div className="row">
                            <Twitter query={this.state.nameArtist} followersTwitter={this.state.followersTwitter} />
                    </div> */}

                        </div>

                        <footer className="footer">
                            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Laysa, Eva et Remi vous souhaite une bonne journée :)</span>
                                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Avec beaucoup de love <i className="ti-heart text-danger ml-1"></i></span>
                            </div>
                        </footer>

                    </div>

                </div>

            </div>

            /* <!-- container-scroller --> */
        );
    }
}

export default Dashboard;