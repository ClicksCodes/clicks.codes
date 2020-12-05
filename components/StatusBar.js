import { Component } from 'react';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        state = {
            "hours":[]
        }
    }

    render() {

        const colors = {"operational":"#65CC76","degraded":"#F2D478","partial":"#E5AB71","major":"#F27878","maintenance":"#6576CC"}

        function rect(col) { 
            return <svg width="24" height="134" viewBox="0 0 24 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="134" rx="12" fill={col}/>
            </svg>
        }

        return (
            <>
                <div>
                    
                </div>
                
            </>
        );
    }
}

export { StatusBar };