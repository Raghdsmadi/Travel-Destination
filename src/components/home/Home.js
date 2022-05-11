import Header from "../header/Header"
import Tours from "../tours/Tours"
import Footer from "../footer/Footer"
const tourData = require('../../Data/db.json');
function Home (props)
{

    return (
        <>
        <Header />
        

        {
          tourData.map(element => {
              return (
                    <Tours 
                    name={element.name}
                    image={element.image}
                    
                    />
                    );
               } )

        }


        <Footer />
        </>
    )
}

export default Home;