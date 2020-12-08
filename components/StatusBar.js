import { Component } from 'react';

class StatusBar extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        const res = await fetch('https://api.clicksminuteper.net/status/hourly');
        const json = res.json();
        return { hours: json.twofour }
    }

    static colrect(col) { 
        return <svg width="24" height="134" viewBox="0 0 24 134" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="134" rx="12" fill={col}/>
        </svg>
    }

    render() {

        const colors = {"operational":"#65CC76","degraded":"#F2D478","partial":"#E5AB71","major":"#F27878","maintenance":"#6576CC"};

        return (
            <>
                <div>
                    {this.props.hours.map(hour => {
                        <li>{this.colrect(hour)}</li>
                    })}
                </div>
                
            </>
        );
    }
}

export default StatusBar;