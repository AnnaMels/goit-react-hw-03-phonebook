import PropTypes from "prop-types";
import { Label } from './Filter.styled';

export default function Filter({ handleFilter }) {
    return (
        <Label>Find contacts by name
            <input
                onChange={handleFilter}
                type="text"
                name="" />
        </Label>
    );
};

Filter.propTypes = {
    handleFilter: PropTypes.func
}