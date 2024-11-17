import '../assets/styles/Genre.css';

function SelectGenre () {
    return (
        <div>
            <div className="genre-container">
                <ul className="genres">
                    <li>
                        <a href="/genre-action">Action</a>
                    </li>
                    <li>
                        <a href="/genre-adult">Adult</a>
                    </li>
                    <li>
                        <a href="/genre-adventure">Adventure</a>
                    </li>
                    <li>
                        <a href="/genre-arts">Arts</a>
                    </li>
                    <li>
                        <a href="/genre-comedy">Comedy</a>
                    </li>
                    <li>
                        <a href="/genre-drama">Drama</a>
                    </li>
                    <li>
                        <a href="/genre-ecchi">Ecchi</a>
                    </li>
                    <li>
                        <a href="/genre-fantasy">Fantasy</a>
                    </li>
                    <button type="button">รายชื่อมังงะทั้งหมด</button>
                </ul>
            </div>
        </div>
        
    );
}
export default SelectGenre;