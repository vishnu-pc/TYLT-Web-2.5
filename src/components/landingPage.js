import { useEffect } from 'react';
import DynamicCanvas from './landing-components/dynamicCanvas';
import DynamicCanvasMobile from './landing-components/dynamicCanvasMobile';

export function LandingPage() {
    if (window.innerWidth <= 767) {
        return (<div className="landingPageElement" style={{cursor:"none"}}>
        
        {<DynamicCanvasMobile/>}
    </ div>)}else{
    return (
        <div className="landingPageElement" style={{cursor:"none"}}>
            
            {<DynamicCanvas/>}
        </ div>
    );
    }
    
}

export default LandingPage;