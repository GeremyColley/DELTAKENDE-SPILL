import { useNavigate, Link} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    

    return (
        <div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Publish">Lance ton projet</Link>
                    <Link to="/">Home</Link>
                </nav>
                <h1>detakende-spill</h1>
                <button onClick={()=> {navigate("/Login")}}>Connexion</button>
            </div>
            <div>
                <imput 
                     type="text"
                     className="search-input"
                     placeholder="Recherche des articles"
                     onChange={(event) => setSearch(event.target.value)}
                />
                <select name="type" id="type">
                    <option value="JDR">JDR</option>
                    <option value="JEUX">JEUX</option>
                    <option value="BD">Bandes dessinées</option>
                </select>
            </div>
        </div>
    );

}

export default Header;