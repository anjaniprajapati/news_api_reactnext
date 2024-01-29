import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

const NewsApi=()=>{
    return(
        <>
        
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                    {/* color: #fc031c */}
                        <h1 className="display-1" >NewsAPI<i class="fa-solid fa-circle" style={{fontSize:"60px",color: "#fc031c"}}></i>Org</h1>
                    </div>
                </div>
            </div>
            <div className='headerline'></div>
        
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <form className=" my-5 my-lg">
                            <div className='searchBar'>
                            <i class="fa-solid fa-magnifying-glass" style={{color:" #868c98"}}></i>
 
                            </div>
                            <input  type="search" placeholder="Search" aria-label="Search"/>
 
                            <button className="btn btn-outline-white bg-danger  my-sm-0" type="submit">Go</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsApi;




