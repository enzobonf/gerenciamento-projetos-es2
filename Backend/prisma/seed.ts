import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config({
	path: '.env.production',
});

const prisma = new PrismaClient();

async function generate_essentials() {
	const ufs = await prisma.unidade_federacao.createMany({
		data: [
			{
				sigla: 'AC',
				nome: 'Acre',
			},
			{
				sigla: 'AL',
				nome: 'Alagoas',
			},
			{
				sigla: 'AP',
				nome: 'Amapá',
			},
			{
				sigla: 'AM',
				nome: 'Amazonas',
			},
			{
				sigla: 'BA',
				nome: 'Bahia',
			},
			{
				sigla: 'CE',
				nome: 'Ceará',
			},
			{
				sigla: 'DF',
				nome: 'Distrito Federal',
			},
			{
				sigla: 'ES',
				nome: 'Espírito Santo',
			},
			{
				sigla: 'GO',
				nome: 'Goiás',
			},
			{
				sigla: 'MA',
				nome: 'Maranhão',
			},
			{
				sigla: 'MT',
				nome: 'Mato Grosso',
			},
			{
				sigla: 'MS',
				nome: 'Mato Grosso do Sul',
			},
			{
				sigla: 'MG',
				nome: 'Minas Gerais',
			},
			{
				sigla: 'PA',
				nome: 'Pará',
			},
			{
				sigla: 'PB',
				nome: 'Paraíba',
			},
			{
				sigla: 'PR',
				nome: 'Paraná',
			},
			{
				sigla: 'PE',
				nome: 'Pernambuco',
			},
			{
				sigla: 'PI',
				nome: 'Piauí',
			},
			{
				sigla: 'RJ',
				nome: 'Rio de Janeiro',
			},
			{
				sigla: 'RN',
				nome: 'Rio Grande do Norte',
			},
			{
				sigla: 'RS',
				nome: 'Rio Grande do Sul',
			},
			{
				sigla: 'RO',
				nome: 'Rondônia',
			},
			{
				sigla: 'RR',
				nome: 'Roraima',
			},
			{
				sigla: 'SC',
				nome: 'Santa Catarina',
			},
			{
				sigla: 'SP',
				nome: 'São Paulo',
			},
			{
				sigla: 'SE',
				nome: 'Sergipe',
			},
			{
				sigla: 'TO',
				nome: 'Tocantins',
			},
		],
	});

	const cidades = await prisma.cidade.createMany({
		data: [
			{
				nome: 'São Paulo',
				sigla_uf: 'SP',
			},
			{
				nome: 'Foz do Iguaçu',
				sigla_uf: 'PR',
			},
			{
				nome: 'Rio de Janeiro',
				sigla_uf: 'RJ',
			},
			{
				nome: 'Belo Horizonte',
				sigla_uf: 'MG',
			},
			{
				nome: 'Curitiba',
				sigla_uf: 'PR',
			},
			{
				nome: 'Porto Alegre',
				sigla_uf: 'RS',
			},
			{
				nome: 'Florianópolis',
				sigla_uf: 'SC',
			},
			{
				nome: 'Brasília',
				sigla_uf: 'DF',
			},
			{
				nome: 'Goiânia',
				sigla_uf: 'GO',
			},
			{
				nome: 'Salvador',
				sigla_uf: 'BA',
			},
			{
				nome: 'Fortaleza',
				sigla_uf: 'CE',
			},
			{
				nome: 'Recife',
				sigla_uf: 'PE',
			},
			{
				nome: 'Manaus',
				sigla_uf: 'AM',
			},
			{
				nome: 'Belém',
				sigla_uf: 'PA',
			},
			{
				nome: 'São Luís',
				sigla_uf: 'MA',
			},
			{
				nome: 'João Pessoa',
				sigla_uf: 'PB',
			},
			{
				nome: 'Teresina',
				sigla_uf: 'PI',
			},
			{
				nome: 'Natal',
				sigla_uf: 'RN',
			},
			{
				nome: 'Campo Grande',
				sigla_uf: 'MS',
			},
			{
				nome: 'Cuiabá',
				sigla_uf: 'MT',
			},
			{
				nome: 'Porto Velho',
				sigla_uf: 'RO',
			},
			{
				nome: 'Boa Vista',
				sigla_uf: 'RR',
			},
			{
				nome: 'Palmas',
				sigla_uf: 'TO',
			},
			{
				nome: 'Maceió',
				sigla_uf: 'AL',
			},
			{
				nome: 'Macapá',
				sigla_uf: 'AP',
			},
		],
	});

	const bairros = await prisma.bairro.createMany({
		data: [
			{
				nome: 'Vila Mariana',
			},
			{
				nome: 'Centro',
			},
			{
				nome: 'Itaipu A',
			},
			{
				nome: 'Itaipu B',
			},
			{
				nome: 'Itaipu C',
			},
			{
				nome: 'Jardins',
			},
			{
				nome: 'Moema',
			},
			{
				nome: 'Itaim Bibi',
			},
			{
				nome: 'Pinheiros',
			},
			{
				nome: 'Vila Olímpia',
			},
			{
				nome: 'Vila Madalena',
			},
			{
				nome: 'Tatuapé',
			},
			{
				nome: 'Vila Nova Conceição',
			},
			{
				nome: 'Vila Leopoldina',
			},
			{
				nome: 'Vila Andrade',
			},
			{
				nome: 'Vila Prudente',
			},
			{
				nome: 'Vila Guarani',
			},
			{
				nome: 'Vila Clementino',
			},
		],
	});

	await prisma.tipo_logradouro.createMany({
		data: [
			{
				nome: 'Rua',
				sigla: 'Rua',
			},
			{
				nome: 'Avenida',
				sigla: 'Av.',
			},
			{
				nome: 'Alameda',
				sigla: 'Al.',
			},
			{
				nome: 'Travessa',
				sigla: 'Tv.',
			},
		],
	});

	await prisma.logradouro.createMany({
		data: [
			{
				nome: 'Paulista',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Brigadeiro Luís Antônio',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Ipiranga',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Angélica',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Faria Lima',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Juscelino Kubitschek',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Rebouças',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Sumaré',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Nove de Julho',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Europa',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Santo Amaro',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Berrini',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Faria Lima',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Cidade Jardim',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Doutor Arnaldo',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Hélio Pellegrino',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Jabaquara',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Liberdade',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Paulo VI',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'São Gabriel',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Vinte e Três de Maio',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Vinte e Oito de Setembro',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Vinte e Três de Maio',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'República Argentina',
				sigla_tipo_logradouro: 'Av.',
			},
			{
				nome: 'Tancredo Neves',
				sigla_tipo_logradouro: 'Av.',
			},
		],
	});

	// criar especialidades, como dba, designer, desenvolvedor
	await prisma.especialidade.createMany({
		data: [
			{
				id: 1,
				nome: 'Desenvolvedor',
			},
			{
				id: 2,
				nome: 'Analista',
			},
			{
				id: 3,
				nome: 'DBA',
			},
			{
				id: 4,
				nome: 'Designer',
			},
		],
	});

	await prisma.genero.createMany({
		data: [
			{
				id: 1,
				identificacao: 'Masculino',
			},
			{
				id: 2,
				identificacao: 'Feminino',
			},
			{
				id: 3,
				identificacao: 'Não-binário',
			},
			{
				id: 4,
				identificacao: 'Outro',
			},
		],
	});

	await prisma.raca.createMany({
		data: [
			{
				id: 1,
				identificacao: 'Branca',
			},
			{
				id: 2,
				identificacao: 'Preta',
			},
			{
				id: 3,
				identificacao: 'Parda',
			},
			{
				id: 4,
				identificacao: 'Indígena',
			},
			{
				id: 5,
				identificacao: 'Amarela',
			},
		],
	});

	await prisma.endereco.createMany({
		data: [
			{
				id: 1,
				cep: '85851200',
				id_logradouro: 24,
				id_bairro: 2,
				id_cidade: 2,
			},
			{
				id: 2,
				cep: '00000000',
				id_logradouro: 25,
				id_bairro: 5,
				id_cidade: 2,
			},
		],
	});

	const profissionais = await prisma.profissional.createMany({
		data: [
			{
				nome: 'Béatrice',
				sobrenome: 'Bambrugh',
				email: 'gbambrugh0@studiopress.com',
				num_telefone: '2072313622',
				id_especialidade: 3,
				id_genero: 4,
				id_raca: 2,
				id_endereco: 2,
				numero_endereco: 974,
			},
			{
				nome: 'Mélinda',
				sobrenome: 'Huge',
				email: 'ihuge1@bigcartel.com',
				num_telefone: '5068151361',
				id_especialidade: 2,
				id_genero: 4,
				id_raca: 4,
				id_endereco: 2,
				numero_endereco: 974,
			},
			{
				nome: 'Lén',
				sobrenome: 'Abeau',
				email: 'mabeau2@ibm.com',
				num_telefone: '6135908109',
				id_especialidade: 2,
				id_genero: 2,
				id_raca: 5,
				id_endereco: 1,
				numero_endereco: 376,
			},
			{
				nome: 'Béatrice',
				sobrenome: 'Guidetti',
				email: 'wguidetti3@mapy.cz',
				num_telefone: '6444856950',
				id_especialidade: 2,
				id_genero: 2,
				id_raca: 3,
				id_endereco: 2,
				numero_endereco: 43,
			},
			{
				nome: 'Eléonore',
				sobrenome: 'Pennacci',
				email: 'bpennacci4@gravatar.com',
				num_telefone: '8235080903',
				id_especialidade: 1,
				id_genero: 2,
				id_raca: 1,
				id_endereco: 1,
				numero_endereco: 7,
			},
			{
				nome: 'Gösta',
				sobrenome: 'Sandes',
				email: 'esandes5@examiner.com',
				num_telefone: '3191143357',
				id_especialidade: 1,
				id_genero: 1,
				id_raca: 5,
				id_endereco: 1,
				numero_endereco: 297,
			},
			{
				nome: 'Angèle',
				sobrenome: 'Morsey',
				email: 'bmorsey6@constantcontact.com',
				num_telefone: '8844087544',
				id_especialidade: 1,
				id_genero: 2,
				id_raca: 3,
				id_endereco: 2,
				numero_endereco: 387,
			},
			{
				nome: 'Adèle',
				sobrenome: 'Rutt',
				email: 'drutt7@eventbrite.com',
				num_telefone: '9009439839',
				id_especialidade: 3,
				id_genero: 4,
				id_raca: 3,
				id_endereco: 1,
				numero_endereco: 501,
			},
			{
				nome: 'Salomé',
				sobrenome: 'Bowhey',
				email: 'ubowhey8@pbs.org',
				num_telefone: '6471229291',
				id_especialidade: 3,
				id_genero: 2,
				id_raca: 3,
				id_endereco: 1,
				numero_endereco: 7,
			},
			{
				nome: 'Néhémie',
				sobrenome: 'Dulanty',
				email: 'ndulanty9@dropbox.com',
				num_telefone: '7709990027',
				id_especialidade: 1,
				id_genero: 1,
				id_raca: 2,
				id_endereco: 2,
				numero_endereco: 54,
			},
		],
	});

	await prisma.cliente.createMany({
		data: [
			{
				nome: 'José',
				sobrenome: 'da Silva',
				email: 'jose@dropbox.com',
				num_telefone: '4599999999',
				id_genero: 1,
				id_raca: 2,
				id_endereco: 2,
				numero_endereco: 54,
			},
			{
				nome: 'Lucas',
				sobrenome: 'Moura',
				email: 'lucasspfc@gmail',
				num_telefone: '4599879998',
				id_genero: 1,
				id_raca: 2,
				id_endereco: 2,
				numero_endereco: 1594,
			},
		],
	});
}

async function main() {
	await generate_essentials();
}

main()
	.catch((e) => {
		console.log(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
