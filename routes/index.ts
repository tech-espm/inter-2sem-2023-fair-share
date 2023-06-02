import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async sobre(req: app.Request, res: app.Response) {
		res.render("index/sobre");
	}

	public async cadastroTipo(req: app.Request, res: app.Response) {
		res.render("index/cadastroTipo");
	}

	public async cadastroDespesa(req: app.Request, res: app.Response) {
		let tipos: any[];

		await app.sql.connect(async function (sql: app.Sql) {
			tipos = await sql.query("select idtipo, nome from tipo order by nome");
		});

		res.render("index/cadastroDespesa", {
			tipos: tipos
		});
	}

	public async listarTipos(req: app.Request, res: app.Response) {
		let tipos: any[];

		await app.sql.connect(async function (sql: app.Sql) {
			tipos = await sql.query("select idtipo, nome from tipo order by nome");
		});

		res.json(tipos);
	}

	@app.http.post()
	public async criarTipo(req: app.Request, res: app.Response) {
		let tipo = req.body;

		if (!tipo) {
			res.status(400);
			res.json("Dados inválidos");
			return;
		}

		if (!tipo.nome) {
			res.status(400);
			res.json("Nome inválido");
			return;
		}

		await app.sql.connect(async function (sql: app.Sql) {
			await sql.query("insert into tipo (nome) values (?)", [tipo.nome]);
		});

		res.json(true);
	}
}

export = IndexRoute;
