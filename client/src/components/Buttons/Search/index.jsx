import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "./StyledComponent.jsx";

const SearchButton = () => {
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder='Search…'
				inputProps={{ "aria-label": "search" }}
			/>
		</Search>
	);
};

export default SearchButton;
