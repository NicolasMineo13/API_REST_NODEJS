import { AuteursDAO } from "../DAO/auteursDAO.js";
import { GenresDAO } from "../DAO/genresDAO.js";
import { LivresDAO } from "../DAO/livresDAO.js";

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
