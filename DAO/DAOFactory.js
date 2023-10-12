import { AuteursDAO } from "./auteursDAO.js";
import { GenresDAO } from "./genresDAO.js";
import { LivresDAO } from "./livresDAO.js";

export class DAOFactory {
	constructor() {}

	createAuteursDAO() {
		return new AuteursDAO();
	}

	createGenresDAO() {
		return new GenresDAO();
	}

	createLivresDAO() {
		return new LivresDAO();
	}
}
