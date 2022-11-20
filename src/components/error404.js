import boom from '../pics/boom.png';

export default function Error404() {
    return (
        <div id="Err404" className="d-flex flex-column mx-auto mt-5 w-25">
            <div className="font-weight-bold text-white text-center">
                <p className="h1">
                    Error 404
                </p>
                <p className="h5">
                    Page is not found
                </p>
            </div>
            <img src={boom}></img>
        </div>
    )
}