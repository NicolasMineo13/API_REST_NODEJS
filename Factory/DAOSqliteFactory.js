import { DAOFactory } from "../Factory/DAOFactory.js";
import { AuteursSqliteDAO } from "../DAO/auteursSqliteDAO.js";
import { GenresSqliteDAO } from "../DAO/genresSqliteDAO.js";
import { LivresSqliteDAO } from "../DAO/livresSqliteDAO.js";

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
