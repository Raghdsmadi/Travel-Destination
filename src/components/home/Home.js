import Header from "../header/Header"
import Tours from "../tours/Tours"
import Footer from "../footer/Footer"
const tourData = require('../../Data/db.json');
function Home (props)
{

    return (
        <>
        <Header />
        

        <Tours tours={tourData} />


        <Footer />
        </>
    )
}

export default Home;