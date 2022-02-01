
const Footer = () => {
    return (
        <div className="container-fluid footer-social">
            <div className="row p-5">

            <div className="col">
                <h4>UBICACION</h4>
                <i class="bi bi-geo-alt-fill"><a href="https://goo.gl/maps/FG9UpYG6ETZ12o6H7">Concejal Tribulato 207, San Miguel Gran Buenos Aires</a></i>
            </div>
            <div className="col">
                <h4>CONTACTANOS</h4>
                <ul>
                    <li><i className="bi bi-whatsapp"> Whatsapp</i>   
                    </li>
                    <li><i className="bi bi-instagram"></i><a target="_blank" rel="noreferrer" href="https://www.instagram.com/friend.oficial/"> Instagram</a></li>
                    <li><i className="bi bi-facebook"> </i><a  target="_blank" rel="noreferrer" href="https://www.facebook.com/Friendland.Ranch">Facebook</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer
