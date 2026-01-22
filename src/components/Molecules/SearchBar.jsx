import { Button ,Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchBar = () => {
    <form action="" className="d-flex flex-grow mx-3">
        <InputGroup>
            <Form.Control type='search' placeholder="search product"/>

            <Button varient="outline-primary">
                <i className='bi bi-search'></i>
            </Button>
        </InputGroup>
    </form>
}

export default SearchBar;