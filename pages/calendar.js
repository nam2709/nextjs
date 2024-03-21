import Menu from '../components/Menu';
import MyCalendar from '../components/Calendar';
import './calendar.css';

const Calendar = () => {
    return (
        <div>
            <Menu />
            <div style={{marginLeft: "200px"}}>
                <h1 style={{fontSize: "80px"}}>Calendar</h1>
                <MyCalendar />
                <div className="match-summary">
                    <div className="match-info">
                        <span className="match-date">Sun, Mar 17</span>
                    </div>
                    <div className="team-info-container">
                        <div className="team-info">
                            <div className="team-logo">
                                <img className="team-logo-img" src="//ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png" alt="West Ham Logo" />
                            </div>
                            <div className="team-name">West Ham</div>
                            <div className="team-score">1</div>

                        </div>
                        <div className="team-info">
                            <div className="team-logo">
                                <img className="team-logo-img" src="//ssl.gstatic.com/onebox/media/sports/logos/uyNNelfnFvCEnsLrUL-j2Q_48x48.png" alt="Aston Villa Logo" />
                            </div>
                            <div className="team-name">Aston Villa</div>
                            <div className="team-score">1</div>
                        </div>
                    </div>
                    <div className="match-recap">
                        <a href="https://www.youtube.com/watch?v=EFy-rykSbIA&feature=onebox">
                        <img
                            className="match-thumbnail"
                            src="//ssl.gstatic.com/onebox/media/sports/videos/vita/MWjfh8yoveLRjsZs_192x108.jpg"
                            alt="Match Thumbnail"
                        />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar