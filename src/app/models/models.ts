// Interface User
export interface User {
    email: string;
    roles: string[];
    fullname: string;
    pseudo: string;
    bio?: string;
    picture?: string;
    created_at: Date;
    updated_at: Date;
}

// // Exemples d'autres modèles que vous pourriez ajouter

// // Interface pour un Projet
// export interface Project {
//     id: number;
//     name: string;
//     description: string;
//     owner: User;
//     created_at: Date;
//     updated_at: Date;
// }

// // Interface pour une Tâche
// export interface Task {
//     id: number;
//     title: string;
//     description: string;
//     project: Project;
//     assignedTo: User;
//     dueDate: Date;
//     status: string;
//     created_at: Date;
//     updated_at: Date;
// }

// // Classe ou interface pour un autre modèle (si nécessaire)
// // Vous pouvez aussi ajouter des classes si vous avez besoin de méthodes dans vos modèles
// export class Message {
//     constructor(
//         public id: number,
//         public content: string,
//         public sender: User,
//         public timestamp: Date
//     ) { }
// }
