import faqsData from './pages/faqsData';
import eventsData  from './pages/eventsData';
import productsData from './pages/productsData';
import braceletsData from './pages/braceletsData';
import chainsData from './pages/chainsData';
import earringsData from './pages/earringsData';



const pageContext = ( page ) => {
    let pageVariables = {};
    switch ( page ) {
        case '/events.html':
            pageVariables = eventsData;
            break;
        case '/faq.html':
            pageVariables = faqsData;
            break;
        case '/products.html':
            pageVariables = productsData;
            break;
        case '/bracelets.html':
            pageVariables = braceletsData;
            break;
        case '/chains.html':
            pageVariables = chainsData;
             break;
        case '/earrings.html':
            pageVariables = earringsData;
        
        default:
            break;
    }
    return pageVariables;
};

export default pageContext;

