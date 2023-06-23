

const Publish = ({token}) => {
    console.log("token : " + token)
    return token ? (
        <div>
            <p>Publie ton projet</p>
        </div>
    ) : (
        <div>
            <p>Accés interdit</p>
        </div>
    );
}

export default Publish;