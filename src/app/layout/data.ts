import { layoutData } from "./model/layout-data";

export const data: layoutData[] = [
    {
        label: 'Standalone',
        expansion: true,
        expansionItens: [
            {
                label: 'Criação',
                expansion: false,
                path: 'standalone/criacao'
            },
            {
                label: 'Roteirização',
                expansion: false,
                path: 'roteirização'
            }
        ]
    },
    {
        label: 'Diretivas',
        expansion: false,
        path: 'diretivas'
    }
]