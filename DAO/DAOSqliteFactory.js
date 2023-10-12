import { DAOFactory } from "./DAOFactory.js";
import { AuteursSqliteDAO } from "./auteursSqliteDAO.js";
import { GenresSqliteDAO } from "./genresSqliteDAO.js";
import { LivresSqliteDAO } from "./livresSqliteDAO.js";

export class DAOSqliteFactory {
	constructor() {
		this.daoFactory = new DAOFactory();
	}

	createAuteursDAO() {
		return new AuteursSqliteDAO();
	}

	createGenresDAO() {
		return new GenresSqliteDAO();
	}

	createLivresDAO() {
		return new LivresSqliteDAO();
	}
}
