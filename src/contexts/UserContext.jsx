import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const data = {
        username: 'Gabriel Soares',
        currentPlace: 'Olinda-PE, Brasil',
        description: 'Desenvolvedor Front-End que valoriza a criatividade, objetividade e atenção aos detalhes. Possuo a capacidade de comunicar de modo eficaz, tanto oralmente quanto por escrito, em ambientes de trabalho em equipe. Meu foco é proporcionar a melhor experiência ao usuário, garantindo responsividade em interfaces atraentes, eficientes e funcionais, adaptadas para diferentes dispositivos',
        skills: [{
            title: "Angular",
            logo: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/144/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png"
        },
        {
            title: "React",
            logo: "https://img.icons8.com/color/144/react-native.png"
        },
        {
            title: "TypeScript",
            logo: "https://img.icons8.com/color/144/typescript--v1.png"
        },
        {
            title: "JavaScript",
            logo: "https://img.icons8.com/color/144/javascript--v1.png"
        },
        {
            title: "HTML",
            logo: "https://img.icons8.com/color/144/html-5--v1.png"
        },
        {
            title: "CSS",
            logo: "https://img.icons8.com/color/144/css3.png"
        },
        {
            title: "Tailwind",
            logo: "https://img.icons8.com/color/144/tailwind_css.png"
        },
        {
            title: "Bootstrap",
            logo: "https://img.icons8.com/color/144/bootstrap.png"
        },
        {
            title: "Python",
            logo: "https://img.icons8.com/color/144/python--v1.png"
        },
        {
            title: "SQL",
            logo: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png"
        },
        {
            title: "Git",
            logo: "https://img.icons8.com/color/144/git.png"
        },
        {
            title: "Figma",
            logo: "https://img.icons8.com/color/144/figma--v1.png"
        },
        {
            title: "Photoshop",
            logo: "https://img.icons8.com/color/144/adobe-photoshop--v1.png"
        },
        {
            title: "Canva",
            logo: "https://img.icons8.com/color/144/canva.png"
        }
        ],
        projects: [
        {
            title: "Vera Alencar Psicologia",
            logo: "https://github.com/gabrielsoarespebr/vera-alencar-psicologia/blob/master/src/assets/images/emblem.png?raw=true",
            website: "https://veraalencar.vercel.app"
        },
        {
            title: "Oferta Musical",
            logo: "https://github.com/gabrielsoarespebr/oferta-musical/blob/master/src/assets/favicon/ofertamusicalBRASAO.png?raw=true",
            website: "https://ofertamusical.vercel.app"
        },
        {
            title: "Better Call Saul",
            logo: "https://github.com/gabrielsoarespebr/better-call-saul/blob/master/src/assets/images/BetterCallSaulLogo.png?raw=true",
            website: "https://bettercallsaul.vercel.app"
        },
        {
            title: "Nostalgic Colors",
            logo: "https://github.com/gabrielsoarespebr/nostalgic-colors/blob/master/src/assets/icons/favIcon.png?raw=true",
            website: "https://nostalgiccolors.vercel.app"
        }],
        communication: {
            languages: ["Português", "Inglês", "Libras"]
        },
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/gabrielsoarespebr/",
            github: "https://github.com/gabrielsoarespebr"
        },
        competitiveProgramming: {
            codeforces: "https://codeforces.com/profile/gabrielsoarespebr",
            codesignal: "https://app.codesignal.com/profile/gabrielsoares",
            codewars: "https://www.codewars.com/users/gabrielsoarespebr",
            hackerrank: "https://www.hackerrank.com/gabrielsoaresbr?hr_r=1",
            beecrowd: "https://www.beecrowd.com.br/judge/pt/profile/754752"
        },
        educationalBackground: [
            {
                title: 'Frontend React',
                organization: 'CESAR School',
                dateStartEnd: ['ago/2024', 'set/2024']
            },
            {
                title: 'Desenvolvimento Front-End',
                organization: 'Ada Tech',
                dateStartEnd: ['dez/2022', 'abr/2023']
            },
            {
                title: 'Meta React Basics',
                organization: 'Coursera',
                dateStartEnd: ['mar/2023', 'abr/2023']
            },
            {
                title: 'Análise e Desenvolvimento de Sistemas',
                organization: 'IFPE',
                dateStartEnd: ['mar/2022', 'dez/2025']
            }
        ],
        workExperience: [
            {
                title: 'Software Development Intern',
                organization: 'Liferay',
                dateStartEnd: ['out/2024']
            },
            {
                title: 'Frontend Developer',
                organization: 'Soarix Tech (freelancer)',
                dateStartEnd: ['mar/2022']
            }],
        certifications: [
            {
                title: 'CSS Essential Training',
                organization: 'LinkedIn',
                tags: ['css', 'prog', 'tech']
            },
            {
                title: 'Flutter Essential Training: Build for Multiple Platforms',
                organization: 'LinkedIn',
                tags: ['fluttler', 'dart', 'prog', 'mobile', 'tech']
            },
            {
                title: 'Fundamentos de Programação: Algoritmos',
                organization: 'LinkedIn',
                tags: ['prog', 'algo', 'tech']
            },
            {
                title: 'Python Essential Training',
                organization: 'LinkedIn',
                tags: ['python', 'prog', 'algo', 'tech']
            },
            {
                title: 'React Native Essential Training',
                organization: 'LinkedIn',
                tags: ['rn', 'prog', 'mobile', 'tech']
            },
            {
                title: 'SQL Essential Training',
                organization: 'LinkedIn',
                tags: ['sql', 'prog', 'tech']
            },
            {
                title: 'Writing Emails for Non-Native English Speakers',
                organization: 'LinkedIn',
                tags: ['eng', 'comm', 'bus']
            },
            {
                title: 'Controlling CSS with JavaScript',
                organization: 'LinkedIn',
                tags: ['js', 'css', 'prog', 'tech']
            },
            {
                title: 'Grammar Foundations (2014)',
                organization: 'LinkedIn',
                tags: ['eng', 'comm']
            },
            {
                title: 'Programming Foundations: Object-Oriented Design',
                organization: 'LinkedIn',
                tags: ['oop', 'prog', 'tech']
            },
            {
                title: 'Small Talk for Non-Native English Speakers',
                organization: 'LinkedIn',
                tags: ['eng', 'pubspeak', 'comm']
            },
            {
                title: 'Bootstrap 5 Essential Training',
                organization: 'LinkedIn',
                tags: ['bootstrap', 'css', 'prog', 'tech']
            },
            {
                title: 'Front End React',
                organization: 'Ada Tech',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'HTML Essential Training',
                organization: 'LinkedIn',
                tags: ['html', 'prog', 'tech']
            },
            {
                title: 'Meta React Basics',
                organization: 'Coursera',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'Piano Lessons: 1 Fundamentals',
                organization: 'LinkedIn',
                tags: ['music', 'piano']
            },
            {
                title: 'React.js Code Challenges',
                organization: 'LinkedIn',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'Residência Onboard',
                organization: 'Porto Digital',
                tags: ['js', 'html', 'css', 'prog', 'algo', 'tech']
            },
            {
                title: 'Figma Essential Training: The Basics',
                organization: 'LinkedIn',
                tags: ['figma', 'wireframe']
            },
            {
                title: 'Hands-On Introduction: React',
                organization: 'LinkedIn',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'React.js Essential Training',
                organization: 'LinkedIn',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'React.js: Building an Interface',
                organization: 'LinkedIn',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'How to Talk to Anyone (Blinkist Summary)',
                organization: 'LinkedIn',
                tags: ['eng', 'pubspeak', 'comm']
            },
            {
                title: 'Inglês Comercial: Como Escrever E-mails Empresariais Bem-Sucedidos',
                organization: 'LinkedIn',
                tags: ['eng', 'comm']
            },
            {
                title: 'Inglês Comercial: Como Impressionar em Entrevistas de Emprego On-line',
                organization: 'LinkedIn',
                tags: ['eng', 'comm']
            },
            {
                title: 'JavaScript Code Challenges',
                organization: 'LinkedIn',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'JavaScript Essential Training',
                organization: 'LinkedIn',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'JavaScript and AJAX: Integration Techniques',
                organization: 'LinkedIn',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'JavaScript: Arrays',
                organization: 'LinkedIn',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Leadership Communication',
                organization: 'FIAP',
                tags: ['pubspeak', 'comm', 'lead', 'bus']
            },
            {
                title: 'Learning ECMAScript 6+ (ES6+)',
                organization: 'LinkedIn',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Public Speaking for Non-Native English Speakers',
                organization: 'LinkedIn',
                tags: ['eng', 'pubspeak', 'comm']
            },
            {
                title: 'User Experience',
                organization: 'FIAP',
                tags: ['ux', 'access', 'tech']
            },
            {
                title: 'Começando na Biblioteca React',
                organization: 'DIO',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'Construindo uma Pokédex com JavaScript',
                organization: 'DIO',
                tags: ['js', 'html', 'css', 'prog', 'algo', 'tech']
            },
            {
                title: 'Conversação em inglês com nativos (21 horas)',
                organization: 'Cambly Inc.',
                tags: ['eng', 'pubspeak', 'comm']
            },
            {
                title: 'Criando Uma Calculadora Com React',
                organization: 'DIO',
                tags: ['react', 'css', 'prog', 'algo', 'tech']
            },
            {
                title: 'Dominando Algoritmos Intermediários com Desafios de Código JavaScript',
                organization: 'DIO',
                tags: ['js', 'prog', 'algo']
            },
            {
                title: 'Educação dos surdos em 2023',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'edu', 'comm']
            },
            {
                title: 'Estudo descritivo das interjeições da Libras e A diferença de tradução e transcrição signwriting da literatura surda',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'comm']
            },
            {
                title: 'Orange Tech +',
                organization: 'DIO',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Arrays e Estruturas de Repetição em JavaScript',
                organization: 'DIO',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Configuração de Ambiente React',
                organization: 'DIO',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'Conhecendo Funções JavaScript',
                organization: 'DIO',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Criando Objetos e Classes em JavaScript',
                organization: 'DIO',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Criando um Projeto com HTML/CSS para Listagem de Pokémon',
                organization: 'DIO',
                tags: ['js', 'html', 'css', 'prog', 'algo', 'tech']
            },
            {
                title: 'Dominando o Protocolo HTTP e Integrando com a PokeAPI',
                organization: 'DIO',
                tags: ['prog', 'algo', 'tech']
            },
            {
                title: 'Estilização com Styled-Components',
                organization: 'DIO',
                tags: ['react', 'css', 'prog', 'tech']
            },
            {
                title: 'Importação e Exportação com JavaScript',
                organization: 'DIO',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Iniciando um Projeto com React CLI e Navegação',
                organization: 'DIO',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'Introdução ao Desenvolvimento Web com JavaScript',
                organization: 'DIO',
                tags: ['js', 'html', 'css', 'prog', 'algo', 'tech']
            },
            {
                title: 'Primeiros Passos Com JavaScript',
                organization: 'DIO',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Primeiros Passos na Biblioteca React',
                organization: 'DIO',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'Trabalhando Com Formulários no React',
                organization: 'DIO',
                tags: ['react', 'prog', 'tech']
            },
            {
                title: 'Trabalhando Com Hooks Básicos',
                organization: 'DIO',
                tags: ['react', 'prog', 'algo', 'tech']
            },
            {
                title: 'Abstraindo um Bootcamp Usando Orientação a Objetos em Java',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Debugging Java',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Deixando Seu LinkedIn Atrativo',
                organization: 'DIO',
                tags: ['persbrand']
            },
            {
                title: 'Estruturas de Repetição e Arrays em Java',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Java Collections',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Lógica Condicional e Controle de Fluxos em Java',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Métodos Java',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Potência Tech Java Beginners',
                organization: 'DIO',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Programação Orientada a Objetos',
                organization: 'Digital Innovation One Inc.',
                tags: ['prog', 'algo', 'tech']
            },
            {
                title: 'Se Preparando Para Uma Entrevista',
                organization: 'DIO',
                tags: ['pubspeak', 'comm']
            },
            {
                title: 'Sintaxe Java',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Tratamento de Exceções em Java',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'algo', 'tech']
            },
            {
                title: 'Introdução ao Desenvolvimento Moderno de Software',
                organization: 'Digital Innovation One Inc.',
                tags: ['prog', 'algo', 'tech']
            },
            {
                title: 'Introdução à Plataforma Java',
                organization: 'Digital Innovation One Inc.',
                tags: ['java', 'prog', 'tech']
            },
            {
                title: 'Introdução à Programação e Pensamento Computacional',
                organization: 'Digital Innovation One Inc.',
                tags: ['prog', 'algo', 'tech']
            },
            {
                title: 'Responsive Web Design',
                organization: 'freeCodeCamp',
                tags: ['html', 'css', 'prog', 'algo', 'tech']
            },
            {
                title: 'Construindo jogo de naves (Projeto)',
                organization: 'Digital Innovation One Inc.',
                tags: ['js', 'html', 'css', 'prog', 'algo', 'tech']
            },
            {
                title: 'JavaScript ES6 Essencial',
                organization: 'Digital Innovation One Inc.',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Recriando a Interface do Netflix (Projeto)',
                organization: 'Digital Innovation One Inc.',
                tags: ['html', 'css', 'prog', 'tech']
            },
            {
                title: 'Comunicação Não Violenta (CNV)',
                organization: 'OAB SP',
                tags: ['jur', 'pubspeak', 'comm']
            },
            {
                title: 'Da advocacia à docência em direito com sucesso',
                organization: 'OAB SP',
                tags: ['jur', 'edu']
            },
            {
                title: 'Identity',
                organization: 'Deloitte',
                tags: ['cybersec', 'tech']
            },
            {
                title: 'Incident Response',
                organization: 'Deloitte',
                tags: ['cybersec', 'tech']
            },
            {
                title: 'Introdução à criação de websites com HTML5 e CSS3',
                organization: 'Digital Innovation One Inc.',
                tags: ['html', 'css', 'prog', 'tech']
            },
            {
                title: 'Programação para internet com JavaScript',
                organization: 'Digital Innovation One Inc.',
                tags: ['js', 'prog', 'algo', 'tech']
            },
            {
                title: 'Recriando a página inicial do Instagram (Projeto)',
                organization: 'Digital Innovation One Inc.',
                tags: ['html', 'css', 'prog', 'tech']
            },
            {
                title: 'Responsividade e UX Design',
                organization: 'Digital Innovation One Inc.',
                tags: ['ux', 'prog', 'tech']
            },
            {
                title: 'Trilha Conectar - Fundamentos da programação, software, hardware, internet e servidores',
                organization: 'Rocketseat',
                tags: ['prog', 'algo', 'tech']
            },
            {
                title: 'Diferenças e semelhanças entre GDPR e LGPD',
                organization: 'OAB SP',
                tags: ['jur']
            },
            {
                title: '20 anos da Lei de Libras: uma história de resistência',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'comm']
            },
            {
                title: 'A lexicografia da Libras na educação dos surdos e A atuação do TILS em debates políticos e campanhas eleitorais',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'edu', 'comm']
            },
            {
                title: 'Educação de surdos no Brasil e Produções culturais do povo surdo',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'edu', 'comm']
            },
            {
                title: 'O que é linguística e linguagem?',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'comm']
            },
            {
                title: 'Reflexões sobre a escrita acadêmica dos estudantes surdos e Antropomorfismo em Libras',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'edu', 'comm']
            },
            {
                title: 'Tipologia linguística da Libras e Interpretação de descrições imagéticas',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'comm']
            },
            {
                title: 'Libras: que língua é essa?',
                organization: 'Universidade Federal de Campina Grande',
                tags: ['signlang', 'access', 'comm']
            },
            {
                title: 'Responsabilidade Civil dos Médicos, Planos de Saúde e Hospitais',
                organization: 'OAB SP',
                tags: ['jur']
            },
            {
                title: 'Curso Técnico em Tradução e Interpretação de LIBRAS',
                organization: 'ETEPAM - Escola Técnica Estadual Professor Agamenon Magalhães',
                tags: ['signlang', 'access', 'comm']
            },
            {
                title: 'Libras: compreensão básica',
                organization: 'IFRS',
                tags: ['signlang', 'access', 'comm']
            },
            {
                title: 'Advocacia Racial',
                organization: 'OAB SP',
                tags: ['jur']
            },
            {
                title: 'Competências Profissionais, Emocionais e Tecnológicas para Tempos de Mudança',
                organization: 'PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul',
                tags: ['persbrand']
            },
            {
                title: 'Introdução à Libras',
                organization: 'Escola Nacional de Administração Pública ENAP',
                tags: ['signlang', 'access', 'comm']
            },
            {
                title: 'Mediação no Âmbito da Administração Pública',
                organization: 'Procuradoria Geral do Município de Olinda',
                tags: ['jur']
            },
            {
                title: 'Noções de Processo Civil',
                organization: 'Advocacia-Geral da União (AGU)',
                tags: ['jur']
            }
        ],
        testimonials: [
            {
                text: 'Gabriel, meu amigo e colega de estudo sempre empenhado em resolver problemas e a enfrentar desafios. Disposicão e animo andam ao lado em todo o tempo de estudo e trabalho. Tenho certeza que ele irá conseguir transpor as muralhas à sua frente, e terei o enorme prazer de lhe falar PARABÉNS!',
                author: {
                    name: 'Thiago Lins',
                    photo: 'https://avatars.githubusercontent.com/u/55138607?v=4',
                    url: 'https://github.com/tplins'
                }
            }
        ]
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}