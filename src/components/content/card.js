export default function Card(props) {
    return (
        <div id="Card" className="d-flex border rounded p-3 m-3">
            {props.children}
        </div>
    );
}