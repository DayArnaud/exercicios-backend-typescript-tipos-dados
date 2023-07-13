interface UserData {
    nome: string;
    idade: number;
    status: boolean;
}

const usuarios: UserData[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

function filteredUsers(users: UserData[], nameFound: string): UserData[] {
    const nameLowercase = nameFound.toLowerCase();

    return users.filter(user => user.nome.toLowerCase().includes(nameLowercase));
}

const searchName = "jo";
const results = filteredUsers(usuarios, searchName);

console.log(results);